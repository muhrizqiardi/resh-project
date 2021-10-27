import styled from "styled-components";
import { ButtonPrimary } from "./Button";
import Textbox from "./TextBox";
import ButtonNormal from "./Button";
import LogoText from "../assets/logo-text.png";

const Wrapper = styled.div`
  max-width: 320px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & form {
    display: grid;
    justify-items: center;
    row-gap: 10px;
    & button {
      width: 100%;
    }
  }
  & img.logo {
    width: 100px;
    margin-bottom: 30px;
  }
`;

function Login(props) {
  return (
    <Wrapper>
      <form action="" id="create-account-form">
        <img className="logo" src={LogoText} />
        <p>Welcome back</p>
        <Textbox placeholder="Email" />
        <Textbox placeholder="Password" />
        <ButtonPrimary>Log In</ButtonPrimary>
        <ButtonNormal>Create a Account</ButtonNormal>
      </form>
    </Wrapper>
  );
}
export default Login;
