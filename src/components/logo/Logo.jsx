import styles from './logo.module.css'
const Logo = () => {
  return (
    <a href="#" className={styles.logo} aria-label='Перейти на главную страницу'>
      <img src="/icons/logo.svg" width="40" height="126" aria-hidden="true" />
    </a>
  );
}

export default Logo;