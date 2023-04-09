import { ButtonProps } from './types';
import styles from './Button.module.css';

function Button({
  className,
  children,
  disabled = false,
  submit = false,
  onClick = () => {},
}: ButtonProps) {

  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={[
        styles.button,
        className,
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
