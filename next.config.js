/** @type {import('next').NextConfig} */
const nextConfig = {
  // 允许使用外部图片
  images: {
    domains: ['*'],
  },
  // ESLint 配置
  eslint: {
    // 在生产构建时忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
  // 添加自定义头部配置
  async headers() {
    return [
      {
        source: '/google0dd0d82b5782f902.html',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
