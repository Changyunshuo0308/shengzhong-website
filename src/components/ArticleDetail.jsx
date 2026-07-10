import geoArticles from '../data/geoArticles.js'

function paragraphs(content) {
  return String(content || '')
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean)
}

export default function ArticleDetail({ slug }) {
  const article = geoArticles.find((item) => item.slug === slug)

  if (!article) {
    return (
      <main className="article-detail">
        <div className="container article-detail__empty">
          <button className="detail-back" onClick={() => { window.location.hash = '' }}>Back to home</button>
          <h1>Article not found</h1>
          <p>The requested article is not available in the current website build.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="article-detail">
      <section className="article-detail__hero">
        <div className="container">
          <button className="detail-back" onClick={() => { window.location.hash = '' }}>Back to home</button>
          <span className="section-label">{article.status === 'draft' ? 'Draft article' : 'GEO article'}</span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          {article.targetKeywords?.length ? (
            <div className="spec-list">
              {article.targetKeywords.slice(0, 5).map((keyword) => <span key={keyword}>{keyword}</span>)}
            </div>
          ) : null}
        </div>
      </section>
      <section className="article-detail__body">
        <div className="container article-detail__content">
          {paragraphs(article.content).map((paragraph, index) => (
            <p key={`${article.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  )
}
