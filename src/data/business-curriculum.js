// Business Management, Entrepreneurship & Startups Curriculum
// Comprehensive Learning Path

export const businessCurriculum = [
  // ===== MODULE 1: Entrepreneurial Mindset =====
  {
    id: 'biz-1-1', title: 'The Entrepreneurial Mindset', module: 'Entrepreneurial Mindset', estimatedMinutes: 15,
    content: {
      theory: `Entrepreneurship is about creating value by solving problems.\n\n**Key Traits**:\n1. **Growth Mindset**: Challenges are opportunities, failures are lessons\n2. **Risk Tolerance**: Calculated risk, not reckless gambling\n3. **Bias for Action**: Done is better than perfect\n4. **Customer Obsession**: Solve real problems for real people\n5. **Resilience**: 90% of startups fail — persistence separates winners\n\n**Types of Entrepreneurs**: Solopreneur, Serial entrepreneur, Social entrepreneur, Intrapreneur (inside a company)`,
      realWorldExample: `Sara Blakely (Spanx) was rejected by every manufacturer before one said yes. She sold fax machines door-to-door while building her company. Now she's a billionaire. Amazon was unprofitable for 7+ years — Jeff Bezos endured Wall Street criticism while building for the long term. Mindset > resources.`,
      implementation: `Start training your entrepreneurial mindset today. Look at problems as business opportunities. Every frustration you have is potentially shared by millions — and that's a market.`,
      actionItems: ['List 5 problems you encountered today that annoyed you — each is a potential business idea', 'Write down your biggest fear about starting a business and reframe it as a learning opportunity', 'Read about one entrepreneur who failed multiple times before succeeding'],
      quiz: [
        { q: 'What percentage of startups typically fail?', options: ['30%', '50%', '70%', '90%'], answer: 3 },
        { q: 'Which trait is most important for entrepreneurs?', options: ['Technical skill', 'Resilience', 'A business degree', 'Lots of capital'], answer: 1 }
      ],
      keyTakeaways: ['Entrepreneurship is a mindset, not a job title', 'Problems are business opportunities in disguise', 'Resilience matters more than resources', 'Start training your entrepreneurial thinking now']
    }
  },
  {
    id: 'biz-1-2', title: 'Idea Validation Framework', module: 'Entrepreneurial Mindset', estimatedMinutes: 20,
    content: {
      theory: `**Most startups fail because they build something nobody wants.**\n\nValidation Steps:\n1. **Problem Validation**: Do people actually have this problem? Talk to 50+ potential users.\n2. **Solution Validation**: Does your solution work? Build a prototype.\n3. **Market Validation**: Will people pay? Get pre-orders or LOIs.\n4. **Channel Validation**: Can you reach customers? Test marketing.\n\n**The Mom Test**: Don't ask "Is my idea good?" (everyone says yes). Ask about their life, problems, and current solutions. Let facts speak.\n\nKill bad ideas fast. Pivot to better ones. Time is your most expensive resource.`,
      realWorldExample: `Dropbox validated their idea with a simple 3-minute video showing the product concept. Signups went from 5,000 to 75,000 overnight — proving demand before writing a single line of code. Buffer validated by creating a landing page with pricing before building the product. 40% of visitors clicked "sign up," confirming willingness to pay.`,
      implementation: `Before building anything, talk to potential customers. Find 5 people who have the problem you want to solve and interview them. Focus on their current pain, not your solution.`,
      actionItems: ['Pick one business idea and write the problem statement in one sentence', 'Find 5 people who might have this problem and schedule casual conversations', 'Create a list of 10 questions to validate the problem (without pitching your solution)', 'Research: Has anyone tried to solve this before? What happened?'],
      quiz: [
        { q: 'What is the #1 reason startups fail?', options: ['Ran out of money', 'No market need', 'Bad team', 'Legal issues'], answer: 1 },
        { q: 'What does "The Mom Test" teach?', options: ['Ask your mom for advice', 'Ask about problems, not your idea', 'Test products with family first', 'Moms are the best customers'], answer: 1 }
      ],
      keyTakeaways: ['Validate before you build', 'Talk to real potential customers', 'Don\'t ask if your idea is good — observe if the problem is real', 'A landing page test can save months of wasted development']
    }
  },
  // ===== MODULE 2: Business Models & Strategy =====
  {
    id: 'biz-2-1', title: 'Business Model Canvas', module: 'Business Models & Strategy', estimatedMinutes: 20,
    content: {
      theory: `The **Business Model Canvas** (BMC) is a 1-page framework to map your entire business:\n\n1. **Customer Segments**: Who are your customers?\n2. **Value Propositions**: What value do you deliver?\n3. **Channels**: How do you reach customers?\n4. **Customer Relationships**: How do you interact?\n5. **Revenue Streams**: How do you make money?\n6. **Key Resources**: What do you need to deliver?\n7. **Key Activities**: What do you do?\n8. **Key Partnerships**: Who helps you?\n9. **Cost Structure**: What are your major costs?\n\n**Lean Canvas** (startup-focused version) replaces some sections with Problem, Solution, and Unfair Advantage.`,
      realWorldExample: `Uber's BMC: Customer Segments = Riders + Drivers. Value Prop = Convenient, affordable rides. Channels = Mobile app. Revenue = Commission per ride. Key Resources = Platform + driver network. Key Activities = Matching supply/demand. This single page captures Uber's entire $70B business.`,
      implementation: `Fill out a Business Model Canvas for any business idea you have. It forces clarity on every aspect of the business.`,
      actionItems: ['Download a blank BMC template (or draw one)', 'Fill it out for a business you admire (e.g., Netflix, Amazon, a local business)', 'Fill out a Lean Canvas for your own business idea', 'Identify the weakest section — that\'s where to focus first'],
      quiz: [
        { q: 'How many building blocks does the Business Model Canvas have?', options: ['5', '7', '9', '12'], answer: 2 },
        { q: 'What does the Lean Canvas add that the BMC doesn\'t have?', options: ['Revenue streams', 'Problem and Solution', 'Key resources', 'Customer segments'], answer: 1 }
      ],
      keyTakeaways: ['The BMC captures your entire business on one page', 'For startups, the Lean Canvas is more practical', 'Your business model is a hypothesis — test and iterate', 'The weakest section of your canvas is your biggest risk']
    }
  },
  {
    id: 'biz-2-2', title: 'Competitive Analysis & Moats', module: 'Business Models & Strategy', estimatedMinutes: 15,
    content: {
      theory: `**Competitive Advantage (Moat)**: What makes your business defensible?\n\nTypes of moats:\n1. **Network Effects**: Product improves as more people use it (Facebook, Uber)\n2. **Switching Costs**: Hard to leave (Apple ecosystem, enterprise software)\n3. **Brand**: Trust and recognition (Coca-Cola, Nike)\n4. **Cost Advantage**: Lowest cost producer (Walmart, Amazon)\n5. **IP & Patents**: Legal protection (pharma, tech)\n6. **Economies of Scale**: Cost per unit decreases with volume\n\n**Porter's Five Forces**: Industry competition, threat of new entrants, substitute products, buyer power, supplier power.`,
      realWorldExample: `Apple has multiple moats: brand loyalty, ecosystem switching costs (once you have iPhone + Mac + AirPods, leaving is painful), and IP. WhatsApp's moat is network effects — you can't leave because everyone you know is there. Amazon's moat is scale — no one can match their logistics network built over 25 years.`,
      implementation: `For any business you want to start, ask: "What prevents someone from copying me in 6 months?" If the answer is "nothing," you need a moat strategy.`,
      actionItems: ['List 3 companies with strong moats and identify what type each has', 'For your business idea, identify what moat you could build', 'Do a Porter\'s Five Forces analysis for an industry you\'re interested in', 'Research: What was the moat of a once-giant company that failed? (e.g., Nokia, Blockbuster)'],
      quiz: [
        { q: 'What is a "network effect" moat?', options: ['A large social media following', 'Product gets better as more people use it', 'Having the best internet connection', 'Networking at events'], answer: 1 },
        { q: 'Why did iPhone users rarely switch to Android?', options: ['Android is bad', 'High switching costs (ecosystem lock-in)', 'Legal restrictions', 'iPhone is cheaper'], answer: 1 }
      ],
      keyTakeaways: ['A moat is what makes your business defensible long-term', 'Network effects are the strongest moat in technology', 'Switching costs keep customers even when alternatives exist', 'If you have no moat, you\'re competing on price — a losing game']
    }
  },
  {
    id: 'biz-2-3', title: 'Revenue Models', module: 'Business Models & Strategy', estimatedMinutes: 15,
    content: {
      theory: `How you make money defines your business:\n\n1. **Subscription**: Recurring revenue (Netflix, SaaS) — most valued by investors\n2. **Transactional**: Pay per use (e-commerce, rides)\n3. **Freemium**: Free basic + paid premium (Spotify, LinkedIn)\n4. **Marketplace**: Commission on transactions (Amazon, Airbnb)\n5. **Advertising**: Sell attention (Google, Facebook)\n6. **Licensing**: Sell rights to use IP (Microsoft, patents)\n7. **Hardware + Services**: Razor-blade model (printers + ink, Nespresso + pods)\n\n**Key Metric**: Monthly Recurring Revenue (MRR) is the holy grail.`,
      realWorldExample: `Adobe switched from one-time purchase ($2,000) to subscription ($55/month) in 2013 — revenue initially dropped but then grew 3x. Subscribers provide predictable, growing revenue. Gym memberships work because 80% of members rarely go but keep paying. Spotify's freemium converts 45% of users to paid.`,
      implementation: `For any business idea, map out at least 3 possible revenue models. Choose the one that aligns with customer behavior and provides predictable income.`,
      actionItems: ['List 5 services you pay for and categorize their revenue model', 'For your business idea, brainstorm 3 different revenue models', 'Calculate: if you charge ₹500/month subscription, how many users to reach ₹10 lakh/month?', 'Research why investors prefer subscription businesses over one-time purchase businesses'],
      quiz: [
        { q: 'Which revenue model do investors typically value most?', options: ['One-time purchase', 'Subscription/recurring', 'Advertising', 'Commission'], answer: 1 },
        { q: 'What is the freemium model?', options: ['Everything is free', 'Free basic version + paid premium features', 'Free trial only', 'Ad-supported free version'], answer: 1 }
      ],
      keyTakeaways: ['Revenue model choice significantly impacts business value', 'Recurring revenue (subscription) is most valued', 'Freemium can be powerful but conversion rate matters', 'Your revenue model must align with customer behavior']
    }
  },
  // ===== MODULE 3: Market Research & Customer Discovery =====
  {
    id: 'biz-3-1', title: 'Market Research Methods', module: 'Market Research & Customer Discovery', estimatedMinutes: 15,
    content: {
      theory: `**Market Research** helps you understand market size, customer needs, and competition.\n\n**TAM, SAM, SOM**:\n• TAM (Total Addressable Market): Everyone who could potentially buy\n• SAM (Serviceable Addressable Market): Segment you can reach\n• SOM (Serviceable Obtainable Market): What you can realistically capture\n\n**Research Methods**:\n• Primary: Interviews, surveys, focus groups, observation\n• Secondary: Industry reports, census data, competitor analysis\n\n**Top-Down vs Bottom-Up**: Top-down starts from total market; bottom-up calculates from unit economics.`,
      realWorldExample: `Airbnb's initial market research: TAM = $500B global hotel market. SAM = $100B budget/unique travel. SOM = $10B (what they could capture in 5 years). They validated by listing their own apartment during a conference and finding 3 willing renters. Bottom-up validation before top-down projections.`,
      implementation: `For any business idea, calculate TAM/SAM/SOM. If SOM is less than $1M, it might not be worth pursuing. Conduct 10 customer interviews this week.`,
      actionItems: ['Calculate TAM/SAM/SOM for your business idea', 'Find 3 industry reports or market size estimates for your target market', 'Conduct 5 informal interviews with potential customers', 'Analyze 3 competitors: their pricing, features, reviews, and weaknesses'],
      quiz: [
        { q: 'What does TAM stand for?', options: ['Total Annual Money', 'Total Addressable Market', 'Target Audience Metric', 'Total Average Market'], answer: 1 },
        { q: 'Which research method involves directly talking to customers?', options: ['Secondary research', 'Primary research', 'TAM analysis', 'Competitive analysis'], answer: 1 }
      ],
      keyTakeaways: ['Always validate market size before building', 'Bottom-up analysis is more reliable than top-down', 'Talk to real customers — surveys lie, behavior doesn\'t', 'Your SOM (not TAM) determines if the opportunity is viable']
    }
  },
  {
    id: 'biz-3-2', title: 'Customer Personas & Jobs-to-be-Done', module: 'Market Research & Customer Discovery', estimatedMinutes: 15,
    content: {
      theory: `**Customer Persona**: A detailed profile of your ideal customer.\n\nIncludes: Demographics, goals, frustrations, behavior patterns, decision-making process, preferred channels.\n\n**Jobs-to-be-Done (JTBD)**: Customers don't buy products — they "hire" products to do a job.\n\nFramework: "When I _____ (situation), I want to _____ (motivation), so I can _____ (outcome)."\n\nExample: "When I'm commuting (situation), I want to be entertained (motivation), so I can make the commute enjoyable (outcome)." → This job can be done by podcasts, music, audiobooks, social media.`,
      realWorldExample: `Clayton Christensen's milkshake example: McDonald's discovered that 40% of milkshakes were bought at 6:30 AM by commuters. The "job" wasn't dessert — it was "keep me full and occupied during a boring commute." Competing products: bananas, bagels, boredom. This insight completely changed their marketing.`,
      implementation: `Create a persona for your target customer. Then define the "job" they need done. This clarity focuses everything — product, marketing, pricing.`,
      actionItems: ['Create 2 detailed customer personas for your business idea', 'Write 5 JTBD statements for your target customers', 'Interview 3 people matching your persona and validate your assumptions', 'Identify what products/solutions they currently "hire" for the same job'],
      quiz: [
        { q: 'What does "Jobs to be Done" framework focus on?', options: ['Employee job descriptions', 'Why customers hire products to accomplish tasks', 'Manufacturing jobs', 'Job market analysis'], answer: 1 },
        { q: 'A customer persona should include:', options: ['Only demographics', 'Only buying behavior', 'Demographics, goals, frustrations, and behaviors', 'Only competitor analysis'], answer: 2 }
      ],
      keyTakeaways: ['Customers hire products to do jobs, not just to own features', 'Personas make abstract markets concrete and actionable', 'JTBD reveals true competitors (often not who you think)', 'Validate personas with real conversations, not assumptions']
    }
  },
  // ===== MODULE 4: Legal & Compliance =====
  {
    id: 'biz-4-1', title: 'Business Legal Structures', module: 'Legal & Compliance', estimatedMinutes: 15,
    content: {
      theory: `Choosing the right legal structure affects taxes, liability, and fundraising.\n\n**Options**:\n1. **Sole Proprietorship**: Simplest, no separation between you and business\n2. **Partnership**: Two or more people, shared profits and liability\n3. **LLP (Limited Liability Partnership)**: Partners have limited liability\n4. **Private Limited Company (Pvt Ltd)**: Separate legal entity, limited liability, can raise investment\n5. **C-Corp / LLC** (US): Standard for venture-funded startups\n\n**Key Factors**: Liability protection, tax implications, ability to raise funds, compliance requirements.`,
      realWorldExample: `Most VC-backed startups incorporate as Delaware C-Corps (US) or Pvt Ltd (India) because this structure allows equity investment with clean cap tables. YC recommends incorporating in Delaware before applying. Sole proprietorships are fine for freelancers but expose personal assets to business debts.`,
      implementation: `Choose your structure based on your goals. Freelancing? Sole prop is fine. Planning to raise investment? Go Pvt Ltd / C-Corp from day one.`,
      actionItems: ['Research the legal structures available in your country', 'Compare: Pvt Ltd vs LLP vs Sole Proprietorship for your situation', 'Identify the registration process and costs for each structure', 'Consult with a CA/lawyer about tax implications of each structure'],
      quiz: [
        { q: 'Which structure is required for most VC-backed startups?', options: ['Sole proprietorship', 'Partnership', 'Pvt Ltd / C-Corp', 'LLP'], answer: 2 },
        { q: 'What does "limited liability" protect?', options: ['Business profits', 'Personal assets from business debts', 'Intellectual property', 'Employee rights'], answer: 1 }
      ],
      keyTakeaways: ['Legal structure affects taxes, liability, and fundraising options', 'Choose Pvt Ltd / C-Corp if planning to raise investment', 'Personal liability protection is crucial — don\'t risk personal assets', 'Structure can be changed later but it\'s easier to start right']
    }
  },
  // ===== MODULE 5: Startup Finance =====
  {
    id: 'biz-5-1', title: 'Fundraising & Startup Funding Stages', module: 'Startup Finance', estimatedMinutes: 20,
    content: {
      theory: `**Funding Stages**:\n1. **Bootstrapping**: Self-funded. You maintain 100% control.\n2. **Pre-Seed** ($50K-$500K): Friends, family, angel investors. Idea stage.\n3. **Seed** ($500K-$3M): Angel investors, micro-VCs. Early product stage.\n4. **Series A** ($3M-$15M): VCs. Product-market fit achieved.\n5. **Series B-D** ($15M-$500M): Growth stage. Scaling.\n6. **IPO/Exit**: Public listing or acquisition.\n\n**Key Concepts**: Valuation, dilution, term sheet, cap table, convertible notes, SAFE agreements.\n\n**Equity**: Giving up ownership for capital. 20% dilution per round is typical.`,
      realWorldExample: `WhatsApp raised only $58M total before selling to Facebook for $19B — one of the best ROIs in VC history. Zerodha (India's largest broker) never raised external funding — purely bootstrapped to $2B valuation. Instagram had 13 employees when acquired for $1B. Capital efficiency matters more than capital amount.`,
      implementation: `Decide early: bootstrap or raise? Each path has tradeoffs. Bootstrapping keeps control but limits speed. Raising enables speed but dilutes ownership.`,
      actionItems: ['Research 3 startups you admire — trace their funding history and total raised', 'Calculate: if you raise $1M at $5M valuation, what percentage do you give up?', 'Learn the difference between SAFE notes and convertible notes', 'List pros and cons of bootstrapping vs raising VC money for your idea'],
      quiz: [
        { q: 'At which stage do startups typically achieve product-market fit?', options: ['Pre-seed', 'Seed', 'Series A', 'IPO'], answer: 2 },
        { q: 'If you raise $2M at $8M pre-money valuation, what is post-money dilution?', options: ['10%', '20%', '25%', '30%'], answer: 1 }
      ],
      keyTakeaways: ['Not every startup needs VC funding — bootstrapping is valid', 'Each funding round dilutes your ownership by ~20%', 'Capital efficiency matters more than capital raised', 'Product-market fit should come before Series A']
    }
  },
  {
    id: 'biz-5-2', title: 'Unit Economics & Financial Metrics', module: 'Startup Finance', estimatedMinutes: 15,
    content: {
      theory: `**Unit Economics** = Revenue and costs per customer unit.\n\n**Key Metrics**:\n• **CAC** (Customer Acquisition Cost): Total marketing spend / new customers\n• **LTV** (Customer Lifetime Value): Average revenue per customer × average lifespan\n• **LTV:CAC Ratio**: Should be > 3:1 (every $1 spent acquiring → $3 earned)\n• **Payback Period**: Months to recoup CAC\n• **Churn Rate**: % of customers who leave per month\n• **MRR/ARR**: Monthly/Annual Recurring Revenue\n• **Burn Rate**: Cash spent per month\n• **Runway**: Cash in bank / burn rate = months until money runs out`,
      realWorldExample: `Netflix's CAC is ~$40, LTV is ~$600 (average subscriber stays 5 years paying $10/month). LTV:CAC = 15:1 — excellent. A startup spending ₹5,000 to acquire a customer who pays ₹200/month for 3 months (LTV = ₹600) has a 0.12 LTV:CAC ratio — the business is losing money on every customer.`,
      implementation: `Even before starting, estimate your unit economics. If LTV < CAC, you'll run out of money no matter how much you raise.`,
      actionItems: ['For your business idea, estimate CAC and LTV', 'Calculate the LTV:CAC ratio — is it above 3?', 'Estimate your monthly burn rate if you were to launch', 'Determine how many months of runway you have or need'],
      quiz: [
        { q: 'A healthy LTV:CAC ratio should be at least:', options: ['1:1', '2:1', '3:1', '10:1'], answer: 2 },
        { q: 'What is "runway"?', options: ['Company office space', 'Months until cash runs out', 'Sales pipeline length', 'Product development time'], answer: 1 }
      ],
      keyTakeaways: ['Unit economics determine if your business is fundamentally viable', 'LTV:CAC ratio > 3:1 is the minimum target', 'Track burn rate and runway religiously', 'Many startups die from bad unit economics, not bad products']
    }
  },
  // ===== MODULE 6: Product Development =====
  {
    id: 'biz-6-1', title: 'MVP & Product Development', module: 'Product Development & MVP', estimatedMinutes: 15,
    content: {
      theory: `**MVP (Minimum Viable Product)**: The smallest version of your product that delivers core value and enables learning.\n\n**Not MVP**: A broken, ugly product.\n**MVP**: A focused, polished product that solves one problem well.\n\n**Build-Measure-Learn Loop** (Lean Startup):\n1. Build MVP → 2. Measure user behavior → 3. Learn from data → 4. Iterate or Pivot\n\n**Types of MVPs**: Landing page, wizard of Oz (manual backend), concierge, single-feature product, video demo.`,
      realWorldExample: `Zappos MVP: Founder Nick Swinmurn posted photos of shoes from local stores online. When someone ordered, he'd buy from the store and ship. No inventory, no warehouse — just testing demand. Proved people would buy shoes online. Amazon Echo started as a basic voice assistant — core feature only, then expanded over years.`,
      implementation: `Define your MVP: what's the ONE thing your product must do to deliver value? Build that and nothing else. Launch in weeks, not months.`,
      actionItems: ['Write down the ONE core feature your product must have', 'List features you want vs features you need — cut ruthlessly to needs only', 'Sketch a simple wireframe of your MVP', 'Set a deadline: launch MVP within 4 weeks, no matter what'],
      quiz: [
        { q: 'What is the purpose of an MVP?', options: ['Launch a perfect product', 'Learn from users with minimum investment', 'Impress investors', 'Beat competition to market'], answer: 1 },
        { q: 'What is the Build-Measure-Learn loop?', options: ['A manufacturing process', 'An iterative development method', 'A marketing funnel', 'A financial model'], answer: 1 }
      ],
      keyTakeaways: ['MVP = minimum effort to maximum learning', 'Launch fast, learn fast, iterate fast', 'Perfection is the enemy of progress', 'Your first version will be wrong — and that\'s expected']
    }
  },
  // ===== MODULE 7: Marketing & Sales =====
  {
    id: 'biz-7-1', title: 'Digital Marketing Fundamentals', module: 'Marketing & Sales', estimatedMinutes: 20,
    content: {
      theory: `**Digital Marketing Channels**:\n\n1. **SEO** (Search Engine Optimization): Organic search traffic. Long-term, compounding.\n2. **Content Marketing**: Blogs, videos, podcasts. Build trust and authority.\n3. **Social Media**: Brand awareness, engagement, community building.\n4. **Paid Advertising**: Google Ads, Meta Ads, LinkedIn Ads. Instant but costly.\n5. **Email Marketing**: Highest ROI ($42 for every $1 spent). Own your audience.\n6. **Influencer Marketing**: Leverage others' audiences.\n\n**The Marketing Funnel**: Awareness → Interest → Consideration → Conversion → Retention → Advocacy`,
      realWorldExample: `HubSpot built a $30B business primarily through content marketing — they publish 100+ blog posts monthly, offer free tools, and educate their market. Dollar Shave Club launched with a $4,500 YouTube video that went viral (27M views) — proving that creative marketing can beat massive ad budgets.`,
      implementation: `Start with one channel that fits your audience. B2B? LinkedIn + content. B2C youth? Instagram + TikTok. B2C general? Google SEO + email.`,
      actionItems: ['Identify 2 marketing channels most relevant to your target audience', 'Create a content calendar for 1 month (4 posts minimum)', 'Set up a simple email list (Mailchimp free tier)', 'Analyze how 3 competitors market themselves — what works for them?'],
      quiz: [
        { q: 'Which marketing channel has the highest ROI?', options: ['Social media ads', 'TV advertising', 'Email marketing', 'Influencer marketing'], answer: 2 },
        { q: 'What is SEO?', options: ['Social engagement optimization', 'Optimizing for search engines to rank your content', 'Sales execution operations', 'Strategic enterprise overflow'], answer: 1 }
      ],
      keyTakeaways: ['Don\'t try all channels — master one first', 'Email marketing has the highest ROI — build your list early', 'Content marketing compounds over time like compound interest', 'Marketing without measurement is just spending money']
    }
  },
  {
    id: 'biz-7-2', title: 'Sales Fundamentals', module: 'Marketing & Sales', estimatedMinutes: 15,
    content: {
      theory: `**Sales Process**:\n1. **Prospecting**: Finding potential customers\n2. **Qualifying**: Are they a good fit? (BANT: Budget, Authority, Need, Timeline)\n3. **Presenting**: Demonstrating value (not features)\n4. **Handling Objections**: Address concerns with empathy\n5. **Closing**: Ask for the sale\n6. **Follow-up**: Post-sale relationship building\n\n**Key Principle**: Sell the outcome, not the product. "This CRM will save your sales team 10 hours/week" > "This CRM has 50 features."`,
      realWorldExample: `Salesforce's early strategy: Marc Benioff gave free copies to 100 executives, got them hooked, then charged enterprise rates. The B2B sales cycle can be 6-18 months. Apple stores sell by letting you experience the product — touch it, play with it. They never pressure-sell. Experience > pitch.`,
      implementation: `Practice selling ideas every day. Convince a friend to try a restaurant, persuade a colleague to adopt a new tool. Sales is persuasion — a universal skill.`,
      actionItems: ['Practice your "elevator pitch" — explain your idea in 30 seconds', 'Write down 5 common objections customers might have and your response to each', 'This week, practice selling one idea to someone every day', 'Study one great salesperson or negotiator (e.g., Chris Voss "Never Split the Difference")'],
      quiz: [
        { q: 'What does BANT stand for?', options: ['Budget, Authority, Need, Timeline', 'Business, Action, Network, Target', 'Brand, Audience, Niche, Tactic', 'Build, Analyze, Negotiate, Test'], answer: 0 },
        { q: 'You should sell based on:', options: ['Features', 'Price', 'Outcomes and value', 'Technical specs'], answer: 2 }
      ],
      keyTakeaways: ['Sales is about understanding and solving customer problems', 'Sell outcomes, not features', 'Objections are opportunities to provide more information', 'Everyone in a startup needs to be able to sell']
    }
  },
  // ===== MODULE 8: Operations & Scaling =====
  {
    id: 'biz-8-1', title: 'Business Operations & Systems', module: 'Operations & Scaling', estimatedMinutes: 15,
    content: {
      theory: `**Operations** = the systems and processes that keep your business running.\n\n**Key Frameworks**:\n1. **SOPs (Standard Operating Procedures)**: Document everything so anyone can do it\n2. **Automation**: Use tools to eliminate repetitive work\n3. **Delegation**: Focus on high-impact work, delegate the rest\n4. **KPIs**: Key Performance Indicators to measure what matters\n\n**The E-Myth**: Most business failures happen because skilled technicians become overwhelmed by business operations. You must work ON the business, not just IN it.`,
      realWorldExample: `McDonald's is a masterclass in operations. Every burger is made identically in 40,000+ stores worldwide because of their SOPs. Ray Kroc didn't make the best burger — he built the best system. Amazon's logistics operation (same-day delivery for millions of products) is their real competitive advantage, not their website.`,
      implementation: `Start documenting your processes now, even in a small team. Write SOPs for recurring tasks. Future you (and your team) will thank you.`,
      actionItems: ['Document 3 processes you do repeatedly in your work/side project', 'Identify 3 tasks in your daily routine that could be automated', 'Define 5 KPIs you would track if you ran a business', 'Read about the "E-Myth Revisited" key concepts'],
      quiz: [
        { q: 'What is an SOP?', options: ['Sales operation plan', 'Standard operating procedure', 'Strategic outcome priority', 'System optimization protocol'], answer: 1 },
        { q: 'The E-Myth warns against:', options: ['Hiring employees', 'Working IN the business instead of ON it', 'Taking risks', 'Scaling too fast'], answer: 1 }
      ],
      keyTakeaways: ['Systems and processes are what make businesses scalable', 'Document everything — if it\'s in your head, it\'s a bottleneck', 'Automate repetitive work to focus on high-impact activities', 'Work ON the business, not just IN it']
    }
  },
  // ===== MODULE 9: Leadership =====
  {
    id: 'biz-9-1', title: 'Leadership & Team Building', module: 'Leadership & Team Building', estimatedMinutes: 15,
    content: {
      theory: `**Great leaders** unlock the potential in others.\n\n**Leadership Styles**:\n1. **Servant Leadership**: Leader serves the team (most effective for startups)\n2. **Transformational**: Inspires with vision\n3. **Democratic**: Involves team in decisions\n4. **Autocratic**: Makes decisions alone (can be needed in crisis)\n\n**Hiring Framework**: Hire for attitude, train for skill. Culture fit > technical brilliance.\n\n**Key Principle**: Your first 10 hires define your company culture permanently. Choose carefully.`,
      realWorldExample: `Satya Nadella transformed Microsoft's culture from "know-it-all" to "learn-it-all." Market cap went from $300B to $3T under his leadership. His secret: empathy, growth mindset, and servant leadership. Steve Jobs was brilliant but his autocratic style caused immense turnover — he later softened at Apple 2.0.`,
      implementation: `Leadership is practiced daily. Lead your current team/group with intentionality. Give credit publicly, take blame privately. Listen more than you speak.`,
      actionItems: ['Identify your natural leadership style using the framework above', 'This week, practice asking team members "How can I help?" instead of directing', 'Give genuine, specific praise to 3 people today', 'Read about one great leader and one great leadership failure'],
      quiz: [
        { q: 'Which leadership style is most effective for startups?', options: ['Autocratic', 'Servant leadership', 'Laissez-faire', 'Bureaucratic'], answer: 1 },
        { q: 'Your first 10 hires define:', options: ['Company valuation', 'Company culture', 'Product quality', 'Customer base'], answer: 1 }
      ],
      keyTakeaways: ['Leadership is about unlocking others\' potential', 'Hire for attitude and cultural fit, train for skills', 'First 10 hires define your company\'s DNA', 'The best leaders are servant leaders who remove obstacles']
    }
  },
  // ===== MODULE 10: Growth & Exit =====
  {
    id: 'biz-10-1', title: 'Growth Strategies & Scaling', module: 'Growth & Exit Strategies', estimatedMinutes: 15,
    content: {
      theory: `**Growth Strategies** (Ansoff Matrix):\n1. **Market Penetration**: Sell more to existing market (optimize, improve conversion)\n2. **Market Development**: Same product, new markets (geographic expansion)\n3. **Product Development**: New products for existing customers\n4. **Diversification**: New products, new markets (highest risk)\n\n**Growth Levers**:\n• Increase traffic/leads\n• Improve conversion rate\n• Increase average order value\n• Increase purchase frequency\n• Reduce churn\n\nGrowth = (New Customers + Retained Customers) × Revenue per Customer`,
      realWorldExample: `Amazon's growth: Started selling books (market penetration). Then expanded to all products (product development). Then launched AWS (diversification) and international markets (market development). Each step built on existing capabilities. Slack grew primarily through product-led growth — the product itself was the marketing.`,
      implementation: `Focus on the one growth lever that has the most impact right now. Usually, it's either conversion rate or churn. Don't try to grow everything simultaneously.`,
      actionItems: ['Identify which growth strategy would work best for your business idea', 'Calculate: a 10% improvement in which lever would have the biggest revenue impact?', 'Study how one successful company grew from 0 to 1M customers', 'Create a simple 12-month growth plan with specific targets'],
      quiz: [
        { q: 'Which Ansoff strategy is the highest risk?', options: ['Market penetration', 'Market development', 'Product development', 'Diversification'], answer: 3 },
        { q: 'What is product-led growth?', options: ['Investing in R&D', 'The product itself drives acquisition and retention', 'Focus only on product, no marketing', 'Patent-driven growth'], answer: 1 }
      ],
      keyTakeaways: ['Growth has specific, measurable levers you can pull', 'Focus on one growth strategy at a time', 'Reducing churn is often more impactful than acquiring new customers', 'Product-led growth is the most capital-efficient growth model']
    }
  },
  {
    id: 'biz-10-2', title: 'Exit Strategies', module: 'Growth & Exit Strategies', estimatedMinutes: 15,
    content: {
      theory: `**Exit Options**:\n1. **IPO**: Initial Public Offering — list on stock exchange (rare, complex)\n2. **Acquisition**: Sell to another company (most common exit)\n3. **Merger**: Combine with another company\n4. **Secondary Sale**: Founders sell shares to private investors\n5. **Management Buyout**: Management team buys the company\n6. **Lifestyle Business**: No exit — keep running and collecting profits\n\n**Valuation Methods**: Revenue multiples (SaaS: 5-15x ARR), profit multiples, DCF, comparable transactions.\n\n**Key Insight**: Build to last, not to sell. But always know your options.`,
      realWorldExample: `Instagram: Acquired by Facebook for $1B (13 employees, 18 months old). WhatsApp: $19B by Facebook. YouTube: $1.65B by Google (18 months old). These exits were life-changing for founders. But most exits are smaller: $5-50M acquisition of a profitable niche company. Zoho chose to never seek an exit — they're a $1B+ revenue lifestyle business.`,
      implementation: `Even if you don't plan to exit, build your business as if you might. This means clean financials, strong processes, and diversified revenue.`,
      actionItems: ['Research 3 recent startup acquisitions in your industry', 'Understand common valuation multiples for your business type', 'List what would make your company attractive to an acquirer', 'Define your personal "exit number" — how much would you need to achieve financial freedom?'],
      quiz: [
        { q: 'What is the most common startup exit type?', options: ['IPO', 'Acquisition', 'Management buyout', 'Going public'], answer: 1 },
        { q: 'What does "build to last, not to sell" mean?', options: ['Never sell your company', 'Focus on long-term value, not just quick exit', 'Only build physical products', 'Avoid investors'], answer: 1 }
      ],
      keyTakeaways: ['Most successful exits are acquisitions, not IPOs', 'Build a company that could exist without you — that\'s what acquirers value', 'Clean financials and processes increase exit valuation', 'Define your personal financial freedom number']
    }
  }
];
