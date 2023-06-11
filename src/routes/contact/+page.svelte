<script lang="ts">
	import EmailIcon from '$lib/icons/email.svg';
	import LinkedInIcon from '$lib/icons/linkedin.svg';
</script>

<div class="flex-1 flex flex-col h-full items-center">
	<div class="mt-24 flex card variant-ghost-surface p-8 gap-48">
		<div class="">
			<h2 class="text-xl flex flex-col gap-4 items-center">Contact information</h2>
			<a href="mailto: business@notnulldev.com" class="flex gap-4 mt-5">
				<img src={EmailIcon} alt="email" />
				<div>business@notnulldev.com</div>
			</a>
			<a href="https://www.linkedin.com/in/notnulldev" class="flex items-center gap-4 mt-5">
				<img src={LinkedInIcon} alt="email" />
				<div>linkedin.com/in/notnulldev</div>
			</a>
		</div>
		<div class="p-8 flex flex-col gap-2 card">
			<label class="label">
				<span>Email</span>
				<input class="input" type="email" placeholder="your@email.com" />
			</label>
			<label class="label">
				<span>Name</span>
				<input class="input" type="text" placeholder="John Doe" />
			</label>
			<label class="label">
				<span>Your message</span>
				<textarea class="textarea" placeholder="I really like your work!" />
			</label>
			<button class="btn variant-filled">Send message</button>
		</div>
	</div>
</div>
