import React from "react";
import { Button } from "@/components/ui/button";
import { Bitcoin, Cpu, BookOpen, BarChart } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI":
        return <Cpu className="w-4 h-4" />;
      case "Crypto":
        return <Bitcoin className="w-4 h-4" />;
      case "Tutorials":
        return <BookOpen className="w-4 h-4" />;
      case "Benchmarks":
        return <BarChart className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        onClick={() => onSelectCategory("all")}
        className="rounded-full transition-all duration-300 hover:scale-105"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className="rounded-full transition-all duration-300 hover:scale-105 gap-2"
        >
          {getCategoryIcon(category)}
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;