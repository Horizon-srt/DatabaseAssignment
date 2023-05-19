import styles from './styles/style.module.css'
import Image from 'next/image';
import Avator from '@/componments/images/Avator.jpg'
import { UserInfoProps } from '@/utils/appType';

interface UserCardProps {
    userInfo: UserInfoProps;
}

const UserCard: React.FC<UserCardProps> = ({ userInfo }) => {
    return (
        <div className={styles.card}>
            <Image src={Avator} alt={"Avator of the auther"} className={styles.avator} />
            <div className={styles.informationCard}>
                <div>姓名：{userInfo.name}</div>
                <div>学号/工号：{userInfo.userId}</div>
            </div>
        </div>
    );
};

export default UserCard;