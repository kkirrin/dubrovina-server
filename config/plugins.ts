module.exports = ({ env }) => ({
	email: {
		config: {
			provider: 'nodemailer',
			providerOptions: {
				host: env('SMTP_HOST', 'smtp.gmail.com'),
				port: env('SMTP_PORT', 465),
				auth: {
					user: env('SMTP_USERNAME'),
					pass: env('SMTP_PASSWORD'),
				}
			},
			settings: {
				defaultFrom: 'pskkirrin99@gmail.com',
				defaultReplyTo: 'kkirrinweb@yandex.ru'
			}
		} 
	}
});
