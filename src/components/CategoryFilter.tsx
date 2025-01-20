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
    <div className="flex flex-wrap gap-4 mb-16 justify-center">
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        onClick={() => onSelectCategory("all")}
        className="rounded-full px-6 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 backdrop-blur-sm"
      >
        All Categories
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className={`rounded-full px-6 transition-all duration-300 hover:scale-105 gap-2 shadow-lg hover:shadow-xl backdrop-blur-sm ${
            selectedCategory === category
              ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              : "hover:bg-primary/10 border-primary/20"
          }`}
        >
          {getCategoryIcon(category)}
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;