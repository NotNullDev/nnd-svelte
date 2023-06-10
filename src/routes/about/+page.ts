import { error } from '@sveltejs/kit';

export const load = async () => {
	let pageData: any;

	try {
		// @ts-expect-error idk
		pageData = await import('../../../content/about.md');
	} catch (e) {
		console.error(e);
		throw error(500, 'Something went wrong...');
	}

	const metadata = pageData.metadata;
	const component = pageData.default;

	return {
		metadata,
		component
	};
};
