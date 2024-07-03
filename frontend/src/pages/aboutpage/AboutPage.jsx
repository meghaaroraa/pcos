// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import './AboutPage.css';

// const About = () => {
//   return (
//     <div className="rectangle1">
//       <Container className="content-container">
//         <h1 className="heading">About Us</h1>
//         <p className="lead">
//         Welcome to Cyster, your trusted resource for understanding Polycystic Ovary Syndrome (PCOS) and its implications. At Cyster, we are dedicated to providing accurate and insightful information about PCOS, empowering individuals with knowledge to make informed decisions about their health.
//         </p>
//         <h6>Our Mission</h6>
//         <p className="lead">
//         We are committed to providing clarity and guidance on PCOS through advanced Artificial Intelligence (AI) technology. Our focus is on helping users assess whether they should consult a doctor for their symptoms or if they can manage their health concerns independently.
//         </p>

//         <h6>AI-Powered Decision Support</h6>
//         <p className="lead">
//         Central to our platform is our cutting-edge AI model, developed using CatBoost, a leading machine learning algorithm. Our model boasts impressive accuracy in determining the need for medical consultation:

//         Training Accuracy: 100.0%
//         Testing Accuracy: 91.41%
//         These metrics underscore the reliability and efficacy of our AI in evaluating symptoms and providing personalized recommendations.
//         </p>

//         <h6>How It Works?</h6>
//         <p className="lead">
//         Users can interact with our platform by inputting their symptoms and relevant health information related to PCOS. Our AI analyzes this data against a comprehensive knowledge base of PCOS symptoms and medical guidelines. Based on this analysis, it provides clear guidance on whether users should seek medical advice or adopt self-care measures.
//         </p>

//         <h6>Empowering Informed Health Decisions</h6>
//         <p className="lead">
//         At Cyster, we prioritize user privacy and confidentiality. All interactions with our AI are secure, ensuring a safe environment for exploring health concerns. Our goal is to empower individuals to take proactive steps towards managing their health, starting with informed decisions about when to consult a doctor.
//         </p>

//         <h6>Join Us in Empowering Health</h6>
//         <p className="lead">
//         Whether you're seeking clarity on PCOS symptoms, wondering about treatment options, or simply want guidance on whether to see a doctor, [Your Website Name] is here to support you. Explore our AI-driven tools, access reliable information, and gain insights tailored to your health needs.
//         </p>

//       </Container>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import Container from 'react-bootstrap/Container';
import './AboutPage.css';

const About = () => {
  return (
    <div className="rectangle1">
      <Container className="content-container">
      <h2 className="head">About Us</h2>
        <div className="box">
          <p className="lead2">
            Welcome to Cyster, your trusted resource for understanding Polycystic Ovary Syndrome (PCOS) and its implications. At Cyster, we are dedicated to providing accurate and insightful information about PCOS, empowering individuals with knowledge to make informed decisions about their health.
          </p>
        </div>

        <div className="box">
          <h2 className="heading2">Our Mission</h2>
          <p className="lead2">
            We are committed to providing clarity and guidance on PCOS through advanced Artificial Intelligence (AI) technology. Our focus is on helping users assess whether they should consult a doctor for their symptoms or if they can manage their health concerns independently.
          </p>
        </div>

        <div className="box">
          <h2 className="heading2">AI-Powered Decision Support</h2>
          <p className="lead2">
            Central to our platform is our cutting-edge AI model, developed using CatBoost, a leading machine learning algorithm. Our model boasts impressive accuracy in determining the need for medical consultation:
            <br/><br/>
            Training Accuracy: 100.0%
            <br/>
            Testing Accuracy: 91.41%
            <br/><br/>
            These metrics underscore the reliability and efficacy of our AI in evaluating symptoms and providing personalized recommendations.
          </p>
        </div>

        <div className="box">
          <h2 className="heading2">How It Works?</h2>
          <p className="lead2">
            Users can interact with our platform by inputting their symptoms and relevant health information related to PCOS. Our AI analyzes this data against a comprehensive knowledge base of PCOS symptoms and medical guidelines. Based on this analysis, it provides clear guidance on whether users should seek medical advice or adopt self-care measures.
          </p>
        </div>

        <div className="box">
          <h2 className="heading2">Empowering Informed Health Decisions</h2>
          <p className="lead2">
            At Cyster, we prioritize user privacy and confidentiality. All interactions with our AI are secure, ensuring a safe environment for exploring health concerns. Our goal is to empower individuals to take proactive steps towards managing their health, starting with informed decisions about when to consult a doctor.
          </p>
        </div>

        <div className="box">
          <h2 className="heading2">Join Us in Empowering Health</h2>
          <p className="lead2">
            Whether you're seeking clarity on PCOS symptoms, wondering about treatment options, or simply want guidance on whether to see a doctor, Cyster is here to support you. Explore our AI-driven tools, access reliable information, and gain insights tailored to your health needs.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
