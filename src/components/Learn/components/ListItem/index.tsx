import styles from './styles/style.module.css'
import { RecordProps } from "@/utils/appType"

interface ListItemProps {
    recordInfo: RecordProps
}

const ListItem: React.FC<ListItemProps> = ({ recordInfo }) => {
    const h = Number(recordInfo.period) / 3600000;
    const m = (Number(recordInfo.period) - h * 3600) / 60000;
    const s = (Number(recordInfo.period) - m * 60) / 1000;
    return (
        <>
            <div className={styles.listbox}>
                <div style={{width:'5rem'}}>
                    <div style={{fontSize:'large'}}>{recordInfo.room}</div>
                    <div style={{fontSize:'small',color:'grey'}}>{recordInfo.building}</div>
                </div>
                <div>{`${Math.floor(h)}小时${Math.floor(m)}分钟${Math.floor(s)}秒`}</div>
            </div>
            <div className={styles.divide} />
        </>
    );
};

export default ListItem;