'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export const page = () => {
	useEffect(() => {
		redirect('https://github.com/side-project-taiwan')
	}, [])

	return null
}

export default page
