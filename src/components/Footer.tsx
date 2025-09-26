import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-news-menu text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-white">Global</span>
              <span className="text-news-tag">News</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted source for accurate, timely, and comprehensive news coverage 
              from around the world. Committed to journalistic excellence since 2025.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Categories</h4>
            <ul className="space-y-2 text-sm">
              {[
                "International", "National", "Politics", "Technology", 
                "Sports", "Business", "Health", "Entertainment"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                "About Us", "Our Team", "Careers", "Contact", 
                "Privacy Policy", "Terms of Service", "Advertise", "Support"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-news-tag" />
                <span className="text-white/80">news@globalnews.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-news-tag" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-news-tag" />
                <span className="text-white/80">123 News Street, Media City</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <p className="text-sm text-white/80 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 text-sm"
                />
                <button className="bg-news-tag text-news-menu px-4 py-2 rounded-md text-sm font-medium hover:bg-news-tag/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © 2025 Global News. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="bg-news-tag text-news-menu px-3 py-1 rounded text-sm font-medium hover:bg-news-tag/90 transition-colors" id="adds">
              Team Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}