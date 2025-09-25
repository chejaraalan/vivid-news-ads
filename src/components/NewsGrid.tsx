import NewsCard from "./NewsCard";
import AdBanner from "./AdBanner";

// Mock news data - will be replaced with live API data
const mockNews = [
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
    isFeatured: true
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
    dislikes: 12
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
    dislikes: 45
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
    dislikes: 8
  },
  {
    id: 5,
    title: "Healthcare Innovation: New Treatment Shows Promise",
    summary: "Breakthrough medical research offers hope for millions suffering from chronic conditions, with clinical trials showing remarkable success rates.",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    source: "Health Today",
    publishedAt: "10 hours ago",
    category: "Health",
    likes: 743,
    dislikes: 19
  },
  {
    id: 6,
    title: "Entertainment Industry Embraces Sustainable Practices",
    summary: "Major studios and production companies commit to carbon-neutral filming and environmentally conscious content creation processes.",
    imageUrl: "https://images.unsplash.com/photo-1489599312549-05b5409d3dc6?w=400&h=300&fit=crop",
    source: "Entertainment Weekly",
    publishedAt: "12 hours ago",
    category: "Entertainment",
    likes: 456,
    dislikes: 31
  }
];

export default function NewsGrid() {
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
            <NewsCard {...mockNews[0]} />
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

          {/* News grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {mockNews.slice(1).map((article, index) => (
              <div key={article.id}>
                <NewsCard {...article} />
                {/* Insert ad after every 3 articles */}
                {(index + 2) % 3 === 0 && (
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

          {/* Load more button */}
          <div className="text-center mt-12">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block w-80 space-y-6">
          {/* Trending section */}
          <div className="bg-card border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 news-headline">Trending Now</h3>
            <div className="space-y-4">
              {mockNews.slice(0, 4).map((article, index) => (
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

          {/* Another sidebar ad */}
          <AdBanner
            type="video"
            src="/sample-video-ad.mp4"
            title="Explore New Technologies"
            allowSkip={false}
            position="sidebar"
          />
        </aside>
      </div>
    </section>
  );
}