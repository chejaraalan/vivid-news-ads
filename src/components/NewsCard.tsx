import { Clock, ThumbsUp, ThumbsDown, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  title: string;
  summary: string;
  imageUrl: string;
  source: string;
  publishedAt: string;
  category: string;
  likes: number;
  dislikes: number;
  isLiked?: boolean;
  isDisliked?: boolean;
  isFeatured?: boolean;
}

export default function NewsCard({
  title,
  summary,
  imageUrl,
  source,
  publishedAt,
  category,
  likes,
  dislikes,
  isLiked = false,
  isDisliked = false,
  isFeatured = false
}: NewsCardProps) {
  const handleLike = () => {
    // Will be connected to backend
    console.log("Like clicked");
  };

  const handleDislike = () => {
    // Will be connected to backend
    console.log("Dislike clicked");
  };

  return (
    <article className={`news-card ${isFeatured ? 'news-card-featured' : ''} group cursor-pointer`}>
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`news-tag ${category === 'Breaking' ? 'news-tag-alert' : ''}`}>
            {category}
          </span>
        </div>
        {isFeatured && (
          <div className="absolute top-3 right-3">
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
              FEATURED
            </span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <h3 className="news-headline text-lg group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        
        <p className="news-body text-sm line-clamp-3">
          {summary}
        </p>

        <div className="flex items-center justify-between news-meta">
          <div className="flex items-center gap-2">
            <span className="font-medium text-primary">{source}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{publishedAt}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`news-reaction-btn ${isLiked ? 'news-reaction-like' : 'hover:bg-emerald-50'}`}
            >
              <ThumbsUp className="h-4 w-4" />
              <span>{likes}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDislike}
              className={`news-reaction-btn ${isDisliked ? 'news-reaction-dislike' : 'hover:bg-red-50'}`}
            >
              <ThumbsDown className="h-4 w-4" />
              <span>{dislikes}</span>
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="hover:bg-muted">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-muted">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}