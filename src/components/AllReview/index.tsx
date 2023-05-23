import main from '@/styles/main.module.css'
import styles from './styles/style.module.css'
import { GetAllReviewProps, ReviewProps } from '@/utils/appType';
import { buildingMap, buildingType } from '@/utils/dataType';

interface AllReviewProps {
    allReview: ReviewProps[];
    reviews: GetAllReviewProps;
}

const AllReview: React.FC<AllReviewProps> = ({ allReview, reviews }) => {
    return (
        <div className={main.contentCard}>
            <div className={main.contentCardTitle}>
                <div className={styles.title}>{`关于 ${reviews.room}·${buildingMap[reviews.building as unknown as buildingType]} 的评论`}</div>
            </div>
            <div className={styles.divide} />
            <table>
                {allReview.map(e => {
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

export default AllReview;