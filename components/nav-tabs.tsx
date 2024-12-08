import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NavTabs() {
  return (
    <Tabs defaultValue="variables" className="w-full">
      <TabsList className="bg-blue-600 text-white h-12 w-full rounded-none">
        <TabsTrigger 
          value="variables" 
          className="data-[state=active]:bg-blue-700 data-[state=active]:text-white text-blue-100"
        >
          Variables
        </TabsTrigger>
        <TabsTrigger 
          value="data"
          className="data-[state=active]:bg-blue-700 data-[state=active]:text-white text-blue-100"
        >
          Data
        </TabsTrigger>
        <TabsTrigger 
          value="analyses"
          className="data-[state=active]:bg-blue-700 data-[state=active]:text-white text-blue-100"
        >
          Analyses
        </TabsTrigger>
        <TabsTrigger 
          value="edit"
          className="data-[state=active]:bg-blue-700 data-[state=active]:text-white text-blue-100"
        >
          Edit
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

