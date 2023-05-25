import { RoomProps } from '@/utils/appType';
import styles from './styles/styles.module.css';
import { buildingMap, buildingType, timeMap, timeType } from '@/utils/dataType';

interface InfoProps {
    roomInfo: RoomProps;
}

const RoomInfo: React.FC<InfoProps> = ({ roomInfo }) => {
    return (
        <div className={styles.contain}>  
            <div className={styles.firstLine}>
                <div className={styles.room}>{roomInfo.room}</div>
                <div className={styles.time}>{timeMap[roomInfo.time as unknown as timeType]}</div>
            </div>
            <div className={styles.building}>{buildingMap[roomInfo.building as unknown as buildingType]}</div>
        </div>
    )
}

export default RoomInfo;