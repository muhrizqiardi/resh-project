import styled from "styled-components";
import { ButtonPrimary } from "./Button";
import Textbox from "./TextBox";
import LogoText from "../assets/logo-text.png";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
  const { handleLogin, session } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const history = useHistory();
  
  useEffect(() => {
    if (session) {
      history.push('/');
    }
  }, [session]);

  return (
    <Wrapper>
      <form action="" id="create-account-form">
        <img className="logo" src={LogoText} />
        <p>Welcome back</p>
        <Textbox placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <ButtonPrimary onClick={(e) => {e.preventDefault();handleLogin(email)}}>Log In</ButtonPrimary>
      </form>
    </Wrapper>
  );
}
export default Login;
