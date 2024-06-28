const { redirects } = require('./scripts/next-config')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  redirects,
}

module.exports = nextConfig
