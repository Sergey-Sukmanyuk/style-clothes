import { useState } from "react";

import InputField from "../input-field/input-field";

import {
  createUserWithEmailAndPasswordForm,
  createUserFomAuth,
} from "../../utils/firebase/firebase-utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPasword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPasword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPasword) {
      alert("Your pasword do notmatch");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPasswordForm(
        email,
        password
      );

      await createUserFomAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Can not create user, the email already in use");
      } else {
        console.log("Can not create user, error", error);
      }
    }
  };

  return (
    <div>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Display name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

        <InputField
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <InputField
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <InputField
          label="Confirm password"
          type="password"
          required
          name="confirmPasword"
          onChange={handleChange}
          value={confirmPasword}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
