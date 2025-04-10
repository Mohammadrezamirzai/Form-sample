import { useRef } from "react";

export default function Login({ changeForm }) {
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const enterdEmail = email.current.value;
    const enterdPassword = password.current.value;
    console.log(enterdEmail, enterdPassword);
    alert("Valid Email/Password");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="mt-4">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="">
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                ref={email}
                required
              />
            </div>
            <div className="">
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                ref={password}
                minLength={6}
                required
              />
            </div>
          </div>
          <div className="flex mt-4  justify-end  space-x-4">
            <button type="reset" className="reset-button">
              Reset
            </button>
            <button className="confirm-button">Login</button>
          </div>
        </div>
        <p className="last-p">
          Not a member? <a onClick={changeForm}>Signup now</a>
        </p>
      </form>
    </>
  );
}
