import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import { IData } from '../../IData'
import styles from './PersonalInfo.module.scss'

interface PersonalInfoProps {
	data: IData
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data }) => {
	return (
		<div className={styles.personalInfo}>
			<h2>Personal information</h2>
			<PurpleLine />

			{data ? (
				data.contactInformation.map((el, index) => (
					<div className={styles.data} key={index}>
						<span dangerouslySetInnerHTML={{ __html: el.icon }} />
						<span className={styles.personalInfoData}>
							{el.source}:{' '}
							<a href={el.data} target='_blank'>
								{el.value}
							</a>
						</span>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { PersonalInfo }
