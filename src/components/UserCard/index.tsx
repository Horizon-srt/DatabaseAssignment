import styles from './styles/style.module.css'
import Image from 'next/image';
import Avator from '@/components/images/Avator.jpg'
import { UserInfoProps } from '@/utils/appType';
import { Store } from '@/store/store';
import { useStore } from 'reto';

interface UserCardProps {
    userInfo: UserInfoProps;
}

const UserCard: React.FC<UserCardProps> = ({ userInfo }) => {
    const {logout} = useStore(Store);
    
    return (
        <div className={styles.card}>
            <Image src={Avator} alt={"Avator of the auther"} className={styles.avator} />
            <div className={styles.informationCard}>
                <div>Name: {userInfo.name}</div>
                <div>Number: {userInfo.userId}</div>
                <button onClick={() => {logout()}} >{'Logout ->'}</button>
            </div>
        </div>
    );
};

export default UserCard;