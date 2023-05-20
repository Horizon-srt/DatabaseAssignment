import { MenuType } from '@/utils/dataType';
import MenuButton from './components/MenuButton';
import styles from './styles/style.module.css'

interface SideBarProps {
    root: boolean;
    onSelect: (args: MenuType) => void;
}

const SideBar: React.FC<SideBarProps> = ({ root, onSelect }) => {
    return (
        <div className={styles.barCard}>
            <MenuButton label={'search'} onClick={onSelect} />
            <div className={styles.divide} />
            {root ? (
                <MenuButton label={'occupy'} onClick={onSelect} />
            ) : (
                <MenuButton label={'learn'} onClick={onSelect} />
            )}
        </div>
    );
};

export default SideBar;