// Finance & Economics Curriculum - Comprehensive Learning Path
// ~120 lessons across 10 modules

export const financeCurriculum = [
  // ===== MODULE 1: Foundations of Economics =====
  {
    id: 'fin-1-1', title: 'What is Economics?', module: 'Foundations of Economics', estimatedMinutes: 15,
    content: {
      theory: `Economics is the social science that studies how individuals, businesses, governments, and societies make choices about allocating scarce resources to satisfy unlimited wants. It is divided into **Microeconomics** (individual/firm behavior) and **Macroeconomics** (economy-wide phenomena).\n\n**Key Principle**: Every choice has an opportunity cost — the value of the next best alternative you give up.`,
      realWorldExample: `When you choose to spend ₹500 on a movie ticket instead of buying a book, the book is your opportunity cost. Countries face this too: India spending more on defense means less for healthcare. This is the fundamental "guns vs butter" tradeoff.`,
      implementation: `Start thinking about every daily decision in terms of tradeoffs. Before any purchase today, ask: "What am I giving up by spending this money/time here?"`,
      actionItems: ['Track 5 decisions you make today and identify the opportunity cost of each', 'Write down 3 resources that are scarce in your life (time, money, energy) and how you allocate them'],
      quiz: [
        { q: 'What is the fundamental problem economics tries to solve?', options: ['Inflation', 'Scarcity', 'Unemployment', 'Trade'], answer: 1 },
        { q: 'If you choose to study instead of working, what is the opportunity cost?', options: ['The study materials', 'The wages you could have earned', 'The time spent', 'Nothing'], answer: 1 }
      ],
      keyTakeaways: ['Economics is about making choices with limited resources', 'Every decision has an opportunity cost', 'Microeconomics = individual choices, Macroeconomics = economy-wide']
    }
  },
  {
    id: 'fin-1-2', title: 'Supply and Demand', module: 'Foundations of Economics', estimatedMinutes: 20,
    content: {
      theory: `**Supply and Demand** is the most fundamental concept in economics.\n\n**Demand**: As price ↑, quantity demanded ↓ (Law of Demand)\n**Supply**: As price ↑, quantity supplied ↑ (Law of Supply)\n**Equilibrium**: Where supply meets demand — the market-clearing price.\n\nShifters of Demand: income, preferences, substitutes, complements, expectations.\nShifters of Supply: input costs, technology, government policy, number of sellers.`,
      realWorldExample: `During COVID-19, demand for masks surged while supply was limited → prices skyrocketed from ₹5 to ₹50. As manufacturers ramped up production (supply increased), prices gradually fell back. Uber's surge pricing is a real-time supply-demand algorithm.`,
      implementation: `Observe prices around you today. Notice how prices change for seasonal fruits, flight tickets booked last-minute, or hotel prices on weekends vs weekdays.`,
      actionItems: ['Find 3 products whose prices have changed recently and explain why using supply/demand', 'Check flight prices for the same route on different dates — note the supply/demand pattern'],
      quiz: [
        { q: 'If the price of coffee rises, what happens to demand for tea (a substitute)?', options: ['Decreases', 'Stays same', 'Increases', 'Becomes zero'], answer: 2 },
        { q: 'What happens at equilibrium price?', options: ['Surplus exists', 'Shortage exists', 'Quantity supplied equals quantity demanded', 'Price keeps rising'], answer: 2 }
      ],
      keyTakeaways: ['Price is determined by the intersection of supply and demand', 'Multiple factors can shift supply and demand curves', 'Markets naturally tend toward equilibrium']
    }
  },
  {
    id: 'fin-1-3', title: 'Elasticity', module: 'Foundations of Economics', estimatedMinutes: 15,
    content: {
      theory: `**Price Elasticity of Demand (PED)** measures how responsive quantity demanded is to price changes.\n\n• **Elastic** (PED > 1): Luxury goods, goods with many substitutes. Small price change → big demand change.\n• **Inelastic** (PED < 1): Necessities, addictive goods, no substitutes. Price change → small demand change.\n• **Unit Elastic** (PED = 1): Percentage change in price = percentage change in quantity.\n\nFormula: PED = % Change in Quantity Demanded / % Change in Price`,
      realWorldExample: `Gasoline is inelastic — even when prices rise 20%, people still need to drive to work. But luxury handbags are elastic — a 20% price increase might cause a 40% drop in sales. Netflix knows this: they raise prices slowly because streaming has substitutes (Disney+, etc).`,
      implementation: `Think about your own spending. Which purchases would you cut if prices rose 20%? Those are elastic for you. Which would you keep buying regardless? Those are inelastic.`,
      actionItems: ['List 5 products you buy regularly and classify each as elastic or inelastic', 'Calculate: if your favorite coffee shop raises prices by 10%, would you buy less? By how much?'],
      quiz: [
        { q: 'Which product is most likely price inelastic?', options: ['Designer shoes', 'Insulin medication', 'Movie tickets', 'Restaurant meals'], answer: 1 },
        { q: 'If PED = 2, a 10% price increase causes what change in demand?', options: ['5% decrease', '10% decrease', '20% decrease', '2% decrease'], answer: 2 }
      ],
      keyTakeaways: ['Elasticity measures how sensitive demand is to price changes', 'Necessities tend to be inelastic, luxuries tend to be elastic', 'Businesses use elasticity to set pricing strategy']
    }
  },
  {
    id: 'fin-1-4', title: 'Market Structures', module: 'Foundations of Economics', estimatedMinutes: 15,
    content: {
      theory: `Markets are classified by the number of sellers, product differentiation, and barriers to entry:\n\n1. **Perfect Competition**: Many sellers, identical products, easy entry (e.g., agricultural markets)\n2. **Monopolistic Competition**: Many sellers, differentiated products (e.g., restaurants, clothing)\n3. **Oligopoly**: Few large sellers, high barriers (e.g., airlines, telecom, automobiles)\n4. **Monopoly**: Single seller, very high barriers (e.g., utilities, some tech platforms)`,
      realWorldExample: `The smartphone market is an oligopoly — Apple and Samsung control ~55% of global sales. Google Search is near-monopoly with 92% market share. Your local restaurant market is monopolistic competition — many options but each is slightly different.`,
      implementation: `Analyze the industries you interact with daily. Understanding market structure helps you predict pricing behavior and identify business opportunities.`,
      actionItems: ['Identify 4 companies you use daily and classify the market structure of their industry', 'Think about which market structure would be easiest to start a business in and why'],
      quiz: [
        { q: 'Which market structure has the highest barriers to entry?', options: ['Perfect competition', 'Monopolistic competition', 'Oligopoly', 'Monopoly'], answer: 3 },
        { q: 'Which is an example of monopolistic competition?', options: ['Electricity provider', 'Wheat farming', 'Coffee shops in a city', 'OPEC oil producers'], answer: 2 }
      ],
      keyTakeaways: ['Market structure determines pricing power and competition intensity', 'Most real-world markets are monopolistic competition or oligopoly', 'Understanding structure helps predict business environment']
    }
  },
  {
    id: 'fin-1-5', title: 'GDP & Economic Growth', module: 'Foundations of Economics', estimatedMinutes: 15,
    content: {
      theory: `**Gross Domestic Product (GDP)** is the total market value of all final goods and services produced within a country in a given period.\n\n**GDP = C + I + G + (X - M)**\n• C = Consumer spending\n• I = Business investment\n• G = Government spending\n• X - M = Net exports\n\n**Nominal GDP**: Measured at current prices\n**Real GDP**: Adjusted for inflation (more useful for comparison)\n**GDP per capita**: GDP / Population (standard of living indicator)`,
      realWorldExample: `India's GDP is ~$3.7 trillion (2024), making it the 5th largest economy. But GDP per capita is ~$2,500 vs USA's ~$80,000. China's rapid GDP growth (averaging 10% for decades) lifted 800 million people out of poverty — the greatest economic transformation in history.`,
      implementation: `Check today's GDP growth rate for your country. Understand what drives it. If GDP is growing, it generally means more jobs and higher incomes.`,
      actionItems: ['Look up your country\'s current GDP and GDP growth rate', 'Identify which component (C, I, G, or X-M) is the largest contributor to your country\'s GDP'],
      quiz: [
        { q: 'What does GDP measure?', options: ['Government debt', 'Total production of an economy', 'Stock market value', 'Population growth'], answer: 1 },
        { q: 'Why is Real GDP more useful than Nominal GDP?', options: ['It includes imports', 'It adjusts for inflation', 'It measures exports only', 'It counts government spending'], answer: 1 }
      ],
      keyTakeaways: ['GDP is the primary measure of economic output', 'Real GDP adjusts for inflation and is better for comparisons', 'GDP per capita is a better measure of living standards than total GDP']
    }
  },
  // ===== MODULE 2: Money & Banking =====
  {
    id: 'fin-2-1', title: 'What is Money?', module: 'Money & Banking', estimatedMinutes: 15,
    content: {
      theory: `Money serves three functions:\n1. **Medium of Exchange**: Eliminates barter; universally accepted for transactions\n2. **Store of Value**: Preserves purchasing power over time (though inflation erodes this)\n3. **Unit of Account**: Common measure to price goods and services\n\nTypes of money: Commodity money (gold), Fiat money (government-backed, like USD/INR), Digital money (bank deposits, crypto).`,
      realWorldExample: `Zimbabwe's hyperinflation (2008) destroyed money's store-of-value function — people needed wheelbarrows of cash to buy bread. In contrast, the US dollar has been stable because of trust in the US government and Federal Reserve. Bitcoin emerged as an alternative with a fixed supply of 21 million coins.`,
      implementation: `Notice how money moves through your life today. Every digital payment, every cash transaction — you're participating in a monetary system designed centuries ago.`,
      actionItems: ['Track every transaction you make today — digital vs cash', 'Research: What gives your country\'s currency its value?'],
      quiz: [
        { q: 'Which is NOT a function of money?', options: ['Medium of exchange', 'Store of value', 'Source of wealth', 'Unit of account'], answer: 2 },
        { q: 'What type of money is the US Dollar?', options: ['Commodity money', 'Fiat money', 'Cryptocurrency', 'Representative money'], answer: 1 }
      ],
      keyTakeaways: ['Money has three key functions: exchange, store of value, unit of account', 'Fiat money has value because of government backing and trust', 'Inflation erodes money\'s store-of-value function']
    }
  },
  {
    id: 'fin-2-2', title: 'How Banks Work', module: 'Money & Banking', estimatedMinutes: 15,
    content: {
      theory: `Banks are financial intermediaries that:\n1. **Accept deposits** from savers (pay interest)\n2. **Make loans** to borrowers (charge higher interest)\n3. **Profit from the spread** between deposit and lending rates\n\n**Fractional Reserve Banking**: Banks keep only a fraction (e.g., 10%) of deposits as reserves and lend out the rest. This creates a **money multiplier effect** — $100 deposited can generate $1,000 in total money supply.\n\nMoney Multiplier = 1 / Reserve Ratio`,
      realWorldExample: `If you deposit ₹100,000, the bank keeps ₹10,000 (10% reserve) and lends ₹90,000 to a business. That business deposits ₹90,000 in another bank, which keeps ₹9,000 and lends ₹81,000. This cascading effect is how banks "create" money. This is why bank runs are dangerous — if everyone withdraws at once, banks don't have enough cash.`,
      implementation: `Check your bank's interest rates today. Compare savings account rates (what they pay you) vs loan rates (what they charge). The difference is their profit margin.`,
      actionItems: ['Compare interest rates at 3 different banks for savings accounts and personal loans', 'Calculate the money multiplier if the reserve ratio is 5%'],
      quiz: [
        { q: 'How do banks primarily make profit?', options: ['Charging ATM fees', 'Spread between deposit and lending rates', 'Government subsidies', 'Stock trading'], answer: 1 },
        { q: 'If reserve ratio is 10%, what is the money multiplier?', options: ['5', '10', '20', '100'], answer: 1 }
      ],
      keyTakeaways: ['Banks profit from the interest rate spread', 'Fractional reserve banking creates a money multiplier', 'This system requires trust — bank runs can collapse it']
    }
  },
  {
    id: 'fin-2-3', title: 'Central Banks & Monetary Policy', module: 'Money & Banking', estimatedMinutes: 20,
    content: {
      theory: `**Central Banks** (Fed in US, RBI in India, ECB in Europe) control the money supply and interest rates.\n\nTools:\n1. **Interest Rate (Policy Rate)**: Raise to cool inflation, lower to stimulate growth\n2. **Open Market Operations**: Buy/sell government bonds to inject/remove money\n3. **Reserve Requirements**: Change the fraction banks must hold\n4. **Quantitative Easing**: Emergency bond-buying to flood the system with money\n\n**Inflation Targeting**: Most central banks aim for ~2% annual inflation.`,
      realWorldExample: `During COVID-19, the US Fed cut rates to near 0% and pumped $4 trillion into the economy via QE. This saved the economy from depression but contributed to 9% inflation in 2022. The Fed then raised rates aggressively to 5.25% — the fastest tightening in 40 years.`,
      implementation: `Understanding central bank decisions is crucial for investing, borrowing, and business planning. Rate changes affect mortgage costs, stock prices, and currency values.`,
      actionItems: ['Find your central bank\'s current interest rate and its last change', 'Research: How does a rate hike affect your savings account and loan EMIs?'],
      quiz: [
        { q: 'What is the primary goal of most central banks?', options: ['Maximize employment', 'Price stability (control inflation)', 'Increase GDP', 'Strengthen currency'], answer: 1 },
        { q: 'When does a central bank typically raise interest rates?', options: ['During recession', 'When inflation is too high', 'When unemployment rises', 'During deflation'], answer: 1 }
      ],
      keyTakeaways: ['Central banks control money supply and interest rates', 'Interest rate changes ripple through the entire economy', 'QE is an emergency tool that can have long-term consequences']
    }
  },
  {
    id: 'fin-2-4', title: 'Inflation & Deflation', module: 'Money & Banking', estimatedMinutes: 15,
    content: {
      theory: `**Inflation**: General increase in price levels over time. Measured by CPI (Consumer Price Index).\n\nTypes:\n• **Demand-pull**: Too much money chasing too few goods\n• **Cost-push**: Rising production costs passed to consumers\n• **Built-in**: Wage-price spiral (wages rise → prices rise → wages rise)\n\n**Deflation**: Falling prices. Sounds good but is dangerous — people delay purchases, businesses cut costs, wages fall.\n\n**Real vs Nominal**: Real values are adjusted for inflation. Your "real" salary = nominal salary - inflation rate.`,
      realWorldExample: `If your salary is ₹10 lakhs and inflation is 6%, your real salary is only ₹9.4 lakhs in purchasing power. Japan experienced deflation for 20 years (1990s-2010s), leading to economic stagnation — the "Lost Decades." Turkey experienced 85% inflation in 2022, devastating ordinary citizens' savings.`,
      implementation: `Calculate your real income after inflation. If your savings earn 4% interest but inflation is 6%, you're losing 2% purchasing power annually — your money is shrinking.`,
      actionItems: ['Look up your country\'s current inflation rate', 'Calculate if your savings account interest rate beats inflation', 'Find out how much ₹1 lakh from 10 years ago would be worth today'],
      quiz: [
        { q: 'What does CPI measure?', options: ['Company profits', 'Change in price of a basket of goods', 'Currency exchange rates', 'GDP growth'], answer: 1 },
        { q: 'If inflation is 7% and your savings earn 5%, what is happening?', options: ['You\'re getting richer', 'You\'re losing purchasing power', 'Nothing changes', 'Your money doubles'], answer: 1 }
      ],
      keyTakeaways: ['Inflation erodes purchasing power — always think in real terms', 'Moderate inflation (2-3%) is considered healthy', 'Deflation can be more dangerous than inflation', 'Your investments must beat inflation to grow wealth']
    }
  },
  {
    id: 'fin-2-5', title: 'Interest Rates Deep Dive', module: 'Money & Banking', estimatedMinutes: 15,
    content: {
      theory: `Interest is the cost of borrowing money (or the reward for saving).\n\n**Simple Interest**: I = P × R × T (principal × rate × time)\n**Compound Interest**: A = P(1 + r/n)^(nt) — "Interest on interest"\n\n**Rule of 72**: Divide 72 by the interest rate to estimate years to double your money.\n• At 8% → 72/8 = 9 years to double\n• At 12% → 72/12 = 6 years to double\n\nTypes: Fixed vs floating, nominal vs real, risk-free rate (government bonds).`,
      realWorldExample: `Warren Buffett started investing at age 11. If he had started at 21, with the same returns, he would have 99.9% less wealth today. That's the power of compound interest — Einstein allegedly called it the "8th wonder of the world." A ₹10,000/month SIP at 12% for 30 years = ₹3.5 crore!`,
      implementation: `Use the Rule of 72 to evaluate every investment opportunity. If a fund returns 15% annually, your money doubles every 4.8 years.`,
      actionItems: ['Calculate how long it takes to double money at your bank\'s savings rate using Rule of 72', 'Use a compound interest calculator to project ₹5,000/month invested for 20 years at 12%'],
      quiz: [
        { q: 'Using Rule of 72, how long to double money at 9% annual return?', options: ['6 years', '8 years', '9 years', '12 years'], answer: 1 },
        { q: 'Why is compound interest so powerful?', options: ['The rate is higher', 'You earn interest on previously earned interest', 'Banks add extra money', 'Government supplements it'], answer: 1 }
      ],
      keyTakeaways: ['Compound interest is the most powerful force in wealth building', 'Rule of 72 is a quick mental shortcut for doubling time', 'Starting early is the biggest advantage in investing', 'Always consider real (inflation-adjusted) interest rates']
    }
  },
  // ===== MODULE 3: Personal Finance =====
  {
    id: 'fin-3-1', title: 'Budgeting Fundamentals', module: 'Personal Finance', estimatedMinutes: 15,
    content: {
      theory: `A budget is a plan for every dollar/rupee you earn.\n\n**50/30/20 Rule**:\n• 50% Needs (rent, food, utilities, insurance)\n• 30% Wants (entertainment, dining out, shopping)\n• 20% Savings & Debt repayment\n\n**Zero-Based Budgeting**: Every rupee gets assigned a job. Income - Expenses = 0.\n\n**Pay Yourself First**: Automate savings BEFORE spending. Treat savings as a non-negotiable bill.`,
      realWorldExample: `A person earning ₹50,000/month using 50/30/20: ₹25,000 needs, ₹15,000 wants, ₹10,000 savings. By paying themselves first (auto-transfer ₹10,000 to investments on salary day), they never "forget" to save. Studies show automated savers accumulate 3x more than manual savers.`,
      implementation: `Create a simple budget today. List your income, then allocate every rupee. Use the 50/30/20 rule as a starting framework.`,
      actionItems: ['Write down your monthly income and categorize all expenses into Needs/Wants/Savings', 'Set up an auto-transfer to a savings account on your salary day', 'Download a budgeting app or create a spreadsheet'],
      quiz: [
        { q: 'In the 50/30/20 rule, what percentage goes to wants?', options: ['50%', '30%', '20%', '10%'], answer: 1 },
        { q: 'What does "Pay Yourself First" mean?', options: ['Buy what you want first', 'Automate savings before spending', 'Pay all bills first', 'Invest in yourself through education'], answer: 1 }
      ],
      keyTakeaways: ['A budget gives you control over your money', 'Automate savings to make it effortless', 'Track spending to identify waste', '50/30/20 is a starting framework — adjust to your situation']
    }
  },
  {
    id: 'fin-3-2', title: 'Emergency Fund & Savings', module: 'Personal Finance', estimatedMinutes: 15,
    content: {
      theory: `**Emergency Fund**: 3-6 months of essential expenses in a liquid, safe account.\n\nWhy: Unexpected job loss, medical bills, car repairs. Without it, you'll go into debt.\n\nWhere to keep it:\n• High-yield savings account\n• Liquid/overnight mutual funds\n• NOT in stocks (too volatile)\n• NOT in fixed deposits (hard to access quickly)\n\nBuild it in stages: First ₹10,000 → then 1 month → then 3 months → then 6 months.`,
      realWorldExample: `During COVID-19, millions lost jobs overnight. Those with 6-month emergency funds survived without debt. Those without were forced to liquidate investments at a loss, borrow at high rates, or cut essentials. A Bankrate survey found 57% of Americans can't cover a $1,000 emergency expense.`,
      implementation: `Calculate your monthly essential expenses (rent, food, utilities, insurance). Multiply by 6. That's your emergency fund target.`,
      actionItems: ['Calculate your monthly essential expenses', 'Determine your emergency fund target (expenses × 6)', 'Open a separate high-yield savings account if you don\'t have one', 'Set up a monthly auto-transfer toward your emergency fund'],
      quiz: [
        { q: 'How many months of expenses should an emergency fund cover?', options: ['1-2 months', '3-6 months', '12 months', '24 months'], answer: 1 },
        { q: 'Where should you keep your emergency fund?', options: ['Stocks', 'Cryptocurrency', 'Fixed deposit', 'High-yield savings account'], answer: 3 }
      ],
      keyTakeaways: ['Emergency fund is your #1 financial priority', 'Keep it liquid and safe — not invested', 'Build it gradually — any amount is better than zero', 'This fund prevents debt spirals during crises']
    }
  },
  {
    id: 'fin-3-3', title: 'Debt Management', module: 'Personal Finance', estimatedMinutes: 15,
    content: {
      theory: `Not all debt is equal:\n\n**Good Debt**: Low interest, builds assets (mortgage, education loan, business loan)\n**Bad Debt**: High interest, depreciating assets (credit cards, personal loans for consumption)\n\n**Debt Repayment Strategies**:\n• **Avalanche**: Pay highest interest rate first (mathematically optimal)\n• **Snowball**: Pay smallest balance first (psychologically motivating)\n\n**Debt-to-Income Ratio**: Total monthly debt / Gross monthly income. Keep below 36%.`,
      realWorldExample: `Credit card debt at 36% APR is devastating. ₹1 lakh on a credit card at 36% interest, paying only minimum, takes 30+ years to repay and costs ₹8+ lakh total. In contrast, a home loan at 8% builds equity. The avalanche method saves more money, but the snowball method keeps you motivated by celebrating small wins.`,
      implementation: `List all your debts with interest rates. Attack the highest-rate debt first while maintaining minimums on others.`,
      actionItems: ['List all debts: amount, interest rate, monthly payment', 'Calculate your debt-to-income ratio', 'Choose avalanche or snowball method', 'Call your credit card company and negotiate a lower interest rate'],
      quiz: [
        { q: 'Which debt repayment method is mathematically optimal?', options: ['Snowball', 'Avalanche', 'Minimum payments', 'Consolidation'], answer: 1 },
        { q: 'What is considered a healthy debt-to-income ratio?', options: ['Below 10%', 'Below 36%', 'Below 50%', 'Below 75%'], answer: 1 }
      ],
      keyTakeaways: ['Distinguish good debt from bad debt', 'Credit card debt is a financial emergency', 'Choose avalanche for savings or snowball for motivation', 'Always pay more than the minimum payment']
    }
  },
  {
    id: 'fin-3-4', title: 'Credit Score & Credit Management', module: 'Personal Finance', estimatedMinutes: 15,
    content: {
      theory: `Your credit score (300-900 in India, 300-850 in US) determines your borrowing power.\n\n**Key Factors**:\n• Payment history (35%) — pay on time, always\n• Credit utilization (30%) — keep below 30% of limit\n• Length of credit history (15%) — older is better\n• Credit mix (10%) — variety of credit types\n• New inquiries (10%) — too many applications hurt\n\n**CIBIL Score tiers**: 750+ = Excellent, 700-749 = Good, 650-699 = Fair, Below 650 = Poor`,
      realWorldExample: `A person with a 750+ score gets a home loan at 8.5%. The same person with a 650 score pays 11%. On a ₹50 lakh, 20-year loan, that's ₹18+ lakh extra in interest. Companies also check credit scores for hiring in some roles.`,
      implementation: `Check your credit score today for free (CIBIL in India, Credit Karma in US). Set up autopay for all credit cards.`,
      actionItems: ['Check your credit score for free at CIBIL/CreditKarma', 'Set up autopay for all credit card bills (full amount, not minimum)', 'Check your credit utilization ratio', 'Review your credit report for errors'],
      quiz: [
        { q: 'What is the most important factor in your credit score?', options: ['Credit mix', 'Payment history', 'Length of history', 'Number of accounts'], answer: 1 },
        { q: 'What credit utilization should you maintain?', options: ['Below 10%', 'Below 30%', 'Below 50%', 'Below 75%'], answer: 1 }
      ],
      keyTakeaways: ['Your credit score directly affects loan costs', 'Always pay on time and in full', 'Keep utilization below 30%', 'Check your credit report regularly for errors']
    }
  },
  {
    id: 'fin-3-5', title: 'Insurance Essentials', module: 'Personal Finance', estimatedMinutes: 15,
    content: {
      theory: `Insurance transfers risk from you to an insurance company in exchange for a premium.\n\n**Must-have**:\n1. **Health Insurance**: Covers medical expenses (most important!)\n2. **Term Life Insurance**: Pure protection, low cost, high coverage\n3. **Vehicle Insurance**: Legally required, protects against liability\n\n**Avoid**: Endowment plans, ULIPs, return-of-premium plans (bad returns + bad insurance)\n\n**Rule**: Buy pure term insurance (₹1 crore cover for ~₹10,000/year at age 25) and invest separately.`,
      realWorldExample: `A hospital stay in India can cost ₹5-20 lakh. Without health insurance, this can wipe out years of savings. A ₹1 crore term life policy costs ₹8,000-15,000/year for a 25-year-old — that's ₹33/day to protect your family. LIC endowment plans give 4-5% returns vs term + mutual funds giving 12-15%.`,
      implementation: `Assess your current insurance coverage. Do you have adequate health insurance? Do dependents rely on your income? If yes, get term life insurance.`,
      actionItems: ['Check if you have health insurance and what it covers', 'If you have dependents, research term life insurance options', 'Calculate how much coverage you need (10-15x annual income for life insurance)', 'Review and avoid any investment-cum-insurance products'],
      quiz: [
        { q: 'Which type of life insurance is recommended for pure protection?', options: ['Endowment plan', 'ULIP', 'Term insurance', 'Whole life'], answer: 2 },
        { q: 'What should your life insurance cover be?', options: ['1x annual income', '5x annual income', '10-15x annual income', '50x annual income'], answer: 2 }
      ],
      keyTakeaways: ['Health insurance is non-negotiable', 'Term insurance = best life coverage for least cost', 'Never mix insurance and investment', 'Buy insurance when young and healthy for lowest premiums']
    }
  },
  // ===== MODULE 4: Macroeconomics =====
  {
    id: 'fin-4-1', title: 'Fiscal Policy', module: 'Macroeconomics', estimatedMinutes: 15,
    content: {
      theory: `**Fiscal Policy** is the government's use of taxation and spending to influence the economy.\n\n**Expansionary**: Increase spending / cut taxes → stimulate growth during recession\n**Contractionary**: Cut spending / raise taxes → cool down overheating economy\n\n**Budget Deficit**: Government spends more than it earns (borrowing needed)\n**Budget Surplus**: Government earns more than it spends (rarely happens)\n\n**National Debt**: Accumulated total of all past deficits.`,
      realWorldExample: `During COVID-19, India announced a ₹20 lakh crore stimulus package (10% of GDP). The US passed $5 trillion in stimulus — direct checks to citizens, PPP loans, enhanced unemployment benefits. This prevented economic collapse but increased national debt significantly.`,
      implementation: `Follow your government's annual budget announcement. Understand how tax changes and spending decisions affect your income, investments, and industry.`,
      actionItems: ['Research your country\'s current budget deficit as % of GDP', 'List 3 ways government spending directly affects your daily life', 'Understand the current income tax slabs and optimize your tax planning'],
      quiz: [
        { q: 'What is fiscal policy?', options: ['Central bank interest rates', 'Government taxation and spending', 'Stock market regulation', 'Trade policy'], answer: 1 },
        { q: 'During a recession, which fiscal policy is appropriate?', options: ['Raise taxes', 'Cut government spending', 'Increase government spending', 'Do nothing'], answer: 2 }
      ],
      keyTakeaways: ['Fiscal policy = government spending + taxation decisions', 'Expansionary policy stimulates growth but increases debt', 'Budget deficits are common but must be sustainable', 'Tax changes directly affect your personal finances']
    }
  },
  {
    id: 'fin-4-2', title: 'Unemployment & Labor Markets', module: 'Macroeconomics', estimatedMinutes: 15,
    content: {
      theory: `Types of unemployment:\n1. **Frictional**: Between jobs (normal, healthy)\n2. **Structural**: Skills mismatch (e.g., coal miners when coal plants close)\n3. **Cyclical**: Due to economic downturns (most concerning)\n4. **Seasonal**: Industry-specific (tourism, agriculture)\n\n**Natural Rate of Unemployment**: 4-5% in developed economies. Zero unemployment is neither possible nor desirable.\n\n**Phillips Curve**: Inverse relationship between unemployment and inflation (debated).`,
      realWorldExample: `AI and automation are creating massive structural unemployment risk. McKinsey estimates 375 million workers globally may need to switch occupations by 2030. India's unemployment rate post-COVID reached 23.5%. Understanding value of continuous skill development is essential.`,
      implementation: `Assess your own career resilience. Are your skills in demand? Could automation replace your role? Start building skills that complement AI rather than compete with it.`,
      actionItems: ['Research the current unemployment rate in your country/state', 'List 3 skills in your field that are hardest for AI to replicate', 'Identify one new skill to learn that increases your job security'],
      quiz: [
        { q: 'Which type of unemployment is caused by economic downturns?', options: ['Frictional', 'Structural', 'Cyclical', 'Seasonal'], answer: 2 },
        { q: 'What is a "healthy" unemployment rate?', options: ['0%', '2-3%', '4-5%', '10%'], answer: 2 }
      ],
      keyTakeaways: ['Some unemployment is natural and healthy in an economy', 'Structural unemployment from technology is the biggest long-term concern', 'Continuous learning is your best insurance against unemployment', 'Government responses to unemployment include fiscal and training programs']
    }
  },
  // ===== MODULE 5: Microeconomics =====
  {
    id: 'fin-5-1', title: 'Consumer Behavior & Utility', module: 'Microeconomics', estimatedMinutes: 15,
    content: {
      theory: `**Utility** = satisfaction/happiness derived from consuming a good.\n\n**Marginal Utility**: Additional satisfaction from one more unit. It usually decreases (Law of Diminishing Marginal Utility).\n\nExamples: First slice of pizza = amazing. Fourth slice = meh. Sixth = uncomfortable.\n\n**Consumer Surplus**: Difference between what you're willing to pay and what you actually pay. If you'd pay ₹500 for a coffee but it costs ₹200, your consumer surplus is ₹300.`,
      realWorldExample: `Streaming services exploit marginal utility: Netflix's first show makes you subscribe, but each additional show adds less value. Amazon prices dynamically based on how much different consumers are willing to pay (price discrimination). Airlines charge more for last-minute tickets because those travelers have higher willingness to pay.`,
      implementation: `Before any purchase, ask: "How much would I actually pay for this?" If the market price is lower, you're getting surplus value. If higher, you're overpaying for the utility you'll receive.`,
      actionItems: ['For 3 purchases today, estimate your willingness to pay vs actual price', 'Identify one subscription/service where your marginal utility has decreased', 'Cancel or downgrade services where you\'re no longer getting good value'],
      quiz: [
        { q: 'What is the Law of Diminishing Marginal Utility?', options: ['Total utility always decreases', 'Each additional unit gives less satisfaction', 'Prices always fall over time', 'Supply always exceeds demand'], answer: 1 },
        { q: 'If you\'d pay ₹1000 for headphones priced at ₹600, your consumer surplus is?', options: ['₹1000', '₹600', '₹400', '₹1600'], answer: 2 }
      ],
      keyTakeaways: ['Utility is subjective and varies by person', 'Marginal utility decreases with each additional unit', 'Consumer surplus = value you get above what you pay', 'Smart spending maximizes total utility across all purchases']
    }
  },
  {
    id: 'fin-5-2', title: 'Cost Structures & Profit', module: 'Microeconomics', estimatedMinutes: 15,
    content: {
      theory: `Understanding costs is essential for business decisions:\n\n**Fixed Costs**: Don't change with output (rent, salaries, insurance)\n**Variable Costs**: Change with output (materials, commissions, packaging)\n**Total Cost** = Fixed + Variable\n\n**Marginal Cost**: Cost of producing one additional unit\n**Average Cost**: Total cost / Quantity\n**Break-even Point**: Where Total Revenue = Total Cost\n\n**Profit Maximization**: Produce where Marginal Revenue = Marginal Cost`,
      realWorldExample: `Software businesses have high fixed costs (development) but near-zero marginal costs (each additional user costs almost nothing). This is why SaaS businesses are so profitable at scale. A restaurant has both: rent (fixed) + ingredients (variable). Understanding break-even helps decide pricing.`,
      implementation: `If you ever start a business, map out your fixed and variable costs first. Calculate break-even to know how many units you need to sell.`,
      actionItems: ['For any business you admire, list their likely fixed vs variable costs', 'Calculate: if a product costs ₹100 to make (₹60 fixed, ₹40 variable) and sells for ₹150, how many units to break even?', 'Research why tech companies prioritize growth over profit initially'],
      quiz: [
        { q: 'Which is an example of a fixed cost?', options: ['Raw materials', 'Sales commission', 'Office rent', 'Shipping cost'], answer: 2 },
        { q: 'At break-even point, profit equals?', options: ['Maximum', 'Minimum', 'Zero', 'Revenue'], answer: 2 }
      ],
      keyTakeaways: ['Fixed costs don\'t change with production volume', 'High fixed + low variable = powerful economies of scale', 'Break-even analysis is crucial before starting any business', 'Marginal cost helps optimize production decisions']
    }
  },
  // ===== MODULE 6: Financial Markets =====
  {
    id: 'fin-6-1', title: 'Bonds & Fixed Income', module: 'Financial Markets', estimatedMinutes: 15,
    content: {
      theory: `A **bond** is a loan you give to a government or corporation. They pay you interest (coupon) and return principal at maturity.\n\n**Key terms**:\n• Face Value: Amount returned at maturity (typically ₹1,000 or $1,000)\n• Coupon Rate: Annual interest rate\n• Maturity: When the bond expires\n• Yield: Total return including price changes\n\n**Inverse Relationship**: When interest rates rise, bond prices fall (and vice versa).\n\n**Types**: Government bonds (safest), Corporate bonds, Municipal bonds, Junk bonds (high risk, high yield).`,
      realWorldExample: `US Treasury bonds are considered "risk-free" — the safest investment globally. In 2022, when the Fed raised rates rapidly, bond prices crashed. A 30-year Treasury bond lost 40% of its value. This is why understanding the rate-price relationship matters. India's 10-year government bond yield is ~7%.`,
      implementation: `Bonds should form part of your portfolio as you get older (lower risk). Young investors can hold fewer bonds and more stocks.`,
      actionItems: ['Look up the current 10-year government bond yield for your country', 'Research the difference between government and corporate bond yields (credit spread)', 'Understand why bond prices fall when interest rates rise'],
      quiz: [
        { q: 'When interest rates rise, bond prices:', options: ['Rise', 'Stay same', 'Fall', 'Double'], answer: 2 },
        { q: 'Which bond type is considered safest?', options: ['Corporate', 'Municipal', 'Government', 'Junk'], answer: 2 }
      ],
      keyTakeaways: ['Bonds are loans to governments or companies', 'Bond prices move inversely to interest rates', 'Government bonds are the safest fixed-income investment', 'Bond allocation should increase as you approach retirement']
    }
  },
  {
    id: 'fin-6-2', title: 'Forex & Currency Markets', module: 'Financial Markets', estimatedMinutes: 15,
    content: {
      theory: `The **Foreign Exchange (Forex)** market is the largest financial market, trading $7.5 trillion daily.\n\n**Exchange Rate**: Price of one currency in terms of another (e.g., 1 USD = 83 INR).\n\n**What affects rates**:\n• Interest rate differentials\n• Inflation differences\n• Trade balances\n• Political stability\n• Capital flows\n\n**Fixed vs Floating**: Some currencies are pegged (Saudi Riyal to USD), most are free-floating.`,
      realWorldExample: `When India's rupee weakened from 60 to 83 against the dollar (2014-2024), imports became expensive (oil, electronics) but IT exports became more competitive. Japan's yen fell to 150/USD in 2023, making Japanese stocks attractive to foreign investors but hurting Japanese consumers buying imported goods.`,
      implementation: `If you plan international purchases, study, or business, currency movements directly affect your costs. Hedging strategies can protect against unfavorable moves.`,
      actionItems: ['Check today\'s exchange rate for your currency against USD, EUR, and GBP', 'Calculate how currency movement has affected the price of an imported product you use', 'Research how NRI/offshore income is affected by exchange rates'],
      quiz: [
        { q: 'What is the world\'s largest financial market?', options: ['Stock market', 'Bond market', 'Forex market', 'Commodities market'], answer: 2 },
        { q: 'If INR weakens against USD, Indian exports become:', options: ['More expensive', 'More competitive', 'Unchanged', 'Impossible'], answer: 1 }
      ],
      keyTakeaways: ['Forex is the largest and most liquid market globally', 'Currency movements affect import/export prices', 'Interest rates are the primary driver of exchange rates', 'Hedging can protect against currency risk']
    }
  },
  // ===== MODULE 7: International Economics =====
  {
    id: 'fin-7-1', title: 'International Trade & Comparative Advantage', module: 'International Economics', estimatedMinutes: 15,
    content: {
      theory: `**Comparative Advantage**: Countries should specialize in producing goods where they have the lowest opportunity cost, even if they're not the absolute best at producing anything.\n\n**Free Trade Benefits**: Lower prices, more variety, specialization efficiency\n**Protectionism**: Tariffs, quotas, subsidies — protect domestic industries but raise prices\n\n**Trade Balance**: Exports - Imports. Surplus (positive) or Deficit (negative).\n**WTO**: World Trade Organization — sets global trade rules.`,
      realWorldExample: `China became the "world's factory" by having comparative advantage in manufacturing (cheap labor, infrastructure). The US has comparative advantage in technology and services. The US-China trade war (2018+) imposed tariffs that raised prices for American consumers by an estimated $1,300 per household annually.`,
      implementation: `Think about global supply chains of products you use. Your iPhone is designed in California, chips from Taiwan, assembled in China, with software written globally.`,
      actionItems: ['Pick 3 products you own and trace their country of manufacture', 'Research: What does your country export the most? Import the most?', 'Understand how tariffs affect the price of your daily goods'],
      quiz: [
        { q: 'What is comparative advantage?', options: ['Being the best at everything', 'Producing at lowest opportunity cost', 'Having the most resources', 'Largest labor force'], answer: 1 },
        { q: 'What do tariffs typically do to consumer prices?', options: ['Lower them', 'Keep them same', 'Raise them', 'Eliminate them'], answer: 2 }
      ],
      keyTakeaways: ['Comparative advantage drives international trade', 'Free trade generally benefits consumers through lower prices', 'Protectionism has costs — higher prices and less efficiency', 'Global supply chains make us all interconnected']
    }
  },
  // ===== MODULE 8: Behavioral Economics =====
  {
    id: 'fin-8-1', title: 'Cognitive Biases in Finance', module: 'Behavioral Economics', estimatedMinutes: 15,
    content: {
      theory: `**Behavioral Economics** studies why humans make irrational financial decisions.\n\nKey biases:\n1. **Loss Aversion**: Losses hurt 2x more than gains feel good\n2. **Anchoring**: First number you see influences your judgment\n3. **Herd Mentality**: Following the crowd (buying Bitcoin at peak)\n4. **Confirmation Bias**: Seeking info that confirms existing beliefs\n5. **Sunk Cost Fallacy**: Continuing because you've already invested\n6. **Present Bias**: Preferring smaller rewards now over larger rewards later\n7. **Overconfidence**: Overestimating your knowledge/abilities`,
      realWorldExample: `During the 2021 meme stock craze, millions bought GameStop (GME) purely because others were buying (herd mentality). Many held as it dropped from $483 to $40 (sunk cost + loss aversion). Studies show that the average investor earns 3-4% less than the market because of behavioral biases.`,
      implementation: `Before any financial decision, pause and ask: "Am I being rational, or is a bias driving this?" Create a checklist of common biases to review before investing.`,
      actionItems: ['Identify 3 past financial decisions where you were influenced by a cognitive bias', 'Create a personal "bias checklist" to review before making investments', 'Practice the "10-10-10 rule": How will I feel about this in 10 minutes, 10 months, 10 years?'],
      quiz: [
        { q: 'What is loss aversion?', options: ['Fear of investing', 'Losses hurt more than equivalent gains feel good', 'Avoiding all risk', 'Never selling at a loss'], answer: 1 },
        { q: 'Following the crowd into an investment is an example of:', options: ['Anchoring', 'Sunk cost fallacy', 'Herd mentality', 'Confirmation bias'], answer: 2 }
      ],
      keyTakeaways: ['Humans are not rational economic actors', 'Awareness of biases is the first step to better decisions', 'Create systems and rules to overcome biases', 'Most investment underperformance is behavioral, not informational']
    }
  },
  {
    id: 'fin-8-2', title: 'Nudge Theory & Choice Architecture', module: 'Behavioral Economics', estimatedMinutes: 15,
    content: {
      theory: `**Nudge Theory** (Thaler & Sunstein): Small design changes can "nudge" people toward better decisions without restricting choice.\n\n**Choice Architecture**: How options are presented affects decisions.\n\nExamples:\n• Default opt-in for retirement savings (401k) → participation jumps from 40% to 90%\n• Cafeterias placing healthy food at eye level → healthier eating\n• Organ donation opt-out vs opt-in → 90% vs 15% donation rates`,
      realWorldExample: `India's Aadhaar-linked direct benefit transfer "nudged" 300+ million people into the formal banking system. Amazon's "one-click buy" is a nudge toward purchasing. Swiggy/Zomato's default tip suggestion is choice architecture that increases tipping.`,
      implementation: `Design your own nudges. Put your investment app on your home screen. Auto-invest on salary day. Remove food delivery apps from easy access.`,
      actionItems: ['Set up 3 personal "nudges" — auto-invest, healthy app placement, etc.', 'Identify 5 nudges that companies use on you daily', 'Design a choice architecture for your own daily routine that promotes good habits'],
      quiz: [
        { q: 'What is a "nudge" in behavioral economics?', options: ['A mandatory rule', 'A gentle push toward better choices', 'A financial penalty', 'A tax incentive'], answer: 1 },
        { q: 'Why do opt-out retirement plans have higher participation?', options: ['They pay more', 'Default bias — people stick with the default', 'They\'re mandatory', 'They have lower fees'], answer: 1 }
      ],
      keyTakeaways: ['Small changes in how choices are presented have huge effects', 'Defaults are incredibly powerful — most people never change them', 'You can nudge yourself toward better financial behavior', 'Companies use nudges to influence your spending — be aware']
    }
  },
  // ===== MODULE 9: Tax Planning =====
  {
    id: 'fin-9-1', title: 'Tax Fundamentals', module: 'Tax Planning & Optimization', estimatedMinutes: 20,
    content: {
      theory: `**Tax** is the government's primary revenue source.\n\nTypes:\n• **Income Tax**: On earnings (progressive — higher income = higher rate)\n• **Capital Gains Tax**: On investment profits (short-term vs long-term)\n• **GST/Sales Tax**: On consumption\n• **Property Tax**: On real estate ownership\n\n**Tax Planning** (legal) vs **Tax Evasion** (illegal).\n\n**Common Deductions**: Retirement contributions (401k/PPF), health insurance premiums, home loan interest, education expenses, charitable donations.`,
      realWorldExample: `An Indian earning ₹15 lakh can reduce taxable income to ₹8.5 lakh through: PPF (₹1.5L), home loan interest (₹2L), NPS (₹50K), health insurance (₹75K), standard deduction (₹75K). This saves ₹1.3 lakh in taxes annually! US employees using 401k match get free money — not using it is leaving cash on the table.`,
      implementation: `Understand your country's tax brackets and available deductions. Start tax planning at the beginning of the financial year, not at the end.`,
      actionItems: ['Write down your current tax bracket', 'List all tax-saving investments you currently hold', 'Identify 2-3 additional deductions you qualify for but aren\'t claiming', 'Create a tax-saving investment plan for the current year'],
      quiz: [
        { q: 'What is the difference between tax planning and tax evasion?', options: ['No difference', 'Planning is legal, evasion is illegal', 'Planning costs more', 'Evasion saves more'], answer: 1 },
        { q: 'Progressive taxation means:', options: ['Everyone pays the same rate', 'Higher income pays higher rate', 'Rate decreases with income', 'Only the rich pay taxes'], answer: 1 }
      ],
      keyTakeaways: ['Tax planning is legal and essential — tax evasion is criminal', 'Start tax planning at the start of the year, not the end', 'Use all available deductions to minimize tax liability', 'Understand the difference between short-term and long-term capital gains']
    }
  },
  // ===== MODULE 10: Wealth Building =====
  {
    id: 'fin-10-1', title: 'The Wealth Building Framework', module: 'Wealth Building & Financial Independence', estimatedMinutes: 15,
    content: {
      theory: `**Wealth = Assets - Liabilities**\n\n**The Wealth Equation**: Earn → Save → Invest → Protect → Grow\n\n**Income Types**:\n1. **Active Income**: Trading time for money (job)\n2. **Passive Income**: Earning without active work (investments, royalties, rental income)\n3. **Portfolio Income**: Capital gains, dividends\n\n**Financial Independence**: When passive income > expenses. You work because you want to, not because you have to.\n\n**FIRE Movement**: Financial Independence, Retire Early. Save 50-70% of income, invest aggressively.`,
      realWorldExample: `A person earning ₹10 lakh/year, saving 50% and investing at 12% can achieve ₹1 crore in 10 years and financial independence in 15 years. Robert Kiyosaki's "Rich Dad Poor Dad" framework: the rich buy assets (investments, businesses), the poor buy liabilities (cars, gadgets) thinking they're assets.`,
      implementation: `Start tracking your net worth monthly. Focus on building assets that generate income. Every rupee is a potential employee — put it to work.`,
      actionItems: ['Calculate your current net worth (assets - liabilities)', 'List all your income sources — active, passive, portfolio', 'Identify one way to create passive income this year', 'Set a financial independence target number (annual expenses × 25)'],
      quiz: [
        { q: 'What is financial independence?', options: ['Being debt free', 'Having ₹1 crore', 'Passive income exceeding expenses', 'Owning a business'], answer: 2 },
        { q: 'In the FIRE movement, what savings rate is typically targeted?', options: ['10-20%', '20-30%', '30-50%', '50-70%'], answer: 3 }
      ],
      keyTakeaways: ['Wealth = Assets - Liabilities, not income', 'The goal is to convert active income into assets that generate passive income', 'Financial independence = passive income > expenses', 'Track net worth monthly to measure real progress']
    }
  },
  {
    id: 'fin-10-2', title: 'Real Estate Fundamentals', module: 'Wealth Building & Financial Independence', estimatedMinutes: 15,
    content: {
      theory: `Real estate can be both a home and an investment.\n\n**Buy vs Rent Decision**:\n• Buy when: Staying 5+ years, good price-to-rent ratio, tax benefits matter\n• Rent when: Flexibility needed, market overpriced, opportunity cost of down payment is high\n\n**Investment Types**: Rental property, REITs (Real Estate Investment Trusts), commercial real estate, land\n\n**Key Metrics**: Cap Rate (net income / property value), Cash-on-Cash return, Price-to-Rent ratio\n\n**Leverage**: Using a mortgage means 20% down can control 100% of the property — amplifies both gains and losses.`,
      realWorldExample: `In Mumbai, the average flat costs 30x annual rent — making renting much better financially than buying. In Bengaluru tier-2 areas, it's 15x — making buying more reasonable. REITs like Embassy REIT allow you to invest in commercial real estate starting from ₹300-400, providing 6-8% yields with liquidity.`,
      implementation: `If you're considering buying property, calculate the price-to-rent ratio. If it's above 20, you're generally better off renting and investing the difference.`,
      actionItems: ['Research average property prices and rental rates in your area', 'Calculate the price-to-rent ratio for your area', 'Look up 2-3 REITs available in your country and their yields', 'Compare: EMI for buying vs rent + investing the difference over 20 years'],
      quiz: [
        { q: 'What is a good price-to-rent ratio for considering buying?', options: ['Above 30', 'Below 20', 'Exactly 25', 'Above 40'], answer: 1 },
        { q: 'What are REITs?', options: ['Real estate agents', 'Funds that invest in real estate properties', 'Government housing schemes', 'Real estate insurance'], answer: 1 }
      ],
      keyTakeaways: ['Buying isn\'t always better than renting — do the math', 'REITs provide real estate exposure without property ownership hassles', 'Leverage amplifies returns but also amplifies risk', 'Location is the #1 factor in real estate value']
    }
  }
];
