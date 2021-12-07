import {
  Header,
  Main,
  Wrapper,
  ErrorMessage,
  SuccessMessage,
  RowItem,
} from "./styles";
import logoText from "../../assets/brand/Logo Text.png";
import TextBox from "../../components/TextBox";
import { ButtonPrimary } from "../../components/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../../configs/supabase";
import { useHistory, Redirect } from "react-router";

function CreateAccount(props) {
  const history = useHistory();
  const auth = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  return auth.session ? (
    auth.accountCreated ? (
      <Redirect exact to="/" />
    ) : (
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
          <Main
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(e.target.email.value);
              console.log(e.target.username.value);
              console.log(e.target.firstName.value);
              console.log(e.target.lastName.value);
              const { data, error } = await supabase.from("user").insert([
                {
                  email: e.target.email.value,
                  username: e.target.username.value,
                  first_name: e.target.firstName.value,
                  last_name: e.target.lastName.value,
                },
              ]);
              if (data) {
                history.push("/");
                dispatch.auth.setAccountCreated(true);
                dispatch.auth.getUser();
              }
              if (error) {
                dispatch.auth.setError(error);
                console.error(error);
              }
            }}
          >
            <p>Let’s create your account!</p>
            <RowItem>
              <label htmlFor="email">Email</label>
              <TextBox
                id="email"
                name="email"
                placeholder="Email"
                value={auth.session?.user.email ?? "email@email.com"}
                type="email"
                disabled={true}
              />
            </RowItem>
            <RowItem>
              <label htmlFor="username">Username (must be unique)</label>
              <TextBox id="username" name="username" placeholder="Username" />
            </RowItem>
            <RowItem>
              <label htmlFor="first-name">First Name</label>
              <TextBox
                id="first-name"
                name="firstName"
                placeholder="First Name"
              />
            </RowItem>
            <RowItem>
              <label htmlFor="last-name">Last Name</label>
              <TextBox id="last-name" name="lastName" placeholder="Last Name" />
            </RowItem>
            {auth.error ? (
              <ErrorMessage>{auth.error.message}</ErrorMessage>
            ) : (
              <></>
            )}
            <ButtonPrimary type="submit" disabled={auth.loading}>
              Sign In
            </ButtonPrimary>
          </Main>
        )}
      </Wrapper>
    )
  ) : (
    <Redirect exact to="/signin" />
  );
}
export default CreateAccount;
