import styles from './styles/style.module.css'
import { ReviewProps } from "@/utils/appType"

interface ListItemProps {
    reviewInfo: ReviewProps
}

const ListItem: React.FC<ListItemProps> = ({ reviewInfo }) => {
    return (
        <>
            <div className={styles.listbox}>
                <div>{reviewInfo.name}</div>
                <div>{reviewInfo.comment}</div>
            </div>
            <div className={styles.divide} />
        </>
    );
};

export default ListItem;