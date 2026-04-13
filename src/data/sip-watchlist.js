// SIP-worthy companies watchlist for US Stock Market
// Categorized by investment style with analysis

export const sipWatchlist = {
  blueChips: [
    { ticker: 'AAPL', name: 'Apple Inc', sector: 'Technology', sipScore: 9, reason: 'World\'s most valuable brand, massive ecosystem lock-in, $100B+ FCF, consistent buybacks. Core holding for any portfolio.' },
    { ticker: 'MSFT', name: 'Microsoft Corp', sector: 'Technology', sipScore: 10, reason: 'Cloud (Azure) growing 30%+, AI leader (Copilot/OpenAI), 35%+ margins, essential enterprise software. Best large-cap stock.' },
    { ticker: 'GOOGL', name: 'Alphabet Inc', sector: 'Technology', sipScore: 8, reason: 'Search monopoly (92% share), YouTube, Google Cloud growing fast, AI leadership with Gemini. Undervalued relative to peers.' },
    { ticker: 'AMZN', name: 'Amazon.com', sector: 'Consumer/Cloud', sipScore: 9, reason: 'E-commerce dominance, AWS is the #1 cloud platform, expanding into healthcare, ads. Multiple growth engines.' },
    { ticker: 'BRK.B', name: 'Berkshire Hathaway', sector: 'Conglomerate', sipScore: 8, reason: 'Warren Buffett\'s company. Massive cash reserves, diversified holdings, insurance float. The ultimate value investment.' },
    { ticker: 'JPM', name: 'JPMorgan Chase', sector: 'Banking', sipScore: 7, reason: 'America\'s largest bank, strong management (Jamie Dimon), benefits from higher interest rates. Consistent performer.' },
    { ticker: 'V', name: 'Visa Inc', sector: 'Financial Services', sipScore: 9, reason: 'Duopoly with Mastercard, processes $14T+ in payments. Nearly zero credit risk. Pure toll-booth business model.' },
    { ticker: 'UNH', name: 'UnitedHealth Group', sector: 'Healthcare', sipScore: 8, reason: 'Largest US health insurer + Optum services. Aging population tailwind. Consistent 15%+ earnings growth.' }
  ],
  growth: [
    { ticker: 'NVDA', name: 'NVIDIA Corp', sector: 'Semiconductors', sipScore: 9, reason: 'AI chip leader with 80%+ data center GPU market share. Every AI company needs NVIDIA chips. The "picks and shovels" of AI.' },
    { ticker: 'META', name: 'Meta Platforms', sector: 'Technology', sipScore: 8, reason: '3.9B users across apps, $40B+ annual ad revenue, AI and metaverse bets, aggressive cost-cutting improved margins.' },
    { ticker: 'TSLA', name: 'Tesla Inc', sector: 'Auto/Energy', sipScore: 6, reason: 'EV market leader, energy storage growing fast, FSD potential. Very volatile — higher risk. Only for aggressive investors.' },
    { ticker: 'AVGO', name: 'Broadcom Inc', sector: 'Semiconductors', sipScore: 8, reason: 'Custom AI chip maker for hyperscalers. VMware acquisition adds software revenue. Strong dividend + buybacks.' },
    { ticker: 'CRM', name: 'Salesforce', sector: 'Software', sipScore: 7, reason: 'CRM market leader, AI integration (Einstein), growing margins. Enterprise software is sticky and recurring.' },
    { ticker: 'ABNB', name: 'Airbnb', sector: 'Travel/Tech', sipScore: 7, reason: 'Disrupted hospitality. Asset-light model, growing experiences segment. 40%+ free cash flow margin.' },
    { ticker: 'NOW', name: 'ServiceNow', sector: 'Software', sipScore: 8, reason: 'Enterprise workflow automation. 97%+ retention rate. Growing 25%+ with improving margins. AI upside massive.' },
    { ticker: 'SNOW', name: 'Snowflake', sector: 'Cloud/Data', sipScore: 6, reason: 'Cloud data platform. High growth but high valuation. Enterprise adoption accelerating. High risk, high reward.' }
  ],
  dividend: [
    { ticker: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', sipScore: 8, reason: '60+ years of consecutive dividend increases (Dividend King). Healthcare is recession-resistant. Stable and reliable.' },
    { ticker: 'KO', name: 'Coca-Cola', sector: 'Consumer Staples', sipScore: 7, reason: 'Warren Buffett\'s favorite stock. 60+ years dividend increases. Global brand presence. Ultimate steady compounder.' },
    { ticker: 'PG', name: 'Procter & Gamble', sector: 'Consumer Staples', sipScore: 8, reason: '67+ years dividend increases. Brands: Tide, Gillette, Pampers. Pricing power and essential products.' },
    { ticker: 'MCD', name: 'McDonald\'s', sector: 'Consumer', sipScore: 7, reason: 'Real estate empire disguised as a restaurant. Consistent franchisee income. 48 years dividend increases.' },
    { ticker: 'HD', name: 'Home Depot', sector: 'Retail', sipScore: 7, reason: 'Dominant home improvement retailer. Benefits from housing market. Strong dividend growth and buybacks.' },
    { ticker: 'ABBV', name: 'AbbVie', sector: 'Pharma', sipScore: 7, reason: 'Former Humira monopoly diversifying into new drugs. High dividend yield (~4%). Attractive for income.' },
    { ticker: 'O', name: 'Realty Income', sector: 'REIT', sipScore: 7, reason: '"The Monthly Dividend Company." Pays dividends monthly. 5%+ yield. Triple-net lease REIT. Recession-resistant tenants.' },
    { ticker: 'SCHD', name: 'Schwab US Dividend Equity ETF', sector: 'ETF', sipScore: 9, reason: 'ETF of high-quality dividend stocks. Low 0.06% fee. 3.5%+ yield with growth. Best single dividend investment.' }
  ],
  etfs: [
    { ticker: 'VOO', name: 'Vanguard S&P 500 ETF', sector: 'Index ETF', sipScore: 10, reason: 'Tracks S&P 500. 0.03% expense ratio. Best single investment for most people. Warren Buffett recommends this.' },
    { ticker: 'QQQ', name: 'Invesco QQQ Trust', sector: 'Tech ETF', sipScore: 9, reason: 'Tracks NASDAQ-100. Tech-heavy. Higher growth but more volatile. 0.20% fee. Outperformed S&P 500 long-term.' },
    { ticker: 'VTI', name: 'Vanguard Total Stock Market ETF', sector: 'Total Market ETF', sipScore: 10, reason: 'Entire US stock market in one fund. 4,000+ stocks. 0.03% fee. Ultimate diversification.' },
    { ticker: 'VXUS', name: 'Vanguard Total International', sector: 'Intl ETF', sipScore: 8, reason: 'All international stocks (excluding US). Provides global diversification. 0.07% fee.' },
    { ticker: 'VGT', name: 'Vanguard Info Tech ETF', sector: 'Tech ETF', sipScore: 8, reason: 'Pure tech sector exposure. Top holdings: AAPL, MSFT, NVDA. 0.10% fee. For tech-bullish investors.' },
    { ticker: 'BND', name: 'Vanguard Total Bond Market', sector: 'Bond ETF', sipScore: 7, reason: 'Entire US bond market. 0.03% fee. Essential for portfolio stability and rebalancing.' },
    { ticker: 'GLD', name: 'SPDR Gold Shares', sector: 'Gold ETF', sipScore: 6, reason: 'Tracks gold price. Inflation hedge. Crisis hedge. 5-10% allocation recommended for portfolio insurance.' },
    { ticker: 'VNQ', name: 'Vanguard Real Estate ETF', sector: 'REIT ETF', sipScore: 7, reason: 'Diversified real estate exposure. 3.5%+ yield. 0.12% fee. Real estate without property management hassles.' }
  ],

  // SIP Strategy recommendations
  sipStrategies: {
    conservative: {
      name: 'Conservative (Low Risk)',
      description: 'Best for beginners or risk-averse investors',
      allocation: [
        { ticker: 'VOO', weight: 40 },
        { ticker: 'BND', weight: 30 },
        { ticker: 'SCHD', weight: 20 },
        { ticker: 'GLD', weight: 10 }
      ]
    },
    balanced: {
      name: 'Balanced (Moderate Risk)',
      description: 'Good mix of growth and stability',
      allocation: [
        { ticker: 'VOO', weight: 35 },
        { ticker: 'QQQ', weight: 20 },
        { ticker: 'VXUS', weight: 15 },
        { ticker: 'SCHD', weight: 15 },
        { ticker: 'BND', weight: 10 },
        { ticker: 'GLD', weight: 5 }
      ]
    },
    aggressive: {
      name: 'Aggressive (High Growth)',
      description: 'For young investors with long time horizon',
      allocation: [
        { ticker: 'VOO', weight: 30 },
        { ticker: 'QQQ', weight: 25 },
        { ticker: 'VGT', weight: 15 },
        { ticker: 'VXUS', weight: 15 },
        { ticker: 'NVDA', weight: 5 },
        { ticker: 'MSFT', weight: 5 },
        { ticker: 'GOOGL', weight: 5 }
      ]
    }
  }
};
