
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
    id: "insurance-trends-2024",
    title: "The Future of Insurance: 2024 Trends to Watch",
    excerpt: "From AI-driven claims to hyper-personalized policies, discover how technology is reshaping the industry.",
    content: `
      The insurance landscape is undergoing a radical transformation. As we move into 2024, several key trends are emerging that will define the next decade of protection. 
      
      First, Artificial Intelligence (AI) is moving beyond simple automation. We are now seeing AI used for real-time risk assessment and automated claims processing, allowing for payouts in minutes rather than weeks. 
      
      Second, 'Usage-Based Insurance' (UBI) is becoming the standard for auto and health sectors. Why pay a flat rate when your premiums can be calculated based on how safely you drive or how often you exercise? 
      
      At MH Insurance, we are leading this charge by integrating these technologies into our core offerings, ensuring our clients receive the most accurate and affordable coverage possible.
    `,
    author: "James Miller",
    date: "March 15, 2024",
    category: "Technology",
    image: "https://picsum.photos/seed/blog-1/1200/800",
    readTime: "5 min read"
  },
  {
    id: "home-safety-guide",
    title: "Protecting Your Home: A Comprehensive Safety Guide",
    excerpt: "Essential tips to safeguard your property against natural disasters and theft.",
    content: `
      Your home is likely your most significant investment. Protecting it requires more than just a good insurance policy; it requires proactive maintenance and security measures.
      
      Start with a 'Smart Home' audit. Modern sensors can detect water leaks before they cause major damage, and smart locks can prevent unauthorized entry. 
      
      For natural disasters, ensure your gutters are clear, and your roof is inspected annually. These simple steps can significantly reduce your risk profile and, in some cases, even lower your insurance premiums. 
      
      MH Insurance partners with top security firms to provide our policyholders with exclusive discounts on home monitoring systems.
    `,
    author: "Sarah Thompson",
    date: "February 28, 2024",
    category: "Safety",
    image: "https://picsum.photos/seed/blog-2/1200/800",
    readTime: "7 min read"
  },
  {
    id: "life-insurance-myths",
    title: "Debunking Common Life Insurance Myths",
    excerpt: "Is life insurance only for the elderly? Do you need it if you're single? We clear up the confusion.",
    content: `
      There is a lot of misinformation surrounding life insurance. One of the most common myths is that it's only for people with dependents. In reality, life insurance can serve as a powerful investment vehicle and a way to cover debts or funeral expenses, ensuring you don't leave a financial burden for others.
      
      Another myth is that it's too expensive. Term life insurance is often surprisingly affordable, especially if purchased while young and healthy. 
      
      At MH Insurance, we believe in education. Our advisors are trained to help you understand the nuances between term and whole life plans, finding a solution that fits your budget and long-term goals.
    `,
    author: "David Chen",
    date: "January 10, 2024",
    category: "Financial Planning",
    image: "https://picsum.photos/seed/blog-3/1200/800",
    readTime: "4 min read"
  }
];
