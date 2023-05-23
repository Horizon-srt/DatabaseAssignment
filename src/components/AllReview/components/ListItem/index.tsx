import styles from './styles/style.module.css'
import { RecordProps } from "@/utils/appType"

interface ListItemProps {
    recordInfo: RecordProps
}

const ListItem: React.FC<ListItemProps> = ({ recordInfo }) => {
    return (
        <>
            <div className={styles.listbox}>
                <div className={styles.info}>
                    {recordInfo.room + recordInfo.building}
                </div>
                <div>{`${recordInfo.startAt}+${recordInfo.period}`}</div>
            </div>
            <div className={styles.divide} />
        </>
    );
};

export default ListItem;