import { GetAllReviewProps, RoomProps, UsageProps } from '@/utils/appType';
import styles from './styles/style.module.css'
import { useRouter } from 'next/router';
import { Store } from '@/store/store';
import { useStore } from 'reto';
import { MenuType, timeType } from '@/utils/dataType';
import { postCreateUsage } from '@/api/api';
import RoomInfo from '../RoomInfo';

interface ListItemProps {
    roomInfo: RoomProps;
    root: boolean;
    time: timeType;
    reviews: (args: GetAllReviewProps) => void;
    setMenuState: (args: MenuType) => void;
    shouldUpdate: boolean;
    setShouldUpdate: (args: boolean) => void;
}

const ListItem: React.FC<ListItemProps> = ({ roomInfo, root, time, reviews, setMenuState, shouldUpdate, setShouldUpdate }) => {
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
            }).catch(err => {
                console.log(err);
            })
        }
        occupy();
        setShouldUpdate(!shouldUpdate);
    };
    
    return (
        <>
        <div className={styles.listbox}>
            <div className={styles.info}>
                <RoomInfo roomInfo={roomInfo} ></RoomInfo>
            </div>
            <button onClick={() => {
                reviews({
                    room: roomInfo.room,
                    building: roomInfo.building
                });
                setMenuState('allReview');
            }}>
                Comment
            </button>
            {roomInfo.avaliable ? (
                <>{
                    root ? (
                        <button className = {styles.studyButton} onClick={handleOccupy}>Occupy</button>
                    ) : (
                        <button className = {styles.studyButton} onClick={() => {
                            router.push({
                                pathname: 'learning',
                                query: {
                                    room: roomInfo.room,
                                    building: roomInfo.building
                                }
                            })
                        }}>
                            Learn
                        </button>
                    )
                }</>
            ) : (
                <button className = {styles.useButton}>Unavailable</button>
            )}
        </div>
        <div className={styles.divide} />
        </>
        
    );
};

export default ListItem;