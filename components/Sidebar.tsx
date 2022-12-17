import styles from '../styles/components/Sidebar.module.scss';
import NavLink from './NavLink';
import Image from 'next/image';
import TwinteLogo from '../public/images/twinte-sponsor-title.png';
import TusfrLogo from "./../public/images/TUS_logo.png";

const Sidebar: React.FC = () => {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.menuContent}>
				<div className={styles.logo}>
					<a href="https://tusfr-hp-sponsorship.vercel.app/">
						<Image src={TusfrLogo} alt="Tusfr_Logo" />
					</a>
				</div>
				<ul className="menu-list">
					<li>
						<NavLink href="/" activeClassName={styles.activeLink}>
							寄付のお願い
						</NavLink>
					</li>
					<li>
						<NavLink href="/register" activeClassName={styles.activeLink}>
							寄付・サブスク登録
						</NavLink>
					</li>
					<li>
						<NavLink href="/mypage" activeClassName={styles.activeLink}>
							マイページ
						</NavLink>
					</li>
				</ul>
			</div>
			<div className={`${styles.menuFooter} has-text-white`}>
				<p>
					<span className="has-text-weight-bold">WEB SITE</span>
					<br />
					<a href="http://tusformularacing.main.jp/">tusformularacing HP</a>
				</p>
				<p>
					<span className="has-text-weight-bold">Twitter</span>
					<br />
					<a href="https://twitter.com/tusfr">@tusfr</a>
				</p>
				<p>
					<span className="has-text-weight-bold">E-mail</span>
					<br />
					<a href="mailto:info@twinte.net?subject=お問い合わせ">tusfr.mail@gmail.com</a>
				</p>
			</div>
		</aside>
	);
};

export default Sidebar;
