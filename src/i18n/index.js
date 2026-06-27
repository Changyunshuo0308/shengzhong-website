const productImages = [
  '/images/product_1.jpg',
  '/images/product_2.jpg',
  '/images/product_3.jpg',
  '/images/product_4.jpg'
]

const i18n = {
  zh: {
    brand: '青岛盛中',
    nav: { about: '关于我们', products: '产品系列', catalog: '俄语样册', advantages: '核心优势', contact: '联系我们' },
    hero: {
      eyebrow: 'CYS CNC EQUIPMENT',
      title: '瓦楞纸板干端自动化伙伴',
      subtitle: '研发、制造、交付一体化的瓦楞纸板生产线干端解决方案',
      desc: '青岛盛中数控设备有限公司专注于横切、分切压痕、堆码、胶带粘贴等自动化干端设备，以稳定结构、快速换单和工程化服务帮助客户提升产线效率。',
      primary: '查看产品系列',
      secondary: '获取方案咨询'
    },
    about: {
      label: '关于盛中',
      title: '从制造经验到自主品牌',
      lead: '公司成立于2010年8月，是集研发、生产、销售与技术服务于一体的瓦楞纸板生产线干端设备服务商。',
      body: '从早期 OEM 制造起步，盛中逐步形成自主品牌与标准化产品体系，围绕单面瓦楞纸板生产线、干部自动化、生产信息化和客户定制配置提供高性价比解决方案。',
      facts: ['2010年8月成立', '干端设备专业制造', '支持定制化配置'],
      timeline: [
        ['2010', '公司成立，积累干端设备制造与服务经验'],
        ['2015', '研发团队完善，自主品牌产品体系成形'],
        ['2018', '产品线覆盖横切、分切压痕、堆码等核心工序'],
        ['2020', '面向海外客户提供多语言资料与方案支持'],
        ['2024', '推进标准化、规模化生产与智能制造升级']
      ]
    },
    products: {
      label: '产品系列',
      title: '围绕干端全流程配置',
      desc: '样册中的设备多为组合方案图，网站以产品系列呈现，便于按产线速度、纸板宽度和工序需求灵活配置。',
      items: [
        {
          name: '干端整线解决方案',
          desc: '集横切、输送、分切压痕、堆码等模块于一体，适合新建或升级瓦楞纸板生产线。',
          specs: ['速度：220-400 m/min', '工作宽度：1800/2200/2500/2800 mm', '支持左右向配置'],
          image: productImages[0]
        },
        {
          name: '自动横切与分切压痕单元',
          desc: '面向高精度换单和稳定切割场景，可配置螺旋刀、薄刀分切、伺服控制等核心模块。',
          specs: ['快速换单', '高精度定位', 'PLC/伺服控制'],
          image: productImages[1]
        },
        {
          name: '堆码与吊篮输送系统',
          desc: '用于纸板收集、分垛、堆码与输送，帮助减少人工干预并保持堆垛整齐。',
          specs: ['双层吊篮结构', '自动分垛', '连续输送'],
          image: productImages[2]
        },
        {
          name: '胶带粘贴与配套模块',
          desc: '全伺服胶带粘贴及配套输送模块，可与干端线联动，适合批量订单稳定生产。',
          specs: ['伺服控制', '模块化安装', '适配多种线体'],
          image: productImages[3]
        }
      ]
    },
    catalog: {
      label: '俄语版 PDF 产品样册',
      title: '面向俄语市场的资料体系',
      desc: '网站已纳入俄语版样册视觉与俄语产品表达，方便海外客户快速理解公司定位、设备系列和联系方式。',
      points: ['三语官网内容：中文 / Русский / English', '俄语资料展示，降低海外沟通成本', '产品系列与样册结构保持一致']
    },
    advantages: {
      label: '核心优势',
      title: '稳定、快速、可配置',
      items: [
        ['400', 'm/min 产线速度可选'],
        ['2800', 'mm 工作宽度可选'],
        ['24', '小时内响应咨询'],
        ['3-6', '秒级换单配置'],
        ['PLC', '工业控制系统'],
        ['OEM', '到自主品牌经验']
      ]
    },
    contact: {
      label: '联系盛中',
      title: '让工程师为您的产线选型',
      desc: '留下需求、速度、纸板宽度和目标工序，我们会根据产线配置给出方案建议。',
      phone: '+86 138 5327 7793',
      phone2: '+7 9600405880',
      email: 'qdszsk@126.com',
      website: 'www.sdszsk.com',
      addr: '青岛市即墨区大信镇信华街272号',
      company: '青岛盛中数控设备有限公司',
      form: { name: '您的姓名', phone: '联系电话 / WhatsApp', msg: '设备需求或产线参数', submit: '提交咨询', sent: '已收到' }
    },
    footer: '© 2026 青岛盛中数控设备有限公司 版权所有'
  },
  en: {
    brand: 'Qingdao Shengzhong',
    nav: { about: 'About', products: 'Products', catalog: 'RU Catalog', advantages: 'Advantages', contact: 'Contact' },
    hero: {
      eyebrow: 'CYS CNC EQUIPMENT',
      title: 'Automation partner for corrugated dry-end equipment',
      subtitle: 'Integrated R&D, manufacturing and delivery for corrugated board dry-end lines',
      desc: 'Qingdao Shengzhong CNC Equipment focuses on automatic dry-end equipment including cut-off, slitter scorer, stacker and tape adhesive modules, helping customers improve line efficiency with stable structures and practical engineering service.',
      primary: 'View Products',
      secondary: 'Request Solution'
    },
    about: {
      label: 'About Shengzhong',
      title: 'From manufacturing experience to own brand',
      lead: 'Founded in August 2010, the company integrates R&D, production, sales and technical service for corrugated board dry-end equipment.',
      body: 'Starting from OEM manufacturing, Shengzhong has built its own brand and standardized product system, providing cost-effective automation and information-service solutions for single-face corrugated board lines and customized dry-end configurations.',
      facts: ['Founded in Aug. 2010', 'Dry-end equipment specialist', 'Custom configuration support'],
      timeline: [
        ['2010', 'Founded with dry-end equipment manufacturing and service experience'],
        ['2015', 'R&D capability strengthened and own-brand portfolio formed'],
        ['2018', 'Product lines covered cut-off, slitting, scoring and stacking'],
        ['2020', 'Multilingual catalog and solution support for overseas clients'],
        ['2024', 'Standardized production and smart manufacturing upgrade']
      ]
    },
    products: {
      label: 'Product Series',
      title: 'Configured around the full dry-end workflow',
      desc: 'The catalog visuals are integrated solution renders, so the website presents product families that can be configured by line speed, board width and process needs.',
      items: [
        {
          name: 'Integrated Dry-End Line Solution',
          desc: 'Combines cut-off, conveying, slitting, scoring and stacking modules for new lines or line upgrades.',
          specs: ['Speed: 220-400 m/min', 'Width: 1800/2200/2500/2800 mm', 'R/L direction available'],
          image: productImages[0]
        },
        {
          name: 'Automatic Cut-Off & Slitter Scorer Unit',
          desc: 'Built for precise order changes and stable cutting, with spiral blade, thin blade slitting and servo control options.',
          specs: ['Quick order change', 'Precise positioning', 'PLC/servo control'],
          image: productImages[1]
        },
        {
          name: 'Stacking & Basket Conveying System',
          desc: 'Handles board collection, batch separation, stacking and conveying while reducing manual intervention.',
          specs: ['Double-layer basket', 'Automatic batching', 'Continuous conveying'],
          image: productImages[2]
        },
        {
          name: 'Tape Adhesive & Auxiliary Modules',
          desc: 'Full-servo tape adhesive and auxiliary conveying modules for linked dry-end production.',
          specs: ['Servo control', 'Modular installation', 'Multi-line adaptation'],
          image: productImages[3]
        }
      ]
    },
    catalog: {
      label: 'Russian PDF Product Catalog',
      title: 'A content system for Russian-speaking markets',
      desc: 'The website includes Russian catalog visuals and product wording so overseas buyers can understand the company, equipment families and contact channels quickly.',
      points: ['Trilingual website: Chinese / Русский / English', 'Russian catalog preview for easier communication', 'Product series aligned with catalog structure']
    },
    advantages: {
      label: 'Advantages',
      title: 'Stable, fast and configurable',
      items: [
        ['400', 'm/min optional line speed'],
        ['2800', 'mm optional working width'],
        ['24', 'hour inquiry response'],
        ['3-6', 'second order-change options'],
        ['PLC', 'industrial control system'],
        ['OEM', 'to own-brand experience']
      ]
    },
    contact: {
      label: 'Contact',
      title: 'Let our engineers configure your line',
      desc: 'Share your target process, speed and board width, and we will suggest a practical configuration.',
      phone: '+86 138 5327 7793',
      phone2: '+7 9600405880',
      email: 'qdszsk@126.com',
      website: 'www.sdszsk.com',
      addr: 'No.272 Xinhua St, Daxin, Jimo District, Qingdao',
      company: 'Qingdao Shengzhong CNC Equipment Co., Ltd.',
      form: { name: 'Your name', phone: 'Phone / WhatsApp', msg: 'Equipment needs or line parameters', submit: 'Send Inquiry', sent: 'Received' }
    },
    footer: '© 2026 Qingdao Shengzhong CNC Equipment Co., Ltd. All Rights Reserved.'
  },
  ru: {
    brand: 'Qingdao Shengzhong',
    nav: { about: 'О компании', products: 'Продукция', catalog: 'Каталог RU', advantages: 'Преимущества', contact: 'Контакты' },
    hero: {
      eyebrow: 'CYS CNC EQUIPMENT',
      title: 'Автоматизация сухой части линий гофрокартона',
      subtitle: 'Разработка, производство и поставка оборудования для сухой части линии',
      desc: 'Qingdao Shengzhong CNC Equipment специализируется на автоматическом оборудовании сухой части: поперечная резка, продольная резка и биговка, укладчики, транспортные и клеевые модули.',
      primary: 'Смотреть продукцию',
      secondary: 'Получить консультацию'
    },
    about: {
      label: 'О Shengzhong',
      title: 'От производственного опыта к собственному бренду',
      lead: 'Компания основана в августе 2010 года и объединяет НИОКР, производство, продажи и технический сервис оборудования для сухой части линий гофрокартона.',
      body: 'Начав с OEM-производства, Shengzhong сформировала собственный бренд и стандартизированную продуктовую систему, предлагая экономичные решения автоматизации и индивидуальные конфигурации для сухой части линии.',
      facts: ['Основана в августе 2010', 'Оборудование сухой части', 'Индивидуальная конфигурация'],
      timeline: [
        ['2010', 'Основание компании и накопление опыта производства оборудования'],
        ['2015', 'Усиление отдела R&D и формирование собственного бренда'],
        ['2018', 'Линейка охватила резку, биговку, укладку и транспортировку'],
        ['2020', 'Многоязычные материалы и поддержка зарубежных клиентов'],
        ['2024', 'Стандартизация производства и модернизация умного производства']
      ]
    },
    products: {
      label: 'Серии продукции',
      title: 'Конфигурации для полного процесса сухой части',
      desc: 'Изображения в каталоге показывают комплексные решения, поэтому сайт представляет серии оборудования, настраиваемые по скорости линии, рабочей ширине и задачам производства.',
      items: [
        {
          name: 'Комплексное решение сухой части',
          desc: 'Объединяет поперечную резку, транспортировку, продольную резку, биговку и укладку для новых линий и модернизации.',
          specs: ['Скорость: 220-400 м/мин', 'Ширина: 1800/2200/2500/2800 мм', 'Направление R/L'],
          image: productImages[0]
        },
        {
          name: 'Автоматическая резка и биговка',
          desc: 'Для точной смены заказа и стабильной резки, с опциями спирального ножа, тонкого ножа и сервоуправления.',
          specs: ['Быстрая смена заказа', 'Точное позиционирование', 'PLC/сервоуправление'],
          image: productImages[1]
        },
        {
          name: 'Система укладки и подвесной корзины',
          desc: 'Сбор, разделение партий, укладка и транспортировка картона с меньшим участием оператора.',
          specs: ['Двухслойная корзина', 'Автоматическое разделение', 'Непрерывная транспортировка'],
          image: productImages[2]
        },
        {
          name: 'Клеевой и вспомогательный модуль',
          desc: 'Полносерво клеевой модуль и транспортные секции для синхронной работы с сухой частью линии.',
          specs: ['Сервоуправление', 'Модульная установка', 'Адаптация к линиям'],
          image: productImages[3]
        }
      ]
    },
    catalog: {
      label: 'Русскоязычный PDF-каталог',
      title: 'Материалы для русскоязычного рынка',
      desc: 'На сайт добавлены визуальные материалы русского каталога и русская терминология продукции, чтобы зарубежные клиенты быстро понимали компанию, серии оборудования и контакты.',
      points: ['Три языка: 中文 / Русский / English', 'Предпросмотр русского каталога', 'Структура продукции согласована с каталогом']
    },
    advantages: {
      label: 'Преимущества',
      title: 'Стабильно, быстро, настраиваемо',
      items: [
        ['400', 'м/мин доступная скорость линии'],
        ['2800', 'мм доступная рабочая ширина'],
        ['24', 'часа ответ на запрос'],
        ['3-6', 'секунд смена заказа'],
        ['PLC', 'промышленная система управления'],
        ['OEM', 'опыт и собственный бренд']
      ]
    },
    contact: {
      label: 'Контакты',
      title: 'Инженеры помогут подобрать конфигурацию',
      desc: 'Укажите процесс, скорость линии и рабочую ширину, и мы предложим подходящую конфигурацию.',
      phone: '+86 138 5327 7793',
      phone2: '+7 9600405880',
      email: 'qdszsk@126.com',
      website: 'www.sdszsk.com',
      addr: 'ул. Синьхуа 272, район Цзимо, Циндао',
      company: 'Qingdao Shengzhong CNC Equipment Co., Ltd.',
      form: { name: 'Ваше имя', phone: 'Телефон / WhatsApp', msg: 'Параметры линии или запрос', submit: 'Отправить', sent: 'Получено' }
    },
    footer: '© 2026 Qingdao Shengzhong CNC Equipment Co., Ltd. Все права защищены.'
  }
}

export default i18n
