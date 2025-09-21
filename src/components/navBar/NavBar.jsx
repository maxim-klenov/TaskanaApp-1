import Link from "@components/link/Link";
import styles from './navBar.module.css'

const NavBar = ({navLinks}) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.href}>
              <Link iconName={navLink.svgName} href={navLink.href}>{navLink.label}</Link>
            </li>
          )  
        })}
      </ul>
    </nav>
  );
}

export default NavBar;