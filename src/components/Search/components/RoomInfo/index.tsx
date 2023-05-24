import { RoomProps } from '@/utils/appType';
import styles from './styles/styles.module.css';

interface InfoProps {
    roomInfo: RoomProps;
}

const RoomInfo: React.FC<InfoProps> = ({ roomInfo }) => {
    const building: string = ("第 "+roomInfo.building+" 教学楼");
    const time: string = ("第 "+roomInfo.time+" 节课")
    return (
        <div className={styles.contain}>  
            <div className={styles.firstLine}>
                <div className={styles.room}>{roomInfo.room}</div>
                <div className={styles.time}>{time}</div>
            </div>
            <div className={styles.building}>{building}</div>
        </div>
    )
}

export default RoomInfo;