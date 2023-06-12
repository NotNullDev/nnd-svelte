import { SendEmail } from '@cloudflare/workers-types';
import { EmailMessage } from 'cloudflare:email';
import { Router, createCors, error, json, type RouterType } from 'itty-router';
import { createMimeMessage } from 'mimetext';

const { preflight, corsify } = createCors({
	origins: ['*']
});

export type EnvType = {
	router?: RouterType;
	SEB: SendEmail;
	targetEmail: string;
	apiKey: string;
};

export default {
	async fetch(request: Request, env: EnvType) {
		if (!env.router) {
			env.router = createRouter(env);
		}

		return env.router.handle(request).then(json).catch(error).then(corsify);
	}
};

function createRouter(env: EnvType): RouterType {
	const router = Router();

	router.all('*', preflight);

	router.get('/hello', () => {
		return 'hi';
	});

	router.get('/email', async (req) => {
		return new Response('Hello Send Email World!');
	});

	router.post('message', async (req) => {
		const body = (await req.json()) as any;

		const email = body.email;
		const name = body.name;
		const message = body.message;
		const apiKey = body.apiKey;

		if (apiKey !== env.apiKey) {
			return error(404, 'invalid apiKey');
		}

		await sendMessage(env, email, name, message);

		return Response.json(body);
	});

	return router;
}

async function sendMessage(env: EnvType, email: string, name: string, messageFromUser: string) {
	const msg = createMimeMessage();

	const senderAddr = 'noreply@notnulldev.com';
	const targetAddr = env.targetEmail;

	msg.setSender({ name: 'noreply', addr: senderAddr });
	msg.setRecipient(targetAddr);
	msg.setSubject('New message from notnulldev visitor');
	msg.addMessage({
		contentType: 'text/plain',
		data: `${name} (${email}) wants to talk with you!
Message content:
	${messageFromUser}
`
	});

	const message = new EmailMessage(senderAddr, targetAddr, msg.asRaw());

	try {
		await env.SEB.send(message);
	} catch (e: any) {
		return new Response(e.message);
	}
}
