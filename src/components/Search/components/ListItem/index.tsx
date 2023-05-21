import { RoomProps, UsageProps } from '@/utils/appType';
import styles from './styles/style.module.css'
import { useRouter } from 'next/router';
import { Store } from '@/store/store';
import { useStore } from 'reto';
import { timeType } from '@/utils/dataType';
import { postCreateUsage } from '@/api/api';

interface ListItemProps {
    roomInfo: RoomProps;
    root: boolean;
    time: timeType;
}

const ListItem: React.FC<ListItemProps> = ({ roomInfo, root, time }) => {
    // TODO: 信息展示，按钮样式
    const router = useRouter();
    const {userInfo} = useStore(Store);

    const handleOccupy = async () => {
        const temp: UsageProps = {
            room: roomInfo.room,
            building: roomInfo.building,
            userId: userInfo.userId,
            startAt: new Date().valueOf().toString(),
            time: time.toString(),
        }

        const occupy = async () => {
            await postCreateUsage(temp).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }

        occupy();
    };
    
    return (
        <>
        <div className={styles.listbox}>
            <div className={styles.info}>
                {roomInfo.room + roomInfo.building}
            </div>
            {roomInfo.avaliable ? (
                <>{
                    root ? (
                        <button onClick={handleOccupy}>占用</button>
                    ) : (
                        <button onClick={() => {
                            router.push({
                                pathname: 'learning',
                                query: {
                                    room: roomInfo.room,
                                    building: roomInfo.building
                                }
                            })
                        }}>
                            学习
                        </button>
                    )
                }</>
            ) : (
                <button>不可用</button>
            )}
        </div>
        <div className={styles.divide} />
        </>
        
    );
};

export default ListItem;