import styled from "styled-components";
import { ButtonPrimary } from "./Button";
import Textbox from "./TextBox";
import LogoText from "../assets/logo-text.png";
import { useContext, useEffect, useState } from "react";
import { supabase } from "../configs/supabase";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router";

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

function CreateAccount(props) {
  const history = useHistory();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const { user, getUser, session, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading) if (!session) history.push("/login");
  }, [session, loading]);

  const handleCreateAccount = async (first_name, last_name, username) => {
    const newAccount = {
      email: supabase.auth.user().email,
      username,
      first_name,
      last_name,
    };
    console.log(newAccount);
    try {
      const { data, error } = await supabase.from("user").upsert([newAccount]);
      if (error) throw error;
      if (data) {
        history.push("/");
        getUser();
      }
    } catch (error) {
      alert("An error happened: ", error);
    }
  };

  return (
    <Wrapper>
      <form action="" id="create-account-form">
        <img className="logo" src={LogoText} />
        <p>Create an Account</p>
        <Textbox
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Textbox
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Textbox
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <ButtonPrimary
          onClick={(e) => {
            e.preventDefault();
            if (firstName && lastName && userName) {
              handleCreateAccount(firstName, lastName, userName);
            } else {
              alert("Your account isn't entered correctly.");
            }
          }}
        >
          Create Account
        </ButtonPrimary>
      </form>
    </Wrapper>
  );
}
export default CreateAccount;
