import { useLang } from '../App.jsx'

const copy = {
  zh: {
    label: '瓦楞纸板',
    title: <>提升 <strong>端到端</strong> 效率</>,
    points: [
      '降低干端能耗与无效等待，能耗消耗最高可降低20%',
      '以横切、分切压痕、堆码联动提升订单柔性和成本效益',
      '在最大限度提高机器生产率的同时，将整体工作量减少90%',
      '少量参数调整即可拓宽应用范围，适配多规格纸板生产'
    ],
    cta: '了解更多',
    hud: ['ENERGY -20%', 'OUTPUT +35%', 'CHANGEOVER 3-6s'],
    caption: 'Qingdao Shengzhong dry-end line simulation'
  },
  en: {
    label: 'Corrugated board',
    title: <>Improve <strong>end-to-end</strong> efficiency</>,
    points: [
      'Reduce dry-end energy use and idle waiting, with energy consumption down by up to 20%',
      'Link cut-off, slitter scoring and stacking to improve flexibility and cost efficiency',
      'Increase machine productivity while reducing total operator workload by up to 90%',
      'Extend application range with limited parameter adjustment'
    ],
    cta: 'Learn more',
    hud: ['ENERGY -20%', 'OUTPUT +35%', 'CHANGEOVER 3-6s'],
    caption: 'Qingdao Shengzhong dry-end line simulation'
  },
  ru: {
    label: 'Гофрокартон',
    title: <>Повышение эффективности <strong>end-to-end</strong></>,
    points: [
      'Снижение энергопотребления сухой части линии до 20%',
      'Связь поперечной резки, биговки и укладки для гибких заказов',
      'Рост производительности при снижении общей нагрузки оператора до 90%',
      'Быстрая адаптация под разные форматы картона'
    ],
    cta: 'Подробнее',
    hud: ['ENERGY -20%', 'OUTPUT +35%', 'CHANGEOVER 3-6s'],
    caption: 'Qingdao Shengzhong dry-end line simulation'
  }
}

export default function EfficiencyFilm() {
  const { lang } = useLang()
  const text = copy[lang] || copy.zh

  return (
    <section className="efficiency-film" aria-label={text.label}>
      <div className="container efficiency-film__grid">
        <div className="efficiency-film__copy reveal">
          <p className="efficiency-film__label">{text.label}</p>
          <h2>{text.title}</h2>
          <ul>
            {text.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <button className="efficiency-film__button" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>{text.cta}</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="efficiency-film__screen reveal" aria-label={text.caption}>
          <div className="efficiency-film__viewport">
            <img className="efficiency-film__machine" src="/images/shengzhong-efficiency-line.jpg" alt="Qingdao Shengzhong dry-end equipment" />
            <div className="efficiency-film__belt" aria-hidden="true">
              {Array.from({ length: 7 }, (_, index) => (
                <span key={index} style={{ '--delay': `${index * -0.72}s` }} />
              ))}
            </div>
            <div className="efficiency-film__scanner" aria-hidden="true" />
            <div className="efficiency-film__energy" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="efficiency-film__hud">
              {text.hud.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="efficiency-film__brand">
              <img src="/images/cys-logo.png" alt="CYS" />
              <span>QINGDAO SHENGZHONG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
