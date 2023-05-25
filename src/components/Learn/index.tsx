import main from '@/styles/main.module.css'
import styles from './styles/style.module.css'
import { useStore } from 'reto';
import { Store } from '@/store/store';
import { useEffect, useState } from 'react';
import { GetRecordProps, RecordProps } from '@/utils/appType';
import { getRecords } from '@/api/api';
import ListItem from './components/ListItem';

interface LearnProps {
    records: RecordProps[]
}

const Learn: React.FC<LearnProps> = ({ records }) => {
    return (
        <div className={main.contentCard}>
            <div className={main.contentCardTitle}>
                <div className={styles.title}>My learning Record</div>
            </div>
            <div className={styles.divide} />
            <ul>
                {records.map(e => {
                    console.log(e);
                    return (
                        <li key={e.room + e.building}>
                            <ListItem recordInfo={e} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Learn;