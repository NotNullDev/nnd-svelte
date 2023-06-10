import { error } from '@sveltejs/kit';

export const load = async (data) => {
	let pageData: any = undefined;
	try {
		const importUrl = `../../../../content/${data.params.slug}.md`;
		pageData = await import(/* @vite-ignore */ importUrl);
	} catch (e) {
		console.log(e);
	}

	if (!pageData) {
		throw error(404, 'post not found');
	}

	const metadata = pageData.metadata;
	const component = pageData.default;

	console.log(metadata);
	console.log(component);

	return {
		metadata,
		component
	};
};
