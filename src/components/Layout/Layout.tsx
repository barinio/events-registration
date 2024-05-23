import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "../Loader/Loader";
import { useTheme } from "../../theme/useTheme";

import icons from "../../images/icons.svg";
import styles from "./Layout.module.scss";

const Layout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <main className={`main ${theme}`}>
        <button onClick={toggleTheme} className={styles.toggleBtn}>
          <svg width="30" height="30">
            <use href={icons + `${theme === "light" ? "#icon-sun" : "#icon-moon"}`}></use>
          </svg>
        </button>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
