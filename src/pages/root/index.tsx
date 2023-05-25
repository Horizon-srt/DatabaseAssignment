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
        alert('添加成功！')
    }

    return (
        <main className={main.main}>
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
                <button type='submit' className={styles.addButton} onClick={() => setDialog(!dialog)}>添加</button>
                <button type='submit' className={styles.searchButton} onClick={handleClick}>查询</button>
                <button onClick={() => {logout()}} >{'Logout ->'}</button>
            </div>
            <div className={styles.divide} />
            <List roomList={roomList} />
            </div>
            <dialog open={dialog} style={{borderRadius:'10px'}}>
                <div className={styles.modal}>
                    <div style={{padding:'10px'}}>
                        <div style={{fontWeight:'bold'}}>添加房间</div>
                        <div className={styles.divide} />
                    </div>
                    <div className={styles.inputbox}>
                        <div className={styles.inputitem}>
                            <div style={{width:'4rem'}}>房间号：</div>
                            <input type='text' className={styles.inputt} onChange={e => setRoomp(e.target.value)} />
                        </div>
                        <div className={styles.inputitem}>
                            <div style={{width:'4rem'}}>楼号：</div>
                            <input type='text' className={styles.inputt} onChange={e => setBuildingp(e.target.value)} />
                        </div>
                    </div>
                    <div className={styles.buttonbox}>
                        <button className={styles.submitadd} onClick={handleAdd}>提交</button>
                        <button className={styles.closeadd} onClick={() => setDialog(!dialog)}>关闭</button>
                    </div>
                </div>
            </dialog>
        </main>
    );
};

export default Root;