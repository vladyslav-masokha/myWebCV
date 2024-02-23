import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import { IData } from '../../IData'
import styles from './SkillsInfo.module.scss'

interface SkillsInfoProps {
	data: IData
}

const SkillsInfo: React.FC<SkillsInfoProps> = ({ data }) => {
	return (
		<div className={styles.skillsInfo}>
			<h2>Skills</h2>

			<PurpleLine />

			{data ? (
				data.skills.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.skillsInfoData}>{el}</span>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { SkillsInfo }
