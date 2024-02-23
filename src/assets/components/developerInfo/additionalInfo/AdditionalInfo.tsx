import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import { IData } from '../../IData'
import styles from './AdditionalInfo.module.scss'

interface AdditionalInfoProps {
	data: IData
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ data }) => {
	return (
		<div className={styles.additionalInfo}>
			<h2>Additional information</h2>
			<PurpleLine />

			{data.additionalInfo ? (
				data.additionalInfo.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.additionalInfoData}>{el}</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	)
}

export { AdditionalInfo }
