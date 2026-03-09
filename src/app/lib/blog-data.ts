
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "commercial-insurance-guide",
    title: "Why Commercial Insurance is Essential for Businesses",
    excerpt: "Protect your company from unexpected risks with the right commercial insurance coverage.",
    content: `
      Commercial insurance is designed to protect businesses from financial losses caused by accidents, lawsuits, property damage, and other risks.

      Whether you run a small startup or a large company, unexpected events can seriously impact your business operations. Commercial insurance helps cover costs related to liability, employee injuries, and property damage.

      Many businesses today face cyber threats, legal claims, and operational risks. A strong commercial insurance policy ensures your company can recover quickly from such events.

      At MH Insurance, we help businesses find customized policies that provide comprehensive protection and peace of mind.
    `,
    author: "MH Insurance Team",
    date: "March 20, 2024",
    category: "Commercial",
    image: "https://picsum.photos/seed/commercial/1200/800",
    readTime: "5 min read"
  },

  {
    id: "home-insurance-benefits",
    title: "Top Benefits of Home Insurance for Homeowners",
    excerpt: "Learn how home insurance protects your property, belongings, and financial future.",
    content: `
      Home insurance is one of the most important protections a homeowner can have. It covers damages caused by fire, theft, storms, and other unexpected disasters.

      Without home insurance, repairing or rebuilding your house after a major incident can become extremely expensive.

      A good policy not only protects the physical structure of your home but also covers personal belongings like furniture, electronics, and appliances.

      MH Insurance offers flexible home insurance policies designed to safeguard your home and everything inside it.
    `,
    author: "MH Insurance Team",
    date: "March 10, 2024",
    category: "Home",
    image: "https://picsum.photos/seed/home/1200/800",
    readTime: "4 min read"
  },

  {
    id: "business-insurance-small-companies",
    title: "Business Insurance: A Must for Small Companies",
    excerpt: "Discover why small businesses need insurance to stay protected and grow confidently.",
    content: `
      Running a small business involves many risks including legal liabilities, property damage, and employee-related issues.

      Business insurance provides financial protection in case of unexpected losses. It helps cover lawsuits, property damage, and operational disruptions.

      Many entrepreneurs ignore insurance in the early stages, but even a single legal claim can create major financial stress.

      With MH Insurance, small businesses can access affordable and tailored insurance plans to protect their growth and long-term stability.
    `,
    author: "MH Insurance Team",
    date: "March 5, 2024",
    category: "Business",
    image: "https://picsum.photos/seed/business/1200/800",
    readTime: "5 min read"
  },

  {
    id: "auto-insurance-guide",
    title: "Auto Insurance Explained: What Every Driver Should Know",
    excerpt: "Understand how car insurance works and why every vehicle owner needs it.",
    content: `
      Auto insurance protects drivers from financial loss in case of accidents, theft, or damage to their vehicles.

      Depending on the policy, it can cover repair costs, medical expenses, and liability claims if you are responsible for an accident.

      Many countries legally require drivers to have basic auto insurance coverage.

      MH Insurance helps drivers choose policies that match their driving habits, vehicle value, and budget.
    `,
    author: "MH Insurance Team",
    date: "February 25, 2024",
    category: "Auto",
    image: "https://picsum.photos/seed/auto/1200/800",
    readTime: "4 min read"
  },

  {
    id: "life-insurance-importance",
    title: "Why Life Insurance is Important for Your Family",
    excerpt: "Life insurance ensures your loved ones are financially secure even in your absence.",
    content: `
      Life insurance provides financial protection to your family if something happens to you.

      It can help cover living expenses, outstanding debts, children's education, and funeral costs.

      Many people believe life insurance is only necessary later in life, but purchasing it earlier often results in lower premiums.

      MH Insurance offers flexible life insurance plans that help families stay protected and financially stable.
    `,
    author: "MH Insurance Team",
    date: "February 15, 2024",
    category: "Life",
    image: "https://picsum.photos/seed/life/1200/800",
    readTime: "4 min read"
  },

  {
    id: "health-insurance-guide",
    title: "Health Insurance: Why It Matters More Than Ever",
    excerpt: "Medical costs are rising. Health insurance helps protect your finances and well-being.",
    content: `
      Health insurance helps cover medical expenses such as doctor visits, hospital stays, medications, and surgeries.

      Without proper coverage, even a minor medical emergency can become financially overwhelming.

      Modern health insurance plans also include preventive care, wellness programs, and telemedicine services.

      MH Insurance offers comprehensive health plans designed to keep individuals and families protected.
    `,
    author: "MH Insurance Team",
    date: "February 5, 2024",
    category: "Health",
    image: "https://picsum.photos/seed/health/1200/800",
    readTime: "5 min read"
  },

  {
    id: "mortgage-insurance-explained",
    title: "Mortgage Insurance: What Home Buyers Should Know",
    excerpt: "Mortgage insurance protects lenders and helps buyers secure home loans.",
    content: `
      Mortgage insurance is often required when home buyers make a small down payment on a property.

      It protects the lender in case the borrower fails to repay the loan.

      While it adds an additional cost to the monthly payment, it allows buyers to purchase homes with lower upfront payments.

      MH Insurance provides guidance to help homeowners understand mortgage protection and financial planning.
    `,
    author: "MH Insurance Team",
    date: "January 28, 2024",
    category: "Mortgage",
    image: "https://picsum.photos/seed/mortgage/1200/800",
    readTime: "4 min read"
  },

  {
    id: "child-insurance-planning",
    title: "Child Insurance: Planning for Your Child’s Future",
    excerpt: "Secure your child’s education and future expenses with a smart insurance plan.",
    content: `
      Child insurance plans are designed to help parents save and protect funds for their children's future needs.

      These plans often combine savings with insurance protection, ensuring funds are available even if something unexpected happens to the parents.

      They are commonly used for education expenses, higher studies, and long-term financial security.

      MH Insurance offers child-focused financial protection plans to help parents plan confidently for their children’s future.
    `,
    author: "MH Insurance Team",
    date: "January 20, 2024",
    category: "Child",
    image: "https://picsum.photos/seed/child/1200/800",
    readTime: "4 min read"
  },

  {
    id: "travel-insurance-benefits",
    title: "Travel Insurance: Why Every Traveler Needs It",
    excerpt: "Travel confidently knowing you’re protected from unexpected travel problems.",
    content: `
      Travel insurance protects travelers from unexpected issues like trip cancellations, lost luggage, medical emergencies, and flight delays.

      Whether you are traveling domestically or internationally, unexpected events can disrupt your plans and create financial stress.

      A good travel insurance policy ensures you are covered for medical treatment, lost belongings, and travel disruptions.

      MH Insurance provides travel insurance plans designed for individuals, families, and frequent travelers.
    `,
    author: "MH Insurance Team",
    date: "January 10, 2024",
    category: "Travel",
    image: "https://picsum.photos/seed/travel/1200/800",
    readTime: "4 min read"
  }
];