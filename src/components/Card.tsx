import Image from 'next/image';
import styles from './Card.module.sass';

import dish from '../../public/assets/image.jpg';
import plus from '../../public/assets/plus.svg';
import timer from '../../public/assets/timer-pause.svg';

export function Card() {
	return (
		<div className={styles.card}>
			<div className={styles.card_image_wrapper}>
				<Image src={dish} alt="" />
				<div className={styles.card_time}>
					<Image src={timer} alt="timer" />
					<div className={styles.card_time_text}>17 min.</div>
				</div>
			</div>
			<div className={styles.card_main}>
				<div className={styles.card_info_wrapper}>
					<h3 className={styles.card_title}>Scrambled eggs with bacon, avocado, cherry tomatoes</h3>
					<div className={styles.card_details}>
						<div className={styles.card_price}>$ 50.99</div>
						<div className={styles.card_mass}>370 g.</div>
					</div>
				</div>
				<button className={styles.card_button}>
					<Image src={plus} alt="plus" />
					Choose
				</button>
			</div>
		</div>
	);
}
