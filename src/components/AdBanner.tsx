import { X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AdBannerProps {
  type: 'image' | 'video';
  src: string;
  title?: string;
  link?: string;
  allowSkip?: boolean;
  position: 'header' | 'sidebar' | 'inline';
}

export default function AdBanner({ 
  type, 
  src, 
  title, 
  link, 
  allowSkip = false, 
  position 
}: AdBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isVisible) return null;

  const handleAdClick = () => {
    // Track ad click analytics
    console.log("Ad clicked:", title);
    if (link) {
      window.open(link, '_blank');
    }
  };

  const handleSkip = () => {
    setIsVisible(false);
    console.log("Ad skipped:", title);
  };

  const containerClasses = {
    header: "w-full h-24 bg-gradient-to-r from-muted to-secondary",
    sidebar: "w-full aspect-square bg-card",
    inline: "w-full h-32 bg-muted"
  };

  return (
    <div className={`ad-banner relative ${containerClasses[position]} group`}>
      {/* Skip button for video ads */}
      {allowSkip && type === 'video' && (
        <Button
          variant="secondary"
          size="sm"
          onClick={handleSkip}
          className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X className="h-4 w-4" />
        </Button>
      )}

      {type === 'image' ? (
        <div 
          onClick={handleAdClick}
          className="w-full h-full cursor-pointer overflow-hidden rounded-lg"
        >
          <img 
            src={src} 
            alt={title || "Advertisement"}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-white text-sm font-medium">{title}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
          {!isPlaying ? (
            <div 
              onClick={() => setIsPlaying(true)}
              className="flex items-center justify-center w-full h-full cursor-pointer group"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors">
                <Play className="h-8 w-8 text-white" />
              </div>
              {title && (
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-medium">{title}</p>
                </div>
              )}
            </div>
          ) : (
            <video 
              src={src}
              autoPlay
              controls
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
            />
          )}
        </div>
      )}

      {/* Ad label */}
      <div className="absolute top-2 left-2">
        <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">
          Ad
        </span>
      </div>
    </div>
  );
}