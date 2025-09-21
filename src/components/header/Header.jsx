import Button from '@components/button/Button'
import Logo from '@components/logo/Logo'
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Button iconName="plus" aria-label="Создать новую задачу">Создать</Button>
    </header>
  );
}

export default Header;