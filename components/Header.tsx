import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GithubSvg from '@/assets/github_thumbnail.svg'
import DiscordSvg from '@/assets/discord_thumbnail.svg'
import { DiscordLink, GithubLink } from '@/constants/urls'

const LinksConfig = [
	{ name: '關於SPT', url: '#' },
	{ name: '聯絡我們', url: '#' },
	{ name: '技術支援', url: '#' }
]

export const Header = () => {
	return (
		<header className="flex items-center justify-between h-[3.75rem] w-full text-[2rem] bg-white text-slate-800 font-bold px-[15%]">
			<Link href={'https://sideproj.tw/'}>
				<Image
					alt="Side_Project_TW"
					src={'/logo.svg'}
					width={250}
					height={60}
				/>
			</Link>

			<nav className="flex items-center justify-center gap-6 text-[1rem]">
				{LinksConfig.map(({ url, name }) => (
					<Link
						key={name}
						href={url}
						className="cursor-pointer text-black hover:text-blue-700 hover:border-b-4 hover:border-blue-200 hover:font-bold"
					>
						{name}
					</Link>
				))}

				<Link href={DiscordLink} target="_blank" className="hover:scale-[1.1]">
					<Image
						priority
						alt="Follow us on Discord"
						src={DiscordSvg}
						width={32}
						height={32}
					/>
				</Link>
				<Link href={GithubLink} target="_blank" className="hover:scale-[1.1]">
					<Image
						priority
						alt="Follow us on Github"
						src={GithubSvg}
						width={32}
						height={32}
					/>
				</Link>
			</nav>
		</header>
	)
}
