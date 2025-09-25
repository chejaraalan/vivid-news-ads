import NewsCard from "./NewsCard";
import AdBanner from "./AdBanner";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronUp, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

// Mock news data for different days
const getTodayNews = () => [
  {
    id: 1,
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Reduction",
    summary: "World leaders unite in unprecedented commitment to reduce global carbon emissions by 50% within the next decade, marking a pivotal moment in climate action.",
    imageUrl: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400&h=300&fit=crop",
    source: "Global Times",
    publishedAt: "2 hours ago",
    category: "International",
    likes: 1247,
    dislikes: 23,
    isFeatured: true,
    date: "today"
  },
  {
    id: 2,
    title: "Breaking: Major Technology Breakthrough in Quantum Computing",
    summary: "Scientists achieve quantum supremacy milestone that could revolutionize computing, cybersecurity, and artificial intelligence applications worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    source: "Tech Herald",
    publishedAt: "4 hours ago",
    category: "Breaking",
    likes: 892,
    dislikes: 12,
    date: "today"
  },
  {
    id: 3,
    title: "National Economic Growth Surpasses Expectations in Q4",
    summary: "Latest economic indicators show robust growth across multiple sectors, with unemployment reaching historic lows and consumer confidence soaring.",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    source: "Economic Daily",
    publishedAt: "6 hours ago",
    category: "National",
    likes: 634,
    dislikes: 45,
    date: "today"
  },
  {
    id: 4,
    title: "Sports World Celebrates Record-Breaking Olympic Performance",
    summary: "Athletes continue to push boundaries with extraordinary achievements, inspiring millions and redefining what's possible in human athletic performance.",
    imageUrl: "https://images.unsplash.com/photo-1544737151-6e4b9d1c6d4d?w=400&h=300&fit=crop",
    source: "Sports Central",
    publishedAt: "8 hours ago",
    category: "Sports",
    likes: 1156,
    dislikes: 8,
    date: "today"
  }
];

const getYesterdayNews = () => [
  {
    id: 11,
    title: "International Trade Agreements Reshape Global Markets",
    summary: "New bilateral agreements between major economies are set to transform international commerce and create new opportunities for emerging markets.",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop",
    source: "World Economic Forum",
    publishedAt: "1 day ago",
    category: "International",
    likes: 523,
    dislikes: 17,
    date: "yesterday"
  },
  {
    id: 12,
    title: "Revolutionary AI System Transforms Medical Diagnostics",
    summary: "Healthcare institutions worldwide adopt groundbreaking artificial intelligence technology that dramatically improves disease detection accuracy.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
    source: "Medical Innovation Today",
    publishedAt: "1 day ago",
    category: "Health",
    likes: 891,
    dislikes: 22,
    date: "yesterday"
  },
  {
    id: 13,
    title: "Space Exploration Mission Discovers Potential Signs of Life",
    summary: "NASA's latest Mars rover expedition uncovers compelling evidence that could indicate past or present microbial life on the Red Planet.",
    imageUrl: "https://images.unsplash.com/photo-1541186933-ef5d8ed016c2?w=400&h=300&fit=crop",
    source: "Space Daily",
    publishedAt: "1 day ago",
    category: "Science",
    likes: 1234,
    dislikes: 8,
    date: "yesterday"
  },
  {
    id: 14,
    title: "Renewable Energy Milestone: Solar Power Reaches Cost Parity",
    summary: "Solar energy costs drop below traditional fossil fuels in major markets, accelerating the global transition to clean energy sources.",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
    source: "Green Energy Report",
    publishedAt: "1 day ago",
    category: "Environment",
    likes: 678,
    dislikes: 15,
    date: "yesterday"
  },
  {
    id: 15,
    title: "Cultural Festival Brings Together Nations in Celebration",
    summary: "International cultural exchange program showcases diverse traditions and strengthens diplomatic ties between participating countries.",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
    source: "Cultural Times",
    publishedAt: "1 day ago",
    category: "Culture",
    likes: 445,
    dislikes: 12,
    date: "yesterday"
  }
];

export default function NewsGrid() {
  const [articles, setArticles] = useState(getTodayNews());
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const observerTarget = useRef(null);

  // Simulate loading more news (yesterday's news)
  const loadMoreNews = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (currentPage === 0) {
      // Load yesterday's news
      const yesterdayNews = getYesterdayNews();
      setArticles(prev => [...prev, ...yesterdayNews]);
      setCurrentPage(1);
    } else {
      // No more news available
      setHasMore(false);
    }
    
    setLoading(false);
  }, [loading, hasMore, currentPage]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreNews();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loadMoreNews]);

  // Scroll position detection for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex gap-8">
        {/* Main news content */}
        <div className="flex-1">
          <div className="mb-8">
            <h2 className="text-3xl font-bold news-headline mb-2">Latest News</h2>
            <p className="text-muted-foreground">Stay updated with the most important stories from around the world</p>
          </div>

          {/* Featured article */}
          <div className="mb-8">
            <NewsCard {...articles[0]} />
          </div>

          {/* Inline ad */}
          <div className="mb-8">
            <AdBanner
              type="image"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=200&fit=crop"
              title="Boost Your Business with Digital Marketing"
              link="https://example.com"
              position="inline"
            />
          </div>

          {/* News grid with infinite scroll */}
          <div className="grid md:grid-cols-2 gap-6">
            {articles.slice(1).map((article, index) => (
              <div 
                key={article.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                <NewsCard {...article} />
                {/* Insert ad after every 6 articles */}
                {(index + 2) % 6 === 0 && (
                  <div className="mt-6">
                    <AdBanner
                      type="video"
                      src="/sample-video-ad.mp4"
                      title="Discover Amazing Products"
                      allowSkip={true}
                      position="inline"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loading indicator */}
          {loading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin mr-2" />
              <span className="text-muted-foreground">Loading older news...</span>
            </div>
          )}

          {/* End of content message */}
          {!hasMore && !loading && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                You've reached the end. No more news from the past.
              </p>
            </div>
          )}

          {/* Invisible element for intersection observer */}
          <div ref={observerTarget} className="h-10" />
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block w-80 space-y-6">
          {/* Trending section */}
          <div className="bg-card border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 news-headline">Trending Now</h3>
            <div className="space-y-4">
              {articles.slice(0, 4).map((article, index) => (
                <div key={article.id} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                  <div>
                    <h4 className="font-semibold text-sm line-clamp-2 mb-1">{article.title}</h4>
                    <p className="text-xs text-muted-foreground">{article.source} • {article.publishedAt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline indicator */}
          <div className="bg-gradient-card border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 news-headline">Timeline</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Today's News</span>
              </div>
              {currentPage >= 1 && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                  <span className="text-muted-foreground">Yesterday's News</span>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar ad */}
          <AdBanner
            type="image"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop"
            title="Premium Business Solutions"
            position="sidebar"
          />

          {/* Newsletter signup */}
          <div className="bg-gradient-card border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 news-headline">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest news delivered directly to your inbox
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-input rounded-md text-sm"
              />
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg animate-fade-in z-50"
          size="icon"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </section>
  );
}