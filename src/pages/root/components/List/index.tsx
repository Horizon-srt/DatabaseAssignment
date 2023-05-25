import { PostChangeeRoomProps, PostRemoveRoomProps, RoomInfo } from "@/utils/appType";
import ListItem from "../ListItem";
import { postChangeRoom, postRemoveRoom } from "@/api/api";

interface ListProps {
    roomList: RoomInfo[];
    shouldUpdate: boolean;
    setShouldUpdate: (args: boolean) => void;
}

const List: React.FC<ListProps> = ({ roomList, shouldUpdate, setShouldUpdate }) => {
    const onChange = async (args: PostChangeeRoomProps) => {
        await postChangeRoom(args);
        alert('Change successful!');
        setShouldUpdate(!shouldUpdate);
    };

    const onDelete = async (args: string) => {
        await postRemoveRoom({roomId: args});
        alert('Delete successful!');
        setShouldUpdate(!shouldUpdate);
    }

    return (
        <ul>
            {roomList.map(e => {
                console.log(e)
                return (
                    <li key={e.roomId} >
                        <ListItem roomInfo={e} onChange={onChange} onDelete={onDelete} />
                    </li>
                );
            })}
        </ul>
    );
};

export default List;