import { IData } from '../IData'
import styles from './UserNamePosition.module.scss'

interface UserNamePositionProps {
	data: IData
}

const UserNamePosition: React.FC<UserNamePositionProps> = ({ data }) => {
	return (
		<div className={styles.userNamePosition}>
			{data ? (
				<>
					<h1 className={styles.userName}>{data.fullName}</h1>
					<h3 className={styles.userPosition}>{data.position}</h3>
				</>
			) : (
				<h1 className='userName'>Loading..</h1>
			)}
		</div>
	)
}

export { UserNamePosition }
