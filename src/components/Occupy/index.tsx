import { useEffect, useState } from 'react';
import styles from './styles/style.module.css'
import main from '@/styles/main.module.css'
import { GetUsageProps, UsageProps } from '@/utils/appType';
import { useStore } from 'reto';
import { Store } from '@/store/store';
import { getUsages } from '@/api/api';
import ListItem from './components/ListItem';

interface OccupyProps {
    occupies: UsageProps[]
}

const Occupy: React.FC<OccupyProps> = ({ occupies }) => {
    return (
        <div className={main.contentCard}>
            <div className={main.contentCardTitle}>
                <div className={styles.title}>我的占用记录</div>
            </div>
            <div className={styles.divide} />
            <table>
                {occupies.map(e => {
                    return (
                        <tr key={e.room + e.building}>
                            <ListItem occupyInfo={e} />
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Occupy;