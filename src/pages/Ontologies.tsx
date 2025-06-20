export function Ontologies() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold tracking-tight">Ontologies</h1>
        <p className="text-muted-foreground">
          Manage and define data structures and relationships for your agent
          systems.
        </p>
      </div>

      <div className="rounded-lg border bg-card p-12">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
            <svg
              className="w-8 h-8 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">Create Your First Ontology</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Define data structures, relationships, and schemas that your agents
            will use to understand and process information.
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90">
            Create Ontology
          </button>
        </div>
      </div>
    </div>
  )
}
