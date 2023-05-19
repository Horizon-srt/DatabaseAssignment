import { useStore } from 'reto'
import styles from '../styles/main.module.css'
import { Store } from '@/store/store';
import { useEffect } from 'react';
import router from 'next/router';

export default function Home() {
  const {loginState} = useStore(Store);

  useEffect(() => {
    if (!loginState) {
      router.push('/login');
    } else {
      router.push('/home');
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.main} />
    </main>
  )
}
