import { buildingMap, buildingType } from '@/utils/dataType';
import styles from './styles/style.module.css'
import { ReviewProps } from "@/utils/appType"

interface ListItemProps {
    reviewInfo: ReviewProps
}

const ListItem: React.FC<ListItemProps> = ({ reviewInfo }) => {
    return (
        <>
            <div className={styles.listbox}>
                <div>
                    <div style={{fontSize:'large'}}>{reviewInfo.room}</div>
                    <div style={{fontSize:'small',color:'grey'}}>{buildingMap[reviewInfo.building as unknown as buildingType]}</div>
                </div>
                <div style={{width:'100%'}}>{reviewInfo.comment}</div>
            </div>
            <div className={styles.divide} />
        </>
    );
};

export default ListItem;