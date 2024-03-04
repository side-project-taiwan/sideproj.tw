'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export const page = () => {
	useEffect(() => {
		redirect('https://discord.gg/GwJcrhPT7h')
	}, [])

	return null
}

export default page
