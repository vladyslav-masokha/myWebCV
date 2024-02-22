import styles from '../../styles/global.module.scss'
import { IData } from '../IData'

interface UserNamePositionProps {
	data: IData
}

const UserNamePosition: React.FC<UserNamePositionProps> = ({ data }) => {
	return (
		<div className={styles.userNamePosition}>
			{data ? (
				<>
					<h1 className='userName'>{data.fullName}</h1>
					<h3 className='userPosition'>{data.position}</h3>
				</>
			) : (
				<h1 className='userName'>Data is not defined!</h1>
			)}
		</div>
	)
}

export { UserNamePosition }
