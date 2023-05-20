import { MenuMap, MenuType } from '@/utils/dataType';
import styles from './styles/styles.module.css'

interface MenuButtonProps {
    label: MenuType;
    onClick: (args: MenuType) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ label, onClick }) => {
    return (
        <div className={styles.menuButton} onClick={() => onClick(label)}>
            <div className={styles.label}>{ MenuMap[label] }</div>
        </div>
    );
};

export default MenuButton;