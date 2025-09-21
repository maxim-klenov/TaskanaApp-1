import Icon from '@components/icon/Icon'
import styles from './link.module.css'

const Link = ({ iconName, href = "#", children }) => {
  return (
    <>
      <a className={styles.link} href={href} >
        <Icon name={iconName} aria-hidden/> 
        { children }
      </a>
    </>
  );
}

export default Link;