import { useState } from "react";

export default function Signup({ changeForm }) {
  const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const acquistionChannel = fd.getAll("acquistion");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquistionChannel;

    if (data.password !== data["confirm-password"]) {
      setPasswordAreNotEqual(true);
      return;
    }
    alert("valid")
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <h4>We just need a little bit of data from you to get you started 🚀</h4>
      <div className="my-4">
        <div className="">
          <label htmlFor="">email</label>
          <input type="email" name="email" required />
        </div>
        <div className="mt-4 flex flex-col md:flex-row space-x-4">
          <div>
            <label htmlFor="">password</label>
            <input type="password" name="password" minLength={6} required />
          </div>
          <div>
            <label htmlFor="">confirm-password</label>
            <input type="password" name="confirm-password" required />
            {passwordAreNotEqual && (
              <p className="error">Password must match</p>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-4 flex flex-col md:flex-row space-x-4">
        <div>
          <label>First name</label>
          <input name="first-name" type="text" required />
        </div>
        <div className="">
          <label htmlFor="">last name</label>
          <input type="text" name="last-name" required />
        </div>
      </div>
      <div className="mt-2">
        <label htmlFor="">what best describe your role?</label>
        <select name="role" required>
          <option value="student">student</option>
          <option value="teacher">teacher</option>
          <option value="employee">employee</option>
          <option value="founder">founder</option>
          <option value="other">other</option>
        </select>
      </div>
      <fieldset className="mt-2">
        <p className="text-gray-300 my-2">How did you find us?</p>
        <div className="flex items-center ">
          <input type="checkbox" name="acquistion" />
          <label htmlFor="">google</label>
        </div>
        <div className="flex items-center ">
          <input type="checkbox" name="acquistion" />
          <label htmlFor="">By friends</label>
        </div>
        <div className="flex items-center ">
          <input type="checkbox" name="acquistion" />
          <label htmlFor="">other</label>
        </div>
      </fieldset>
      <div className="flex items-center mt-4">
        <input type="checkbox" required />
        <label htmlFor="">I agree to the terms and conditions</label>
      </div>
      <div className="flex items-center justify-end space-x-4 mt-4 ">
        <button className="reset-button" type="reset">
          Reset
        </button>
        <button className="confirm-button">Sign up</button>
      </div>
      <p className="last-p">
        Already have account? <a onClick={changeForm}>Login now</a>
      </p>
    </form>
  );
}
