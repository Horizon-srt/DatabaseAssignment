import { MenuMap, MenuType } from '@/utils/dataType';
import styles from './styles/styles.module.css'

interface MenuButtonProps {
    label: MenuType;
    onClick: (args: MenuType) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ label, onClick }) => {
    const handleClick = () => {
        onClick(label);
    }

    return (
        <div className={styles.menuButton} onClick={handleClick}>
            <div className={styles.label}>{ MenuMap[label] }</div>
        </div>
    );
};

export default MenuButton;