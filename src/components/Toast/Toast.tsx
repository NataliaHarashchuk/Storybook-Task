import { useEffect } from 'react';
import styles from './Toast.module.css';

type ToastType = 'success' | 'error' | 'warning' | 'info';

type ToastProps = {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
  isVisible: boolean;
  showCloseButton: boolean;
};

const Toast = ({
  message,
  type = 'success',
  duration = 1000,
  onClose,
  isVisible,
  showCloseButton = true,
}: ToastProps) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.content}>
        <p className={styles.message}>{message}</p>
      </div>
      {showCloseButton && (
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
      )}
    </div>
  );
};

export default Toast;
