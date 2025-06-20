export function Canvas() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Canvas</h1>
        <p className="text-muted-foreground mt-2">
          Protected canvas workspace - only authenticated users can access this page.
        </p>
      </div>
    </div>
  )
}