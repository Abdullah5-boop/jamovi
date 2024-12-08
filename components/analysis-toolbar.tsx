import { Button } from "@/components/ui/button"
import { BarChart3, GitCompare, TrendingUp, Grid, LayoutGrid, Network } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function AnalysisToolbar() {
  return (
    <div className="flex items-center gap-4 p-2 border-b">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="w-16 h-16 flex-col gap-1">
            <BarChart3 className="h-6 w-6" />
            <span className="text-xs">Exploration</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Exploration</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="w-16 h-16 flex-col gap-1">
            <GitCompare className="h-6 w-6" />
            <span className="text-xs">T-Tests</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>T-Tests</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="w-16 h-16 flex-col gap-1">
            <Network className="h-6 w-6" />
            <span className="text-xs">ANOVA</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>ANOVA</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="w-16 h-16 flex-col gap-1">
            <TrendingUp className="h-6 w-6" />
            <span className="text-xs">Regression</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Regression</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="w-16 h-16 flex-col gap-1">
            <Grid className="h-6 w-6" />
            <span className="text-xs">Frequencies</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Frequencies</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="w-16 h-16 flex-col gap-1">
            <LayoutGrid className="h-6 w-6" />
            <span className="text-xs">Factor</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Factor</TooltipContent>
      </Tooltip>
    </div>
  )
}

