import React from "react";
import Enter from "../Components/Enter";
import Menu from "../Components/Menu";

import { useStore } from 'effector-react';
import { $login } from "../Models";

function App() {
  const login = useStore($login);
  return (
    <div>
      {/* {login.length < 3 ? <Enter /> : null}  */} 
      
      <Menu />
    </div>
  );
}

export default App;
