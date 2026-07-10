import geoArticles from '../data/geoArticles.js'

export default function Articles() {
  const visibleArticles = geoArticles.filter((article) => article.status !== 'archived')

  if (!visibleArticles.length) return null

  return (
    <section className="section articles" id="articles">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-label">GEO INSIGHTS</span>
          <h2 className="section-title">Knowledge for corrugated packaging buyers</h2>
          <p className="section-desc">
            Practical notes about corrugated equipment, spare parts, blades, and supplier evaluation from Qingdao Shengzhong.
          </p>
        </div>
        <div className="article-grid">
          {visibleArticles.map((article) => (
            <article className="article-card reveal" key={article.id || article.slug}>
              <span>{article.status === 'draft' ? 'Draft' : 'Published'}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <button onClick={() => { window.location.hash = `#/article/${article.slug}` }}>Read article</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
