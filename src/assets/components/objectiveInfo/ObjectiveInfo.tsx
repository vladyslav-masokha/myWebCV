import { PurpleLine } from '../../ui/PurpleLine/PurpleLine'
import { IData } from '../IData'
import styles from './ObjectiveInfo.module.scss'

interface ObjectiveInfoProps {
	data: IData
}

const ObjectiveInfo: React.FC<ObjectiveInfoProps> = ({ data }) => {
	return (
		<div className={styles.objectiveInfo}>
			<h2>Objective</h2>
			<PurpleLine />

			{data ? (
				<p className={styles.objectiveInfoData}>{data.summary}</p>
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { ObjectiveInfo }
