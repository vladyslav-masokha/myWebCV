import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import { IData } from '../../IData'
import styles from './EducationInfo.module.scss'

interface EducationInfoProps {
	data: IData
}

const EducationInfo: React.FC<EducationInfoProps> = ({ data }) => {
	return (
		<div className={styles.educationInfo}>
			<h2>Education</h2>

			<PurpleLine />

			{data ? (
				data.education.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.educationInfoData}>
							{el.institution}, {el.duration}
						</span>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { EducationInfo }
