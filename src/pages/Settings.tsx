export function Settings() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Configure your account, organization, and system preferences.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Profile Information</span>
              <button className="text-sm text-primary hover:underline">
                Edit
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Email Preferences</span>
              <button className="text-sm text-primary hover:underline">
                Configure
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Security Settings</span>
              <button className="text-sm text-primary hover:underline">
                Manage
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Organization</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">General Settings</span>
              <button className="text-sm text-primary hover:underline">
                Configure
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Billing & Usage</span>
              <button className="text-sm text-primary hover:underline">
                View
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">API Keys</span>
              <button className="text-sm text-primary hover:underline">
                Manage
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">System Preferences</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Theme</span>
              <span className="text-sm text-muted-foreground">Light</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Language</span>
              <span className="text-sm text-muted-foreground">English</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Timezone</span>
              <span className="text-sm text-muted-foreground">Auto-detect</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-4">Integrations</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Connected Services</span>
              <button className="text-sm text-primary hover:underline">
                Manage
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Webhooks</span>
              <button className="text-sm text-primary hover:underline">
                Configure
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">External APIs</span>
              <button className="text-sm text-primary hover:underline">
                Setup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
