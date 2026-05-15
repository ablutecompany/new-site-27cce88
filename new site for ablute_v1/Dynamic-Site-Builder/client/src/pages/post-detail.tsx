import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { usePost } from "@/hooks/use-posts";
import { useComments, useCreateComment } from "@/hooks/use-comments";
import { Layout } from "@/components/layout";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertCommentSchema, type InsertComment } from "@shared/schema";
import { ArrowLeft, MessageSquare, Loader2, User, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function PostDetail() {
  const params = useParams();
  const postId = Number(params.id);
  
  const { data: post, isLoading: isPostLoading } = usePost(postId);
  const { data: comments, isLoading: isCommentsLoading } = useComments(postId);

  if (isPostLoading) {
    return (
      <Layout>
        <div className="animate-pulse space-y-8">
          <div className="h-8 w-32 bg-white/5 rounded-full mb-8" />
          <div className="w-full h-[50vh] bg-white/5 rounded-3xl" />
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="h-10 w-3/4 bg-white/5 rounded" />
            <div className="h-4 w-1/4 bg-white/5 rounded mb-8" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-white/5 rounded" />
              <div className="h-4 w-full bg-white/5 rounded" />
              <div className="h-4 w-2/3 bg-white/5 rounded" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-4xl font-display font-bold mb-4">Post not found</h1>
          <Link href="/" className="text-primary hover:underline">Return to gallery</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-full bg-white/5 hover:bg-white/10">
          <ArrowLeft className="w-4 h-4" /> Back to Gallery
        </Link>
      </motion.div>

      <article className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-black border border-white/10"
        >
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-[60vh] object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
          {/* Post Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4 text-white">
              {post.title}
            </h1>
            <p className="text-primary/70 mb-8 uppercase tracking-wider text-sm font-medium">
              Published on {post.createdAt ? format(new Date(post.createdAt), "MMMM d, yyyy") : ""}
            </p>
            <div className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
              {post.content.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Comments Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-6 rounded-3xl h-fit sticky top-28"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-display font-semibold">Reflections</h2>
            </div>

            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {isCommentsLoading ? (
                <div className="space-y-4">
                  {[1,2].map(i => (
                    <div key={i} className="animate-pulse flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 shrink-0" />
                      <div className="space-y-2 w-full">
                        <div className="h-4 w-1/3 bg-white/5 rounded" />
                        <div className="h-12 w-full bg-white/5 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : comments?.length === 0 ? (
                <p className="text-muted-foreground text-center py-6 text-sm">
                  No reflections yet. Be the first to share your thoughts.
                </p>
              ) : (
                comments?.map(comment => (
                  <div key={comment.id} className="flex gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5 text-xs font-bold uppercase text-muted-foreground">
                      {comment.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-medium text-sm">{comment.author}</span>
                        <span className="text-xs text-muted-foreground">
                          {comment.createdAt ? format(new Date(comment.createdAt), "MMM d") : ""}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <CommentForm postId={postId} />
          </motion.div>
        </div>
      </article>
    </Layout>
  );
}

function CommentForm({ postId }: { postId: number }) {
  const { toast } = useToast();
  const createComment = useCreateComment();
  
  const form = useForm<InsertComment>({
    resolver: zodResolver(insertCommentSchema),
    defaultValues: {
      postId,
      author: "",
      content: "",
    },
  });

  const onSubmit = async (data: InsertComment) => {
    try {
      await createComment.mutateAsync({ postId, data });
      toast({ title: "Reflection added", description: "Your comment is now visible." });
      form.reset({ postId, author: "", content: "" });
    } catch (error: any) {
      toast({ variant: "destructive", title: "Failed to post", description: error.message });
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <div className="relative">
          <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <input
            {...form.register("author")}
            placeholder="Your name"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background/50 border border-white/10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
        {form.formState.errors.author && (
          <p className="text-destructive text-xs mt-1">{form.formState.errors.author.message}</p>
        )}
      </div>
      
      <div>
        <textarea
          {...form.register("content")}
          placeholder="Share your thoughts..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-sm resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
        />
        {form.formState.errors.content && (
          <p className="text-destructive text-xs mt-1">{form.formState.errors.content.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={createComment.isPending}
        className="w-full py-3 rounded-xl font-medium bg-primary text-primary-foreground hover:bg-white/90 shadow-lg shadow-white/5 transition-all duration-300 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {createComment.isPending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" /> Send
          </>
        )}
      </button>
    </form>
  );
}
