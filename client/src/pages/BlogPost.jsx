import { articleContent } from '../utils/articleContent';
﻿import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { blogPosts } from './Blog';



export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const article = articleContent[slug];

  if (!post) {
    return (
      <div className="container-main section-padding text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(' ').join(', ')}
        path={`/blog/${slug}`}
      />
      <article className="section-padding">
        <div className="container-main max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-primary transition-colors no-underline text-gray-400">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors no-underline text-gray-400">Blog</Link>
              <span>/</span>
              <span className="text-gray-600 dark:text-gray-300 truncate">{post.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
              <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">{post.title}</h1>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span>{post.date}</span>
                <span>â€¢</span>
                <span>{post.readTime}</span>
              </div>
            </header>



            {/* Content */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-gray-800 [&_h2]:dark:text-gray-100
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
                [&_p]:text-gray-600 [&_p]:dark:text-gray-300 [&_p]:mb-4 [&_p]:leading-relaxed
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-2
                [&_li]:text-gray-600 [&_li]:dark:text-gray-300
                [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary-light
                [&_strong]:text-gray-800 [&_strong]:dark:text-gray-100"
              dangerouslySetInnerHTML={{ __html: article?.content || '<p>Article content coming soon...</p>' }}
            />



            {/* CTA */}
            <div className="glass-card p-8 mt-10 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Try Our Free PDF Tools</h3>
              <p className="text-gray-500 mb-4">All tools are free, secure, and work right in your browser.</p>
              <Link to="/" className="btn-primary">Explore Tools</Link>
            </div>

            {/* Related Posts */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map(p => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="no-underline">
                    <div className="glass-card p-4 hover:shadow-lg transition-all">
                      <span className="text-xs text-primary font-medium">{p.category}</span>
                      <h4 className="font-semibold mt-1 text-gray-800 dark:text-gray-100 text-sm">{p.title}</h4>
                      <span className="text-xs text-gray-400 mt-1">{p.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Article Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.date,
          "author": { "@type": "Organization", "name": "PDFHelperEdit" },
          "publisher": { "@type": "Organization", "name": "PDFHelperEdit" }
        })
      }} />
    </>
  );
}

