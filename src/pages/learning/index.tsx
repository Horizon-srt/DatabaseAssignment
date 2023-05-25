import main from '@/styles/main.module.css'
import styles from './styles/style.module.css'
import { useState, useRef } from 'react';
import { RecordProps } from '@/utils/appType';
import { postCreateRecord } from '@/api/api';
import router, { useRouter } from 'next/router';
import { useStore } from 'reto';
import { Store } from '@/store/store';

const Learning: React.FC = () => {
    const [timerState, setTimerState] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const {userInfo} = useStore(Store);

    const router = useRouter();
    const room = router.query.room;
    const building = router.query.building;

    const [startTime, setStartTime] = useState(0);
	const [now, setNow] = useState(0);
	const refs = useRef(0);
	let sec = 0
    let time = '';
	if (startTime != null && now != null) {
		sec = now - startTime;
        time = '';
        const h = Math.floor(sec / 3600000);
        const m = Math.floor((sec - h * 3600000) / 60000);
        const s = Math.floor((sec - m * 60000) / 1000);
        time = time + (h < 10 ? '0' + h : h);
        time = time + ':';
        time = time + (m < 10 ? '0' + m : m);
        time = time + ':';
        time = time + (s < 10 ? '0' + s : s);
	}
 
	const start = () => {
		setStartTime(Date.now());
		setNow(Date.now());
		clearInterval(refs.current);
		refs.current = Number(setInterval(() => {
			setNow(Date.now());
		}, 1));
	}
 
	const stop = () => {
		clearInterval(refs.current)
	}

    const handleClick = () => {
        if (timerState) {
            stop();
            setShowDialog(true);
        } else {
            start();
            setTimerState(true);
        }
    }

    const handleConfirm = async () => {
        const temp: RecordProps = {
            room: room as string,
            building: building as string,
            userId: userInfo.userId,
            startAt: new Date().valueOf().toString(),
            period: sec,
        }
        await postCreateRecord(temp).then(res => {
            router.push('/home');
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <main className={main.main}>
            <div className={styles.contentCard}>
                <div className={styles.title}>
                    Start Learning!!!
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Start/Stop
                </button>
                <div className={styles.timer}>
                    {time}
                </div>
            </div>
            <dialog open={showDialog} style={{borderRadius:'5px'}}>
                <div className={styles.dialog}>
                    <div>You have learned for: </div>
                    <div style={{fontSize:'blob'}}>{time}</div>
                    <button className={styles.confirm} onClick={handleConfirm}>Confirm</button>
                </div>
            </dialog>
        </main>
        
    );
};

export default Learning;