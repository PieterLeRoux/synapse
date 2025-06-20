export function Teams() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold tracking-tight">Teams</h1>
        <p className="text-muted-foreground">
          Manage team members, roles, and collaborative access to your agent
          systems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Team Members</h3>
          <p className="text-sm text-muted-foreground">
            Active users in your organization
          </p>
          <div className="mt-4 text-2xl font-bold">1</div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Roles</h3>
          <p className="text-sm text-muted-foreground">
            Different permission levels
          </p>
          <div className="mt-4 text-2xl font-bold">3</div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Pending Invites</h3>
          <p className="text-sm text-muted-foreground">
            Outstanding team invitations
          </p>
          <div className="mt-4 text-2xl font-bold">0</div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Team Members</h3>
        <div className="text-center py-8 text-muted-foreground">
          Invite team members to collaborate on agent workflows and projects.
        </div>
      </div>
    </div>
  )
}
