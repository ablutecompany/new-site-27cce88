import { Link } from "wouter";
import type { Post } from "@shared/schema";
import { format } from "date-fns";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.id}`} className="group block mb-6 break-inside-avoid">
      <div className="glass-panel rounded-2xl overflow-hidden hover-card-effect relative">
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
        
        <div className="relative aspect-[4/5] sm:aspect-auto w-full overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-xs font-medium text-primary/80 mb-2 uppercase tracking-wider drop-shadow-md">
            {post.createdAt ? format(new Date(post.createdAt), "MMM d, yyyy") : ""}
          </p>
          <h3 className="font-display text-2xl font-semibold text-white drop-shadow-lg leading-tight line-clamp-2">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export function PostCardSkeleton() {
  return (
    <div className="mb-6 break-inside-avoid glass-panel rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-[4/5] bg-white/5 w-full"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="h-3 w-24 bg-white/10 rounded mb-3"></div>
        <div className="h-6 w-3/4 bg-white/10 rounded mb-2"></div>
        <div className="h-6 w-1/2 bg-white/10 rounded"></div>
      </div>
    </div>
  );
}
