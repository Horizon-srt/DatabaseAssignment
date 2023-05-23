import main from '@/styles/main.module.css'
import styles from './styles/style.module.css'
import { useEffect, useState } from 'react';
import { buildingMap, buildingType, buildings, timeMap, timeType, times, MenuType } from '@/utils/dataType';
import { GetAllReviewProps, RoomProps, SearchRoomsProps } from '@/utils/appType';
import { getRooms } from '@/api/api';
import ListItem from './components/ListItem';
import { Store } from '@/store/store';
import { useStore } from 'reto';

interface SearchProps {
    reviews: (args: GetAllReviewProps) => void;
    setMenuState: (args: MenuType) => void;
}

const Search: React.FC<SearchProps> = ({ reviews, setMenuState }) => {
    const [building, setBuilding] = useState('1');
    const [time, setTime] = useState(1 as timeType);
    const [result, setResult] = useState([] as RoomProps[]);
    const {userInfo} = useStore(Store);

    const handleClick = async () => {
        const temp: SearchRoomsProps = {
            building: building,
            time: time.toString()
        };
        // const result = await getRooms(temp);
        // if (result) {
        //     setResult(result);
        // }
        /* mock */
        const room1 = {
            room: '101',
            building: '1',
            time: '1',
            name: 'a',
            avaliable: true
        }
        const room2 = {
            room: '102',
            building: '1',
            time: '1',
            name: 'a',
            avaliable: true
        }
        const room3 = {
            room: '103',
            building: '1',
            time: '1',
            name: 'a',
            avaliable: true
        }
        setResult([room1, room2, room3]);
    }

    return (
        <div className={main.contentCard}>
            <div className={main.contentCardTitle}>
                <div>
                    楼号：
                    <select onChange={e => setBuilding(e.target.value)}>
                        {buildings.map(e => {
                            return (
                                <option key={e} value={e}>{buildingMap[e as buildingType]}</option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    时段：
                    <select onChange={e => setTime(e.target.value as unknown as timeType)}>
                        {times.map(e => {
                            return (
                                <option key={e} value={e}>{timeMap[e as timeType]}</option>
                            );
                        })}
                    </select>
                </div>
                <button type='submit' className={styles.searchButton} onClick={handleClick}>查询</button>
            </div>
            <div className={styles.divide} />
            <table>
                {result.map(e => {
                    return (
                        <tr key={e.room + e.building}>
                            <ListItem 
                                roomInfo={e} 
                                root={userInfo.root} 
                                time={e.time as unknown as timeType} 
                                reviews={reviews}
                                setMenuState={setMenuState}
                            />
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Search;