import React from "react";

export default function Login() {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const isShow = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  }
  return(
    <main className="login">
      <header className="formhead">
        <h3 className="headText">ThingsbyLilian</h3>
      </header>
      <form action="" className="loginForm">
        <div className="formWrap">
          <label htmlFor="Email" className="formLabel">
            Email address*
          </label>
          <input type="email" className="formInput" required />
        </div>
        <div className="formWrap">
          <label htmlFor="Email" className="formLabel">
            Password*
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            className="formInput"
            placeholder="xxxxxxxxx"
            required
          />
          <button className="showBtn" onClick={isShow}> Show</button>
        </div>
        <button className="submitBtn">Login</button>
      </form>
    </main>
  );
}
