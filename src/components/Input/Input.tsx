import { useState } from 'react';
import styles from './Input.module.css';

type InputProps = {
  type?: 'text' | 'password' | 'number' | 'email';
  placeholder?: string;
  clearable?: boolean;
  value?: string;
  onChange?: (val: string) => void;
};

const Input = ({
  type = 'text',
  placeholder = 'Type something...',
  clearable,
  value,
  onChange,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const InputType = type === 'password' && isPasswordVisible ? 'text' : type;

  const handleClear = () => {
    if (onChange) onChange('');
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type={InputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />

      <div className={styles.actions}>
        {type === 'password' && (
          <button
            type='button'
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className={styles.button}
          >
            {isPasswordVisible ? '–' : 'O'}
          </button>
        )}

        {clearable && value && value.length > 0 && (
          <button onClick={handleClear} className={styles.button}>
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
