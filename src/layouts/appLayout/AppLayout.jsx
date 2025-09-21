// import Header, content
// export main.jsx

import Header from '@components/header/Header';
import styles from "./appLayout.module.css";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header/>
      {children}
    </div>
  );
}

export default AppLayout;