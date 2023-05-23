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
            <table>
                {ownReview.map(e => {
                    return (
                        <tr key={e.room + e.building}>
                            {/* <ListItem recordInfo={e} /> */}
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default OwnReview;