import { useState } from "react";
import { saveLogin } from "../../Models";
import { isLogginCorrect } from "../../Utils/isLogginCorrect";
import Button from "../Button";

import styles from "./Enter.module.css";

function Enter() {
  const [login, setLogin] = useState("");

  const [error, setError] = useState(false);

  function handlerCheckLogin() {
    if (isLogginCorrect(login) === true) {
      saveLogin(login);
      return;
    }

    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <h2>Добро пожаловать!</h2>
        <input
          type="text"
          placeholder="Введите логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <div className={styles.error}>
          {error && <>Длинна должна быть больше 3 символов</>}
        </div>
        <Button onClick={handlerCheckLogin} children="Вход" className={styles.new}/>
      </div>
    </div>
  );
}

export default Enter;
