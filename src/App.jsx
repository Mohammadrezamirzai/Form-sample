import { useState } from "react";
import Header from "./components/Header.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";

export default function App() {
  const [changeForm, setChangeForm] = useState(false);

  function handleChangeForm() {
    setChangeForm(!changeForm);
  }

  return (
    <>
      <Header />
      {changeForm ? (
        <Login changeForm={() => handleChangeForm(false)} />
      ) : (
        <Signup changeForm={() => handleChangeForm(true)} />
      )}
    </>
  );
}
