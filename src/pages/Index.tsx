import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header banner ad */}
      <AdBanner
        type="image"
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=100&fit=crop"
        title="Premium Business Solutions - Click to Learn More"
        position="header"
      />
      
      <Header />
      <HeroSection />
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default Index;
