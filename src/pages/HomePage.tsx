import { Converter } from '@/components/Converter';
export function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="relative z-10 w-full flex flex-col items-center space-y-8 animate-fade-in">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground">
            METRON
          </h1>
          <p className="text-muted-foreground mt-2">Minimalist Unit Converter</p>
        </div>
        <Converter />
      </div>
      <footer className="absolute bottom-4 text-center text-muted-foreground/50 text-sm">
        <p>Built with ❤️ at Cloudflare</p>
      </footer>
    </main>
  );
}