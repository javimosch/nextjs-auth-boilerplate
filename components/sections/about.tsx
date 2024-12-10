export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Built for Developers,<br />by Developers
            </h2>
            <p className="text-muted-foreground md:text-xl">
              We understand the challenges of implementing secure authentication. That's why we created
              this boilerplate - to help developers focus on building great applications without
              worrying about auth infrastructure.
            </p>
          </div>
          <div className="space-y-4 lg:mt-0">
            <div className="rounded-lg bg-background p-6">
              <h3 className="font-semibold">Modern Stack</h3>
              <p className="mt-2 text-muted-foreground">
                Built with Next.js 13+, TypeScript, Tailwind CSS, and Supabase for a modern
                development experience.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6">
              <h3 className="font-semibold">Best Practices</h3>
              <p className="mt-2 text-muted-foreground">
                Follows industry best practices for security, performance, and code organization.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6">
              <h3 className="font-semibold">Open Source</h3>
              <p className="mt-2 text-muted-foreground">
                Free and open source. Use it in your projects, contribute back to the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}