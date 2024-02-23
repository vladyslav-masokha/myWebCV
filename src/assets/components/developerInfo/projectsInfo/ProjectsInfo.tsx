import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import { IData } from '../../IData'
import styles from './ProjectsInfo.module.scss'

interface ProjectsInfoProps {
	data: IData
}

const ProjectsInfo: React.FC<ProjectsInfoProps> = ({ data }) => {
	return (
		<div className={styles.projectsInfo}>
			<h2>Projects</h2>
			<PurpleLine />

			{data ? (
				<p className={styles.projectInfoDescription}>
					{data.projectsDescription}
				</p>
			) : null}

			{data ? (
				data.projects.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.projectsInfoData}>
							<a href={el.projectSrc} target='_blank'>
								{el.projectName}{' '}
							</a>
							{el.projectDescription}
						</span>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export default ProjectsInfo
