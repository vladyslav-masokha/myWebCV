import { useEffect, useState } from 'react'
import { IData } from './assets/components/IData'
import { Copyright } from './assets/components/copyright/Copyright'
import { AdditionalInfo } from './assets/components/developerInfo/additionalInfo/AdditionalInfo'
import { CertificatesInfo } from './assets/components/developerInfo/certificatesInfo/CertificatesInfo'
import CoursesInfo from './assets/components/developerInfo/coursesInfo/CoursesInfo'
import { EducationInfo } from './assets/components/developerInfo/educationInfo/EducationInfo'
import { ObjectiveInfo } from './assets/components/developerInfo/objectiveInfo/ObjectiveInfo'
import { PersonalInfo } from './assets/components/developerInfo/personInfo/PersonalInfo'
import ProjectsInfo from './assets/components/developerInfo/projectsInfo/ProjectsInfo'
import { SkillsInfo } from './assets/components/developerInfo/skillsInfo/SkillsInfo'
import SoftSkillsInfo from './assets/components/developerInfo/softSkillsInfo/SoftSkillsInfo'
import { UserNamePosition } from './assets/components/developerInfo/userNamePosition/UserNamePosition'
import styles from './assets/styles/global.module.scss'

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
		<>
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
							<SoftSkillsInfo data={developerInfo} />
						</div>

						<div className={styles.part2}>
							<ProjectsInfo data={developerInfo} />
							<CoursesInfo data={developerInfo} />
							<CertificatesInfo data={developerInfo} />
							<AdditionalInfo data={developerInfo} />
						</div>
					</div>
				</div>
			</div>
			<Copyright />
		</>
	)
}

export { App }
