import  Link  from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export interface Tool {
  id: string;
    name: string;
    description: string;
    quantity: number;
    imageUrl: string;
    status: ToolStatus;
    category: ToolCategory;
    location: string;
    notes?: string;
    createdAt?: string;
    updatedAt?: string;
  }
  export type ToolCategory = 
  | "Control" 
  | "PCB" 
  | "Structure" 


export type ToolStatus = "Available" | "rented" | "maintenance" ;
interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500";
      case "rented":
        return "bg-blue-500";
      case "maintenance":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow bg-blue-950 border-b border-white/20">
   <div className="relative h-40 w-full bg-gray-200 flex items-center justify-center">
  <img
    src={tool.imageUrl || "/placeholder.svg"}
    alt={tool.name}
    className="max-h-full max-w-full object-contain"
  />
  <div className="absolute top-2 right-2">
    <Badge className={`${getStatusColor(tool.status)} text-white`}>
      {tool.status}
    </Badge>
  </div>
</div>


      <CardContent className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1 text-white">{tool.name}</h3>
        <p className="text-sm text-gray-500 mb-2 text-white">{tool.category}</p>
        <p className="text-sm line-clamp-2 text-gray-700 mb-2 text-white">{tool.description}</p>
        {/* <p className="text-xs text-gray-500">Location: {tool.location}</p> */}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link 
          href={`/tools/${tool.id}`}
          className="text-primary text-sm font-medium hover:underline text-white"
        >
          View Details
        </Link>
        <Badge variant="outline" className="text-xs text-white">
          ID: {tool.id}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;