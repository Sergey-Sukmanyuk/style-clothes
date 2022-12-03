import SignInForm from "../sign-in-form /sign-in-form";
import SignUpForm from "../sign-up-form/sign-up-form";

import "./authetication-styles.scss";

const Authetication = () => {
  return (
    <div className="authetication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authetication;
