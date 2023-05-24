import { GetAllReviewProps, RoomProps } from "@/utils/appType";
import ListItem from "../ListItem";
import { MenuType, timeType } from "@/utils/dataType";
import { useStore } from "reto";
import { Store } from "@/store/store";
import { useEffect } from "react";

interface ListProps {
    result: RoomProps[];
    reviews: (args: GetAllReviewProps) => void;
    setMenuState: (args: MenuType) => void;
}

const List: React.FC<ListProps> = ({ result, reviews, setMenuState }) => {
    const {userInfo} = useStore(Store);

    return (
        <ul>
            {result.map(e => {
                    return (
                        <li key={e.room + e.building}>
                            <ListItem 
                                roomInfo={e} 
                                root={userInfo.root} 
                                time={e.time as unknown as timeType} 
                                reviews={reviews}
                                setMenuState={setMenuState}
                            />
                        </li>
                    );
                })}
        </ul>
    );
}

export default List;