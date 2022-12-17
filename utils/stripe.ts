export const stripePublicKey = 'pk_test_51Lt5gUDX3liIiufMjJzEy2CvJ7B9mGyOM5yW4jd8J9LZxBrByovJerjHz4Phe9tHB8fqupvtwv5AjLJ6UMRKCFcH00JAKutYD4';

const stripeSubscription200yenID = 'plan_H9D4eZ0Vohpqpy';
const stripeSubscription500yenID = 'plan_H9D4AJchCmsejL';
const stripeSubscription1000yenID = 'plan_H9D48FqtiALjlL';
export const subscriptions = [
	{ planId: stripeSubscription200yenID, amount: '200' },
	{ planId: stripeSubscription500yenID, amount: '500' },
	{ planId: stripeSubscription1000yenID, amount: '1000' }
];
