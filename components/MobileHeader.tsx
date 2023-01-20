import styles from '../styles/components/MobileHeader.module.scss';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Router from 'next/router';
import Image from 'next/image';
import TusfrLogo from "./../public/images/TUS_logo.png";

type Props = {
	isLogin: undefined | boolean;
	handleLogin: () => void;
	handleLogout: () => void;
};

const MobileHeader: React.FC<Props> = ({ isLogin, handleLogin, handleLogout }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const toggleDrawer = (state: boolean) => {
		setIsDrawerOpen(() => state);
	};

	// 画面遷移したときに，ドロワーを閉じる
	useEffect(() => {
		Router.events.on('routeChangeStart', () => {
			toggleDrawer(false);
		});
		return () => {
			Router.events.off('routeChangeStart', () => {
				toggleDrawer(false);
			});
		};
	}, []);

	return (
		<header>
			<div className={styles.navbar}>
				<button onClick={() => toggleDrawer(true)} className={`navbar-burger ${styles.navbarBurger}`}>
					<div aria-hidden="true" />
					<div aria-hidden="true" />
					<div aria-hidden="true" />
				</button>
				<Link href="/" passHref>
					<Image
						src={TusfrLogo}
						alt="Tusfr_Logo"
						className={styles.logo}
						width={100}
						height={40}
						objectFit="contain"
					/>
				</Link>
				<p style={{ fontSize: 32, color: 'white', fontWeight: 500 }}>TUS FR</p>

			</div>

			<Drawer open={isDrawerOpen} onClose={() => toggleDrawer(false)} direction="left" size={200}>
				<Sidebar />
			</Drawer>
		</header>
	);
};

export default MobileHeader;
