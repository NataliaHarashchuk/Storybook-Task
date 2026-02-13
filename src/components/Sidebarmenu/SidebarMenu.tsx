import { useState } from 'react';
import styles from './SidebarMenu.module.css';

type MenuItemType = {
  label: string;
  children?: MenuItemType[];
};

type SidebarMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItemType[];
};

const SidebarMenu = ({ isOpen, onClose, items }: SidebarMenuProps) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
        onClick={onClose}
      />

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <nav className={styles.nav}>
          {items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </nav>
      </aside>
    </>
  );
};

const MenuItem = ({ item }: { item: MenuItemType }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className={styles.menuItemWrapper}>
      <div
        className={styles.menuItem}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <span>{item.label}</span>
        {hasChildren && (
          <span
            className={`${styles.arrow} ${isExpanded ? styles.arrowRotated : ''}`}
          >
            ▼
          </span>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className={styles.subMenu}>
          {item.children!.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
