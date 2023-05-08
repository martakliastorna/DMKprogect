import React from "react";
import {useRef, useState, useEffect} from "react";

function Call_us() {
  const [user, setUser] = useState({});

  useEffect(() => {
    let proposeUser = localStorage.getItem('user');
    if(proposeUser) {
      proposeUser = JSON.parse(proposeUser);
      setUser(proposeUser);
    }
  }, [])
  const emailRef = useRef(null);
  const textRef = useRef(null);

  function proposeUser() {
    let newUser = {email: emailRef.current.value, propose: textRef.current.value};
    //..validation
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  }

  return (
    <div>
<div className="callback">
      <form method="post" action="">
        <p className="text-center font-size pb-4">Зворотній зв'язок</p>
        <div className="form-group">
          <div>
            <input ref={emailRef} defaultValue={user.email} className="form-control style-foot" id="inputLogin3" placeholder="Введіть e-mail" minlength="5" required
              name="email"  type="email"/>
          </div>
        </div>
        <div className="form-group">
            <textarea ref={textRef} defaultValue={user.textl} type="text" title="Опишіть вашу проблему" className="form-control"></textarea>
        </div>
        <div className="form-group">
          <div className="text-center">
            <button onClick={proposeUser} className="btn btn-dark" type="submit">Надіслати</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}


export default Call_us;
