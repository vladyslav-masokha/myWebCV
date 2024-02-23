import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import { IData } from '../../IData'
import styles from './CoursesInfo.module.scss'

interface CoursesInfoProps {
	data: IData
}

const CoursesInfo: React.FC<CoursesInfoProps> = ({ data }) => {
	return (
		<div className={styles.coursesInfo}>
			<h2>Courses</h2>
			<PurpleLine />

			{data ? (
				data.courses.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.coursesInfoData}>
							{el.year}, {el.data}
						</span>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export default CoursesInfo
