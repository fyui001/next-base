import type { Meta, StoryObj } from '@storybook/nextjs'
import PageHeader from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Common/PageHeader',
  component: PageHeader,
  parameters: { layout: 'padded' },
  args: {
    title: 'Users',
    description: 'Manage your team members and their roles.',
  },
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithActions: Story = {
  args: {
    actions: <Button>New user</Button>,
  },
}
