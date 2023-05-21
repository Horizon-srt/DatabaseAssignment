import styles from './styles/style.module.css'
import { UsageProps } from "@/utils/appType"

interface ListItemProps {
    occupyInfo: UsageProps
}

const ListItem: React.FC<ListItemProps> = ({ occupyInfo }) => {
    return (
        <>
            <div className={styles.listbox}>
                <div className={styles.info}>
                    {occupyInfo.room + occupyInfo.building}
                </div>
                <div>{`${occupyInfo.time}`}</div>
            </div>
            <div className={styles.divide} />
        </>
    );
};

export default ListItem;