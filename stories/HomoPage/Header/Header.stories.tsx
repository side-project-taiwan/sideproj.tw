import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '../../../components/Header'

const meta = {
	title: 'HomePage/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
	// args: {
	// 	user: {
	// 		name: 'Jane Doe'
	// 	}
	// }
}
