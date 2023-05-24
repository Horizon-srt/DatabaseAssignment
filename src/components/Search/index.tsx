import main from '@/styles/main.module.css'
import styles from './styles/style.module.css'
import { useEffect, useRef, useState } from 'react';
import { buildingMap, buildingType, buildings, timeMap, timeType, times, MenuType } from '@/utils/dataType';
import { GetAllReviewProps, RoomProps, SearchRoomsProps } from '@/utils/appType';
import { getRooms } from '@/api/api';
import List from './components/List';

interface SearchProps {
    reviews: (args: GetAllReviewProps) => void;
    setMenuState: (args: MenuType) => void;
}

const Search: React.FC<SearchProps> = ({ reviews, setMenuState }) => {
    const [building, setBuilding] = useState('1');
    const [time, setTime] = useState(1 as timeType);
    const [result, setResult] = useState([] as RoomProps[]);

    const handleClick = async () => {
        const temp: SearchRoomsProps = {
            building: building,
            time: time.toString()
        };
        const tempList = await getRooms(temp);
        if (tempList) {
            setResult(tempList);
        }
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
            <List result={result} reviews={reviews} setMenuState={setMenuState} />
        </div>
    );
};

export default Search;