import styles from './styles/style.module.css'

interface SideBarProps {
    root: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ root }) => {
    return (
        <div className={styles.barCard}>
            
        </div>
    );
};

export default SideBar;