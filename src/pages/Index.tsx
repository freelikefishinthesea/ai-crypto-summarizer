import React, { useState } from "react";
import NewsCard from "@/components/NewsCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Newspaper } from "lucide-react";

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
    <div className="min-h-screen bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-muted">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-12 h-12 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-black text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 drop-shadow-sm">
              AI & Crypto News
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Stay updated with the latest in artificial intelligence and cryptocurrency
          </p>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10 rounded-3xl blur-3xl" />
        </header>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news, index) => (
            <div
              key={news.id}
              className="opacity-0 animate-[fade-in_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <NewsCard
                title={news.title}
                summary={news.summary}
                category={news.category}
                date={news.date}
                source={news.source}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
