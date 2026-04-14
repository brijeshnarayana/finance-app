// Industry Sectors & Classification Systems — Comprehensive Data
// Covers GICS, NAICS, ICB, SIC, ISIC classification systems
// Primary focus: GICS (11 Sectors → 25 Industry Groups → 74 Industries → 163 Sub-Industries)

// ============ CLASSIFICATION SYSTEMS ============
export const classificationSystems = [
  {
    id: 'gics',
    name: 'GICS',
    fullName: 'Global Industry Classification Standard',
    createdBy: 'MSCI & S&P (1999)',
    structure: '11 Sectors → 25 Industry Groups → 74 Industries → 163 Sub-Industries',
    count: '11 sectors',
    description: 'The most widely used system by investors and analysts globally. Created by MSCI and Standard & Poor\'s, it classifies every publicly traded company into one of 11 sectors. Used by major index providers (S&P 500, MSCI World) and institutional investors for portfolio construction and benchmarking.',
    useCases: ['Portfolio construction', 'Sector rotation strategies', 'Equity research', 'ETF classification', 'Benchmark comparison'],
    icon: '🌐'
  },
  {
    id: 'naics',
    name: 'NAICS',
    fullName: 'North American Industry Classification System',
    createdBy: 'US/Canada/Mexico (1997)',
    structure: '20 Sectors → ~1,065 Industries',
    count: '20 sectors',
    description: 'The official classification used by statistical agencies in the US, Canada, and Mexico. Updated every 5 years to reflect economic changes. More granular than GICS — covers all economic activity including government and non-profit sectors.',
    useCases: ['Government statistics', 'Business registration', 'Market research', 'SBA loan classification', 'Census data'],
    icon: '🇺🇸'
  },
  {
    id: 'icb',
    name: 'ICB',
    fullName: 'Industry Classification Benchmark',
    createdBy: 'FTSE Russell (2005)',
    structure: '11 Industries → 20 Supersectors → 45 Sectors → 173 Subsectors',
    count: '11 industries',
    description: 'Used by FTSE Russell indices and the London Stock Exchange. Similar scope to GICS but with different naming conventions (what GICS calls "sectors," ICB calls "industries"). Popular in European and UK markets.',
    useCases: ['FTSE index classification', 'European equity research', 'LSE sector analysis', 'UK pension allocation'],
    icon: '🇬🇧'
  },
  {
    id: 'sic',
    name: 'SIC',
    fullName: 'Standard Industrial Classification',
    createdBy: 'US Government (1937)',
    structure: '10 Divisions → Industry Groups → Industries',
    count: '10 divisions',
    description: 'The original US classification system, now largely replaced by NAICS for statistical purposes. Still used by the SEC for company filings and by OSHA for workplace safety standards. Historical importance in understanding how sector analysis evolved.',
    useCases: ['SEC filings (10-K, 10-Q)', 'OSHA classifications', 'Historical analysis', 'Legal/regulatory references', 'IRS classifications'],
    icon: '🏛️'
  },
  {
    id: 'isic',
    name: 'ISIC',
    fullName: 'International Standard Industrial Classification',
    createdBy: 'United Nations (1948)',
    structure: '21 Sections → 88 Divisions → 238 Groups → 419 Classes',
    count: '21 sections',
    description: 'The United Nations\' classification system used internationally for comparing economic data across countries. Serves as the foundation that many national systems (including NAICS) are built upon. Essential for international development analysis and cross-country comparisons.',
    useCases: ['International comparisons', 'World Bank statistics', 'IMF reports', 'Development economics', 'Global trade analysis'],
    icon: '🇺🇳'
  }
];

// ============ GICS SECTORS (Primary Classification) ============
export const gicsSectors = [
  {
    id: 'energy',
    name: 'Energy',
    icon: '⚡',
    color: '#f59e0b',
    colorDim: 'rgba(245, 158, 11, 0.15)',
    gicsCode: '10',
    industryGroups: ['Energy Equipment & Services', 'Oil, Gas & Consumable Fuels'],
    industries: ['Oil & Gas Drilling', 'Oil & Gas Equipment & Services', 'Integrated Oil & Gas', 'Oil & Gas Exploration & Production', 'Oil & Gas Refining & Marketing', 'Oil & Gas Storage & Transportation', 'Coal & Consumable Fuels'],
    overview: {
      description: 'The Energy sector encompasses companies involved in the exploration, production, refining, marketing, storage, and transportation of oil, gas, and consumable fuels. It also includes companies providing energy equipment and services.',
      marketCap: '~$5.5 trillion globally',
      keyCharacteristics: [
        'Highly cyclical — tied to commodity prices (crude oil, natural gas)',
        'Capital-intensive with long investment cycles (5-10 years for new projects)',
        'Heavily regulated (environmental, safety, geopolitical)',
        'Transitioning: traditional fossil fuels vs. renewable energy pivot',
        'Dividends are a major component of total returns'
      ]
    },
    keyMetrics: [
      { name: 'Reserve Replacement Ratio (RRR)', description: 'New reserves found vs. oil produced. >100% means the company is growing its reserves.', formula: 'New Reserves Added / Production Volume', benchmark: '>100% is healthy' },
      { name: 'Finding & Development Cost (F&D)', description: 'Cost to find and develop each barrel of oil equivalent. Lower = more efficient.', formula: 'Total Exploration + Development Costs / New Reserves', benchmark: '<$15/boe is competitive' },
      { name: 'Netback', description: 'Revenue per barrel minus all costs. Shows profitability per unit of production.', formula: 'Revenue - Royalties - Operating Costs - Transportation', benchmark: 'Higher is better; compare within peers' },
      { name: 'Debt/EBITDA', description: 'Leverage ratio — how many years of earnings to pay off debt.', formula: 'Total Debt / EBITDA', benchmark: '<2x is conservative for energy' },
      { name: 'Breakeven Oil Price', description: 'Price per barrel at which the company breaks even.', formula: 'Total Costs / Production Volume', benchmark: '<$40/barrel is resilient' },
      { name: 'Dividend Yield', description: 'Annual dividends as % of stock price. Energy companies are known for high yields.', formula: 'Annual Dividends / Stock Price × 100', benchmark: '3-7% is typical for majors' }
    ],
    analysisFramework: {
      step1: { title: 'Understand the Commodity Cycle', description: 'Energy stocks are driven by oil/gas prices. Study supply-demand dynamics: OPEC decisions, US shale production, global demand growth (China/India), geopolitical risks (Middle East, Russia). Track WTI and Brent crude prices daily.' },
      step2: { title: 'Evaluate Reserves & Production', description: 'Look at proven reserves (1P), probable reserves (2P), and production growth rates. Reserve life index = reserves / annual production. Companies with 10+ years of reserve life have long runways.' },
      step3: { title: 'Assess Cost Structure', description: 'Compare breakeven oil prices across companies. Shale producers break even at $35-50/barrel, deepwater at $50-70, oil sands at $60-80. Low-cost producers survive downturns.' },
      step4: { title: 'Analyze Capital Allocation', description: 'How does management spend cash flow? Reinvestment in new projects vs. shareholder returns (dividends + buybacks). Post-2020, most energy majors shifted to 60% shareholder returns, 40% reinvestment.' },
      step5: { title: 'Evaluate Energy Transition Strategy', description: 'Is the company diversifying into renewables, hydrogen, or carbon capture? BP targets 50GW renewables by 2030. Shell is investing in EV charging networks. Transition readiness affects long-term valuation.' }
    },
    topCompanies: [
      { name: 'ExxonMobil (XOM)', region: 'US', note: 'Largest US energy company, integrated oil major' },
      { name: 'Saudi Aramco', region: 'SAU', note: 'World\'s most profitable company, lowest production cost' },
      { name: 'Chevron (CVX)', region: 'US', note: 'Strong Permian Basin position, disciplined capital allocation' },
      { name: 'Shell (SHEL)', region: 'UK/NL', note: 'Aggressive energy transition strategy, LNG leader' },
      { name: 'TotalEnergies (TTE)', region: 'FRA', note: 'Most diversified European major, growing renewables' },
      { name: 'Reliance Industries', region: 'IND', note: 'India\'s largest refiner, diversifying into telecom/retail' }
    ],
    growthDrivers: ['Global energy demand growth (emerging markets)', 'LNG expansion (cleaner than coal)', 'Energy security concerns post-Ukraine war', 'Petrochemical demand growth', 'Strategic petroleum reserve management'],
    riskFactors: ['Oil price volatility', 'Regulatory/environmental pressure', 'Stranded asset risk from energy transition', 'Geopolitical disruptions', 'Carbon tax and ESG exclusions']
  },
  {
    id: 'materials',
    name: 'Materials',
    icon: '🏗️',
    color: '#78716c',
    colorDim: 'rgba(120, 113, 108, 0.15)',
    gicsCode: '15',
    industryGroups: ['Materials'],
    industries: ['Chemicals', 'Construction Materials', 'Containers & Packaging', 'Metals & Mining', 'Paper & Forest Products'],
    overview: {
      description: 'The Materials sector includes companies that manufacture chemicals, construction materials, glass, paper, forest products, metals, minerals, and mining companies. These companies provide the raw inputs for manufacturing and construction.',
      marketCap: '~$2.5 trillion globally',
      keyCharacteristics: [
        'Cyclical — demand tied to economic growth and construction activity',
        'Commodity-driven pricing with limited pricing power',
        'Capital-intensive operations with long asset lives',
        'Significant environmental regulations (emissions, waste)',
        'Global supply chains with currency exposure'
      ]
    },
    keyMetrics: [
      { name: 'All-In Sustaining Cost (AISC)', description: 'Total cost to produce one unit including maintenance capex. Key for miners.', formula: 'Cash Costs + Sustaining Capex + G&A', benchmark: 'Below commodity price = profitable' },
      { name: 'Gross Margin', description: 'Revenue minus cost of goods sold. Shows raw profitability before overheads.', formula: '(Revenue - COGS) / Revenue × 100', benchmark: '25-40% for specialty chemicals' },
      { name: 'Asset Turnover', description: 'Revenue generated per dollar of assets. Efficiency measure for capital-heavy businesses.', formula: 'Revenue / Total Assets', benchmark: '0.5-1.0x for materials companies' },
      { name: 'Reserve Life', description: 'How many years of reserves remain at current production rates.', formula: 'Total Reserves / Annual Production', benchmark: '10+ years is comfortable' },
      { name: 'ROIC (Return on Invested Capital)', description: 'Measures how effectively the company uses capital to generate returns.', formula: 'NOPAT / Invested Capital × 100', benchmark: '>10% exceeds cost of capital' }
    ],
    analysisFramework: {
      step1: { title: 'Track Commodity Prices', description: 'Materials companies are price-takers. Track copper, aluminum, steel, gold, lithium prices. Understand supply-demand for each commodity. China consumes ~50% of global metals — China\'s economic data is critical.' },
      step2: { title: 'Assess Cost Position', description: 'Where does the company sit on the global cost curve? First-quartile producers survive downturns. Compare AISC to peers and current commodity prices. Low-cost producers have the widest margins.' },
      step3: { title: 'Evaluate Asset Quality', description: 'For miners: ore grade, reserve life, geographic location (jurisdictional risk). For chemicals: technology differentiation, feedstock advantages, downstream integration.' },
      step4: { title: 'Analyze Cycle Position', description: 'Materials are cyclical. Buy when P/E looks "expensive" (trough earnings) and sell when P/E looks "cheap" (peak earnings). Countercyclical investing is key here.' },
      step5: { title: 'Consider Structural Trends', description: 'Electric vehicles need copper, lithium, nickel. Green infrastructure needs steel, rare earths. Urbanization in India/Africa drives cement and construction materials demand.' }
    },
    topCompanies: [
      { name: 'BHP Group', region: 'AUS', note: 'World\'s largest diversified miner' },
      { name: 'Linde (LIN)', region: 'US/GER', note: 'Industrial gases leader, essential for semiconductor manufacturing' },
      { name: 'Rio Tinto', region: 'UK/AUS', note: 'Iron ore, aluminum, copper mining leader' },
      { name: 'BASF', region: 'GER', note: 'World\'s largest chemical company by revenue' },
      { name: 'Tata Steel', region: 'IND', note: 'India\'s largest steel producer, global operations' },
      { name: 'Freeport-McMoRan (FCX)', region: 'US', note: 'World\'s largest publicly traded copper producer' }
    ],
    growthDrivers: ['Electric vehicle revolution (lithium, copper, nickel)', 'Infrastructure spending globally', 'Urbanization in emerging markets', 'Semiconductor expansion (specialty chemicals)', 'Green energy transition materials'],
    riskFactors: ['Commodity price volatility', 'China demand slowdown', 'Environmental and safety regulations', 'Geopolitical risk in mining jurisdictions', 'Substitution risk from new materials']
  },
  {
    id: 'industrials',
    name: 'Industrials',
    icon: '🏭',
    color: '#6366f1',
    colorDim: 'rgba(99, 102, 241, 0.15)',
    gicsCode: '20',
    industryGroups: ['Capital Goods', 'Commercial & Professional Services', 'Transportation'],
    industries: ['Aerospace & Defense', 'Building Products', 'Construction & Engineering', 'Electrical Equipment', 'Industrial Conglomerates', 'Machinery', 'Trading Companies & Distributors', 'Commercial Services & Supplies', 'Professional Services', 'Air Freight & Logistics', 'Passenger Airlines', 'Marine Transportation', 'Ground Transportation', 'Transportation Infrastructure'],
    overview: {
      description: 'The Industrials sector includes manufacturers of capital goods, providers of commercial services and supplies, and transportation companies. It is the backbone of economic infrastructure — from factories to railways to defense systems.',
      marketCap: '~$6 trillion globally',
      keyCharacteristics: [
        'Tied to economic/business cycle — capex spending drives demand',
        'Large backlogs provide revenue visibility (defense, aerospace)',
        'Mix of cyclical (machinery) and defensive (waste management) subsectors',
        'Strong M&A activity — consolidation creates scale advantages',
        'Government spending is a major demand driver (defense, infrastructure)'
      ]
    },
    keyMetrics: [
      { name: 'Book-to-Bill Ratio', description: 'New orders divided by revenue. >1 means backlog is growing (bullish signal).', formula: 'New Orders / Revenue', benchmark: '>1.0 indicates growing demand' },
      { name: 'Backlog', description: 'Total value of orders received but not yet delivered. Revenue visibility indicator.', formula: 'Cumulative unfilled orders', benchmark: 'Higher is better; compare trend' },
      { name: 'Operating Margin', description: 'Profitability before interest and taxes. Shows operational efficiency.', formula: 'Operating Income / Revenue × 100', benchmark: '12-20% for well-run industrials' },
      { name: 'Free Cash Flow Conversion', description: 'What % of earnings convert to actual cash. Quality of earnings indicator.', formula: 'Free Cash Flow / Net Income × 100', benchmark: '>90% is excellent' },
      { name: 'Capex-to-Revenue', description: 'How much revenue is reinvested in capital expenditure.', formula: 'Capital Expenditure / Revenue × 100', benchmark: '3-6% for asset-light; 8-15% for heavy' }
    ],
    analysisFramework: {
      step1: { title: 'Assess the Business Cycle', description: 'Industrials are cyclical. Track leading indicators: PMI (Purchasing Managers Index), durable goods orders, and industrial production data. PMI >50 signals expansion; <50 signals contraction.' },
      step2: { title: 'Evaluate Order Backlog', description: 'A growing backlog (book-to-bill >1) provides revenue visibility and pricing power. Defense companies often have multi-year backlogs worth billions. Track quarterly order trends.' },
      step3: { title: 'Analyze Competitive Moat', description: 'Look for switching costs (installed base requiring proprietary parts/service), regulatory barriers (defense clearance), distribution networks, and brand loyalty. Industrial moats are often underappreciated.' },
      step4: { title: 'Study Margin Expansion Drivers', description: 'Pricing power (contracts with escalation clauses), productivity improvements (automation), mix shift toward higher-margin aftermarket/services revenue, and restructuring benefits.' },
      step5: { title: 'Monitor Government Policy', description: 'Defense budgets, infrastructure bills, environmental regulations, and trade policy all significantly impact industrials. The US Infrastructure Bill ($1.2T) and defense spending increases create multi-year tailwinds.' }
    },
    topCompanies: [
      { name: 'Caterpillar (CAT)', region: 'US', note: 'Construction and mining equipment leader' },
      { name: 'Boeing (BA)', region: 'US', note: 'Commercial aircraft duopoly with Airbus' },
      { name: 'Honeywell (HON)', region: 'US', note: 'Diversified industrial — aerospace, automation, building tech' },
      { name: 'Siemens', region: 'GER', note: 'Europe\'s largest industrial company, factory automation leader' },
      { name: 'Larsen & Toubro (L&T)', region: 'IND', note: 'India\'s infrastructure and engineering powerhouse' },
      { name: 'Union Pacific (UNP)', region: 'US', note: 'Largest US railroad, critical freight corridor' }
    ],
    growthDrivers: ['Infrastructure modernization (bridges, highways, airports)', 'Defense spending increase globally', 'Reshoring of manufacturing', 'Factory automation and Industry 4.0', 'Decarbonization of industrial processes'],
    riskFactors: ['Economic recession reduces capital spending', 'Supply chain disruptions', 'Rising input costs (energy, raw materials)', 'Geopolitical trade restrictions', 'Labor shortages in skilled manufacturing']
  },
  {
    id: 'consumer-discretionary',
    name: 'Consumer Discretionary',
    icon: '🛍️',
    color: '#ec4899',
    colorDim: 'rgba(236, 72, 153, 0.15)',
    gicsCode: '25',
    industryGroups: ['Automobiles & Components', 'Consumer Durables & Apparel', 'Consumer Services', 'Retailing'],
    industries: ['Auto Components', 'Automobiles', 'Household Durables', 'Leisure Products', 'Textiles, Apparel & Luxury Goods', 'Hotels, Restaurants & Leisure', 'Diversified Consumer Services', 'Broadline Retail', 'Specialty Retail'],
    overview: {
      description: 'Consumer Discretionary includes companies that sell non-essential goods and services — things people want but don\'t need. Spending here rises when the economy is strong and falls during recessions, making it one of the most cyclical sectors.',
      marketCap: '~$7 trillion globally',
      keyCharacteristics: [
        'Highly cyclical — consumer confidence and disposable income drive spending',
        'Brand value and customer loyalty are critical competitive advantages',
        'E-commerce disruption has reshaped retail dramatically',
        'Includes both luxury (LVMH) and mass market (Amazon) companies',
        'Consumer sentiment data is a leading indicator'
      ]
    },
    keyMetrics: [
      { name: 'Same-Store Sales Growth (SSSG)', description: 'Revenue growth from existing stores, excluding new openings. True organic growth measure for retailers.', formula: '(Current Year Store Sales - Prior Year) / Prior Year × 100', benchmark: '3-5% is healthy; >5% is strong' },
      { name: 'Inventory Turnover', description: 'How many times inventory is sold and replaced. Higher = more efficient.', formula: 'Cost of Goods Sold / Average Inventory', benchmark: '5-10x for most retailers' },
      { name: 'Customer Acquisition Cost (CAC)', description: 'Cost to acquire each new customer. Critical for e-commerce/D2C brands.', formula: 'Total Marketing Cost / New Customers Acquired', benchmark: 'Varies widely; compare to LTV' },
      { name: 'Lifetime Value (LTV)', description: 'Total revenue expected from a customer over their relationship with the brand.', formula: 'Avg Purchase × Frequency × Customer Lifespan', benchmark: 'LTV/CAC >3 is the gold standard' },
      { name: 'Gross Margin', description: 'Revenue minus COGS. Indicates pricing power and brand strength.', formula: '(Revenue - COGS) / Revenue × 100', benchmark: '60%+ for luxury; 25-40% for mass market' }
    ],
    analysisFramework: {
      step1: { title: 'Monitor Consumer Health', description: 'Track consumer confidence index, personal income growth, unemployment rate, and credit card spending data. Consumer discretionary spending correlates strongly with these macro indicators.' },
      step2: { title: 'Evaluate Brand Strength', description: 'Strong brands command premium pricing and customer loyalty. Look at brand rankings (Interbrand), social media following, NPS scores, and repeat purchase rates. Brand equity is key.' },
      step3: { title: 'Analyze E-commerce Strategy', description: 'What percentage of sales is online? How fast is it growing? D2C margins are higher but CAC can be expensive. Omnichannel capabilities (buy online, pick up in store) are increasingly essential.' },
      step4: { title: 'Study Unit Economics', description: 'For retailers: revenue per sq ft, SSSG, inventory turnover. For e-commerce: CAC, LTV, contribution margin per order. For auto: units sold, average selling price, mix shift to EVs.' },
      step5: { title: 'Assess Competitive Position', description: 'Market share trends, competitive moat (scale for Amazon, brand for LVMH, network for Uber). Is the company gaining or losing share? What structural advantages protect its position?' }
    },
    topCompanies: [
      { name: 'Amazon (AMZN)', region: 'US', note: 'World\'s largest online retailer, AWS cloud leader' },
      { name: 'Tesla (TSLA)', region: 'US', note: 'EV leader, energy storage, autonomous driving' },
      { name: 'LVMH', region: 'FRA', note: 'World\'s largest luxury conglomerate (Louis Vuitton, Dior, Hennessy)' },
      { name: 'Toyota Motor', region: 'JPN', note: 'World\'s largest automaker by volume, hybrid pioneer' },
      { name: 'Home Depot (HD)', region: 'US', note: 'Largest home improvement retailer globally' },
      { name: 'Titan Company', region: 'IND', note: 'India\'s leading consumer brand (Tanishq jewelry, watches)' }
    ],
    growthDrivers: ['Rising middle class in emerging markets', 'E-commerce penetration growth', 'EV transition in automotive', 'Luxury demand from wealth creation', 'Experience economy (travel, dining)'],
    riskFactors: ['Economic recession reduces discretionary spending', 'Consumer preference shifts', 'E-commerce competition compressing margins', 'Supply chain disruptions', 'Rising raw material and freight costs']
  },
  {
    id: 'consumer-staples',
    name: 'Consumer Staples',
    icon: '🛒',
    color: '#22c55e',
    colorDim: 'rgba(34, 197, 94, 0.15)',
    gicsCode: '30',
    industryGroups: ['Food, Beverage & Tobacco', 'Household & Personal Products', 'Food & Staples Retailing'],
    industries: ['Beverages', 'Food Products', 'Tobacco', 'Household Products', 'Personal Care Products', 'Consumer Staples Distribution & Retail'],
    overview: {
      description: 'Consumer Staples companies sell essential everyday products — food, beverages, household goods, and personal care items. People buy these regardless of economic conditions, making this one of the most defensive sectors.',
      marketCap: '~$4 trillion globally',
      keyCharacteristics: [
        'Defensive — demand remains stable during recessions',
        'Consistent cash flows and reliable dividends',
        'Strong brands with deep consumer loyalty',
        'Pricing power through brand recognition',
        'Lower growth but lower volatility than market'
      ]
    },
    keyMetrics: [
      { name: 'Organic Revenue Growth', description: 'Revenue growth excluding acquisitions and currency effects. Shows true business momentum.', formula: 'Comparable Revenue Growth (excl. M&A and FX)', benchmark: '3-5% is solid for staples' },
      { name: 'Gross Margin', description: 'Raw profitability — how much of revenue remains after COGS.', formula: '(Revenue - COGS) / Revenue × 100', benchmark: '40-60% for branded staples' },
      { name: 'Dividend Yield', description: 'Annual dividend as % of stock price. Staples are prized dividend payers.', formula: 'Annual Dividends / Stock Price × 100', benchmark: '2.5-4% is typical' },
      { name: 'Volume vs. Price Growth', description: 'Breaking down revenue growth into units sold vs. price increases is critical for understanding sustainability.', formula: 'Revenue Growth = Volume Growth + Price Growth', benchmark: 'Balanced mix is healthiest' },
      { name: 'Market Share', description: 'Company\'s % of total category sales. Market share gains/losses signal competitive health.', formula: 'Company Sales / Total Category Sales × 100', benchmark: 'Stable or growing is positive' }
    ],
    analysisFramework: {
      step1: { title: 'Assess Brand Portfolio', description: 'Strong staples companies own multiple billion-dollar brands. Evaluate brand market share, consumer preference data, and brand health surveys. Companies with strong brands can raise prices above inflation.' },
      step2: { title: 'Analyze Volume vs. Price', description: 'Is growth coming from selling more units (sustainable) or just raising prices (potentially unsustainable)? Pure pricing-driven growth without volume can lead to down-trading risk.' },
      step3: { title: 'Evaluate Distribution Reach', description: 'For staples, being available everywhere matters. Analyze geographic reach, channel mix (modern trade vs. traditional), and distribution depth especially in emerging markets like India, Africa.' },
      step4: { title: 'Study Input Cost Exposure', description: 'Raw materials (palm oil, wheat, packaging, energy) directly impact margins. How well does the company hedge commodity costs? Does it have backward integration or long-term supply contracts?' },
      step5: { title: 'Consider Dividend Safety', description: 'Staples are often bought for income. Check dividend payout ratio (<70% is safe), free cash flow coverage, and consecutive years of dividend growth. Companies like P&G have 60+ years of increases.' }
    },
    topCompanies: [
      { name: 'Procter & Gamble (PG)', region: 'US', note: '65+ consecutive dividend increases, global household brands' },
      { name: 'Nestlé', region: 'CHE', note: 'World\'s largest food company, 2,000+ brands' },
      { name: 'Coca-Cola (KO)', region: 'US', note: 'Most recognized brand globally, 60+ years of dividend growth' },
      { name: 'Unilever', region: 'UK/NL', note: '400+ brands in 190 countries, strong emerging market presence' },
      { name: 'Hindustan Unilever', region: 'IND', note: 'India\'s largest FMCG company, 90% household penetration' },
      { name: 'ITC Limited', region: 'IND', note: 'India conglomerate — FMCG, hotels, packaging, agri-business' }
    ],
    growthDrivers: ['Population growth in emerging markets', 'Premiumization (consumers trading up)', 'Health & wellness trends', 'E-commerce channel expansion', 'Emerging market penetration'],
    riskFactors: ['Input cost inflation (commodities, packaging)', 'Private label/store brand competition', 'Changing consumer preferences', 'Currency headwinds from global operations', 'Regulatory changes (sugar tax, plastic bans)']
  },
  {
    id: 'healthcare',
    name: 'Health Care',
    icon: '🏥',
    color: '#14b8a6',
    colorDim: 'rgba(20, 184, 166, 0.15)',
    gicsCode: '35',
    industryGroups: ['Health Care Equipment & Services', 'Pharmaceuticals, Biotechnology & Life Sciences'],
    industries: ['Health Care Equipment & Supplies', 'Health Care Providers & Services', 'Health Care Technology', 'Biotechnology', 'Pharmaceuticals', 'Life Sciences Tools & Services'],
    overview: {
      description: 'Health Care includes pharmaceutical companies, biotechnology firms, medical device makers, health care providers, and life sciences tools companies. It combines defensive characteristics (people always need healthcare) with growth potential (innovation in biotech, genomics, AI).',
      marketCap: '~$7 trillion globally',
      keyCharacteristics: [
        'Mix of defensive (pharma) and high-growth (biotech) subsectors',
        'Innovation-driven — R&D spending is the primary growth engine',
        'Regulatory-intensive (FDA approvals, patent expirations)',
        'Patent cliffs create predictable revenue decline risks',
        'Aging global population is a structural tailwind'
      ]
    },
    keyMetrics: [
      { name: 'R&D-to-Revenue', description: 'Percentage of revenue invested in research. Critical for future pipeline value.', formula: 'R&D Expense / Revenue × 100', benchmark: '15-25% for pharma; 50%+ for early biotech' },
      { name: 'Pipeline Value', description: 'Estimated future revenue from drugs in development. Risk-adjusted based on clinical trial stages.', formula: 'Sum of (Revenue Potential × Probability of Approval) per drug', benchmark: 'Should exceed revenue from patents expiring' },
      { name: 'Revenue per Drug', description: 'Average revenue generated by each commercial product. Indicates blockbuster potential.', formula: 'Total Revenue / Number of Commercial Products', benchmark: '$1B+ = blockbuster drug' },
      { name: 'Patent Expiry Exposure', description: 'Revenue at risk from patents expiring in next 5 years. Key risk indicator.', formula: 'Revenue from drugs losing patent protection', benchmark: '<30% of revenue in 5-year window' },
      { name: 'FDA/EMA Approval Rate', description: 'Success rate of drugs moving from clinical trials to approval.', formula: 'Approved Drugs / Total Submissions', benchmark: 'Phase 3 to approval: ~60-70%' }
    ],
    analysisFramework: {
      step1: { title: 'Evaluate the Pipeline', description: 'For pharma/biotech, the pipeline IS the company. Analyze drugs in Phase 1/2/3 trials, their target markets, competitive landscape, and probability of success. A strong pipeline with diversified therapeutic areas reduces risk.' },
      step2: { title: 'Understand Patent Cliff Risk', description: 'Map out when key drug patents expire. Generic/biosimilar competition typically erodes 80-90% of branded drug revenue within 2 years of patent expiration. Calculate "revenue at risk."' },
      step3: { title: 'Analyze Regulatory Environment', description: 'FDA approval timelines, pricing regulations (Medicare negotiation in US, NLEM in India), and international market access all impact revenue. Regulatory changes can dramatically shift the thesis.' },
      step4: { title: 'Assess Competitive Moat', description: 'Types of moats: patent protection, economies of scale (manufacturing), physician relationships, switching costs (medical devices), regulatory know-how, and proprietary data/platforms.' },
      step5: { title: 'Study Demographic Tailwinds', description: 'Global population over 65 will double by 2050. Chronic diseases (diabetes, cardiovascular, cancer) are rising. Per capita healthcare spending grows faster than GDP. These structural trends benefit the entire sector.' }
    },
    topCompanies: [
      { name: 'Johnson & Johnson (JNJ)', region: 'US', note: 'Diversified — pharma, medtech, consumer health' },
      { name: 'UnitedHealth Group (UNH)', region: 'US', note: 'Largest US health insurer + Optum health services' },
      { name: 'Eli Lilly (LLY)', region: 'US', note: 'Leader in GLP-1 (obesity/diabetes), fastest-growing large pharma' },
      { name: 'Roche', region: 'CHE', note: 'Global leader in oncology and diagnostics' },
      { name: 'Sun Pharmaceutical', region: 'IND', note: 'India\'s largest pharma, global generics leader' },
      { name: 'Medtronic (MDT)', region: 'IRL/US', note: 'World\'s largest medical device company' }
    ],
    growthDrivers: ['Aging global population', 'GLP-1/obesity drug revolution', 'AI in drug discovery and diagnostics', 'Gene therapy and precision medicine', 'Healthcare access expansion in emerging markets'],
    riskFactors: ['Patent cliffs and generic competition', 'Drug pricing regulation', 'Clinical trial failures', 'Regulatory delays or rejections', 'Bioethics and litigation risk']
  },
  {
    id: 'financials',
    name: 'Financials',
    icon: '🏦',
    color: '#3b82f6',
    colorDim: 'rgba(59, 130, 246, 0.15)',
    gicsCode: '40',
    industryGroups: ['Banks', 'Financial Services', 'Insurance'],
    industries: ['Banks', 'Thrifts & Mortgage Finance', 'Diversified Financial Services', 'Consumer Finance', 'Capital Markets', 'Mortgage REITs', 'Insurance', 'Insurance Brokers', 'Financial Exchanges & Data'],
    overview: {
      description: 'The Financials sector is the backbone of the economy — handling money flow, credit creation, risk management, and wealth management. It includes banks, insurance companies, asset managers, payment processors, and financial exchanges.',
      marketCap: '~$9 trillion globally',
      keyCharacteristics: [
        'Interest rate sensitive — bank profits rise with rates',
        'Heavily regulated (capital requirements, stress tests)',
        'Leverage is inherent to the business model',
        'Systemic importance — "too big to fail" designation',
        'Credit quality drives long-term performance'
      ]
    },
    keyMetrics: [
      { name: 'Net Interest Margin (NIM)', description: 'Difference between interest earned on loans and interest paid on deposits. The core bank profitability metric.', formula: '(Interest Income - Interest Expense) / Avg. Earning Assets', benchmark: '2.5-3.5% for commercial banks' },
      { name: 'Return on Equity (ROE)', description: 'Net income as % of shareholders equity. Shows how well the bank uses capital.', formula: 'Net Income / Shareholders Equity × 100', benchmark: '12-15% is excellent for banks' },
      { name: 'Non-Performing Assets (NPA) Ratio', description: 'Loans where the borrower has defaulted. Key credit quality metric in India.', formula: 'Non-Performing Assets / Total Loans × 100', benchmark: '<2% is healthy; >5% is concerning' },
      { name: 'Capital Adequacy Ratio (CAR)', description: 'Bank\'s capital as % of risk-weighted assets. Regulatory buffer against losses.', formula: '(Tier 1 + Tier 2 Capital) / Risk-Weighted Assets × 100', benchmark: '>12% exceeds Basel III requirements' },
      { name: 'Cost-to-Income Ratio', description: 'Operating efficiency — how much it costs to generate each dollar of income.', formula: 'Operating Expenses / Operating Income × 100', benchmark: '<50% is best-in-class' },
      { name: 'Combined Ratio (Insurance)', description: 'For insurers: claims + expenses as % of premiums. <100% = underwriting profit.', formula: '(Claims + Expenses) / Premiums × 100', benchmark: '<95% indicates profitable underwriting' }
    ],
    analysisFramework: {
      step1: { title: 'Understand Interest Rate Sensitivity', description: 'Bank profits are primarily driven by interest rates. When central banks raise rates, banks earn more on loans but may face higher deposit costs with a lag. Track central bank policy, yield curve shape (normal vs. inverted), and NIM trends.' },
      step2: { title: 'Assess Credit Quality', description: 'The biggest risk for banks is loan defaults. Study NPA ratios, provision coverage ratio (provisions held against bad loans), write-off trends, and sector-wise loan exposure. India\'s NPA crisis (2015-2020) wiped out massive banking value.' },
      step3: { title: 'Evaluate Capital Strength', description: 'Capital adequacy ratio (CAR) determines how much loss a bank can absorb. Higher CAR = safer but lower ROE. Check if the bank comfortably exceeds regulatory minimums. Stress test results provide additional comfort.' },
      step4: { title: 'Analyze Growth Drivers', description: 'Loan growth (credit demand), CASA ratio (low-cost deposits), fee income diversification (wealth management, insurance distribution, payment processing), and digital banking capabilities.' },
      step5: { title: 'Study Fintech Disruption', description: 'UPI, digital lending, neobanks, and DeFi are reshaping financial services. Evaluate whether traditional banks are adopting technology or being disrupted. Payment processors and financial data companies are growing fastest.' }
    },
    topCompanies: [
      { name: 'JPMorgan Chase (JPM)', region: 'US', note: 'Largest US bank, dominant in investment banking' },
      { name: 'Berkshire Hathaway (BRK)', region: 'US', note: 'Warren Buffett\'s holding company — insurance, bank, conglomerate' },
      { name: 'HDFC Bank', region: 'IND', note: 'India\'s largest private bank, best-in-class asset quality' },
      { name: 'Visa (V)', region: 'US', note: 'Global payments network, asset-light capital model' },
      { name: 'ICICI Bank', region: 'IND', note: 'India\'s universal bank, strong digital banking platform' },
      { name: 'Allianz', region: 'GER', note: 'Europe\'s largest insurer, global asset management (PIMCO)' }
    ],
    growthDrivers: ['Rising interest rates boost NIM', 'Financial inclusion in emerging markets', 'Digital payments and fintech adoption', 'Wealth management demand from aging populations', 'Insurance penetration in India/Asia'],
    riskFactors: ['Credit cycle deterioration (loan defaults)', 'Interest rate reversal compressing NIM', 'Regulatory tightening', 'Fintech disruption to traditional models', 'Systemic/contagion risk (bank runs)']
  },
  {
    id: 'information-technology',
    name: 'Information Technology',
    icon: '💻',
    color: '#8b5cf6',
    colorDim: 'rgba(139, 92, 246, 0.15)',
    gicsCode: '45',
    industryGroups: ['Software & Services', 'Technology Hardware & Equipment', 'Semiconductors & Semiconductor Equipment'],
    industries: ['IT Services', 'Software', 'Communications Equipment', 'Technology Hardware, Storage & Peripherals', 'Electronic Equipment, Instruments & Components', 'Semiconductors & Semiconductor Equipment'],
    overview: {
      description: 'Information Technology encompasses software platforms, IT services, semiconductor companies, hardware manufacturers, and tech infrastructure providers. The sector has been the primary driver of global equity returns over the past two decades.',
      marketCap: '~$15 trillion globally',
      keyCharacteristics: [
        'Highest-growth sector with strong secular tailwinds',
        'High margins — software/IP businesses have 70-90% gross margins',
        'Network effects and switching costs create powerful moats',
        'Winner-take-most dynamics in many subsectors',
        'Cash-generative: tech giants are the world\'s largest cash holders'
      ]
    },
    keyMetrics: [
      { name: 'Revenue Growth Rate', description: 'Year-over-year revenue growth. Tech companies are valued on growth trajectory.', formula: '(Current Revenue - Prior Revenue) / Prior Revenue × 100', benchmark: '20%+ for high-growth SaaS; 5-10% for mature tech' },
      { name: 'Rule of 40', description: 'Revenue growth rate + profit margin. A benchmark for SaaS health.', formula: 'Revenue Growth % + Operating Margin %', benchmark: '>40% is excellent; >60% is elite' },
      { name: 'Gross Margin', description: 'Revenue minus COGS. Software companies have the highest gross margins.', formula: '(Revenue - COGS) / Revenue × 100', benchmark: '70-85% for software; 50-65% for semis' },
      { name: 'Net Revenue Retention (NRR)', description: 'Revenue retained from existing customers including expansion. >100% means upselling exceeds churn.', formula: '(Start ARR + Expansion - Churn - Contraction) / Start ARR × 100', benchmark: '>110% is strong; >130% is exceptional' },
      { name: 'Free Cash Flow Margin', description: 'FCF as % of revenue. Shows cash generation efficiency.', formula: 'Free Cash Flow / Revenue × 100', benchmark: '20-35% for mature tech' },
      { name: 'P/E and EV/Revenue', description: 'Valuation multiples. Tech trades at premium valuations due to growth and margins.', formula: 'Stock Price / Earnings; Enterprise Value / Revenue', benchmark: 'Compare to growth rate (PEG ratio)' }
    ],
    analysisFramework: {
      step1: { title: 'Identify the TAM (Total Addressable Market)', description: 'How large is the opportunity? Cloud computing TAM is $1T+, AI infrastructure is $500B+, cybersecurity is $300B+. Companies addressing large, growing markets command higher valuations.' },
      step2: { title: 'Evaluate Competitive Moat', description: 'Network effects (Microsoft/Meta), switching costs (SAP/Oracle), ecosystem lock-in (Apple), scale advantages (AWS), data moats (Google), and IP/patents (NVIDIA CUDA). The moat determines long-term defensibility.' },
      step3: { title: 'Analyze Unit Economics', description: 'SaaS: CAC payback period, LTV/CAC ratio, NRR, gross margin. Hardware: ASP trends, market share, replacement cycle. Semiconductors: design wins, wafer yields, node leadership.' },
      step4: { title: 'Study AI Positioning', description: 'AI is the most significant technology shift since the internet. Evaluate: chips (NVIDIA, AMD), cloud infrastructure (AWS, Azure, GCP), AI platforms (OpenAI, Google DeepMind), and AI-enabled applications. AI revenue is the new growth driver.' },
      step5: { title: 'Assess Capital Allocation', description: 'Tech companies are massive cash generators. How do they allocate: R&D reinvestment, acquisitions (strategic vs. value-destructive), buybacks, and dividends? Apple has returned $600B+ to shareholders via buybacks.' }
    },
    topCompanies: [
      { name: 'Apple (AAPL)', region: 'US', note: 'Most valuable company globally, ecosystem lock-in' },
      { name: 'Microsoft (MSFT)', region: 'US', note: 'Cloud (Azure), enterprise software, AI (OpenAI partnership)' },
      { name: 'NVIDIA (NVDA)', region: 'US', note: 'AI chip monopoly, GPU computing platform leader' },
      { name: 'TSMC', region: 'TWN', note: 'Manufactures 90%+ of world\'s advanced chips' },
      { name: 'TCS (Tata Consultancy Services)', region: 'IND', note: 'India\'s largest IT services company, global delivery model' },
      { name: 'Infosys', region: 'IND', note: 'India\'s premium IT services brand, digital transformation leader' }
    ],
    growthDrivers: ['AI and generative AI revolution', 'Cloud computing migration', 'Cybersecurity spend increase', 'Digital transformation across industries', 'Semiconductor demand for AI, IoT, automotive'],
    riskFactors: ['Valuation compression if growth slows', 'Regulatory antitrust action', 'Geopolitical risk (semiconductor supply chains)', 'AI regulation and safety concerns', 'Technology disruption cycles']
  },
  {
    id: 'communication-services',
    name: 'Communication Services',
    icon: '📡',
    color: '#f43f5e',
    colorDim: 'rgba(244, 63, 94, 0.15)',
    gicsCode: '50',
    industryGroups: ['Telecommunication Services', 'Media & Entertainment'],
    industries: ['Diversified Telecommunication Services', 'Wireless Telecommunication Services', 'Media', 'Entertainment', 'Interactive Media & Services'],
    overview: {
      description: 'Communication Services includes telecom providers, media companies, entertainment firms, and interactive media platforms. This sector was restructured in 2018 when GICS moved companies like Google and Meta here from IT, recognizing their media/advertising nature.',
      marketCap: '~$6 trillion globally',
      keyCharacteristics: [
        'Mix of defensive (telecom) and high-growth (digital advertising, streaming)',
        'Network effects power social media and platform businesses',
        'Content creation and distribution are key competitive levers',
        'Advertising revenue cyclicality tied to economic conditions',
        'Heavy capex for telecom infrastructure (5G, fiber)'
      ]
    },
    keyMetrics: [
      { name: 'ARPU (Average Revenue Per User)', description: 'Monthly revenue per subscriber. Core metric for telecom and streaming.', formula: 'Total Revenue / Average Subscribers', benchmark: 'Varies by market; trend matters most' },
      { name: 'Subscriber Growth / Churn', description: 'Net additions minus cancellations. Growth vs. maturity indicator.', formula: 'New Subscribers - Churned Subscribers', benchmark: '<2% monthly churn is healthy' },
      { name: 'Ad Revenue per User', description: 'Revenue from advertising divided by user base. Key for social media platforms.', formula: 'Advertising Revenue / Monthly Active Users', benchmark: '$10-50/user in US; $2-5 globally' },
      { name: 'Content Spend vs. Revenue', description: 'How much is invested in content relative to revenue. Critical for streaming.', formula: 'Content Spend / Revenue × 100', benchmark: '15-25% for mature; 40%+ for growth phase' },
      { name: 'Capex Intensity', description: 'Capital expenditure as % of revenue. High for telecoms building 5G/fiber networks.', formula: 'Capex / Revenue × 100', benchmark: '15-25% for telecoms; 10-15% for media' }
    ],
    analysisFramework: {
      step1: { title: 'Segment the Business Model', description: 'This sector is bifurcated: asset-heavy telecoms (Airtel, AT&T) vs. asset-light platforms (Google, Meta). Analyze each differently — telecoms on cash yield, platforms on user growth and monetization.' },
      step2: { title: 'Analyze User Engagement', description: 'For social media and streaming: daily/monthly active users (DAU/MAU), time spent per session, engagement rates. Growing engagement = growing monetization potential. Meta\'s 3B+ users is an unmatched scale advantage.' },
      step3: { title: 'Evaluate Advertising Moats', description: 'Google and Meta control 50%+ of digital advertising. Assess: audience reach, targeting capabilities (first-party data), ad auction efficiency, and measurement tools. Privacy regulations (GDPR, ATT) are reshaping the landscape.' },
      step4: { title: 'Study Content Strategy', description: 'For streaming (Netflix, Disney+): content library, original content investment, international expansion. For gaming (Activision, Take-Two): franchise value, live service revenue, mobile growth.' },
      step5: { title: 'Assess Telecom Infrastructure Value', description: 'Telecom tower and fiber assets have strategic value. 5G investment creates new revenue opportunities (enterprise, IoT). Tower companies (Indus Towers, American Tower) trade at premium valuations for predictable cash flows.' }
    },
    topCompanies: [
      { name: 'Alphabet/Google (GOOGL)', region: 'US', note: 'Search monopoly, YouTube, Cloud, Waymo, DeepMind' },
      { name: 'Meta Platforms (META)', region: 'US', note: 'Facebook, Instagram, WhatsApp — 3B+ users, AI investment' },
      { name: 'Netflix (NFLX)', region: 'US', note: 'Streaming pioneer, 260M+ subscribers globally' },
      { name: 'Walt Disney (DIS)', region: 'US', note: 'Content powerhouse (Marvel, Star Wars, Pixar), parks, streaming' },
      { name: 'Bharti Airtel', region: 'IND', note: 'India\'s premium telecom, strong Africa presence' },
      { name: 'Reliance Jio', region: 'IND', note: 'Disrupted Indian telecom with free 4G, now #1 by subscribers' }
    ],
    growthDrivers: ['AI-driven ad targeting and content creation', '5G commercialization', 'Streaming subscriber growth in emerging markets', 'Connected TV advertising shift', 'Gaming as a growth vertical'],
    riskFactors: ['Advertising revenue cyclicality', 'Content cost inflation', 'Privacy regulation impacting ad targeting', 'Telecom pricing competition', 'Regulatory scrutiny of platform monopolies']
  },
  {
    id: 'utilities',
    name: 'Utilities',
    icon: '💡',
    color: '#eab308',
    colorDim: 'rgba(234, 179, 8, 0.15)',
    gicsCode: '55',
    industryGroups: ['Utilities'],
    industries: ['Electric Utilities', 'Gas Utilities', 'Multi-Utilities', 'Water Utilities', 'Independent Power & Renewable Electricity Producers'],
    overview: {
      description: 'Utilities provide essential services — electricity, gas, and water. As regulated monopolies in most regions, they offer predictable earnings and high dividends but limited growth. The energy transition is transforming utilities into renewable energy platforms.',
      marketCap: '~$2 trillion globally',
      keyCharacteristics: [
        'Most defensive sector — demand is inelastic (people always need electricity/water)',
        'Regulated returns — stable but capped by regulators',
        'High dividend yields make them "bond proxies"',
        'Capital-intensive with long asset lives (30-50 years)',
        'Energy transition creating growth opportunities in renewables'
      ]
    },
    keyMetrics: [
      { name: 'Regulated ROE', description: 'Return on equity allowed by regulators. Determines profitability ceiling.', formula: 'Allowed Net Income / Rate Base Equity', benchmark: '9-11% in most US states' },
      { name: 'Rate Base Growth', description: 'Growth in regulated asset base. Directly drives earnings growth for regulated utilities.', formula: '(End Rate Base - Start Rate Base) / Start Rate Base × 100', benchmark: '6-8% annually is strong' },
      { name: 'Dividend Yield', description: 'Annual dividend as % of stock price. Utilities are top dividend payers.', formula: 'Annual Dividends / Stock Price × 100', benchmark: '3-5% is typical' },
      { name: 'Payout Ratio', description: 'Dividends as % of earnings. Higher payout = less for reinvestment but more for shareholders.', formula: 'Dividends / Net Income × 100', benchmark: '60-75% is sustainable for utilities' },
      { name: 'Debt/Equity', description: 'Leverage ratio. Utilities can sustain higher leverage due to predictable cash flows.', formula: 'Total Debt / Shareholders Equity', benchmark: '1.0-1.5x is typical for utilities' }
    ],
    analysisFramework: {
      step1: { title: 'Understand the Regulatory Framework', description: 'Utility earnings are determined by regulators. Study the Public Utility Commission (PUC) in each jurisdiction. Favorable regulators allow higher returns and faster rate base growth. Political risk matters.' },
      step2: { title: 'Evaluate Rate Base Growth', description: 'Earnings growth = rate base growth × allowed ROE. Rate base grows through new capital investments (grid modernization, renewables, EV infrastructure). Higher investment = faster earnings growth.' },
      step3: { title: 'Analyze Renewable Transition', description: 'Utilities transitioning to renewables get premium valuations. Solar + wind + storage costs have declined 90% in a decade. Evaluate: renewable energy targets, retired coal capacity, green capital investment plans.' },
      step4: { title: 'Study Dividend Safety', description: 'Payout ratio, free cash flow after capex, regulatory allowed increases, and balance sheet strength. Look for utilities with long division growth streaks (Duke Energy: 90+ years).' },
      step5: { title: 'Consider Interest Rate Sensitivity', description: 'Utilities are "bond proxies" — their relative attractiveness depends on interest rates. When rates rise, utility stocks underperform (investors prefer bonds). When rates fall, utilities outperform.' }
    },
    topCompanies: [
      { name: 'NextEra Energy (NEE)', region: 'US', note: 'World\'s largest generator of wind and solar energy' },
      { name: 'Duke Energy (DUK)', region: 'US', note: '90+ years of consecutive dividends, serving 8M customers' },
      { name: 'Enel', region: 'ITA', note: 'Europe\'s largest utility, aggressive renewables investment' },
      { name: 'NTPC Ltd', region: 'IND', note: 'India\'s largest power generating company, expanding into renewables' },
      { name: 'Power Grid Corp', region: 'IND', note: 'India\'s central transmission utility, critical infrastructure' },
      { name: 'Southern Company (SO)', region: 'US', note: 'Major US utility, diverse generation mix' }
    ],
    growthDrivers: ['Renewable energy investment (solar, wind, storage)', 'Grid modernization and electrification', 'EV charging infrastructure', 'Data center power demand (AI boom)', 'Rate base expansion from new capex'],
    riskFactors: ['Interest rate increases hurt valuations', 'Regulatory risk (unfavorable rate decisions)', 'Weather and natural disaster exposure', 'Stranded asset risk from fossil fuel plants', 'Rising construction costs']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: '🏢',
    color: '#0ea5e9',
    colorDim: 'rgba(14, 165, 233, 0.15)',
    gicsCode: '60',
    industryGroups: ['Equity REITs', 'Real Estate Management & Development'],
    industries: ['Diversified REITs', 'Industrial REITs', 'Hotel & Resort REITs', 'Office REITs', 'Health Care REITs', 'Residential REITs', 'Retail REITs', 'Specialized REITs', 'Real Estate Management & Development', 'Real Estate Services'],
    overview: {
      description: 'Real Estate includes Real Estate Investment Trusts (REITs) and real estate development/management companies. REITs own and operate income-producing real estate and must distribute 90%+ of taxable income as dividends, making them attractive income investments.',
      marketCap: '~$2.5 trillion globally',
      keyCharacteristics: [
        'High dividend yields (required 90% distribution for tax-exempt status)',
        'Interest rate sensitive — higher rates increase borrowing costs',
        'Property type determines risk profile (industrial vs. office vs. retail)',
        'Inflation hedge — rents often have escalation clauses',
        'Long-term leases provide cash flow visibility'
      ]
    },
    keyMetrics: [
      { name: 'Funds From Operations (FFO)', description: 'The REIT equivalent of earnings. Adjusts net income for depreciation (real estate appreciates, unlike most assets).', formula: 'Net Income + Depreciation - Gains on Property Sales', benchmark: 'Growing FFO/share is key' },
      { name: 'Net Asset Value (NAV)', description: 'Market value of all properties minus debt. Shows if a REIT trades at premium or discount.', formula: 'Market Value of Properties - Total Debt', benchmark: 'Trading below NAV = potential value' },
      { name: 'Occupancy Rate', description: 'Percentage of space that is leased. High occupancy = stable income.', formula: 'Leased Space / Total Space × 100', benchmark: '>90% for industrial; >85% for office' },
      { name: 'Cap Rate', description: 'Net operating income as % of property value. Lower cap rate = higher property value.', formula: 'Net Operating Income / Property Value × 100', benchmark: '4-7% depending on property type' },
      { name: 'Weighted Average Lease Expiry (WALE)', description: 'Average remaining lease term. Longer WALE = more predictable cash flows.', formula: 'Sum of (Rent × Lease Remaining) / Total Rent', benchmark: '5+ years provides stability' },
      { name: 'Debt/Total Assets', description: 'Leverage ratio for REITs. Moderate leverage amplifies returns.', formula: 'Total Debt / Total Assets × 100', benchmark: '30-45% is typical for REITs' }
    ],
    analysisFramework: {
      step1: { title: 'Choose the Right Property Type', description: 'Industrial REITs (warehouses for e-commerce) have outperformed. Office REITs face headwinds from remote work. Data center REITs benefit from AI. Retail depends on experiential vs. commodity. Match property type to structural trends.' },
      step2: { title: 'Analyze Location Quality', description: 'Real estate value is driven by location. Tier 1 cities command premium rents and lower vacancy. Evaluate: supply-demand dynamics in each market, population growth, employer concentration, and infrastructure access.' },
      step3: { title: 'Evaluate Tenant Quality', description: 'Who are the tenants? Investment-grade tenants (governments, Fortune 500) reduce default risk. Check tenant concentration (top 10 tenants as % of rent), lease terms, and rent escalation clauses.' },
      step4: { title: 'Study Portfolio Growth Strategy', description: 'Is the REIT growing via acquisitions, development, or organic rent increases? Acquisitions at below-NAV are accretive. Development is higher-risk/higher-return. Organic rent growth indicates pricing power.' },
      step5: { title: 'Assess Interest Rate Impact', description: 'REITs use leverage (debt) to enhance returns. Rising interest rates increase borrowing costs and reduce FFO. Study: percentage of fixed vs. floating rate debt, upcoming debt maturities, and hedging strategy.' }
    },
    topCompanies: [
      { name: 'Prologis (PLD)', region: 'US', note: 'World\'s largest industrial REIT, e-commerce warehousing' },
      { name: 'Equinix (EQIX)', region: 'US', note: 'Global data center REIT, AI infrastructure beneficiary' },
      { name: 'American Tower (AMT)', region: 'US', note: 'Largest global cell tower REIT, 5G tailwind' },
      { name: 'Simon Property Group (SPG)', region: 'US', note: 'Largest US mall REIT, premium outlet locations' },
      { name: 'Embassy REIT', region: 'IND', note: 'India\'s first listed REIT, office parks in tech cities' },
      { name: 'DLF Ltd', region: 'IND', note: 'India\'s largest real estate developer by market cap' }
    ],
    growthDrivers: ['E-commerce driving industrial/warehouse demand', 'Data centers for AI and cloud computing', '5G tower infrastructure expansion', 'Life sciences real estate growth', 'Rental housing in urbanizing markets'],
    riskFactors: ['Rising interest rates compress valuations', 'Remote work reducing office demand', 'Retail disruption from e-commerce', 'Oversupply in certain markets', 'Regulatory/zoning changes']
  }
];

// ============ NAICS SECTORS (Reference) ============
export const naicsSectors = [
  { code: '11', name: 'Agriculture, Forestry, Fishing and Hunting' },
  { code: '21', name: 'Mining, Quarrying, and Oil and Gas Extraction' },
  { code: '22', name: 'Utilities' },
  { code: '23', name: 'Construction' },
  { code: '31-33', name: 'Manufacturing' },
  { code: '42', name: 'Wholesale Trade' },
  { code: '44-45', name: 'Retail Trade' },
  { code: '48-49', name: 'Transportation and Warehousing' },
  { code: '51', name: 'Information' },
  { code: '52', name: 'Finance and Insurance' },
  { code: '53', name: 'Real Estate and Rental and Leasing' },
  { code: '54', name: 'Professional, Scientific, and Technical Services' },
  { code: '55', name: 'Management of Companies and Enterprises' },
  { code: '56', name: 'Administrative and Support and Waste Management' },
  { code: '61', name: 'Educational Services' },
  { code: '62', name: 'Health Care and Social Assistance' },
  { code: '71', name: 'Arts, Entertainment, and Recreation' },
  { code: '72', name: 'Accommodation and Food Services' },
  { code: '81', name: 'Other Services (except Public Administration)' },
  { code: '92', name: 'Public Administration' }
];

// ============ ICB INDUSTRIES (Reference) ============
export const icbIndustries = [
  { code: '10', name: 'Technology' },
  { code: '15', name: 'Telecommunications' },
  { code: '20', name: 'Health Care' },
  { code: '25', name: 'Financials' },
  { code: '30', name: 'Real Estate' },
  { code: '35', name: 'Consumer Discretionary' },
  { code: '40', name: 'Consumer Staples' },
  { code: '45', name: 'Industrials' },
  { code: '50', name: 'Basic Materials' },
  { code: '55', name: 'Energy' },
  { code: '60', name: 'Utilities' }
];

// ============ SIC DIVISIONS (Reference) ============
export const sicDivisions = [
  { code: 'A', name: 'Agriculture, Forestry, and Fishing', range: '01-09' },
  { code: 'B', name: 'Mining', range: '10-14' },
  { code: 'C', name: 'Construction', range: '15-17' },
  { code: 'D', name: 'Manufacturing', range: '20-39' },
  { code: 'E', name: 'Transportation, Communications, Electric, Gas, & Sanitary', range: '40-49' },
  { code: 'F', name: 'Wholesale Trade', range: '50-51' },
  { code: 'G', name: 'Retail Trade', range: '52-59' },
  { code: 'H', name: 'Finance, Insurance, and Real Estate', range: '60-67' },
  { code: 'I', name: 'Services', range: '70-89' },
  { code: 'J', name: 'Public Administration', range: '91-99' }
];

// ============ ISIC SECTIONS (Reference) ============
export const isicSections = [
  { code: 'A', name: 'Agriculture, forestry and fishing' },
  { code: 'B', name: 'Mining and quarrying' },
  { code: 'C', name: 'Manufacturing' },
  { code: 'D', name: 'Electricity, gas, steam and air conditioning supply' },
  { code: 'E', name: 'Water supply; sewerage, waste management and remediation' },
  { code: 'F', name: 'Construction' },
  { code: 'G', name: 'Wholesale and retail trade; repair of motor vehicles and motorcycles' },
  { code: 'H', name: 'Transportation and storage' },
  { code: 'I', name: 'Accommodation and food service activities' },
  { code: 'J', name: 'Information and communication' },
  { code: 'K', name: 'Financial and insurance activities' },
  { code: 'L', name: 'Real estate activities' },
  { code: 'M', name: 'Professional, scientific and technical activities' },
  { code: 'N', name: 'Administrative and support service activities' },
  { code: 'O', name: 'Public administration and defence; compulsory social security' },
  { code: 'P', name: 'Education' },
  { code: 'Q', name: 'Human health and social work activities' },
  { code: 'R', name: 'Arts, entertainment and recreation' },
  { code: 'S', name: 'Other service activities' },
  { code: 'T', name: 'Activities of households as employers' },
  { code: 'U', name: 'Activities of extraterritorial organizations and bodies' }
];
