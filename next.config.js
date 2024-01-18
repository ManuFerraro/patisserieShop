/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
      },
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
      env: {
		MONGO_URL: process.env.MONGO_URL,
		TOKEN_SECRET: process.env.TOKEN_SECRET,
		DOMAIN: process.env.DOMAIN
	},
}

module.exports = nextConfig
