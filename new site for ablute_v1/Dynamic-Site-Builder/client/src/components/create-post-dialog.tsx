import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertPostSchema, type InsertPost } from "@shared/schema";
import { useCreatePost } from "@/hooks/use-posts";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Image as ImageIcon, AlignLeft, Type } from "lucide-react";

export function CreatePostDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { toast } = useToast();
  const createPost = useCreatePost();
  
  const form = useForm<InsertPost>({
    resolver: zodResolver(insertPostSchema),
    defaultValues: {
      title: "",
      content: "",
      imageUrl: "",
    },
  });

  const onSubmit = async (data: InsertPost) => {
    try {
      await createPost.mutateAsync(data);
      toast({
        title: "Masterpiece published",
        description: "Your post is now live in the gallery.",
      });
      form.reset();
      onOpenChange(false);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to create post",
        description: error.message,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] glass-panel border-white/10 p-0 overflow-hidden bg-card">
        <div className="p-8">
          <DialogHeader className="mb-8">
            <DialogTitle className="font-display text-3xl">Create Masterpiece</DialogTitle>
            <DialogDescription className="text-muted-foreground text-base mt-2">
              Share your visual story with the world.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2 text-foreground/80">
                <Type className="w-4 h-4" /> Title
              </label>
              <input
                {...form.register("title")}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                placeholder="The Silent Echoes..."
              />
              {form.formState.errors.title && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2 text-foreground/80">
                <ImageIcon className="w-4 h-4" /> Image URL
              </label>
              <input
                {...form.register("imageUrl")}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                placeholder="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
              />
              {form.formState.errors.imageUrl && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.imageUrl.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2 text-foreground/80">
                <AlignLeft className="w-4 h-4" /> Story
              </label>
              <textarea
                {...form.register("content")}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
                placeholder="What inspired this piece?"
              />
              {form.formState.errors.content && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.content.message}</p>
              )}
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="px-6 py-2.5 rounded-full font-medium text-foreground hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={createPost.isPending}
                className="px-8 py-2.5 rounded-full font-medium bg-primary text-primary-foreground hover:bg-white/90 shadow-lg shadow-white/10 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2"
              >
                {createPost.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  "Publish"
                )}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
