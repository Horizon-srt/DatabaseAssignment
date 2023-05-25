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
        let date = new Date(sec);
        time = time + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
        time = time + ':';
        time = time + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        time = time + ':';
        time = time + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
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
                <div className={styles.button} onClick={handleClick}>
                    Start/Stop
                </div>
                <div className={styles.timer}>
                    {time}
                </div>
            </div>
            {/* TODO: 对话框 */}
            <div hidden={!showDialog}>
                <dialog className={styles.dialog}>
                    You have learned for: {time}
                    <button className={styles.confirm} onClick={handleConfirm}>Confirm</button>
                </dialog>
            </div>
            
        </main>
        
    );
};

export default Learning;