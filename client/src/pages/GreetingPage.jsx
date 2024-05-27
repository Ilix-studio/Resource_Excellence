import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";

const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(""); /* Replace with your image path */
  background-size: cover;
  background-position: center; /* Adjust position as needed */
`;

const GreetingText = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Button = styled(Link)`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 1rem;

  &:hover {
    background-color: #45a049; /* Green hover */
  }
`;
const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #01204e;
`;

const GreetingPage = () => {
  return (
    <GreetingContainer>
      <GreetingText>Welcome to Resource Excellence</GreetingText>
      <Paragraph>Signup to access latest job search!</Paragraph>
      <div>
        <Button to="/signup">Sign Up</Button>
        <Button to="/login">Log in </Button>
        {/* <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your Google client ID
          //   onSuccess={handleGoogleLogin}
          buttonText="Login with Google"
          //   className="google-login-button" // Optional: Add custom CSS class
        /> */}
      </div>
    </GreetingContainer>
  );
};

export default GreetingPage;
