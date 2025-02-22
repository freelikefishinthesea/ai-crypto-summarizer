import React, { useState } from "react";
import NewsCard from "@/components/NewsCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Newspaper, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateArticle } from "@/lib/gemini";
import { toast } from "sonner";

interface Article {
  id: number;
  title: string;
  summary: string;
  category: "AI" | "Crypto";
  date: string;
  source: string;
}

const mockNews: Article[] = [
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
  const [articles, setArticles] = useState<Article[]>(mockNews);
  const [apiKey, setApiKey] = useState("");
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const filteredNews = selectedCategory === "all" 
    ? articles 
    : articles.filter(news => news.category === selectedCategory);

  const handleGenerateArticle = async () => {
    if (!apiKey) {
      toast.error("Please enter your Gemini API key");
      return;
    }
    if (!topic) {
      toast.error("Please enter a topic");
      return;
    }

    setIsGenerating(true);
    try {
      const newArticle = await generateArticle(apiKey, topic);
      setArticles(prev => [{
        ...newArticle,
        id: prev.length + 1
      }, ...prev]);
      toast.success("Article generated successfully!");
      setTopic("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-30 mix-blend-soft-light -z-10" />
      
      <div className="container py-16 px-4 sm:px-6 lg:px-8 relative">
        <header className="mb-16 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent rounded-3xl blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl backdrop-blur-sm ring-1 ring-primary/20">
                <Newspaper className="w-12 h-12 text-primary animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 drop-shadow-sm">
                AI & Crypto News
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Stay updated with the latest in artificial intelligence and cryptocurrency
            </p>
          </div>
        </header>

        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          <Input
            type="password"
            placeholder="Enter your Gemini API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="bg-background/50 backdrop-blur-sm"
          />
          <div className="flex gap-2">
            <Input
              placeholder="Enter a topic for article generation"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-background/50 backdrop-blur-sm"
            />
            <Button
              onClick={handleGenerateArticle}
              disabled={isGenerating}
              className="gap-2"
            >
              {isGenerating ? (
                <div className="animate-spin">⚡</div>
              ) : (
                <Plus className="w-4 h-4" />
              )}
              Generate
            </Button>
          </div>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
