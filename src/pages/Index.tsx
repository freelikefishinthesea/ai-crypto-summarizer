import React, { useState } from "react";
import NewsCard from "@/components/NewsCard";
import CategoryFilter from "@/components/CategoryFilter";

// Mock data for initial development
const mockNews = [
  {
    id: 1,
    title: "OpenAI Releases GPT-4 Turbo with Enhanced Capabilities",
    summary: "The latest version of GPT-4 brings significant improvements in context length and processing speed, enabling more complex applications.",
    category: "AI",
    date: "2024-02-20",
    source: "OpenAI Blog"
  },
  {
    id: 2,
    title: "Bitcoin ETF Trading Volume Reaches New Heights",
    summary: "Spot Bitcoin ETFs continue to see record-breaking trading volumes as institutional investors enter the crypto market.",
    category: "Crypto",
    date: "2024-02-19",
    source: "CoinDesk"
  },
  {
    id: 3,
    title: "Google Introduces New AI Model for Code Generation",
    summary: "Google's latest AI model promises to revolutionize software development with improved code generation capabilities.",
    category: "AI",
    date: "2024-02-18",
    source: "Google AI Blog"
  },
  {
    id: 4,
    title: "Ethereum Layer 2 Solutions See Surge in Adoption",
    summary: "Major Layer 2 networks report significant growth in user activity and total value locked.",
    category: "Crypto",
    date: "2024-02-17",
    source: "Ethereum Foundation"
  }
];

const categories = ["AI", "Crypto", "Tutorials", "Benchmarks"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNews = selectedCategory === "all" 
    ? mockNews 
    : mockNews.filter(news => news.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background bg-gradient-to-br from-background to-muted/50">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            AI & Crypto News
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest in artificial intelligence and cryptocurrency
          </p>
        </header>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              summary={news.summary}
              category={news.category}
              date={news.date}
              source={news.source}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;