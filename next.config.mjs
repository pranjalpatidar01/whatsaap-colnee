/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "hidden-spoonbill-882.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
		],
	},
};

export default nextConfig;
