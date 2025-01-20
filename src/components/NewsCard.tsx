import React from "react";
import { Card } from "@/components/ui/card";

interface NewsCardProps {
  title: string;
  summary: string;
  category: string;
  date: string;
  source: string;
}

const NewsCard = ({ title, summary, category, date, source }: NewsCardProps) => {
  return (
    <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 hover:animate-card-hover cursor-pointer">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            {category}
          </span>
          <span className="text-sm text-text-secondary">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-text-primary line-clamp-2">{title}</h3>
        <p className="text-text-secondary line-clamp-3">{summary}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-text-secondary">Source: {source}</span>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;