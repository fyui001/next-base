import type { Meta, StoryObj } from '@storybook/nextjs'
import { expect, within } from 'storybook/test'
import AppShell from '@/components/layout/AppShell'
import PageHeader from '@/components/common/PageHeader'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const meta = {
  title: 'Layout/AppShell',
  component: AppShell,
  parameters: { layout: 'fullscreen' },
  args: { children: null },
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AppShell>
      <div className="flex h-full flex-col gap-6 overflow-y-auto p-6">
        <PageHeader
          title="Dashboard"
          description="Example content inside the AppShell."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {['Total', 'Active', 'Pending'].map((label) => (
            <Card key={label}>
              <CardHeader>
                <CardDescription>{label}</CardDescription>
                <CardTitle className="text-3xl">42</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The sidebar nav and the header controls render.
    await expect(
      canvas.getByRole('link', { name: 'Dashboard' }),
    ).toBeInTheDocument()
    await expect(
      canvas.getByRole('button', { name: 'Toggle sidebar' }),
    ).toBeInTheDocument()
  },
}
