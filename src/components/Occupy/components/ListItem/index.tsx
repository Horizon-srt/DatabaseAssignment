import { buildingMap, buildingType, timeMap, timeType } from '@/utils/dataType';
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
                    <div style={{fontSize:'large'}}>{occupyInfo.room}</div>
                    <div style={{fontSize:'small',color:'gray'}}>{buildingMap[occupyInfo.building as unknown as buildingType]}</div>
                </div>
                <div>{timeMap[occupyInfo.time as unknown as timeType]}</div>
            </div>
            <div className={styles.divide} />
        </>
    );
};

export default ListItem;