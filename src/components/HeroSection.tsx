import { Button } from "@/components/ui/button";
import heroImage from "@/assets/news-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Stay Informed with
            <span className="block text-news-tag">Global News</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Breaking news, in-depth analysis, and real-time updates from around the world. 
            Your trusted source for accurate journalism.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-news-primary hover:bg-white/90 font-semibold px-8 py-3"
            >
              Read Latest News
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3"
            >
              Subscribe to Newsletter
            </Button>
          </div>

          {/* Live indicators */}
          <div className="flex items-center justify-center gap-6 pt-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-news-tag rounded-full"></div>
              <span>24/7 Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Verified Sources</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}