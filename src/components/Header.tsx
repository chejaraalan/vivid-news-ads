import { Search, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="bg-news-menu text-white shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar with breaking news */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-white/20">
          <div className="flex items-center gap-2">
            <div className="bg-news-alert px-2 py-1 rounded text-xs font-bold">
              BREAKING
            </div>
            <p className="hidden md:block">
              Latest international developments shaping global politics...
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block">Friday, Dec 25, 2025</span>
            <Bell className="h-4 w-4" />
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="md:hidden text-white">
              <Menu className="h-5 w-5" />
            </Button>
            
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-white">Global</span>
              <span className="text-news-tag">News</span>
            </h1>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search news..." 
                className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex border-white/30 text-white hover:bg-white/10">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex py-3 border-t border-white/20">
          <div className="flex gap-8">
            {[
              "Home", "International", "National", "Politics", "Technology", 
              "Sports", "Business", "Health", "Entertainment"
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}