import { toast } from "sonner";

interface Article {
  title: string;
  summary: string;
  category: "AI" | "Crypto";
  date: string;
  source: string;
}

export const generateArticle = async (apiKey: string, topic: string): Promise<Article> => {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Generate a news article about ${topic} in JSON format with the following structure:
            {
              "title": "catchy title",
              "summary": "detailed summary in 2-3 sentences",
              "category": "AI" or "Crypto",
              "source": "AI Generated"
            }`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1000,
        },
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate article');
    }

    const data = await response.json();
    const articleText = data.candidates[0].content.parts[0].text;
    const articleData = JSON.parse(articleText.replace(/```json|```/g, '').trim());

    return {
      ...articleData,
      date: new Date().toISOString().split('T')[0]
    };
  } catch (error) {
    console.error('Error generating article:', error);
    toast.error('Failed to generate article');
    throw error;
  }
};