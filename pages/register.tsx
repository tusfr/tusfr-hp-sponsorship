import { useState } from 'react';
import type { NextPage } from 'next';
import { useLoginStatus } from '../hooks/useLoginStatus';
import Slider from 'react-input-slider';
import styles from '../styles/pages/Register.module.scss';
import { registOneTime, registSubscription } from '../api/stripeApi';
import { subscriptions } from '../utils/stripe';
import { NextSeo } from 'next-seo';
import { SweetModal } from '../components/SweetAlert';
import { RadioButton } from '../components/RadioButton';
import Link from 'next/link';

const Register: NextPage = () => {
	const isLogin = useLoginStatus();
	const [donationPriceIndex, setDonationPriceIndex] = useState(0);
	const [donationPrice, setDonationPrice] = useState(0);
	const donationPrices = [500, 1000, 1500, 2000, 3000, 5000, 7000, 10000];
	const [subscriptionID, setSubscriptionID] = useState(subscriptions[0].planId);
	const [alert, setAlert] = useState('');

	const confirmRegistOneTime = async () => {
		await SweetModal.fire({
			title: '金額の設定について',
			text: '本サービスは500円以上から受け付けております。500円以上に設定し直してください',
			showCancelButton: false,
			confirmButtonText: 'はい'
		});
	};


	const changeDonation = (e: any) => {
		if (e >= 0) {
			setAlert('');
			setDonationPrice(e);
		} else if (e < 0) {
			setAlert('上記に自然数を入力してください');
		}
	};

	return (
		<>
			<NextSeo title="寄付・サブスク登録" />
			<h1 className="title pagetitle">機械工学研究会への寄付</h1>
			<div className="card">
				<h1 className={`title ${styles.title}`}>1回きりの決済による寄付</h1>
				<p>
					1回の決済による単発の寄付です。 <br />
					下記の入力するスペースで金額を設定し、「寄付する」ボタンを押すと、決済ページへ移動します。
				</p>
				<p className={`has-text-centered has-text-primary ${styles.price}`}>¥{donationPrice > 0 ? donationPrice : 0}</p>
				<div style={{ textAlign: "center" }}>
					<input
						type="number"
						value={donationPrice}
						onChange={(e) => {
							changeDonation(e.target.value);
						}}
					/>
				</div>

				<p className={styles.priceNotification}>
					※手数料を差し引くとTwin:teには{(donationPrice * 0.964).toFixed()}円寄付されます。
				</p>
				<div>
					<p style={{ color: 'red' }}>{alert}</p>
				</div>
				<button
					className={`button is-fullwidth is-primary ${styles.buttons}`}
					onClick={() => {
						donationPrice >= 500 ? registOneTime(donationPrice) : confirmRegistOneTime();
					}}
				>
					寄付する
				</button>
			</div>
		</>
	);
};

export default Register;
