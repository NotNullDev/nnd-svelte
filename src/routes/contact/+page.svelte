<script lang="ts">
	import { PUBLIC_MESSAGE_API_KEY, PUBLIC_MESSAGE_ENDPOINT_URL } from '$env/static/public';
	import EmailIcon from '$lib/icons/email.svg';
	import LinkedInIcon from '$lib/icons/linkedin.svg';
	import { toastStore } from '@skeletonlabs/skeleton';

	let email: string = '';
	let name: string = '';
	let message: string = '';

	const sendMessage = async () => {
		if (!email || email.trim().length === 0) {
			toastStore.trigger({
				message: 'Email is required field!',
				background: 'variant-filled-error'
			});
			return;
		}
		if (!name || name.trim().length === 0) {
			toastStore.trigger({
				message: 'Name is required field!',
				background: 'variant-filled-error'
			});
			return;
		}
		if (!message || message.trim().length === 0) {
			toastStore.trigger({
				message: 'Message is required field!',
				background: 'variant-filled-error'
			});
			return;
		}

		toastStore.trigger({
			message: 'Sending message...',
			autohide: false
		});

		try {
			await fetch(PUBLIC_MESSAGE_ENDPOINT_URL, {
				method: 'POST',
				headers: [['Content-Type', 'application/json']],
				body: JSON.stringify({
					email,
					name,
					message,
					apiKey: PUBLIC_MESSAGE_API_KEY
				})
			});
			toastStore.trigger({
				message: `Form submitted. I'll respond soon!`,
				background: 'variant-filled-success',
				autohide: false
			});
			email = '';
			name = '';
			message = '';
		} catch (e) {
			toastStore.trigger({
				message: 'Something went wrong :(',
				background: 'variant-filled-error',
				autohide: false
			});
		}

		setTimeout(() => {
			toastStore.clear();
		}, 5000);
	};
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

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
		<form class="lg:p-8 flex flex-col gap-2 lg:card" on:submit|preventDefault={sendMessage}>
			<label class="label">
				<span>Email</span>
				<input
					class="input"
					required
					minlength="1"
					maxlength="40"
					bind:value={email}
					type="email"
					placeholder="your@email.com"
				/>
			</label>
			<label class="label">
				<span>Name</span>
				<input
					required
					minlength="1"
					maxlength="2000"
					class="input"
					bind:value={name}
					type="text"
					placeholder="John Doe"
				/>
			</label>
			<label class="label">
				<span>Your message</span>
				<textarea
					class="textarea"
					required
					minlength="1"
					maxlength="2000"
					bind:value={message}
					placeholder="I really like your work!"
				/>
			</label>
			<button type="submit" class="btn variant-filled">Send message</button>
		</form>
	</div>
</div>
