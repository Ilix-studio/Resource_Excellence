import styled from "styled-components";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5; /* Adjust background color as needed */
`;

const LoginContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoginImage = styled.div`
  /* Add styles for login image here, if applicable */
`;

const LoginForms = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const LoginBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const LoginInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1; /* Make input take up remaining space */
  margin-left: 10px;
`;

const LoginButton = styled.button`
  background-color: #4caf50; /* Adjust button color as needed */
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3e8e41; /* Adjust button hover color as needed */
  }
`;

const LoginAccount = styled.span`
  margin-top: 10px;
  color: #999;
`;

const LoginSignup = styled(Link)`
  color: #4caf50; /* Adjust link color as needed */
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #3e8e41; /* Adjust link hover color as needed */
  }
`;

const LoginSocial = styled.div`
  margin-top: 20px;
`;

const LoginSocialIcon = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Usage:
const Login = () => {
  return (
    <>
      <LoginContainer>
        <LoginContent>
          <LoginImage />
          <LoginForms>
            <CreateForm>
              <LoginTitle>Login into your Account</LoginTitle>
              <LoginBox>
                <i className="bx bx-envelope"></i>
                <LoginInput type="text" placeholder="Enter your name" />
              </LoginBox>
              <LoginBox>
                <i className="bx bx-envelope"></i>
                <LoginInput type="text" placeholder="Enter your phone number" />
              </LoginBox>
              <LoginBox>
                <i className="bx bx-envelope"></i>
                <LoginInput type="text" placeholder="Enter your email" />
              </LoginBox>
              <LoginBox>
                <i className="bx bx-lock-alt"></i>
                <LoginInput type="text" placeholder="Enter your password" />
              </LoginBox>
              <LoginButton>Sign Up</LoginButton>
              <div>
                <LoginAccount>Already have an Account?</LoginAccount>
                <LoginSignup to="/">Log In</LoginSignup>
              </div>
            </CreateForm>
            <LoginSocial>
              <LoginSocialIcon to="#">Sign up</LoginSocialIcon>
            </LoginSocial>
          </LoginForms>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default Login;
