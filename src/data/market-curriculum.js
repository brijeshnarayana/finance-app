// Stock Market, Financial Analysis & Investments Curriculum

export const marketCurriculum = [
  // ===== MODULE 1: Stock Market Fundamentals =====
  {
    id: 'mkt-1-1', title: 'How the Stock Market Works', module: 'Stock Market Fundamentals', estimatedMinutes: 15,
    content: {
      theory: `A **stock** represents ownership in a company. Buying a share makes you a part-owner.\n\n**Stock Exchanges**: NYSE (New York Stock Exchange), NASDAQ, BSE, NSE — organized marketplaces.\n\n**How prices are set**: Supply and demand. More buyers → price rises. More sellers → price falls.\n\n**Key Participants**: Retail investors (you), institutional investors (mutual funds, hedge funds), market makers (provide liquidity).\n\n**Bull Market**: Prices rising 20%+\n**Bear Market**: Prices falling 20%+ from peak`,
      realWorldExample: `When Apple launches a hit product like the iPhone, investor confidence grows, more people buy AAPL stock, and the price rises. In March 2020, COVID fear caused a bear market — S&P 500 fell 34% in 23 days. But investors who bought the dip saw 100%+ returns by 2021. Markets are driven by fear and greed.`,
      implementation: `Open a brokerage account if you haven't. Start observing stock prices daily. Don't invest yet — just build the habit of watching the market.`,
      actionItems: ['Open a paper trading/demo account (Investopedia Simulator, WeBull paper trading)', 'Research: How do NYSE and NASDAQ differ?', 'Follow 5 stocks for 1 week and note daily price changes', 'Learn how to read a basic stock quote (open, high, low, close, volume)'],
      quiz: [
        { q: 'What does owning a stock represent?', options: ['A loan to the company', 'Partial ownership of the company', 'A government bond', 'A savings deposit'], answer: 1 },
        { q: 'What is a bear market?', options: ['Rising prices', 'Falling prices (20%+ decline)', 'Stable prices', 'New market launch'], answer: 1 }
      ],
      keyTakeaways: ['Stocks represent ownership in companies', 'Prices are determined by supply and demand', 'Markets cycle between bull and bear phases', 'Long-term investors have historically been rewarded']
    }
  },
  {
    id: 'mkt-1-2', title: 'Types of Stocks & Market Indices', module: 'Stock Market Fundamentals', estimatedMinutes: 15,
    content: {
      theory: `**Stock Categories by Size**:\n• Large Cap: >$10B market cap (AAPL, MSFT) — stable, lower growth\n• Mid Cap: $2B-$10B — balanced risk/reward\n• Small Cap: <$2B — higher growth potential, higher risk\n\n**Stock Categories by Style**:\n• Growth: High revenue growth, reinvest profits (NVDA, TSLA)\n• Value: Underpriced relative to fundamentals (BRK, JPM)\n• Dividend: Regular cash payments to shareholders (KO, JNJ)\n\n**Market Indices**: S&P 500 (top 500 US companies), NASDAQ Composite (tech-heavy), Dow Jones (30 blue chips), Nifty 50 (top 50 Indian), Sensex (30 Indian blue chips).`,
      realWorldExample: `The S&P 500 has returned ~10% annually since 1926. If you invested $10,000 in the S&P 500 in 1980, it would be worth $1.1M today. Growth stocks outperformed in 2020-2021 but value stocks outperformed in 2022. Diversification across styles reduces risk.`,
      implementation: `Start categorizing every stock you see: is it large/mid/small cap? Growth, value, or dividend? This builds pattern recognition.`,
      actionItems: ['Categorize 10 well-known stocks into large/mid/small cap and growth/value/dividend', 'Compare 1-year returns of S&P 500 vs NASDAQ vs Dow Jones', 'Research: Why is the S&P 500 considered the benchmark for US stocks?', 'Identify 3 dividend stocks with 5+ years of consecutive dividend increases'],
      quiz: [
        { q: 'Which stock type typically has the highest growth potential but highest risk?', options: ['Large cap', 'Mid cap', 'Small cap', 'Blue chip'], answer: 2 },
        { q: 'What does the S&P 500 index track?', options: ['All US stocks', 'Top 500 US companies', 'Only tech stocks', 'Only banks'], answer: 1 }
      ],
      keyTakeaways: ['Diversify across market caps and investment styles', 'Index investing provides broad market exposure', 'Growth vs value styles rotate — owning both reduces risk', 'Dividend stocks provide income; growth stocks provide appreciation']
    }
  },
  {
    id: 'mkt-1-3', title: 'Order Types & Trading Mechanics', module: 'Stock Market Fundamentals', estimatedMinutes: 15,
    content: {
      theory: `**Order Types**:\n1. **Market Order**: Buy/sell immediately at current price (fast but price may slip)\n2. **Limit Order**: Buy/sell only at your specified price or better (controlled but may not execute)\n3. **Stop-Loss Order**: Automatically sell if price drops to a certain level (risk management)\n4. **Stop-Limit**: Stop-loss + limit order combined\n\n**Key Concepts**:\n• **Bid**: Highest price a buyer will pay\n• **Ask**: Lowest price a seller will accept\n• **Spread**: Difference between bid and ask\n• **Volume**: Number of shares traded\n• **Market Hours**: NYSE: 9:30 AM - 4:00 PM ET`,
      realWorldExample: `In high-volatility situations (earnings release, market crash), market orders can execute at very different prices than expected — this is called "slippage." During the 2010 Flash Crash, some stocks briefly traded at $0.01 because of cascading stop-loss orders. Always use limit orders for volatile stocks.`,
      implementation: `Practice placing different order types in your paper trading account. Understand when to use each type before risking real money.`,
      actionItems: ['In your paper trading account, place one of each order type', 'Set a stop-loss order 10% below a stock you\'re tracking', 'Compare bid-ask spreads for a large cap (AAPL) vs a small cap stock', 'Research: What is pre-market and after-hours trading?'],
      quiz: [
        { q: 'Which order type guarantees execution but not price?', options: ['Limit order', 'Market order', 'Stop-loss', 'Stop-limit'], answer: 1 },
        { q: 'What is the bid-ask spread?', options: ['Difference between open and close price', 'Difference between highest buyer and lowest seller price', 'Daily price range', 'Commission fee'], answer: 1 }
      ],
      keyTakeaways: ['Use limit orders to control your entry/exit prices', 'Stop-loss orders protect against large losses', 'High spread = low liquidity = higher trading costs', 'Never use market orders for volatile or illiquid stocks']
    }
  },
  // ===== MODULE 2: Financial Statement Analysis =====
  {
    id: 'mkt-2-1', title: 'Reading Income Statements', module: 'Financial Statement Analysis', estimatedMinutes: 20,
    content: {
      theory: `The **Income Statement** shows profitability over a period.\n\n**Structure**:\nRevenue (top line)\n- Cost of Goods Sold (COGS)\n= **Gross Profit** (Gross Margin = GP/Revenue)\n- Operating Expenses (SGA, R&D)\n= **Operating Income** (EBIT)\n- Interest, Taxes\n= **Net Income** (bottom line, EPS)\n\n**Key Margins**:\n• Gross Margin: Efficiency of production\n• Operating Margin: Efficiency of business operations\n• Net Margin: Overall profitability\n\nCompare margins across competitors and over time (trends).`,
      realWorldExample: `Apple's gross margin: ~45% (premium pricing power). Amazon's gross margin: ~47% but net margin is only ~5% (reinvests heavily in growth). A shrinking gross margin over time is a red flag — it means the company is losing pricing power. Microsoft's net margin of 35%+ shows exceptional efficiency.`,
      implementation: `Pull up the income statement for any company you're interested in (available on Yahoo Finance for free). Practice identifying revenue, gross profit, and net income.`,
      actionItems: ['Read Apple\'s (AAPL) latest income statement on Yahoo Finance', 'Calculate gross margin, operating margin, and net margin', 'Compare these margins to a competitor (e.g., Samsung or Microsoft)', 'Identify the trend over the last 3 years — margins improving or declining?'],
      quiz: [
        { q: 'What does gross profit represent?', options: ['Revenue minus all expenses', 'Revenue minus cost of goods sold', 'Net income plus taxes', 'Total assets minus liabilities'], answer: 1 },
        { q: 'A declining gross margin over time suggests:', options: ['Growing efficiency', 'Losing pricing power', 'Better cost management', 'Higher revenue'], answer: 1 }
      ],
      keyTakeaways: ['Revenue is vanity, profit is sanity, cash is king', 'Always look at margins, not just absolute numbers', 'Compare margins to competitors and track trends over time', 'High margins + growing revenue = strong business']
    }
  },
  {
    id: 'mkt-2-2', title: 'Reading Balance Sheets', module: 'Financial Statement Analysis', estimatedMinutes: 20,
    content: {
      theory: `The **Balance Sheet** shows a company's financial position at a point in time.\n\n**Fundamental Equation**: Assets = Liabilities + Shareholders' Equity\n\n**Assets** (what the company owns):\n• Current Assets: Cash, receivables, inventory (convert to cash within 1 year)\n• Non-Current Assets: Property, equipment, goodwill, patents\n\n**Liabilities** (what the company owes):\n• Current: Payable within 1 year (accounts payable, short-term debt)\n• Non-Current: Long-term debt, pension obligations\n\n**Equity**: Book value belonging to shareholders = Assets - Liabilities`,
      realWorldExample: `Apple sits on $60B+ in cash — they could buy entire countries. High cash = flexibility, safety, and acquisition ability. Tesla once had more debt than equity (negative book value), which was risky. Companies with too much debt (like WeWork with $47B in lease liabilities) face bankruptcy risk during downturns.`,
      implementation: `For any stock you consider buying, check: Is the company more asset-heavy or liability-heavy? How much cash do they have? Can they survive 2 years without revenue?`,
      actionItems: ['Read Google\'s (GOOGL) balance sheet on Yahoo Finance', 'Calculate the debt-to-equity ratio', 'Check how much cash vs debt the company holds', 'Compare the balance sheet strength of 2 competitors in the same industry'],
      quiz: [
        { q: 'What must always balance on a balance sheet?', options: ['Revenue and expenses', 'Profits and losses', 'Assets and Liabilities + Equity', 'Cash and debt'], answer: 2 },
        { q: 'A company with high cash and low debt is generally:', options: ['At risk of bankruptcy', 'In a strong financial position', 'Underperforming', 'Overvalued'], answer: 1 }
      ],
      keyTakeaways: ['Assets = Liabilities + Equity — always', 'Cash is king — especially during crises', 'High debt levels increase risk during downturns', 'Compare balance sheets within the same industry for meaningful analysis']
    }
  },
  {
    id: 'mkt-2-3', title: 'Cash Flow Statement', module: 'Financial Statement Analysis', estimatedMinutes: 15,
    content: {
      theory: `The **Cash Flow Statement** shows actual cash moving in and out.\n\n**Three sections**:\n1. **Operating Cash Flow (OCF)**: Cash from core business (most important)\n2. **Investing Cash Flow**: Capital expenditures, acquisitions, asset sales\n3. **Financing Cash Flow**: Borrowing, repaying debt, dividends, buybacks\n\n**Free Cash Flow (FCF)** = Operating Cash Flow - Capital Expenditures\nFCF is what's truly available to shareholders — the "real" profit.\n\n**Why it matters**: Net income can be manipulated with accounting. Cash flow cannot. "Cash is fact, profit is opinion."`,
      realWorldExample: `Amazon had negative net income for years but positive operating cash flow — because of their negative working capital cycle (they collect from customers before paying suppliers). This is why the stock kept rising despite "no profit." Enron reported profits while cash flow was negative — a major red flag that predicted their collapse.`,
      implementation: `When evaluating any stock, always check if the company generates positive free cash flow. Positive FCF = the company makes real money.`,
      actionItems: ['Find the cash flow statement for a company you follow', 'Calculate Free Cash Flow (OCF - CapEx)', 'Compare net income vs operating cash flow — are they aligned?', 'Research: What does it mean when a company has positive income but negative cash flow?'],
      quiz: [
        { q: 'What is Free Cash Flow?', options: ['Revenue minus expenses', 'Operating cash flow minus capital expenditures', 'Net income minus taxes', 'Total assets minus liabilities'], answer: 1 },
        { q: 'Why is cash flow considered more reliable than net income?', options: ['It\'s always higher', 'Cash can\'t be manipulated with accounting tricks', 'It includes future projections', 'Government regulates it more'], answer: 1 }
      ],
      keyTakeaways: ['"Cash is fact, profit is opinion"', 'Free Cash Flow is the true measure of a company\'s cash-generating ability', 'Always compare net income to operating cash flow for discrepancies', 'Negative cash flow with positive income is a red flag']
    }
  },
  // ===== MODULE 3: Valuation Methods =====
  {
    id: 'mkt-3-1', title: 'P/E Ratio & Valuation Multiples', module: 'Valuation Methods', estimatedMinutes: 20,
    content: {
      theory: `**Valuation Multiples** help you determine if a stock is cheap or expensive.\n\n**P/E Ratio** = Stock Price / Earnings Per Share\n• Low P/E (<15): Potentially undervalued or slow growth\n• High P/E (>30): Potentially overvalued or high growth expected\n• Compare within same industry only\n\n**Other Key Multiples**:\n• **P/B** (Price/Book): Stock price vs book value. Below 1 = trading below assets.\n• **EV/EBITDA**: Enterprise Value / EBITDA. Better than P/E for comparing companies with different capital structures.\n• **P/S** (Price/Sales): For pre-profit companies. Lower is better.\n• **PEG Ratio**: P/E / Growth rate. PEG < 1 = undervalued relative to growth.`,
      realWorldExample: `Amazon's P/E was 1,000+ in early 2010s — seemed insanely expensive. But its PEG ratio was ~1.5 because growth was so high. Investors who understood this made 10x returns. Meanwhile, a bank trading at 8x P/E may be "cheap" but banks are slow-growth. Always compare P/E within the same sector.`,
      implementation: `For every stock you consider, check: P/E relative to industry average, PEG ratio, and trend over time. Never rely on a single metric.`,
      actionItems: ['Calculate the P/E ratio for 5 stocks in the same sector', 'Find the PEG ratio for a growth stock (e.g., NVDA) and a value stock (e.g., JPM)', 'Compare EV/EBITDA across 3 competitor companies', 'Determine: is your favorite stock trading above or below its 5-year average P/E?'],
      quiz: [
        { q: 'What does a high P/E ratio generally indicate?', options: ['Stock is cheap', 'High growth expectations', 'Company is unprofitable', 'Low risk'], answer: 1 },
        { q: 'PEG ratio below 1 suggests:', options: ['Overvalued stock', 'Undervalued relative to growth', 'No earnings', 'High debt'], answer: 1 }
      ],
      keyTakeaways: ['No single metric tells the whole story', 'Always compare multiples within the same industry', 'PEG ratio accounts for growth and is often more useful than P/E alone', 'A low P/E can be a "value trap" — cheap for a reason']
    }
  },
  {
    id: 'mkt-3-2', title: 'DCF Valuation', module: 'Valuation Methods', estimatedMinutes: 20,
    content: {
      theory: `**Discounted Cash Flow (DCF)**: The gold standard of intrinsic valuation.\n\n**Core Idea**: A company is worth the sum of all its future cash flows, discounted to present value.\n\n**Steps**:\n1. Project Free Cash Flow for 5-10 years\n2. Calculate Terminal Value (cash flows beyond projection period)\n3. Discount everything to present value using WACC (Weighted Average Cost of Capital)\n4. Sum = Enterprise Value. Subtract debt, add cash = Equity Value. Divide by shares = Intrinsic share price.\n\n**Discount Rate (WACC)**: Typically 8-12%. Higher = more conservative valuation.`,
      realWorldExample: `If Apple generates $100B FCF this year, growing at 5% for 10 years, with a 10% discount rate, the DCF value is ~$2.8T — close to its actual market cap, suggesting fair value. If a stock trades 20% below your DCF value, that's your "margin of safety" (Warren Buffett's principle).`,
      implementation: `Build a simple DCF model in a spreadsheet. Start with a company you know well. Adjust assumptions and see how sensitive the valuation is.`,
      actionItems: ['Watch a YouTube tutorial on building a DCF model', 'Build a simple 5-year DCF for one company in Google Sheets', 'Change the growth rate and discount rate — observe how valuation changes', 'Compare your DCF-derived value to the current stock price'],
      quiz: [
        { q: 'What does DCF stand for?', options: ['Direct Cash Finance', 'Discounted Cash Flow', 'Dividend Capital Fund', 'Debt Coverage Factor'], answer: 1 },
        { q: 'Why do we discount future cash flows?', options: ['Inflation reduces value', 'Money today is worth more than money tomorrow', 'Companies might lie', 'Government requires it'], answer: 1 }
      ],
      keyTakeaways: ['DCF is the most fundamental valuation method', 'The value of any asset is the present value of its future cash flows', 'DCF is highly sensitive to assumptions — use conservative estimates', 'Always maintain a "margin of safety" between intrinsic value and price']
    }
  },
  // ===== MODULE 4: Technical Analysis =====
  {
    id: 'mkt-4-1', title: 'Chart Reading & Candlesticks', module: 'Technical Analysis', estimatedMinutes: 15,
    content: {
      theory: `**Technical Analysis** studies price patterns and trends to predict future movements.\n\n**Candlestick Charts**: Each candle shows:\n• Open, High, Low, Close prices for a period\n• Green/White = Price went up (close > open)\n• Red/Black = Price went down (close < open)\n• Body = Open-to-Close range\n• Wicks/Shadows = High and Low extremes\n\n**Key Patterns**:\n• Doji: Indecision (open ≈ close)\n• Hammer: Potential reversal at bottom\n• Engulfing: Strong reversal signal\n• Morning/Evening Star: 3-candle reversal patterns`,
      realWorldExample: `A "hammer" pattern on Tesla stock at $100 in January 2023 signaled a bottom — the stock then rallied to $300+. Candlestick patterns originated in 18th-century Japanese rice trading. While not foolproof, combining patterns with other indicators improves accuracy from ~50% to ~60-65%.`,
      implementation: `Start reading daily candlestick charts for stocks you follow. Practice identifying basic patterns. Use free charting tools like TradingView.`,
      actionItems: ['Open TradingView (free) and switch to candlestick charts', 'Study the last 30 days of any stock and identify 3 candle patterns', 'Learn to read: green vs red candles, body size, wick length', 'Paper trade one stock based on a candlestick pattern you identify'],
      quiz: [
        { q: 'What does a long lower wick (shadow) indicate?', options: ['Strong selling pressure', 'Buyers pushed price back up from lows', 'Low trading volume', 'Stock split'], answer: 1 },
        { q: 'A "doji" candle indicates:', options: ['Strong buying', 'Strong selling', 'Market indecision', 'Market closed'], answer: 2 }
      ],
      keyTakeaways: ['Candlestick charts convey more information than line charts', 'Patterns indicate potential (not certain) future movements', 'Always combine candle patterns with other indicators', 'Practice pattern recognition daily — it\'s a skill that improves with time']
    }
  },
  {
    id: 'mkt-4-2', title: 'Moving Averages & Trends', module: 'Technical Analysis', estimatedMinutes: 15,
    content: {
      theory: `**Moving Averages** smooth out price action to identify trends.\n\n**Types**:\n• **SMA** (Simple Moving Average): Average of last N prices\n• **EMA** (Exponential Moving Average): Weights recent prices more heavily\n\n**Key Signals**:\n• Price above 200-day MA = Long-term uptrend\n• Price below 200-day MA = Long-term downtrend\n• **Golden Cross**: 50-day MA crosses ABOVE 200-day MA → Bullish\n• **Death Cross**: 50-day MA crosses BELOW 200-day MA → Bearish\n\n**Support & Resistance**: Price levels where buying/selling pressure concentrates.`,
      realWorldExample: `The S&P 500's 200-day moving average has been a reliable long-term trend indicator. Historically, being invested only when the S&P is above its 200-day MA would have avoided major crashes (2008, 2020, 2022) while capturing most of the upside. However, it generates false signals in sideways markets.`,
      implementation: `Add the 50-day and 200-day moving averages to your charts. Look for golden crosses and death crosses on stocks you follow.`,
      actionItems: ['Add 50-day and 200-day MAs to your TradingView charts', 'Check if the S&P 500 is currently above or below its 200-day MA', 'Find a recent Golden Cross or Death Cross on any major stock', 'Identify 3 support and resistance levels on a stock you follow'],
      quiz: [
        { q: 'What is a Golden Cross?', options: ['50-day MA crosses above 200-day MA', '200-day MA crosses above 50-day MA', 'Stock hits all-time high', 'P/E reaches zero'], answer: 0 },
        { q: 'What does the 200-day MA primarily indicate?', options: ['Short-term trend', 'Long-term trend', 'Daily volatility', 'Trading volume'], answer: 1 }
      ],
      keyTakeaways: ['Moving averages help identify the overall trend direction', 'The 200-day MA is the most watched long-term indicator', 'Golden Cross = bullish signal, Death Cross = bearish signal', 'No indicator is perfect — use multiple for confirmation']
    }
  },
  // ===== MODULE 5: Portfolio Theory =====
  {
    id: 'mkt-5-1', title: 'Asset Allocation & Diversification', module: 'Portfolio Theory & Asset Allocation', estimatedMinutes: 15,
    content: {
      theory: `**Asset Allocation**: How you divide your portfolio among different asset classes.\n\n**Asset Classes**: Stocks (growth), Bonds (stability), Real Estate (income), Cash (safety), Commodities (inflation hedge), Crypto (speculative).\n\n**Diversification**: "Don't put all eggs in one basket." Reduce risk by holding uncorrelated assets.\n\n**Age-Based Rule of Thumb**: Stock allocation = 100 - Your Age (or 110 - Age for more aggressive).\n• Age 25: 75-85% stocks, 15-25% bonds\n• Age 50: 50-60% stocks, 40-50% bonds\n\n**Rebalancing**: Periodically adjust back to target allocation (annually or when drift exceeds 5%).`,
      realWorldExample: `In 2022, stocks fell 20% but bonds also fell 13% — the worst year for the "60/40 portfolio" in decades. This teaches that diversification isn't about following rules blindly — it's about understanding correlations. During 2020 COVID crash, stocks fell 34% but gold rose 25%. True diversification means holding assets that don't all move together.`,
      implementation: `Determine your risk tolerance and create a target asset allocation. If you're young (20s-30s), lean heavily toward stocks for growth.`,
      actionItems: ['Determine your risk tolerance (conservative, moderate, aggressive)', 'Create a target asset allocation based on your age and goals', 'If you have existing investments, check if they match your target allocation', 'Research: What is correlation between different asset classes?'],
      quiz: [
        { q: 'What is the main purpose of diversification?', options: ['Maximize returns', 'Reduce risk', 'Avoid taxes', 'Increase income'], answer: 1 },
        { q: 'Using the "100 minus age" rule, a 30-year-old should have what % in stocks?', options: ['30%', '50%', '70%', '100%'], answer: 2 }
      ],
      keyTakeaways: ['Asset allocation determines ~90% of portfolio performance', 'Diversification reduces risk without necessarily reducing returns', 'Rebalance periodically to maintain target allocation', 'Your allocation should evolve as you age and goals change']
    }
  },
  // ===== MODULE 6: ETFs & Mutual Funds =====
  {
    id: 'mkt-6-1', title: 'Index Funds & ETFs', module: 'ETFs & Mutual Funds', estimatedMinutes: 15,
    content: {
      theory: `**Index Fund**: Passively tracks a market index (S&P 500, Nifty 50). Low cost, broad diversification.\n\n**ETF (Exchange-Traded Fund)**: Like an index fund but traded like a stock throughout the day.\n\n**Why Index Funds Win**:\n• 90%+ of active fund managers FAIL to beat the index over 15+ years\n• Expense ratio: Index fund (0.03-0.20%) vs Active fund (1-2%)\n• A 1% fee difference compounds to 25%+ less wealth over 30 years\n\n**Key ETFs**: VOO (S&P 500), QQQ (NASDAQ 100), VTI (Total US Market), SCHD (Dividend), VWO (Emerging Markets).`,
      realWorldExample: `Warren Buffett bet $1 million that an S&P 500 index fund would beat a basket of hedge funds over 10 years. He won decisively — the index fund returned 125.8% vs hedge funds' 36%. John Bogle (Vanguard founder) called index investing "the most important financial innovation in history."`,
      implementation: `For most investors, putting 80-90% of your stock allocation in low-cost index funds is the optimal strategy. It's simple, cheap, and historically unbeatable.`,
      actionItems: ['Research the expense ratios of 3 popular index funds/ETFs', 'Calculate how a 1% vs 0.1% expense ratio affects ₹10 lakh over 30 years at 12% returns', 'Compare 10-year returns: S&P 500 index fund vs average active mutual fund', 'Identify one index fund/ETF for each: US stocks, international stocks, bonds'],
      quiz: [
        { q: 'What percentage of active managers beat the index over 15+ years?', options: ['80%', '50%', 'Less than 10%', '30%'], answer: 2 },
        { q: 'Why are index funds cheaper than actively managed funds?', options: ['They hold fewer stocks', 'No fund manager making decisions (passive)', 'They only invest in cheap stocks', 'Government subsidizes them'], answer: 1 }
      ],
      keyTakeaways: ['Index funds beat 90%+ of active managers over long periods', 'Low expense ratios compound into massive savings over decades', 'Start with broad index funds before picking individual stocks', 'Warren Buffett recommends S&P 500 index funds for most investors']
    }
  },
  // ===== MODULE 7: Options & Derivatives =====
  {
    id: 'mkt-7-1', title: 'Options Basics', module: 'Options & Derivatives', estimatedMinutes: 20,
    content: {
      theory: `**Options** are contracts giving the right (not obligation) to buy or sell at a set price.\n\n**Call Option**: Right to BUY at strike price. You're bullish.\n**Put Option**: Right to SELL at strike price. You're bearish or hedging.\n\n**Key Terms**:\n• Strike Price: The agreed-upon price\n• Premium: Cost of the option contract\n• Expiration: Date the option expires\n• In the Money (ITM): Option has intrinsic value\n• Out of the Money (OTM): No intrinsic value yet\n\n**Greeks**: Delta (price sensitivity), Theta (time decay), Vega (volatility sensitivity), Gamma (rate of delta change).\n\n⚠️ Options are complex. Most beginners lose money. Learn extensively before trading.`,
      realWorldExample: `During 2021, retail traders on Reddit made millions buying cheap call options on GameStop. Some turned $5K into $1M+ in days. But most options expire worthless — 80% of options lose value at expiration. It's like buying lottery tickets unless you deeply understand the mechanics. Use options for hedging, not gambling.`,
      implementation: `DO NOT trade options yet. Study them theoretically. Use options strategy simulators (like OptionStrat) to understand payoff diagrams without risk.`,
      actionItems: ['Watch a beginner\'s guide to options on YouTube', 'Learn to read an options chain (available on any brokerage)', 'Use OptionStrat.com to visualize different option strategies', 'Understand why time decay (theta) makes options a losing game for most buyers'],
      quiz: [
        { q: 'A call option gives you the right to:', options: ['Sell at the strike price', 'Buy at the strike price', 'Borrow from the company', 'Receive dividends'], answer: 1 },
        { q: 'What percentage of options expire worthless?', options: ['20%', '50%', 'About 80%', '100%'], answer: 2 }
      ],
      keyTakeaways: ['Options are powerful but dangerous — study before trading', 'Most options expire worthless — time decay works against buyers', 'Use options for hedging existing positions, not speculation', 'Master stocks first, then explore options']
    }
  },
  // ===== MODULE 8: Risk Management =====
  {
    id: 'mkt-8-1', title: 'Risk Management Strategies', module: 'Risk Management', estimatedMinutes: 15,
    content: {
      theory: `**Risk Management Rules**:\n1. **Never invest more than you can afford to lose**\n2. **Position Sizing**: No single stock > 5-10% of portfolio\n3. **Stop-Loss**: Set predefined exit points (e.g., 15-20% below purchase price)\n4. **Dollar-Cost Averaging (DCA)**: Invest fixed amount regularly regardless of price\n5. **Hedging**: Use bonds, gold, or options to protect against downside\n\n**Risk Metrics**:\n• Beta: Stock volatility vs market. Beta >1 = more volatile than market.\n• Sharpe Ratio: Return per unit of risk. Higher = better risk-adjusted returns.\n• Max Drawdown: Largest peak-to-trough decline.`,
      realWorldExample: `During 2008, investors with 100% in stocks saw 55% losses. Those with 60/40 stock/bond portfolios lost only 25%. DCA investors who kept investing monthly through the crash ended up with 300%+ returns by 2019. The key is surviving the crash, not avoiding it.`,
      implementation: `Set up a monthly SIP/DCA into a diversified portfolio. Define your maximum acceptable loss before investing — never violate it.`,
      actionItems: ['Define your maximum loss tolerance for your total portfolio', 'Set up rules: max allocation per stock, stop-loss levels', 'Start a monthly SIP into an index fund', 'Calculate the beta of 3 stocks you follow'],
      quiz: [
        { q: 'What is dollar-cost averaging?', options: ['Buying at the cheapest time', 'Investing a fixed amount regularly', 'Converting between currencies', 'Buying only dollar-denominated stocks'], answer: 1 },
        { q: 'A stock with beta = 1.5 is:', options: ['50% less volatile than the market', '50% more volatile than the market', 'Exactly as volatile as the market', 'Not correlated with the market'], answer: 1 }
      ],
      keyTakeaways: ['Rule #1: Never lose money. Rule #2: Never forget Rule #1', 'Position sizing and stop-losses protect against catastrophic losses', 'Dollar-cost averaging removes emotion from investing', 'Risk management is the difference between surviving and thriving']
    }
  },
  // ===== MODULE 9: Behavioral Finance =====
  {
    id: 'mkt-9-1', title: 'Psychology of Investing', module: 'Behavioral Finance in Investing', estimatedMinutes: 15,
    content: {
      theory: `**Your biggest investment enemy is yourself.**\n\n**Common mistakes**:\n1. **Panic Selling**: Selling during crashes (locking in losses)\n2. **FOMO Buying**: Buying at peaks because others are making money\n3. **Overtrading**: Excessive buying/selling (fees eat returns)\n4. **Anchoring to Purchase Price**: Refusing to sell a losing stock because you paid more\n5. **Recency Bias**: Assuming recent performance will continue\n6. **Disposition Effect**: Selling winners too early, holding losers too long\n\n**Dalbar Study**: Average equity investor earns 3.6% vs S&P 500's 10% — the gap is entirely behavioral.`,
      realWorldExample: `In March 2020, investors who panic-sold at the COVID bottom missed one of the fastest recoveries in history — 70% rally in 9 months. Those who stayed invested or bought more doubled their money. Peter Lynch: "More money has been lost by investors preparing for corrections than in corrections themselves."`,
      implementation: `Write down your investment rules BEFORE investing. When emotions run high (panic or euphoria), follow your written rules, not your feelings.`,
      actionItems: ['Write a personal "Investment Policy Statement" — your rules for buying, selling, and holding', 'Identify 3 behavioral mistakes you\'ve made (or are tempted to make)', 'Set up automation for investing — removes emotional decision-making', 'Read: "The Psychology of Money" by Morgan Housel (key concepts at minimum)'],
      quiz: [
        { q: 'What is the "disposition effect"?', options: ['Disposing of all stocks during a crash', 'Selling winners early and holding losers too long', 'Buying too many stocks', 'Investing in throwaway companies'], answer: 1 },
        { q: 'How much does the average investor underperform the S&P 500?', options: ['1%', '3-4%', '6-7%', 'They outperform'], answer: 1 }
      ],
      keyTakeaways: ['Your behavior matters more than your stock picks', 'The average investor underperforms by 6% due to behavioral mistakes', 'Automate investing to remove emotion from the equation', 'Write your rules when calm, follow them when panicked']
    }
  },
  // ===== MODULE 10: Long-Term Strategy =====
  {
    id: 'mkt-10-1', title: 'Building a Long-Term Portfolio', module: 'Building a Long-Term Strategy', estimatedMinutes: 20,
    content: {
      theory: `**The Ultimate Investment Strategy for Regular People**:\n\n1. **Emergency Fund**: 6 months expenses in savings (do this FIRST)\n2. **Insure**: Health + term life insurance\n3. **Core Portfolio** (80%): Low-cost index funds (VOO/VTI for US, Nifty 50 for India)\n4. **Satellite** (15%): Individual stocks you've researched \n5. **Speculation** (5% MAX): Options, crypto, high-risk bets\n\n**SIP/DCA**: Invest same amount monthly on the same date. Never miss. Never try to time.\n\n**Time in the market beats timing the market.**\n\n**The 4% Rule**: In retirement, withdraw 4% annually. Need ₹5 lakh/month? You need ₹1.5 crore invested.`,
      realWorldExample: `A 25-year-old investing ₹15,000/month in an S&P 500 index fund at historical 10% returns will have ₹3.5 crore by age 55. The total invested: ₹54 lakh. Compounding added ₹3 crore. Starting at 35 instead? Only ₹1.05 crore. That 10-year delay costs ₹2.5 crore. START NOW.`,
      implementation: `Set up your investment architecture today: Emergency fund → Insurance → Monthly SIP into index fund. Then layer in individual stocks as you learn more.`,
      actionItems: ['Define your investment architecture using the 80/15/5 framework', 'Calculate your retirement number using the 4% rule', 'Set up a monthly SIP into a broad market index fund', 'Create a watchlist of 10 stocks for your "satellite" allocation and start researching'],
      quiz: [
        { q: 'What should you do BEFORE investing in stocks?', options: ['Learn technical analysis', 'Build an emergency fund and get insurance', 'Find a broker', 'Read Warren Buffett books'], answer: 1 },
        { q: 'Using the 4% rule, how much do you need for ₹1 lakh/month in retirement?', options: ['₹1.2 crore', '₹2 crore', '₹3 crore', '₹5 crore'], answer: 2 }
      ],
      keyTakeaways: ['Index funds should be your core holding (80%)', 'SIP/DCA is the most reliable wealth-building strategy', 'Time in the market beats timing the market — start now', 'The difference between starting at 25 vs 35 is millions']
    }
  }
];
