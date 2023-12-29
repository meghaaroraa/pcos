// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import './PredictionPage.css';

// function Predict() {
//   const [inputData, setInputData] = useState({
//     "Age (yrs)": "",
//     "Weight (Kg)": "",
//     "Height(Cm)": "",
//     "BMI": "",
//     "Blood Group": "",
//     "Pulse rate(bpm)": "",
//     "RR (breaths/min)": "",
//     "Hb(g/dl)": "",
//     "Cycle(R/I)": "",
//     "Cycle length(days)": "",
//     "Marriage Status (Yrs)": "",
//     "Pregnant(Y/N)": "",
//     "No. of abortions": "",
//     "I beta-HCG(mIU/mL)": "",
//     "II beta-HCG(mIU/mL)": "",
//     "FSH(mIU/mL)": "",
//     "LH(mIU/mL)": "",
//     "FSH/LH": "",
//     "Hip(inch)": "",
//     "Waist(inch)": "",
//     "Waist:Hip Ratio": "",
//     "TSH (mIU/L)": "",
//     "AMH(ng/mL)": "",
//     "PRL(ng/mL)": "",
//     "Vit D3 (ng/mL)": "",
//     "PRG(ng/mL)": "",
//     "RBS(mg/dl)": "",
//     "Weight gain(Y/N)": "",
//     "hair growth(Y/N)": "",
//     "Skin darkening (Y/N)": "",
//     "Hair loss(Y/N)": "",
//     "Pimples(Y/N)": "",
//     "Fast food (Y/N)": "",
//     "Reg.Exercise(Y/N)": "",
//     "BP _Systolic (mmHg)": "",
//     "BP _Diastolic (mmHg)": "",
//     "Follicle No. (L)": "",
//     "Follicle No. (R)": "",
//     "Avg. F size (L) (mm)": "",
//     "Avg. F size (R) (mm)": "",
//     "Endometrium (mm)": "",
//   });

//   const [prediction, setPrediction] = useState(null);

//   const handleInputChange = (event, feature) => {
//     setInputData({
//       ...inputData,
//       [feature]: event.target.value,
//     });
//   };

//   const calculateBMI = () => {
//     const weight = parseFloat(inputData["Weight (Kg)"]);
//     const height = parseFloat(inputData["Height(Cm)"]) / 100;
//     if (!isNaN(weight) && !isNaN(height) && height > 0) {
//       return (weight / (height * height)).toFixed(2);
//     }
//     return "";
//   };

//   const calculateWaistToHipRatio = () => {
//     const waist = parseFloat(inputData["Waist(inch)"]);
//     const hip = parseFloat(inputData["Hip(inch)"]);
//     if (!isNaN(waist) && !isNaN(hip) && hip > 0) {
//       return (waist / hip).toFixed(2);
//     }
//     return "";
//   };

//   const closePopup = () => {
//     document.getElementById('prediction-popup').classList.remove('show');
//   };

//   const handlePredict = () => {
//     const bmi = calculateBMI();
//     const waistToHipRatio = calculateWaistToHipRatio();
//     setInputData({
//       ...inputData,
//       BMI: bmi,
//       "Waist:Hip Ratio": waistToHipRatio,
//     });

//     try {
//       fetch('http://localhost:5000/predict', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ "input_data": inputData }),  // Update key to "input_data"
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           if (data.error) {
//             throw new Error(data.error);
//           }
//           setPrediction(data.prediction);
//           document.getElementById('prediction-popup').classList.add('show');
//         })
//         .catch((error) => console.error('Error:', error));
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="predict-container">
//       <h1 className="m-5 p-4 predict-heading">Prediction</h1>

//       {Object.keys(inputData).map((feature) => (
//         <div key={feature} className="form-group">
//           <label htmlFor={feature} className="label-text">
//             {feature}

//             {feature.includes("Y/N") && (
//               <select
//                 id={feature}
//                 value={inputData[feature]}
//                 onChange={(e) => handleInputChange(e, feature)}
//                 className='select-option'
//               >
//                 <option value="">Select</option>
//                 <option value="1">Yes</option>
//                 <option value="0">No</option>
//               </select>
//             )}

//             {feature === "Blood Group" && (
//                 <select
//                   id={feature}
//                   value={inputData[feature]}
//                   onChange={(e) => handleInputChange(e, feature)}
//                   className='select-option'
//                 >
//                   <option value="">Select</option>
//                   <option value="11">A+</option>
//                   <option value="12">A-</option>
//                   <option value="13">B+</option>
//                   <option value="14">B-</option>
//                   <option value="15">O+</option>
//                   <option value="16">O-</option>
//                   <option value="17">AB+</option>
//                   <option value="18">AB-</option>
//                 </select>
//             )}

//             {feature === "Cycle(R/I)" && (
//                 <select
//                   id={feature}
//                   value={inputData[feature]}
//                   onChange={(e) => handleInputChange(e, feature)}
//                   className='select-option'
//                 >
//                   <option value="">Select</option>
//                   <option value="2">Regular(R)</option>
//                   <option value="4">Irregular(I)</option>
//                 </select>
//             )}

//             {feature === "BMI" && (
//               <p className='ratio-text'>{calculateBMI()}</p>
//             )}

//             {feature === "Waist:Hip Ratio" && (
//               <p className='ratio-text'>{calculateWaistToHipRatio()}</p>
//             )}

//             {!feature.includes("Y/N") && feature !== "BMI" && feature !== "Waist:Hip Ratio" && (
//               <input
//                 type="text"
//                 id={feature}
//                 value={inputData[feature]}
//                 onChange={(e) => handleInputChange(e, feature)}
//                 className='mb-3 mx-5 input-box'
//               />
//             )}
//           </label>
//         </div>
//       ))}

//       <Button onClick={handlePredict} variant="outline-light" size="lg" className="m-5 px-4" style={{color: "#FF6AC3", borderColor: "#FF6AC3"}}>
//         Predict
//       </Button>
      
//       {prediction !== null && (
//         <div id="prediction-popup" className={prediction ? 'show' : 'hide'}>
//           <div id="popup-content">
//             <span id="close-popup" onClick={() => closePopup()}>
//               &times;
//             </span>
//           <p className="prediction-result">
//             Prediction: {prediction === 1 ? 'Yes' : 'No'}
//           </p>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default Predict;

// ##### maira kacode with css
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
import './PredictionPage.css';

function Predict() {
  const [inputData, setInputData] = useState({
    "Age (yrs)": "",
    "Weight (Kg)": "",
    "Height(Cm)": "",
    "BMI": "",
    "Blood Group": "",
    "Pulse rate(bpm)": "",
    "RR (breaths/min)": "",
    "Hb(g/dl)": "",
    "Cycle(R/I)": "",
    "Cycle length(days)": "",
    "Marriage Status (Yrs)": "",
    "Pregnant(Y/N)": "",
    "No. of abortions": "",
    "I beta-HCG(mIU/mL)": "",
    "II beta-HCG(mIU/mL)": "",
    "FSH(mIU/mL)": "",
    "LH(mIU/mL)": "",
    "FSH/LH": "",
    "Hip(inch)": "",
    "Waist(inch)": "",
    "Waist:Hip Ratio": "",
    "TSH (mIU/L)": "",
    "AMH(ng/mL)": "",
    "PRL(ng/mL)": "",
    "Vit D3 (ng/mL)": "",
    "PRG(ng/mL)": "",
    "RBS(mg/dl)": "",
    "Weight gain(Y/N)": "",
    "hair growth(Y/N)": "",
    "Skin darkening (Y/N)": "",
    "Hair loss(Y/N)": "",
    "Pimples(Y/N)": "",
    "Fast food (Y/N)": "",
    "Reg.Exercise(Y/N)": "",
    "BP _Systolic (mmHg)": "",
    "BP _Diastolic (mmHg)": "",
    "Follicle No. (L)": "",
    "Follicle No. (R)": "",
    "Avg. F size (L) (mm)": "",
    "Avg. F size (R) (mm)": "",
    "Endometrium (mm)": "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (event, feature) => {
    setInputData({
      ...inputData,
      [feature]: event.target.value,
    });
  };

  const calculateBMI = () => {
    const weight = parseFloat(inputData["Weight (Kg)"]);
    const height = parseFloat(inputData["Height(Cm)"]) / 100;
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      return (weight / (height * height)).toFixed(2);
    }
    return "";
  };

  const calculateWaistToHipRatio = () => {
    const waist = parseFloat(inputData["Waist(inch)"]);
    const hip = parseFloat(inputData["Hip(inch)"]);
    if (!isNaN(waist) && !isNaN(hip) && hip > 0) {
      return (waist / hip).toFixed(2);
    }
    return "";
  };

  const closePopup = () => {
    document.getElementById('prediction-popup').classList.remove('show');
  };

  const handlePredict = () => {
    const bmi = calculateBMI();
    const waistToHipRatio = calculateWaistToHipRatio();
    setInputData({
      ...inputData,
      BMI: bmi,
      "Waist:Hip Ratio": waistToHipRatio,
    });

    try {
      fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "input_data": inputData }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          }
          setPrediction(data.prediction);
          document.getElementById('prediction-popup').classList.add('show');
        })
        .catch((error) => console.error('Error:', error));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="predict-container">
      <h1 className="m-5 p-4 predict-heading" style={{ textAlign: 'center', background: 'linear-gradient(45deg, #e0529e, #ff6ac3)', WebkitBackgroundClip: 'text', color: 'transparent', display: 'inline-block', fontSize: '3rem' }}>
  PREDICTION
</h1>


      {Object.keys(inputData).map((feature) => (
        <div key={feature} className="form-group">
          <label htmlFor={feature} className="label-text" style={{ color: '#e0529e' }}>
            {feature}

            {feature.includes("Y/N") && (
              <select
                id={feature}
                value={inputData[feature]}
                onChange={(e) => handleInputChange(e, feature)}
                className='select-option'
                style={{ color: '#e0529e' }}
              >
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            )}

            {feature === "Blood Group" && (
              <select
                id={feature}
                value={inputData[feature]}
                onChange={(e) => handleInputChange(e, feature)}
                className='select-option'
                style={{ color: '#e0529e' }}
              >
                <option value="">Select</option>
                <option value="11">A+</option>
                <option value="12">A-</option>
                <option value="13">B+</option>
                <option value="14">B-</option>
                <option value="15">O+</option>
                <option value="16">O-</option>
                <option value="17">AB+</option>
                <option value="18">AB-</option>
              </select>
            )}

            {feature === "Cycle(R/I)" && (
              <select
                id={feature}
                value={inputData[feature]}
                onChange={(e) => handleInputChange(e, feature)}
                className='select-option'
                style={{ color: '#e0529e' }}
              >
                <option value="">Select</option>
                <option value="2">Regular(R)</option>
                <option value="4">Irregular(I)</option>
              </select>
            )}

            {feature === "BMI" && (
              <p className='ratio-text' style={{ color: '#e0529e' }}>
                {calculateBMI()}
              </p>
            )}

            {feature === "Waist:Hip Ratio" && (
              <p className='ratio-text' style={{ color: '#e0529e' }}>
                {calculateWaistToHipRatio()}
              </p>
            )}

            {!feature.includes("Y/N") && feature !== "BMI" && feature !== "Waist:Hip Ratio" && (
              <input
                type="text"
                id={feature}
                value={inputData[feature]}
                onChange={(e) => handleInputChange(e, feature)}
                className='mb-3 mx-5 input-box'
                style={{ color: '#e0529e' }}
              />
            )}
          </label>
        </div>
      ))}

<Button onClick={handlePredict} variant="outline-light" size="lg" className="m-5 px-4 predict-button">
    Predict
</Button>


      {prediction !== null && (
        <div id="prediction-popup" className={prediction ? 'show' : 'hide'}>
          <div id="popup-content">
            <span id="close-popup" onClick={() => closePopup()}>
              &times;
            </span>
            <p className="prediction-result" style={{ color: '#FF6AC3' }}>
              Prediction: {prediction === 1 ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Predict;
