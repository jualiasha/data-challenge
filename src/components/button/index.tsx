import React, { FC } from 'react';
import { Button as AriaButton } from 'react-aria-components';
import styles from './index.module.css';

type ButtonSize = 'small' | 'medium';
type ButtonVariant = 'contained' | 'outlined';
type ButtonTheme = 'primary' | 'secondary';

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  disabled?: boolean;
  icon?: React.ReactNode; // SVG Icon support
  children?: React.ReactNode; // Text content
  onPress?: () => void;
}

const Button: FC<ButtonProps> = ({
  size = 'medium',
  variant = 'contained',
  theme = 'primary',
  disabled = false,
  icon,
  children,
  onPress,
}) => {
  return (
    <AriaButton
      className={`${styles.button} ${styles[size]} ${styles[variant]} ${styles[theme]}`}
      isDisabled={disabled}
      onPress={onPress}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children && <span className={styles.text}>{children}</span>}
    </AriaButton>
  );
};

export default Button;
