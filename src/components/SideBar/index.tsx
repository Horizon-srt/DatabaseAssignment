import { MenuType } from '@/utils/dataType';
import MenuButton from './components/MenuButton';
import styles from './styles/style.module.css'
import main from '@/styles/main.module.css'

interface SideBarProps {
    root: boolean;
    onSelect: (args: MenuType) => void;
}

const SideBar: React.FC<SideBarProps> = ({ root, onSelect }) => {
    return (
        <div className={styles.barCard}>
            <div className={main.contentCardTitle}>
                <div className={styles.title}>Menu</div>
            </div>
            <div className={styles.divide} />
            <MenuButton label={'search'} onClick={onSelect} />
            <div className={styles.divide} />
            <MenuButton label={'ownReview'} onClick={onSelect} />
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