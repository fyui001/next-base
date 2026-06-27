import type { Metadata } from 'next'
import PageHeader from '@/components/common/PageHeader'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ExampleForm } from '@/components/forms/ExampleForm'

export const metadata: Metadata = { title: 'Settings' }

export default function SettingsPage() {
  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto p-6">
      <PageHeader
        title="Settings"
        description="An example form built with the shadcn form primitives."
      />
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your public profile details.</CardDescription>
        </CardHeader>
        <CardContent>
          <ExampleForm />
        </CardContent>
      </Card>
    </div>
  )
}
