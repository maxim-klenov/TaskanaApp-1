import styles from './sideBar.module.css'
const SideBar = ({ children }) => {
  return (
    <aside className={styles.sidebar}>
      { children }
    </aside>
  );
}

export default SideBar;