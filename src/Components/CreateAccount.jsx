import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  let [userDetails, setUserDetails] = useState({
    fullname: { isValid: true, text: "" },
    email: { isValid: true, text: "" },
    password: { isValid: true, text: "" },
    confirmPassword: { isValid: true, text: "" },
  });

  let [isFormValid, setIsFormValid] = useState(false);
  

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFullnameValid(userDetails.fullname.text)) {
      setUserDetails({
        ...userDetails,
        fullname: { ...userDetails.fullname, isValid: false },
      });
      
    } else if (!isEmailValid(userDetails.email.text)) {
      setUserDetails({
        ...userDetails,
        email: { ...userDetails.email, isValid: false },
      });
    } else if (!isPasswordValid(userDetails.password.text)) {
      setUserDetails({
        ...userDetails,
        password: { ...userDetails.password, isValid: false },
      });
    } else if (
      !isConfirmPasswordValid(
        userDetails.confirmPassword.text,
        userDetails.password.text
      )
    ) {
      setUserDetails({
        ...userDetails,
        confirmPassword: {
          ...userDetails.confirmPassword,
          isValid: false,
        },
      });
    }
    else {
      setIsFormValid(true);
    }
  }
  return isFormValid ? (
    <div className="form-submitted-page">
      <div className="form-submitted-content">
        <p className="form-submitted-heading">
          🎉 Account Created Successfully! 🎉
        </p>
        <p className="form-submitted-text1">
          Welcome to Pastel Pages,<p>{ userDetails.fullname.text}</p>
        </p>
        <p className="form-submitted-text2">
          We’re excited to have you here. Let’s explore our collection.
        </p>
        <Link to="/" className="form-submitted-link">
          “Let’s head to the homepage and explore!”
        </Link>
      </div>
    </div>
  ) : (
    <div className="create-account-page">
      <form className="create-account-form" onSubmit={handleSubmit}>
        <p className="form-quote">
          “I do believe something very magical can happen when you read a good
          book.”
        </p>
        <p className="form-quote-writer">— J.K. Rowling</p>
        <p className="form-welcome-message">Join our cozy book community!</p>
        <div className="form-fields">
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            placeholder="Full Name"
            value={userDetails.fullname.text}
            onChange={(e) =>
              setUserDetails((userDetails) => ({
                ...userDetails,
                fullname: {
                  ...userDetails.fullname,
                  text: `${e.target.value}`,
                },
              }))
            }
          />
          <p
            className="invalid-fullname-message"
            style={{
              display: `${userDetails.fullname.isValid ? "none" : "block"}`,
            }}
          >
            “Please only use letters and spaces, between 2 and 50 characters.
            Avoid numbers or special characters.”
          </p>

          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            value={userDetails.email.text}
            onChange={(e) =>
              setUserDetails((userDetails) => ({
                ...userDetails,
                email: { ...userDetails.email, text: `${e.target.value}` },
              }))
            }
          />
          <p
            className="invalid-email-message"
            style={{
              display: `${userDetails.email.isValid ? "none" : "block"}`,
            }}
          >
            "Please enter a valid Email ID"
          </p>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a strong Password"
            value={userDetails.password.text}
            onChange={(e) =>
              setUserDetails((userDetails) => ({
                ...userDetails,
                password: {
                  ...userDetails.password,
                  text: `${e.target.value}`,
                },
              }))
            }
          />
          <p
            className="invalid-password-message"
            style={{
              display: `${userDetails.password.isValid ? "none" : "block"}`,
            }}
          >
            “Password must be at least 8 characters, including one uppercase
            letter, one lowercase letter, one digit, and one special character.”
          </p>

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={userDetails.confirmPassword.text}
            onChange={(e) =>
              setUserDetails((userDetails) => ({
                ...userDetails,
                confirmPassword: {...userDetails.confirmPassword, text: `${e.target.value}` },
              }))
            }
          />
          <p
            className="invalid-confirm-password-message"
            style={{
              display: `${
                userDetails.confirmPassword.isValid ? "none" : "block"
              }`,
            }}
          >
            “Passwords do not match. Please re-enter.”
          </p>

          <button
            type="submit"
            value="submit-button"
            className="create-account-button"
          >
            Create Account
          </button>
        </div>
        <div className="alternate-options">
          <p className="alternate-options-text">or sign-up with</p>
          <div className="alternate-options-buttons">
            <button type="button" className="google-button">
              <img src="google.png" alt="" />
              <p>Google</p>
            </button>
            <button type="button" className="apple-button">
              <img src="apple.png" alt="" />
              <p>Apple</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;

function isFullnameValid(fullname) {
  if (fullname.length < 2 || fullname.length > 50 || (!(/^[A-Za-z\s]+$/.test(fullname)))) {
    return false;
  }
  return true;
}

function isEmailValid(email) {
  return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
}

function isPasswordValid(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

function isConfirmPasswordValid(confirmPassword,password) {
  return(confirmPassword===password)
}
