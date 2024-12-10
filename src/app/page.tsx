import Image from 'next/image';
import styles from './page.module.sass';
import { Card } from '@/components/Card';

export default function Home() {
	return (
		<main className={styles.main_block}>
			<Card />
		</main>
	);
}
