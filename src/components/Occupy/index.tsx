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
                <div className={styles.title}>My occupy record</div>
            </div>
            <div className={styles.divide} />
            <ul>
                {occupies.map(e => {
                    return (
                        <li key={e.room + e.building}>
                            <ListItem occupyInfo={e} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Occupy;