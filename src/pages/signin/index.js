import { Header, Main, Wrapper } from "./styles";
import logoText from "../../assets/brand/Logo Text.png";
import TextBox from "../../components/TextBox";
import { ButtonPrimary } from "../../components/Button";

function SignIn(props) {
  return (
    <Wrapper>
      <Header>
        <img src={logoText} alt="Logo" />
      </Header>
      <Main>
        <p>Please enter your email.</p>
        <TextBox placeholder="Email" />
        <ButtonPrimary>Sign In</ButtonPrimary>
      </Main>
    </Wrapper>
  );
}
export default SignIn;
