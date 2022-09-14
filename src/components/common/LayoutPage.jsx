import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./LayoutPage.module.css";

const LayoutPage = ({ children }) => {
  return (
    <div className={styles.layoutPage}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutPage;
