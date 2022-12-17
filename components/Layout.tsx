import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import { useLoginStatus } from '../hooks/useLoginStatus';
import LoginModalContent from './LoginModalContent';
import { SweetModal } from './SweetAlert';
import { useRouter } from 'next/router';
import { getLogoutUrl } from '../utils/getAuthUrl';
import Image from 'next/image';
import styles from '../styles/components/Layout.module.scss';

export const Layout: React.FC = ({ children }) => {
	const isLogin = useLoginStatus();
	const router = useRouter();

	const handleLogout = async () => {
		const result = await SweetModal.fire({
			title: 'ログアウトしますか？',
			text: 'すべてのTwin:teサービスからログアウトします',
			showCancelButton: true,
			confirmButtonText: 'はい',
			cancelButtonText: 'いいえ'
		});
		if (result.isConfirmed) {
			router.push(getLogoutUrl());
		}
	};

	const handleLogin = async () => {
		await SweetModal.fire({
			title: 'どのアカウントでログインしますか?',
			html: LoginModalContent,
			showConfirmButton: false,
			showCancelButton: true,
			cancelButtonText: '閉じる'
		});
	};

	return (
		<>
			<div className="columns is-gapless">
				<div className="column is-hidden-tablet">
					<MobileHeader isLogin={isLogin} handleLogin={handleLogin} handleLogout={handleLogout} />
				</div>
				<div className="column is-narrow is-hidden-mobile">
					<Sidebar />
				</div>
				<div className="column">
					<section className={`section ${styles.section}`}>

						<main>{children}</main>
					</section>
				</div>
			</div>
		</>
	);
};

export default Layout;
