/**
 * @type {import('next').NextConfig['rewrites']}
 */
const rewrites = async () => {
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

module.exports = rewrites
