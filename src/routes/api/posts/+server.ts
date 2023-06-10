const postModules = import.meta.glob('/content/**/*.md', { eager: true });

export const GET = async () => {
	console.log(postModules);

	for (const postPath of Object.keys(postModules)) {
		const slug = postPath.replace('/content', '').replace('.md', '');

		console.log(slug);

		const moduleInfo = postModules[postPath] as any;
		const metadata = moduleInfo.metadata;
		console.log({
			slug,
			metadata
		});
	}

	return new Response('haha');
};
