export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">next-base</h1>
      <p className="max-w-prose text-muted-foreground">
        A general-purpose Next.js base with a shadcn/ui design system, a
        light/dark/system theme, a generic data table, and a Storybook that
        showcases and verifies every component.
      </p>
    </main>
  )
}
