<script lang="ts">
	import { PUBLIC_MESSAGE_API_KEY, PUBLIC_MESSAGE_ENDPOINT_URL } from '$env/static/public';
	import EmailIcon from '$lib/icons/email.svg';
	import LinkedInIcon from '$lib/icons/linkedin.svg';

	let email: string = '';
	let name: string = '';
	let message: string = '';

	const sendMessage = () => {
		if (!email || email.trim().length === 0) return;
		if (!name || name.trim().length === 0) return;
		if (!message || message.trim().length === 0) return;

		fetch(PUBLIC_MESSAGE_ENDPOINT_URL, {
			method: 'POST',
			headers: [['Content-Type', 'application/json']],
			body: JSON.stringify({
				email,
				name,
				message,
				apiKey: PUBLIC_MESSAGE_API_KEY
			})
		});
	};
</script>

<div class="flex-1 flex flex-col h-full items-center">
	<div
		class="lg:mt-24 mt-8 m-4 flex max-lg:flex-col card variant-ghost-surface p-8 gap-8 lg:gap-48"
	>
		<div class="">
			<h2 class="text-xl flex flex-col gap-4 items-center">Contact information</h2>
			<a href="mailto: business@notnulldev.com" class="flex gap-4 mt-10">
				<img src={EmailIcon} alt="email" />
				<div>business@notnulldev.com</div>
			</a>
			<a href="https://www.linkedin.com/in/notnulldev" class="flex items-center gap-4 mt-5">
				<img src={LinkedInIcon} alt="email" />
				<div>linkedin.com/in/notnulldev</div>
			</a>
		</div>
		<div class="lg:p-8 flex flex-col gap-2 lg:card">
			<label class="label">
				<span>Email</span>
				<input class="input" bind:value={email} type="email" placeholder="your@email.com" />
			</label>
			<label class="label">
				<span>Name</span>
				<input class="input" bind:value={name} type="text" placeholder="John Doe" />
			</label>
			<label class="label">
				<span>Your message</span>
				<textarea class="textarea" bind:value={message} placeholder="I really like your work!" />
			</label>
			<button class="btn variant-filled" on:click={sendMessage}>Send message</button>
		</div>
	</div>
</div>
