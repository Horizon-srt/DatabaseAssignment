import main from '@/styles/main.module.css'
import styles from './styles/style.module.css'
import { GetAllReviewProps, ReviewProps } from '@/utils/appType';
import { buildingMap, buildingType } from '@/utils/dataType';
import { useEffect, useState } from 'react';
import { useStore } from 'reto';
import { Store } from '@/store/store';
import { postReview } from '@/api/api';
import ListItem from './components/ListItem';

interface AllReviewProps {
    allReview: ReviewProps[];
    reviews: GetAllReviewProps;
    setShouldUpdate: (args: boolean) => void
}

const AllReview: React.FC<AllReviewProps> = ({ allReview, reviews, setShouldUpdate }) => {
    const [message, setMessage] = useState('');
    const {userInfo} = useStore(Store);

    const handleSubmit = async () => {
        const temp = {
            userId: userInfo.userId,
            room: reviews.room,
            building: reviews.building,
            comment: message,
            rate: 1
        }
        await postReview(temp);
        setMessage('');
        alert('Sent Successfully!')
        setShouldUpdate(true);
    }

    return (
        <div className={main.contentCard}>
            <div className={main.contentCardTitle}>
                <div className={styles.title}>{`Comment about ${reviews.room} in ${buildingMap[reviews.building as unknown as buildingType]}`}</div>
            </div>
            <div className={styles.divide} />
            <div className={styles.commentbox} >
                <textarea className={styles.input} value={message} onChange={e => {
                    setMessage(e.target.value)
                }} />
                <button className={styles.button} onClick={handleSubmit}>Submit</button>
            </div>
            <div className={styles.divide} />
            <ul>
                {allReview.map(e => {
                    return (
                        <li key={e.room + e.building}>
                            <ListItem reviewInfo={e} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default AllReview;