import React from 'react'
import { Equipments } from '@/data/Equipment';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ListFilter } from "lucide-react";
const Categories = () => {
  const popularCategories = [
    { name: "Control", count: Equipments.filter(t => t.category === "Control").length },
    { name: "PCB", count: Equipments.filter(t => t.category === "PCB").length },
    { name: "Structure", count: Equipments.filter(t => t.category === "Structure").length },
  ].sort((a, b) => b.count - a.count);

  return (
     <div>
      <Card className="h-full bg-blue-950 border-b border-white/20">
                <CardHeader>
                  <CardTitle className='text-white text-2xl'>Popular Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {popularCategories.map(category => (
                      <div key={category.name} className="flex items-center justify-between t">
                        <div className="flex items-center">
                          <ListFilter className="h-4 w-4 text-muted-foreground mr-2" />
                          <span className='text-white'>{category.name}</span>
                        </div>
                        <Badge variant="outline" className='text-white'>{category.count} tools</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>           
    </div>
  );
};

export default Categories;
