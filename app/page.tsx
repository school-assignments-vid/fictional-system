export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground gap-8">
      <h1 className="text-5xl tracking-tight drop-shadow mb-2 font-semibold font-headline">
        Hello, World!
      </h1>
      <p className="text-xl italic text-muted mb-6 font-body">
        This is a demo of all theme colors.
      </p>
      <div className="border border-muted bg-background shadow flex flex-col items-center overflow-hidden rounded h-40 w-full max-w-md font-body">
        <div className="flex flex-row w-full h-full">
          <div className="flex items-center justify-center w-1/3 h-full bg-primary">
            <span className="text-white text-lg font-semibold font-headline">
              Primary
            </span>
          </div>
          <div className="flex items-center justify-center w-1/3 h-full bg-secondary">
            <span className="text-white text-lg font-semibold font-headline">
              Secondary
            </span>
          </div>
          <div className="flex items-center justify-center w-1/3 h-full bg-muted">
            <span className="text-white text-lg font-semibold font-headline">
              Muted
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4 rounded border border-muted bg-background text-foreground font-body">
        Background & Foreground sample
      </div>
    </main>
  );
}
