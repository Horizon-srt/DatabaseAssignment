import { useEffect, useState } from 'react';
import main from '../../styles/main.module.css'
import styles from './styles/style.module.css'
import { buildingMap, buildingType, buildings } from '@/utils/dataType';
import { GetRoomInfoProps, RoomInfo } from '@/utils/appType';
import { getRoomInfo, postCreateRoom } from '@/api/api';
import List from './components/List';
import { useStore } from 'reto';
import { Store } from '@/store/store';
import router from 'next/router';

const Root = () => {
    const {logout} = useStore(Store);
    const [building, setBuilding] = useState('1');
    const [roomList, setRoomList] = useState([] as RoomInfo[]);
    const [dialog, setDialog] = useState(false);
    const {rootLogin} = useStore(Store);

    const [roomp, setRoomp] = useState('');
    const [buildingp, setBuildingp] = useState('');

    const [shouldUpdate, setShouldUpdate] = useState(false);

    useEffect(() => {
        if (!rootLogin) {
            router.push('/login');
        }
    }, [rootLogin]);

    const handleClick = async () => {
        const temp: GetRoomInfoProps = {
            building: building
        }
        const list =  await getRoomInfo(temp);
        if (list) {
            setRoomList(list);
        }
    };

    const handleAdd = async () => {
        const temp = {
            room: roomp,
            building: buildingp
        }
        await postCreateRoom(temp);
        setDialog(!dialog);
        alert('Add successfully!')
        setShouldUpdate(!shouldUpdate);
    }

    useEffect(() => {
        const get = async () => {
            const list = await getRoomInfo({building});
            if (list) {
                setRoomList(list);
            }
        }
        get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldUpdate]);

    return (
        <main className={main.main}>
            <div className={main.contentCard}>
            <div className={main.contentCardTitle}>
                <div>
                    Building: 
                    <select onChange={e => setBuilding(e.target.value)}>
                        {buildings.map(e => {
                            return (
                                <option key={e} value={e}>{buildingMap[e as buildingType]}</option>
                            );
                        })}
                    </select>
                </div>
                <button type='submit' className={styles.addButton} onClick={() => setDialog(!dialog)}>Add</button>
                <button type='submit' className={styles.searchButton} onClick={handleClick}>Search</button>
                <button onClick={() => {logout()}} >{'Logout ->'}</button>
            </div>
            <div className={styles.divide} />
            <List roomList={roomList} shouldUpdate={shouldUpdate} setShouldUpdate={setShouldUpdate} />
            </div>
            <dialog open={dialog} style={{borderRadius:'10px'}}>
                <div className={styles.modal}>
                    <div style={{padding:'10px'}}>
                        <div style={{fontWeight:'bold'}}>Add room</div>
                        <div className={styles.divide} />
                    </div>
                    <div className={styles.inputbox}>
                        <div className={styles.inputitem}>
                            <div style={{width:'4rem'}}>Room: </div>
                            <input type='text' className={styles.inputt} onChange={e => setRoomp(e.target.value)} />
                        </div>
                        <div className={styles.inputitem}>
                            <div style={{width:'4rem'}}>Building: </div>
                            <input type='text' className={styles.inputt} onChange={e => setBuildingp(e.target.value)} />
                        </div>
                    </div>
                    <div className={styles.buttonbox}>
                        <button className={styles.submitadd} onClick={handleAdd}>Submit</button>
                        <button className={styles.closeadd} onClick={() => setDialog(!dialog)}>Close</button>
                    </div>
                </div>
            </dialog>
        </main>
    );
};

export default Root;