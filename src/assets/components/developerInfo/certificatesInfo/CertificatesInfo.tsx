import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import { IData } from '../../IData'
import styles from './CertificatesInfo.module.scss'

interface CertificatesInfoProps {
	data: IData
}

const CertificatesInfo: React.FC<CertificatesInfoProps> = ({ data }) => {
	return (
		<div className={styles.certificatesInfo}>
			<h2>Certificates</h2>
			<PurpleLine />

			{data ? (
				data.certificatesUrl.map((el, index) => (
					<div className={styles.data} key={index}>
						<a href={el} className={styles.certificatesInfoData}>
							{el}
						</a>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { CertificatesInfo }
