import { PostChangeeRoomProps, PostRemoveRoomProps, RoomInfo } from "@/utils/appType";
import styles from './styles/style.module.css'
import { useState } from "react";

interface ListItemProps {
    roomInfo: RoomInfo;
    onChange: (args: PostChangeeRoomProps) => void;
    onDelete: (args: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ roomInfo, onChange, onDelete }) => {
    const [onShow, setOnShow] = useState(false);
    const [room, setRoom] = useState('');

    const handleChange = () => {
        setOnShow(!onShow);
    };

    const onConfirm = async () => {
        if (room != '') {
            onChange({
                roomId: roomInfo.roomId,
                room: room,
                building: roomInfo.building
            });
        }
        setOnShow(false);
    };

    return (<>
        <div className={styles.listbox}>
            <div style={{width:'70px'}}>{roomInfo.room}</div>
            <button className={styles.change} onClick={handleChange}>Change</button>
            <button className={styles.delete} onClick={() => onDelete(roomInfo.roomId)}>Delete</button>
        </div>
        <div className={styles.changebox} hidden={!onShow}>
            <input className={styles.changeinput} onChange={e => {
                setRoom(e.target.value);
            }} />
            <button className={styles.changebutton} onClick={onConfirm}>Confirm</button>
        </div>
        <div className={styles.divide} />
    </>);
};

export default ListItem;