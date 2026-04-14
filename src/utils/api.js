import { Storage } from './storage.js';

// API integration with mock fallback
const CACHE_TTL = {
  stocks: 15 * 60 * 1000,   // 15 minutes
  news: 60 * 60 * 1000,     // 1 hour
  profile: 24 * 60 * 60 * 1000 // 24 hours
};

function getCached(key) {
  const cached = Storage.get(`cache_${key}`, null);
  if (!cached) return null;
  if (Date.now() - cached.ts > (cached.ttl || CACHE_TTL.stocks)) return null;
  return cached.data;
}

function setCache(key, data, ttl) {
  Storage.set(`cache_${key}`, { data, ts: Date.now(), ttl });
}

// ============ MOCK DATA ============

const MOCK_STOCK_QUOTES = {
  AAPL: { c: 198.45, d: 2.34, dp: 1.19, h: 199.50, l: 195.80, o: 196.11, pc: 196.11, t: Date.now() / 1000 },
  MSFT: { c: 442.78, d: -1.22, dp: -0.27, h: 445.10, l: 440.00, o: 444.00, pc: 444.00, t: Date.now() / 1000 },
  GOOGL: { c: 172.33, d: 3.45, dp: 2.04, h: 173.00, l: 168.50, o: 168.88, pc: 168.88, t: Date.now() / 1000 },
  AMZN: { c: 201.56, d: 1.88, dp: 0.94, h: 203.10, l: 199.20, o: 199.68, pc: 199.68, t: Date.now() / 1000 },
  NVDA: { c: 135.72, d: 5.67, dp: 4.36, h: 137.00, l: 129.50, o: 130.05, pc: 130.05, t: Date.now() / 1000 },
  TSLA: { c: 245.89, d: -8.11, dp: -3.19, h: 256.00, l: 243.50, o: 254.00, pc: 254.00, t: Date.now() / 1000 },
  META: { c: 523.45, d: 7.89, dp: 1.53, h: 525.00, l: 514.50, o: 515.56, pc: 515.56, t: Date.now() / 1000 },
  JPM: { c: 198.23, d: 0.45, dp: 0.23, h: 199.00, l: 197.00, o: 197.78, pc: 197.78, t: Date.now() / 1000 },
  V: { c: 285.67, d: 1.23, dp: 0.43, h: 286.50, l: 283.00, o: 284.44, pc: 284.44, t: Date.now() / 1000 },
  JNJ: { c: 156.34, d: -0.56, dp: -0.36, h: 157.50, l: 155.80, o: 156.90, pc: 156.90, t: Date.now() / 1000 },
  VOO: { c: 498.23, d: 2.10, dp: 0.42, h: 499.50, l: 495.00, o: 496.13, pc: 496.13, t: Date.now() / 1000 },
  QQQ: { c: 478.90, d: 4.56, dp: 0.96, h: 480.00, l: 473.50, o: 474.34, pc: 474.34, t: Date.now() / 1000 },
  SPY: { c: 523.45, d: 1.78, dp: 0.34, h: 524.50, l: 520.00, o: 521.67, pc: 521.67, t: Date.now() / 1000 },
  KO: { c: 62.45, d: 0.12, dp: 0.19, h: 62.80, l: 62.00, o: 62.33, pc: 62.33, t: Date.now() / 1000 },
  PG: { c: 168.90, d: -0.34, dp: -0.20, h: 169.50, l: 168.00, o: 169.24, pc: 169.24, t: Date.now() / 1000 }
};

const MOCK_NEWS = [
  {
    title: "OpenAI Announces GPT-5 with Breakthrough Reasoning Capabilities",
    description: "OpenAI has unveiled GPT-5, featuring advanced chain-of-thought reasoning and multimodal capabilities that set new benchmarks across scientific and mathematical domains.",
    source_id: "techcrunch",
    pubDate: new Date(Date.now() - 2 * 3600000).toISOString(),
    link: "#",
    image_url: null,
    category: ["ai", "technology"],
    keywords: ["GPT-5", "AI", "OpenAI", "machine learning"]
  },
  {
    title: "Google DeepMind's New AI System Solves Complex Protein Folding Challenges",
    description: "DeepMind has announced a next-generation protein structure prediction model that accelerates drug discovery timelines by up to 60%, with implications for treating rare diseases.",
    source_id: "reuters",
    pubDate: new Date(Date.now() - 4 * 3600000).toISOString(),
    link: "#",
    image_url: null,
    category: ["ai", "science"],
    keywords: ["DeepMind", "protein folding", "drug discovery", "AI research"]
  },
  {
    title: "Microsoft Invests $10B in AI Infrastructure Buildout Across Asia",
    description: "Microsoft is expanding its AI data center infrastructure with massive investments across India, Japan, and Indonesia to meet growing demand for cloud AI services.",
    source_id: "bloomberg",
    pubDate: new Date(Date.now() - 6 * 3600000).toISOString(),
    link: "#",
    image_url: null,
    category: ["technology", "business"],
    keywords: ["Microsoft", "AI infrastructure", "cloud computing", "data centers"]
  },
  {
    title: "Autonomous Vehicle Startup Raises $2B Series D as Self-Driving Tech Matures",
    description: "Wayve, the UK-based autonomous driving startup, has closed a $2 billion Series D round led by SoftBank, signaling growing investor confidence in AI-powered transportation.",
    source_id: "theverge",
    pubDate: new Date(Date.now() - 8 * 3600000).toISOString(),
    link: "#",
    image_url: null,
    category: ["startups", "ai"],
    keywords: ["autonomous vehicles", "self-driving", "startups", "investment"]
  },
  {
    title: "EU Passes Comprehensive AI Act Enforcement Guidelines",
    description: "The European Union has released detailed enforcement guidelines for the AI Act, establishing clear compliance frameworks for high-risk AI systems used in healthcare, finance, and education.",
    source_id: "bbc",
    pubDate: new Date(Date.now() - 10 * 3600000).toISOString(),
    link: "#",
    image_url: null,
    category: ["ai", "regulation"],
    keywords: ["EU AI Act", "regulation", "compliance", "policy"]
  },
  {
    title: "New AI Chip Startup Challenges Nvidia's Dominance with Energy-Efficient Design",
    description: "Cerebras and Groq are gaining traction with AI accelerator chips that deliver 3x better performance-per-watt compared to current GPU architectures, potentially disrupting Nvidia's market share.",
    source_id: "wired",
    pubDate: new Date(Date.now() - 12 * 3600000).toISOString(),
    link: "#",
    image_url: null,
    category: ["technology", "ai"],
    keywords: ["AI chips", "Nvidia", "Cerebras", "Groq", "semiconductors"]
  },
  {
    title: "AI-Powered Code Generation Tools Now Write 40% of All New Code at Top Tech Companies",
    description: "A new industry survey reveals that AI coding assistants are responsible for generating nearly 40% of new code at major tech companies, raising questions about code quality and developer skill evolution.",
    source_id: "arstechnica",
    pubDate: new Date(Date.now() - 14 * 3600000).toISOString(),
    link: "#",
    image_url: null,
    category: ["ai", "technology"],
    keywords: ["AI coding", "GitHub Copilot", "developer tools", "productivity"]
  },
  {
    title: "Healthcare AI Detects Cancer 5 Years Earlier Than Traditional Methods in Clinical Trial",
    description: "A large-scale clinical trial shows an AI diagnostic system can identify early-stage cancers up to 5 years before they become detectable through conventional screening methods.",
    source_id: "nature",
    pubDate: new Date(Date.now() - 18 * 3600000).toISOString(),
    link: "#",
    image_url: null,
    category: ["ai", "healthcare"],
    keywords: ["healthcare AI", "cancer detection", "clinical trial", "diagnostics"]
  },
  {
    title: "Anthropic Introduces Constitutional AI 2.0 for Enterprise Safety",
    description: "Anthropic's latest framework provides enterprises with customizable AI safety guardrails, allowing organizations to define and enforce their own ethical AI usage policies.",
    source_id: "venturebeat",
    pubDate: new Date(Date.now() - 22 * 3600000).toISOString(),
    link: "#",
    image_url: null,
    category: ["ai", "enterprise"],
    keywords: ["Anthropic", "AI safety", "enterprise", "constitutional AI"]
  },
  {
    title: "India Launches National AI Mission with $5B Investment",
    description: "India has unveiled its National AI Mission, committing $5 billion over 5 years to build sovereign AI infrastructure, train 1 million AI professionals, and develop AI solutions for agriculture and healthcare.",
    source_id: "economictimes",
    pubDate: new Date(Date.now() - 26 * 3600000).toISOString(),
    link: "#",
    image_url: null,
    category: ["ai", "government"],
    keywords: ["India", "national AI", "government", "infrastructure"]
  }
];

const MOCK_MARKET_NEWS = [
  { headline: "S&P 500 Hits Record High Amid Strong Earnings Season", source: "Reuters", datetime: Date.now() / 1000 - 3600, summary: "The S&P 500 reached a new all-time high as major tech companies reported better-than-expected quarterly earnings." },
  { headline: "Federal Reserve Signals Potential Rate Cut in Q3", source: "Bloomberg", datetime: Date.now() / 1000 - 7200, summary: "Fed Chair indicated openness to reducing interest rates if inflation continues its downward trend." },
  { headline: "AI Spending Drives Cloud Revenue Growth for Big Tech", source: "CNBC", datetime: Date.now() / 1000 - 14400, summary: "AWS, Azure, and Google Cloud all reported accelerating revenue growth driven by AI workload demand." },
  { headline: "Oil Prices Drop on Increased OPEC+ Production Plans", source: "FT", datetime: Date.now() / 1000 - 21600, summary: "Crude oil fell 3% after OPEC+ announced plans to increase production quotas starting next month." },
  { headline: "Semiconductor Stocks Rally on AI Chip Demand Forecast", source: "MarketWatch", datetime: Date.now() / 1000 - 28800, summary: "Chip makers saw broad gains after industry analysts raised demand forecasts for AI accelerator chips." }
];

// ============ API FUNCTIONS ============

export const API = {
  async getStockQuote(symbol) {
    const cached = getCached(`quote_${symbol}`);
    if (cached) return cached;

    const settings = Storage.getSettings();
    if (settings.finnhubKey) {
      try {
        const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${settings.finnhubKey}`);
        if (res.ok) {
          const data = await res.json();
          if (data.c) {
            setCache(`quote_${symbol}`, data, CACHE_TTL.stocks);
            return data;
          }
        }
      } catch (e) {
        console.log('API fallback for', symbol);
      }
    }

    // Mock fallback
    const mock = MOCK_STOCK_QUOTES[symbol];
    if (mock) {
      // Add slight randomization to make it feel live
      const variation = (Math.random() - 0.5) * 2;
      return { ...mock, c: +(mock.c + variation).toFixed(2), d: +(mock.d + variation * 0.3).toFixed(2) };
    }
    return { c: 0, d: 0, dp: 0, h: 0, l: 0, o: 0, pc: 0 };
  },

  async getMultipleQuotes(symbols) {
    const quotes = {};
    await Promise.all(symbols.map(async s => {
      quotes[s] = await this.getStockQuote(s);
    }));
    return quotes;
  },

  async getAINews(category = 'ai') {
    const cached = getCached(`news_${category}`);
    if (cached) return cached;

    const settings = Storage.getSettings();
    if (settings.newsApiKey) {
      try {
        const res = await fetch(`https://newsdata.io/api/1/news?apikey=${settings.newsApiKey}&category=technology&q=artificial+intelligence&language=en`);
        if (res.ok) {
          const data = await res.json();
          if (data.results) {
            setCache(`news_${category}`, data.results, CACHE_TTL.news);
            return data.results;
          }
        }
      } catch (e) {
        console.log('News API fallback');
      }
    }

    // Mock fallback — filter by category
    let filtered = MOCK_NEWS;
    if (category !== 'all') {
      filtered = MOCK_NEWS.filter(n => n.category.includes(category));
    }
    return filtered;
  },

  async getMarketNews() {
    const cached = getCached('market_news');
    if (cached) return cached;

    const settings = Storage.getSettings();
    if (settings.finnhubKey) {
      try {
        const res = await fetch(`https://finnhub.io/api/v1/news?category=general&token=${settings.finnhubKey}`);
        if (res.ok) {
          const data = await res.json();
          if (data.length) {
            const sliced = data.slice(0, 10);
            setCache('market_news', sliced, CACHE_TTL.news);
            return sliced;
          }
        }
      } catch (e) {
        console.log('Market news API fallback');
      }
    }

    return MOCK_MARKET_NEWS;
  },

  async getCompanyProfile(symbol) {
    const cached = getCached(`profile_${symbol}`);
    if (cached) return cached;

    const settings = Storage.getSettings();
    if (settings.finnhubKey) {
      try {
        const res = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${settings.finnhubKey}`);
        if (res.ok) {
          const data = await res.json();
          if (data.name) {
            setCache(`profile_${symbol}`, data, CACHE_TTL.profile);
            return data;
          }
        }
      } catch (e) {
        console.log('Profile API fallback for', symbol);
      }
    }

    // Mock profiles
    const profiles = {
      AAPL: { name: 'Apple Inc', ticker: 'AAPL', exchange: 'NASDAQ', ipo: '1980-12-12', marketCapitalization: 3100000, finnhubIndustry: 'Technology', weburl: 'https://apple.com', logo: '' },
      MSFT: { name: 'Microsoft Corp', ticker: 'MSFT', exchange: 'NASDAQ', ipo: '1986-03-13', marketCapitalization: 3300000, finnhubIndustry: 'Technology', weburl: 'https://microsoft.com', logo: '' },
      GOOGL: { name: 'Alphabet Inc', ticker: 'GOOGL', exchange: 'NASDAQ', ipo: '2004-08-19', marketCapitalization: 2100000, finnhubIndustry: 'Technology', weburl: 'https://abc.xyz', logo: '' },
      AMZN: { name: 'Amazon.com Inc', ticker: 'AMZN', exchange: 'NASDAQ', ipo: '1997-05-15', marketCapitalization: 2000000, finnhubIndustry: 'Retail', weburl: 'https://amazon.com', logo: '' },
      NVDA: { name: 'NVIDIA Corp', ticker: 'NVDA', exchange: 'NASDAQ', ipo: '1999-01-22', marketCapitalization: 3400000, finnhubIndustry: 'Technology', weburl: 'https://nvidia.com', logo: '' },
      TSLA: { name: 'Tesla Inc', ticker: 'TSLA', exchange: 'NASDAQ', ipo: '2010-06-29', marketCapitalization: 780000, finnhubIndustry: 'Automobiles', weburl: 'https://tesla.com', logo: '' },
      META: { name: 'Meta Platforms Inc', ticker: 'META', exchange: 'NASDAQ', ipo: '2012-05-18', marketCapitalization: 1350000, finnhubIndustry: 'Technology', weburl: 'https://meta.com', logo: '' },
      JPM: { name: 'JPMorgan Chase & Co', ticker: 'JPM', exchange: 'NYSE', ipo: '1969-03-05', marketCapitalization: 570000, finnhubIndustry: 'Banking', weburl: 'https://jpmorganchase.com', logo: '' },
      V: { name: 'Visa Inc', ticker: 'V', exchange: 'NYSE', ipo: '2008-03-19', marketCapitalization: 580000, finnhubIndustry: 'Financial Services', weburl: 'https://visa.com', logo: '' },
      JNJ: { name: 'Johnson & Johnson', ticker: 'JNJ', exchange: 'NYSE', ipo: '1944-09-25', marketCapitalization: 380000, finnhubIndustry: 'Healthcare', weburl: 'https://jnj.com', logo: '' }
    };
    return profiles[symbol] || { name: symbol, ticker: symbol, exchange: 'N/A', finnhubIndustry: 'N/A' };
  },

  // ============ GEMINI AI INTEGRATION ============
  async analyzeNotesWithLLM(notes, lessonContext) {
    const settings = Storage.getSettings();
    const apiKey = settings.geminiApiKey;
    
    if (!apiKey) {
      return {
        error: true,
        message: 'Please add your Gemini API key in Settings to use AI analysis.',
        insights: null
      };
    }

    const prompt = `You are an expert finance and business mentor analyzing a student's learning journal notes. The student is studying a topic and has written personal notes about what they're learning. Analyze their notes and provide actionable guidance.

LESSON CONTEXT:
- Title: ${lessonContext.title}
- Module: ${lessonContext.module}
- Category: ${lessonContext.category}

STUDENT'S NOTES:
${notes}

Please provide your analysis in the following JSON format (return ONLY valid JSON, no markdown):
{
  "keyInsights": ["insight 1", "insight 2", "insight 3"],
  "nextSteps": ["step 1", "step 2", "step 3"],
  "implementationIdeas": ["idea 1", "idea 2", "idea 3"],
  "encouragement": "A brief motivational message about their learning progress"
}

Guidelines:
- Key Insights: Identify the most important takeaways from their notes, connections they're making, or areas they should explore deeper
- Next Steps: Suggest concrete actions they can take in the next 7 days based on their learning
- Implementation Ideas: Practical ways to apply this knowledge in real life (investing, career, business)
- Keep each point concise but actionable (1-2 sentences max)
- Be specific to their actual notes, not generic advice`;

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024
          }
        })
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData?.error?.message || `API error: ${res.status}`);
      }

      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!text) {
        throw new Error('Empty response from Gemini');
      }

      // Parse JSON from response (strip markdown code fences if present)
      const jsonStr = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsed = JSON.parse(jsonStr);
      
      return {
        error: false,
        insights: parsed,
        analyzedAt: Date.now()
      };
    } catch (e) {
      console.error('Gemini API error:', e);
      return {
        error: true,
        message: `AI analysis failed: ${e.message}. Please check your API key in Settings.`,
        insights: null
      };
    }
  }
};
