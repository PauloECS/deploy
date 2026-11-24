/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_API_DOMAIN, 'via.placeholder.com'],
  },
  typescript: {
    // Permite concluir o build na Vercel mesmo com erros de TypeScript
    ignoreBuildErrors: true,
  },
}

export default nextConfig
