import Icon from '@components/icon/Icon'
import styles from "./button.module.css";

const Button = ({ iconName = "plus", children, 'aria-label': ariaLabel = children }) => {
  return (
    <button className={styles.button} aria-label={ariaLabel}>
      <Icon name={iconName} aria-hidden /> 
      { children }
    </button>
  );
}

export default Button;