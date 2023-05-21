import main from '@/styles/main.module.css'
import styles from './styles/style.module.css'
import { useStore } from 'reto';
import { Store } from '@/store/store';
import { useEffect, useState } from 'react';
import { GetRecordProps, RecordProps } from '@/utils/appType';
import { getRecords } from '@/api/api';
import ListItem from './components/ListItem';

const Learn: React.FC = () => {
    const {userInfo} = useStore(Store);
    const [records, setRecords] = useState([] as RecordProps[]);

    useEffect(() => {
        const getList = async () => {
            const temp: GetRecordProps = {
                userId: userInfo.userId
            };
            await getRecords(temp).then(res => {
                setRecords(res);
            }).catch(err => {
                console.log(err);
            });
        };
        getList();
    });

    return (
        <div className={main.contentCard}>
            <div className={main.contentCardTitle}>
                <div className={styles.title}>我的自习记录</div>
            </div>
            <div className={styles.divide} />
            <table>
                {records.map(e => {
                    return (
                        <tr key={e.room + e.building}>
                            <ListItem recordInfo={e} />
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Learn;