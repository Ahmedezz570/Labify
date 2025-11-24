"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Equipments } from "@/data/Equipment";
import ToolCard, { Tool } from "./ToolCard";

const RecentEquipments = () => {
  const [loadingRecent, setLoadingRecent] = useState(false);

  const convertToTool = (e: any): Tool => ({
    id: e.id,
    name: e.name,
    description: e.description,
    quantity: e.quantity,
    imageUrl: e.imageUrl,
    status:
      e.status === "available"
        ? "Available"
        : e.status === "rented"
        ? "rented"
        : "maintenance",
    category:
      e.category === "Control" ||
      e.category === "PCB" ||
      e.category === "Structure"
        ? e.category
        : "Control",
    location: e.location,
    notes: e.notes,
    createdAt: e.createdAt,
    updatedAt: e.updatedAt,
  });

  const recentTools: Tool[] = Equipments.slice(-6)
    .reverse()
    .map(convertToTool);
    console.log(recentTools);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-60">
      <div className="lg:col-span-2 ">
        <Card className="h-full bg-blue-950 border-b border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Recent Tools</CardTitle>
          </CardHeader>

          <CardContent>
            {loadingRecent ? (
              <p>Loading recent tools...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecentEquipments;
