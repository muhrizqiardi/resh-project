import { Header, Main, Wrapper, ErrorMessage } from "./styles";
import logoText from "../../assets/brand/Logo Text.png";
import TextBox from "../../components/TextBox";
import { ButtonPrimary } from "../../components/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SignIn(props) {
  const [email, setEmail] = useState("");

  const auth = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>
        <img src={logoText} alt="Logo" />
      </Header>
      <Main>
        <p>Please enter your email.</p>
        <TextBox
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <ErrorMessage>
          Unable to validate email address: invalid format
        </ErrorMessage>
        <ButtonPrimary
          onClick={async () => {
            await dispatch.auth.signInAsync(email);
          }}
        >
          Sign In
        </ButtonPrimary>
      </Main>
    </Wrapper>
  );
}
export default SignIn;
