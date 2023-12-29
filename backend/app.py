from flask import Flask, request, jsonify
from catboost import CatBoostClassifier
import numpy as np
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__)
CORS(app, origins='http://localhost:3000')

# SQLite database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# User model for the database
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

# Create the database tables
with app.app_context():
    db.create_all()

# Load the CatBoost model
model = CatBoostClassifier()
model.load_model('model.cbm')


@app.errorhandler(500)
def internal_server_error(e):
    app.logger.error("Internal Server Error: %s", str(e))
    return jsonify(error="Internal Server Error"), 500


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        if all(feature in data["input_data"] for feature in [
            "Age (yrs)", "Weight (Kg)", "Height(Cm)", "BMI", "Blood Group", "Pulse rate(bpm)", "RR (breaths/min)",
            "Hb(g/dl)", "Cycle(R/I)", "Cycle length(days)", "Marriage Status (Yrs)", "Pregnant(Y/N)",
            "No. of abortions", "I beta-HCG(mIU/mL)", "II beta-HCG(mIU/mL)", "FSH(mIU/mL)", "LH(mIU/mL)", "FSH/LH",
            "Hip(inch)", "Waist(inch)", "Waist:Hip Ratio", "TSH (mIU/L)", "AMH(ng/mL)", "PRL(ng/mL)", "Vit D3 (ng/mL)",
            "PRG(ng/mL)", "RBS(mg/dl)", "Weight gain(Y/N)", "hair growth(Y/N)", "Skin darkening (Y/N)", "Hair loss(Y/N)",
            "Pimples(Y/N)", "Fast food (Y/N)", "Reg.Exercise(Y/N)", "BP _Systolic (mmHg)", "BP _Diastolic (mmHg)",
            "Follicle No. (L)", "Follicle No. (R)", "Avg. F size (L) (mm)", "Avg. F size (R) (mm)", "Endometrium (mm)"
        ]):
            input_data = np.array([data["input_data"][feature] for feature in [
                "Age (yrs)", "Weight (Kg)", "Height(Cm)", "BMI", "Blood Group", "Pulse rate(bpm)", "RR (breaths/min)",
                "Hb(g/dl)", "Cycle(R/I)", "Cycle length(days)", "Marriage Status (Yrs)", "Pregnant(Y/N)",
                "No. of abortions", "I beta-HCG(mIU/mL)", "II beta-HCG(mIU/mL)", "FSH(mIU/mL)", "LH(mIU/mL)", "FSH/LH",
                "Hip(inch)", "Waist(inch)", "Waist:Hip Ratio", "TSH (mIU/L)", "AMH(ng/mL)", "PRL(ng/mL)", "Vit D3 (ng/mL)",
                "PRG(ng/mL)", "RBS(mg/dl)", "Weight gain(Y/N)", "hair growth(Y/N)", "Skin darkening (Y/N)", "Hair loss(Y/N)",
                "Pimples(Y/N)", "Fast food (Y/N)", "Reg.Exercise(Y/N)", "BP _Systolic (mmHg)", "BP _Diastolic (mmHg)",
                "Follicle No. (L)", "Follicle No. (R)", "Avg. F size (L) (mm)", "Avg. F size (R) (mm)", "Endometrium (mm)"
            ]]).reshape(1, -1)


            prediction = model.predict(input_data)
            return jsonify({"prediction": int(prediction[0])})
        else:
            app.logger.error("Missing features in the request")
            return jsonify(error="Missing features in the request"), 400
    except Exception as e:
        app.logger.error("Prediction error: %s", str(e))
        return jsonify(error="Prediction error"), 500


@app.route('/login', methods=['POST'])
def login():
    # with app.app_context():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Query the database to check user credentials
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        return jsonify({'message': 'Login successful', 'username': username})
    
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # Create a new user and add to the database
        hashed_password = generate_password_hash(password)
        new_user = User(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'Signup successful', 'username': username})
    except Exception as e:
        print(f"Error during signup: {e}")
        return jsonify({'message': 'Error during signup'}), 500


# @app.route('/get_users', methods=['GET'])
# def get_users():
#     users = User.query.all()
#     user_list = [{'username': user.username, 'email': user.email} for user in users]
#     return jsonify({'users': user_list})

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)


# # import os
# # import secrets

# # # Generate a secure random key
# # key = secrets.token_hex(16)  # 16 bytes (32 hex characters)

# # print(key)  # Output the generated key

