import { RoomProps } from '@/utils/appType';
import styles from './styles/styles.module.css';

interface InfoProps {
    roomInfo: RoomProps;
}

const RoomInfo: React.FC<InfoProps> = ({ roomInfo }) => {
    const name: string = (roomInfo.name != "" ? "占用人："+roomInfo.name : '占用人：-');
    const building: string = ("第 "+roomInfo.building+" 教学楼");
    const time: string = ("第 "+roomInfo.time+" 节课")
    return (
        <div className={`${styles.contain} ${styles.spacing}`}>
            <div className={styles.blackPart}>     
                <div className={styles.firstLine}>
                    <a className={styles.room}> {roomInfo.room} </a>
                    <a className={styles.building}> {building}</a>
                </div>
                <a className={styles.time}> {time}</a>
            </div>
            <a className={styles.name}> {name} </a>
        </div>
    )
}

export default RoomInfo;