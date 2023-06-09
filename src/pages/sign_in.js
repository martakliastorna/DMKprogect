import React from "react";
import { NavLink } from "react-router-dom";
import {useRef, useState, useEffect} from "react";

function Sign_in() {
  const [user, setUser] = useState({});

  useEffect(() => {
    let savedUser = localStorage.getItem('user');
    if(savedUser) {
      savedUser = JSON.parse(savedUser);
      setUser(savedUser);
    }
  }, [])
  const nameRef = useRef(null);
  const telRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  function submitUser() {
    let newUser = {name: nameRef.current.value, email: emailRef.current.value, tel: +telRef.current.value, password: passwordRef.current.value};
    //..validation
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  }


  return (
    <div>
<div className="come-back"><NavLink to="/" className="color-black"> Повернутися на сайт</NavLink></div>
  <div className="main-page">
    <div className="registration-form  p-5">
      <p className="title-blog text-center pb-5">Реєстрація</p>
      <form action="" method="post">
        <div className="mb-3">
          <input ref={nameRef} defaultValue={user.name} type="text" placeholder="Введіть ваше ім'я" name="Name" className="form-control form-width" />
        </div>
        <div className="mb-3">
          <input ref={emailRef} defaultValue={user.email} type="email" placeholder="Введіть ваш e-mail" name="Email" className="form-control form-width" />
        </div>
        <div className="mb-3">
          <input ref={telRef} defaultValue={user.tel} type="tel" placeholder="099 999 99 99"  name="Телефон" min="9"
            className="form-control form-width" />
        </div>
        <div className="mb-3">
          <input ref={passwordRef} defaultValue={user.password} type="password" placeholder="Введіть пароль" min="5" className="form-control form-width"/>
        </div>
        <NavLink href="/"><button onClick={submitUser} className="btn btn-dark mb-5 form-width"> Зареєструватися</button> </NavLink> <br/>
        <button className="btn btn-outline-dark mb-3 form-width"> Увійти через Google</button><br/>
        <button className="btn btn-outline-dark form-width"> Увійти через Facebook</button>
      </form>
      <p className="style-foot mt-5 text-center">Вже маєте акаунт?<NavLink className="color-black font-bold"
          to="/login"> Вхід</NavLink></p>
    </div>
        <div className="show-hide">
          <img className="title-img " src="../images/titleimg1.png" alt="title-img"/>
        </div>
  </div>
    </div>
  );
}


export default Sign_in;