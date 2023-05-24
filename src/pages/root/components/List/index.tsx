import { PostChangeeRoomProps, PostRemoveRoomProps, RoomInfo } from "@/utils/appType";
import ListItem from "../ListItem";
import { postChangeRoom, postRemoveRoom } from "@/api/api";

interface ListProps {
    roomList: RoomInfo[];
}

const List: React.FC<ListProps> = ({ roomList }) => {
    const onChange = async (args: PostChangeeRoomProps) => {
        await postChangeRoom(args);
    };

    const onDelete = async (args: string) => {
        await postRemoveRoom({roomId: args});
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