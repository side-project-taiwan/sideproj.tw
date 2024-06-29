/**
 * @type {import('next').NextConfig['redirects']}
 */
const redirects = async () => {
  return [
    // github
    {
      source: '/github',
      destination: 'https://github.com/side-project-taiwan',
      permanent: true,
    },
    // discord
    {
      source: '/dc',
      destination: 'https://discord.gg/GwJcrhPT7h',
      permanent: true,
    },
    {
      source: '/discord',
      destination: 'https://discord.gg/GwJcrhPT7h',
      permanent: true,
    },
  ]
}

module.exports = redirects
