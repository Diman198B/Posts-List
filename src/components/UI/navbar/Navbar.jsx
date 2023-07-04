import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <MyButton
        style={{
          color: "white",
          fontSize: "16px",
          border: "1px solid white",
          borderRadius: "20px",
        }}
        onClick={logout}
      >
        Выйти
      </MyButton>
      <div className="navbar__links">
        <Link to="/about" className="navbar__link">
          О проекте
        </Link>
        <Link to="/posts" className="navbar__link">
          Посты
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
