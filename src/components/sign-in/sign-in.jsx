import { signInWithGoogle, createUserFomAuth } from "../../utils/firebase/firebase-utils";
import SignUpForm from "../sign-up-form/sign-up-form";

const signInGoogleHandler = async () => {
  const { user } = await signInWithGoogle();
  const createUserRef = await createUserFomAuth(user);
};

const SignIn = () => {
  return (
    <div>
      <h1>Sign in component</h1>
      <button onClick={signInGoogleHandler}>Sign In With Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
