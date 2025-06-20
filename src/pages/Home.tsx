export function Home() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to Synapse - your cloud-native agent orchestration platform.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Agents</h3>
          <p className="text-sm text-muted-foreground">
            Manage and monitor your AI agents
          </p>
          <div className="mt-4 text-2xl font-bold">0</div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Workflows</h3>
          <p className="text-sm text-muted-foreground">
            Active workflow executions
          </p>
          <div className="mt-4 text-2xl font-bold">0</div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Tasks</h3>
          <p className="text-sm text-muted-foreground">Completed tasks today</p>
          <div className="mt-4 text-2xl font-bold">0</div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="text-center py-8 text-muted-foreground">
          No recent activity to display
        </div>
      </div>
    </div>
  )
}
