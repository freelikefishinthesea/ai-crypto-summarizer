import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bitcoin, Cpu, ExternalLink } from "lucide-react";

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
    <Card className="group relative p-6 bg-card hover:shadow-2xl transition-all duration-500 hover:animate-card-hover cursor-pointer border border-primary/5 backdrop-blur-sm bg-gradient-to-br from-background/80 via-background/90 to-muted/20 hover:from-background/90 hover:via-background/95 hover:to-muted/30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      
      <div className="flex flex-col gap-4 relative">
        <div className="flex justify-between items-start">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
            <CategoryIcon className="w-4 h-4" />
            {category}
          </span>
          <span className="text-sm text-muted-foreground font-medium">{date}</span>
        </div>
        
        <h3 className="text-xl font-black text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300 bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/80">
          {title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-3 font-medium leading-relaxed">
          {summary}
        </p>
        
        <div className="flex justify-between items-center mt-2 pt-4 border-t border-primary/5">
          <span className="text-sm text-muted-foreground font-medium">
            Source: {source}
          </span>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-primary hover:text-primary-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 gap-1.5"
          >
            Read More
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;