import { createContext, useState, useEffect } from "react";
import { supabase } from "../configs/supabase";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [session, setSession] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSession();
    if (session) getUser();
  }, [session]);

  const getUser = async () => {
    try {
      setLoading(true);
      const { email } = supabase.auth.user();
      const { data, error, status } = await supabase
        .from("user")
        .select()
        .eq("email", email);
      if (error && status !== 406) throw error;
      if (data) setUser(data);
    } catch (error) {
      alert("An error happened: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email) => {
    // sign in
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link");
    } catch (error) {
      alert("Error happened: " + error);
    } finally {
      setLoading(false);
    }
  };

  const handleSession = async () => {
    setLoading(true);
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        getUser,
        session,
        loading,
        handleLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
