import { Article } from "@/data/types";
import {
  AuthorAvatar,
  ArticleMeta,
  ShareButtons,
} from "@/components/shared";

interface ArticleMetaBarProps {
  article: Article;
}

export default function ArticleMetaBar({ article }: ArticleMetaBarProps) {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <AuthorAvatar
              initial={article.author.initial}
              color={article.author.color}
              size="md"
            />
            <div>
              <p className="font-semibold text-gray-800">{article.author.name}</p>
              {article.author.role && (
                <p className="text-sm text-gray-500">{article.author.role}</p>
              )}
            </div>
          </div>

          <ArticleMeta
            publishedAt={article.publishedAt}
            readTime={article.readTime}
            views={article.views}
          />

          <ShareButtons />
        </div>
      </div>
    </section>
  );
}
