import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
      <span>Проект выполнен в рамках стажировки <a href="https://preax.ru" target="_blank" rel="noopener noreferrer">PREAX</a></span>
    </footer>
    </>
  );
}

export default Footer;