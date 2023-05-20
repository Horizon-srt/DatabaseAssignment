import { RoomProps } from '@/utils/appType';
import styles from './styles/style.module.css'
import { useRouter } from 'next/router';

interface ListItemProps {
    roomInfo: RoomProps;
    root: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ roomInfo, root }) => {
    // TODO: 信息展示，按钮样式
    const router = useRouter();
    
    return (
        <>
        <div className={styles.listbox}>
            <div className={styles.info}>
                {roomInfo.room + roomInfo.building}
            </div>
            {roomInfo.avaliable ? (
                <>{
                    root ? (
                        <button>占用</button>
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