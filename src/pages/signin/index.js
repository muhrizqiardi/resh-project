import { Header, Main, Wrapper, ErrorMessage, SuccessMessage } from "./styles";
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
      {auth.magicLinkSent ? (
        <Main>
          <SuccessMessage>
            A sign in link has been sent to your email.{" "}
          </SuccessMessage>
        </Main>
      ) : (
        <Main>
          <p>Please enter your email.</p>
          <TextBox
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            disabled={auth.loading}
          />
          {auth.error ? (
            <ErrorMessage>{auth.error.message}</ErrorMessage>
          ) : (
            <></>
          )}
          <ButtonPrimary
            onClick={async () => {
              await dispatch.auth.signInAsync(email);
            }}
            disabled={auth.loading}
          >
            Sign In
          </ButtonPrimary>
        </Main>
      )}
    </Wrapper>
  );
}
export default SignIn;
