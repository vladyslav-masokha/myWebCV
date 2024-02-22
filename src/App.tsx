import { useEffect, useState } from 'react'
import { IData } from './assets/components/IData'
import { PersonalInfo } from './assets/components/personInfo/PersonalInfo'
import { UserNamePosition } from './assets/components/userNamePosition/UserNamePosition'
import styles from './assets/styles/global.module.scss'
import { ObjectiveInfo } from './assets/components/objectiveInfo/ObjectiveInfo'
import { EducationInfo } from './assets/components/educationInfo/EducationInfo'
import { SkillsInfo } from './assets/components/skillsInfo/SkillsInfo'

const App = () => {
	const [developerInfo, setDeveloperInfo] = useState<IData>({
		fullName: '',
		position: '',
		contactInformation: [],
		summary: '',
		education: [],
		skills: [],
		softSkills: [],
		projectsDescription: '',
		projects: [],
		courses: [],
		certificatesUrl: [],
		additionalInfo: [],
	})

	const dataURL = './data.module.json'

	useEffect(() => {
		fetch(dataURL)
			.then(res => res.json())
			.then(data => setDeveloperInfo(data))
			.catch(err => console.warn(err))
	})

	return (
		<div className={styles.cv}>
			<div className={styles.wrapper}>
				<UserNamePosition data={developerInfo} />
				<hr />

				<div className={styles.cvBody}>
					<div className={styles.part1}>
						<PersonalInfo data={developerInfo} />
						<ObjectiveInfo data={developerInfo} />
            <EducationInfo data={developerInfo} />
            <SkillsInfo data={developerInfo} />
					</div>
				</div>
			</div>
		</div>
	)
}

export { App }
