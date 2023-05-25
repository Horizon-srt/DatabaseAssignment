import main from '@/styles/main.module.css'
import styles from './styles/style.module.css'
import { ReviewProps } from '@/utils/appType';
import ListItem from './components/ListItem';

interface OwnReviewProps {
    ownReview: ReviewProps[]
}

const OwnReview: React.FC<OwnReviewProps> = ({ ownReview }) => {
    return (
        <div className={main.contentCard}>
            <div className={main.contentCardTitle}>
                <div className={styles.title}>My comment record</div>
            </div>
            <div className={styles.divide} />
            <ul>
                {ownReview.map(e => {
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

export default OwnReview;