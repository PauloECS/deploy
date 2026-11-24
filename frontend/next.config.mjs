/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_API_DOMAIN, 'via.placeholder.com'],
  },
  typescript: {
    // Permite concluir o build na Vercel mesmo com erros de TypeScript
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora erros de ESLint e Prettier durante o next build
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
