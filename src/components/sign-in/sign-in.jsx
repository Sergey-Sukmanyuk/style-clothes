import { signInWithGoogle, createUserFomAuth } from "../../utils/firebase/firebase-utils";

const signInGoogleHandler = async () => {
  const { user } = await signInWithGoogle();
  const createUserRef = await createUserFomAuth(user);
};

const SignIn = () => {
  return (
    <div>
      <h1>Sign in component</h1>
      <button onClick={signInGoogleHandler}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
