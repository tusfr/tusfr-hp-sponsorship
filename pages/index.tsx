import type { NextPage } from 'next';
import styles from '../styles/pages/Home.module.scss';
import TwinteCost from '../public/images/twinte-cost.jpg';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<>
			<NextSeo />

			<div className={styles.content}>
				<h1 className="title pagetitle">寄付のお願い</h1>

				<p>
					いつも機械工学研究会の応援をしていただきありがとうございます。
					機械工学研究会はおかげさまで2022年も活動ができており、次の大会の準備も着々と進んでおります。
				</p>
				<p>
					今日まで機械工学研究会は不便なく活動を行うことができていましたが、私たちが使用していた溶接機が故障のため、どうしても資金が必要です。
				</p>



				<p>
					そのような経緯があり、またありがたいことに「
					<span className="has-text-weight-bold">機械工学研究会に寄付をしたい</span>」との声をいただいておりますので、
					このような場を設けさせていただきました。
				</p>



				<p>
					機械工学研究会を存続させるためには皆さまのご協力が必要です。
					1回きりではなくサブスクリプションとして登録・寄付していただけると、今後長期的に活動が可能になります。
				</p>
				<h2 className="title">寄付金の利用とお礼について</h2>
				<p>
					寄付金は機械工学研究会の維持費・溶接機に用いられます。
					特に運営には欠かせないサーバーの費用やアプリ公開にかかる費用などの維持費に使われます。
					また、その他今後の機械工学研究会の運営に必要な資金に当てさせていただきます。
				</p>
				<p>
					希望する場合、寄付していただいた方のお名前とリンク（マイページで登録できます）を寄付者一覧のページに記載いたします。
					<br />
					寄付後、ご希望の方は<span className='has-text-weight-bold'>tusfr.mail@gmail.com</span>宛にマイページに表示されるIDと合計寄付金額・ご希望の品をご記入の上ご連絡ください。
				</p>
				<h2 className="title">安全性について</h2>
				<p>
					機械工学研究会の寄付に関しましては決済処理の全てを<a href="https://stripe.com/jp">Stripe</a>に委託しております。
					<br />
					そのため、Twin:teが寄付された方々のクレジットカード情報等を取得・保存することは一切ありません。
					<br />
					Twin:teが取得できる情報はStripeから提供された情報（メールアドレス・寄付金額など）です。

				</p>
				<div className="has-text-centered">
					<button className={`button is-primary ${styles.button}`}>
						<Link href="/register">寄付ページへ</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
