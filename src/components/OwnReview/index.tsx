import main from '@/styles/main.module.css'
import styles from './styles/style.module.css'
import { ReviewProps } from '@/utils/appType';

interface OwnReviewProps {
    ownReview: ReviewProps[]
}

const OwnReview: React.FC<OwnReviewProps> = ({ ownReview }) => {
    return (
        <div className={main.contentCard}>
            <div className={main.contentCardTitle}>
                <div className={styles.title}>我的评论记录</div>
            </div>
            <div className={styles.divide} />
            <ul>
                {ownReview.map(e => {
                    return (
                        <li key={e.room + e.building}>
                            {/* <ListItem recordInfo={e} /> */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default OwnReview;