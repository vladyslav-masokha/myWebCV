import styles from './Copyright.module.scss'

const Copyright = () => {
	return (
		<div className={styles.copyright}>
			<div className={styles.wrapper}>
				<div className={styles.copyrightBody}>
					<span>&copy;2024,</span>
					<span>Vladyslav Masokha</span>
				</div>
			</div>
		</div>
	)
}

export { Copyright }
