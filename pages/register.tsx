import { useState } from 'react';
import type { NextPage } from 'next';
import { useLoginStatus } from '../hooks/useLoginStatus';

import styles from '../styles/pages/Register.module.scss';
import { registOneTime } from '../api/stripeApi';
import { subscriptions } from '../utils/stripe';
import { NextSeo } from 'next-seo';
import { SweetModal } from '../components/SweetAlert';


const Register: NextPage = () => {

	const [donationPrice, setDonationPrice] = useState(0);
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
					「寄付する」ボタンを押すと、決済ページへ移動します。
				</p>

				<button
					className={`button is-fullwidth is-primary ${styles.buttons}`}

				>
					<a href="https://buy.stripe.com/test_8wMdRV9rlaOY0RW6oo" style={{ color: "white" }}>寄付する</a>
				</button>
			</div>
		</>
	);
};

export default Register;
