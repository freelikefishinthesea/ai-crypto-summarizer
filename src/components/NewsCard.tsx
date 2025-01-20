import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bitcoin, Cpu } from "lucide-react";

interface NewsCardProps {
  title: string;
  summary: string;
  category: string;
  date: string;
  source: string;
}

const NewsCard = ({ title, summary, category, date, source }: NewsCardProps) => {
  const CategoryIcon = category === "Crypto" ? Bitcoin : Cpu;

  return (
    <Card className="group p-6 bg-card hover:shadow-xl transition-all duration-300 hover:animate-card-hover cursor-pointer border border-border/50">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
            <CategoryIcon className="w-4 h-4" />
            {category}
          </span>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-3">{summary}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-muted-foreground">Source: {source}</span>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            Read More →
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;