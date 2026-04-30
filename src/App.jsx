import { ExternalLink, Wrench } from 'lucide-react'

const tools = [
  {
    name: 'microtools',
    url: 'https://microtools.apatel.xyz',
    description: 'A collection of essential utility tools.',
  },
  {
    name: 'zxcv',
    url: 'https://zxcv.fyi',
    description: 'Minimalist links and tools.',
  },
]

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-24">
      <div className="max-w-2xl w-full space-y-12">
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-100 rounded-lg">
              <Wrench className="w-6 h-6 text-zinc-950" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">tork</h1>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed">
            all tools. ever.
          </p>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col gap-2 overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold group-hover:text-zinc-50 transition-colors">
                  {tool.name}
                </h2>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                {tool.description}
              </p>
              
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>
          ))}
          
          {/* Add more placeholder for future tools */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 border-dashed flex items-center justify-center min-h-[120px]">
            <span className="text-zinc-600 text-sm font-medium italic">more coming soon...</span>
          </div>
        </main>

        <footer className="pt-8 border-t border-zinc-900 text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} apatel.xyz
        </footer>
      </div>
    </div>
  )
}

export default App
