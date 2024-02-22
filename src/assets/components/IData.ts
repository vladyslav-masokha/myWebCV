interface IData {
	fullName: string
	position: string
	contactInformation: {
		icon: string
		source: string
		value: string
		data?: string
	}[]
	summary: string
	education: {
		institution: string
		duration: string
	}[]
	skills: string[]
	softSkills: string[]
	projectsDescription: string
	projects: {
		projectName: string
		projectDescription: string
		projectSrc: string
	}[]
	courses: {
		year: string
		data: string
	}[]
	certificatesUrl: string[]
	additionalInfo: string[]
}

export type { IData }
