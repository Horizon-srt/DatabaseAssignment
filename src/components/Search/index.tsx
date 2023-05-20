import main from '@/styles/main.module.css'
import styles from './styles/style.module.css'
import { useEffect, useState } from 'react';
import { buildingMap, buildingType, buildings, timeMap, timeType, times } from '@/utils/dataType';
import { RoomProps, SearchRoomsProps } from '@/utils/appType';
import { getRooms } from '@/api/api';
import ListItem from './components/ListItem';
import { Store } from '@/store/store';
import { useStore } from 'reto';

const Search: React.FC = () => {
    const [building, setBuilding] = useState('1');
    const [time, setTime] = useState('1');
    const [result, setResult] = useState([] as RoomProps[]);
    const {userInfo} = useStore(Store);
    
    useEffect(() => {
        const initial = async () => {
            const temp:SearchRoomsProps = {
                building: building,
                time: time
            };
            await getRooms(temp).then(res => {
                setResult(res);
            }).catch(err => {
                console.log(err);
            })
        }

        initial();
    })

    const handleClick = async () => {
        const temp:SearchRoomsProps = {
            building: building,
            time: time
        };
        await getRooms(temp).then(res => {
            setResult(res);
        }).catch(err => {
            console.log(err);
        })
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
                    <select onChange={e => setTime(e.target.value)}>
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
                {result.map((e, index) => {
                    return (
                        <tr key={e.room + e.building}>
                            <ListItem roomInfo={e} root={userInfo.root} />
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Search;