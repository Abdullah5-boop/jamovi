import { NavTabs } from "@/components/nav-tabs"
import { AnalysisToolbar } from "@/components/analysis-toolbar"
import { DataGrid } from "@/components/data-grid"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-4 h-12 bg-blue-600 text-white">
        <h1 className="text-lg font-semibold">jamovi - Untitled</h1>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-blue-700 rounded">_</button>
          <button className="p-2 hover:bg-blue-700 rounded">□</button>
          <button className="p-2 hover:bg-blue-700 rounded">×</button>
        </div>
      </header>
      
      <NavTabs />
      
      <TooltipProvider>
        <AnalysisToolbar />
      </TooltipProvider>
      
      <main className="flex-1 p-4">
        <DataGrid />
      </main>

      <footer className="p-2 text-sm text-gray-500 border-t">
        <span>version 2.6.17</span>
      </footer>
    </div>
  )
}

