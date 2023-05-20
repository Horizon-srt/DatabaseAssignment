import styles from './styles/styles.module.css'

interface MenuButtonProps {
    label: string;
    onClick: () => {};
}

const MenuButton: React.FC<MenuButtonProps> = ({ label, onClick }) => {
    return (
        <div className={styles.menuButton} onClick={onClick}>
            <div>{ label }</div>
        </div>
    );
};

export default MenuButton;