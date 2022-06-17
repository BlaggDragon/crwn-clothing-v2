import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
