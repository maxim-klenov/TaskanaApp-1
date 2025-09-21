import styles from "./currentPage.module.css";

const CurrentPage = ( {children} ) => {
  return (
    <div className={styles.container}>
        { children }  
    </div>
  );
}

export default CurrentPage;