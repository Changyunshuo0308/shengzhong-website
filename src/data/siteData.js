import { asset } from '../utils/asset.js'

const images = [
  asset('/images/catalog_09.jpg'),
  asset('/images/catalog_10.jpg'),
  asset('/images/catalog_11.jpg'),
  asset('/images/catalog_12.jpg'),
  asset('/images/catalog_13.jpg'),
  asset('/images/catalog_14.jpg'),
  asset('/images/catalog_15.jpg'),
  asset('/images/catalog_16.jpg'),
  asset('/images/catalog_17.jpg'),
  asset('/images/catalog_18.jpg'),
  asset('/images/catalog_19.jpg'),
  asset('/images/equip_page5_18.jpg')
]

const paramLabels = {
  zh: ['线速度', '工作门幅', '换单方式', '走纸方向', '控制方式', '适用场景'],
  en: ['Line speed', 'Working width', 'Order change', 'Line direction', 'Control mode', 'Application'],
  ru: ['Скорость линии', 'Рабочая ширина', 'Смена заказа', 'Направление линии', 'Система управления', 'Применение']
}

const fixedParamValues = {
  zh: ['左右方向可配置', 'PLC + 伺服 + 触摸屏', '瓦楞纸板干端生产线'],
  en: ['R / L configurable', 'PLC + servo + touch panel', 'Corrugated board dry-end line'],
  ru: ['Правое / левое исполнение', 'PLC + сервопривод + сенсорная панель', 'Сухая часть линии гофрокартона']
}

const componentOrigins = {
  zh: [
    ['PLC / 触摸屏', 'Schneider', '法国'],
    ['伺服驱动', 'Schneider / Emerson', '法国 / 美国'],
    ['接近传感器', 'Pepperl+Fuchs', '德国'],
    ['气动元件', 'AirTAC', '中国台湾'],
    ['直线导轨', 'THK', '日本'],
    ['轴承', 'NSK / IKO / HRB', '日本 / 中国'],
    ['减速箱铸件', 'HT400 灰口铸铁', '中国'],
    ['传动齿轮', '20CrMnTi 渗碳钢', '中国']
  ],
  en: [
    ['PLC / Touch panel', 'Schneider', 'France'],
    ['Servo drive', 'Schneider / Emerson', 'France / USA'],
    ['Proximity sensor', 'Pepperl+Fuchs', 'Germany'],
    ['Pneumatic components', 'AirTAC', 'Taiwan, China'],
    ['Linear guide', 'THK', 'Japan'],
    ['Bearing', 'NSK / IKO / HRB', 'Japan / China'],
    ['Gearbox casting', 'HT400 grey cast iron', 'China'],
    ['Transmission gear', '20CrMnTi carburized steel', 'China']
  ],
  ru: [
    ['PLC / сенсорная панель', 'Schneider', 'Франция'],
    ['Сервопривод', 'Schneider / Emerson', 'Франция / США'],
    ['Датчик приближения', 'Pepperl+Fuchs', 'Германия'],
    ['Пневматические компоненты', 'AirTAC', 'Тайвань, Китай'],
    ['Линейная направляющая', 'THK', 'Япония'],
    ['Подшипники', 'NSK / IKO / HRB', 'Япония / Китай'],
    ['Корпус редуктора', 'Серый чугун HT400', 'Китай'],
    ['Передаточная шестерня', '20CrMnTi цементированная сталь', 'Китай']
  ]
}

const productBase = [
  {
    slug: 'multi-function-cutoff',
    image: images[0],
    speed: '220-400 m/min',
    width: '1800 / 2200 / 2500 / 2800 mm',
    changeover: { zh: '3-6 秒', en: '3-6 s', ru: '3-6 с' },
    name: {
      zh: '全自动多功能横切机',
      en: 'Fully Automatic Multifunctional Cut-Off Machine',
      ru: 'Полностью автоматический многофункциональный отрезной станок'
    },
    desc: {
      zh: '集高速横切、修边、自动换单与生产监控于一体，适合高速瓦楞纸板干端线。',
      en: 'Combines high-speed cut-off, trimming, automatic order change and production monitoring for dry-end lines.',
      ru: 'Сочетает высокоскоростную резку, обрезку кромки, автоматическую смену заказа и контроль производства.'
    },
    functions: {
      zh: ['旋转横切', '废边处理', '自动换单', '生产监控'],
      en: ['Rotary cut-off', 'Trim removal', 'Automatic order change', 'Production monitoring'],
      ru: ['Ротационная резка', 'Удаление кромки', 'Автоматическая смена заказа', 'Мониторинг производства']
    }
  },
  {
    slug: 'thin-blade-rack',
    image: images[1],
    speed: '200-300 m/min',
    width: '1800 / 2200 / 2500 / 2800 mm',
    changeover: { zh: '数控快速定位', en: 'Quick NC positioning', ru: 'Быстрое ЧПУ-позиционирование' },
    name: {
      zh: '全自动薄刀分切压痕机（齿条型）',
      en: 'Automatic Thin Blade Slitter Scorer (Rack Type)',
      ru: 'Автоматический тонконожевой слиттер-скорер (реечный тип)'
    },
    desc: {
      zh: '采用薄刀分切与压痕组合，换单直观，切边洁净，适合标准化批量生产。',
      en: 'Thin blade slitting and scoring with clear order setting, clean edges and stable batch production.',
      ru: 'Тонконожевая продольная резка и биговка с чистой кромкой и стабильной работой в серийном производстве.'
    },
    functions: {
      zh: ['薄刀分切', '压痕成型', '齿条传动', '低粉尘切割'],
      en: ['Thin blade slitting', 'Scoring', 'Rack drive', 'Low-dust cutting'],
      ru: ['Тонконожевая резка', 'Биговка', 'Реечный привод', 'Мало пыли при резке']
    }
  },
  {
    slug: 'servo-thin-blade-single-screw',
    image: images[2],
    speed: '200-300 m/min',
    width: '1800 / 2200 / 2500 / 2800 mm',
    changeover: { zh: '伺服单丝杆调整', en: 'Servo single-screw adjustment', ru: 'Серворегулировка одним винтом' },
    name: {
      zh: '伺服薄刀分切压痕机（单丝杆型）',
      en: 'Servo Thin Blade Slitter Scorer (Single-Screw Type)',
      ru: 'Серво тонконожевой слиттер-скорер (одновинтовой тип)'
    },
    desc: {
      zh: '单丝杆伺服调整结构，兼顾精度、稳定性和维护便利性。',
      en: 'Single-screw servo adjustment balances precision, stability and easy maintenance.',
      ru: 'Одновинтовая серворегулировка сочетает точность, стабильность и удобное обслуживание.'
    },
    functions: {
      zh: ['伺服定位', '薄刀分切', '压痕', '订单记忆'],
      en: ['Servo positioning', 'Thin blade slitting', 'Scoring', 'Order memory'],
      ru: ['Сервопозиционирование', 'Тонконожевая резка', 'Биговка', 'Память заказов']
    }
  },
  {
    slug: 'nc-servo-thin-blade-multi-screw',
    image: images[3],
    speed: '250-350 m/min',
    width: '1800 / 2200 / 2500 / 2800 mm',
    changeover: { zh: '多丝杆同步换单', en: 'Multi-screw synchronous changeover', ru: 'Синхронная смена заказа несколькими винтами' },
    name: {
      zh: 'NC 伺服薄刀分切压痕机（多丝杆型）',
      en: 'NC Servo Thin Blade Slitter Scorer (Multi-Screw Type)',
      ru: 'NC серво тонконожевой слиттер-скорер (многовинтовой тип)'
    },
    desc: {
      zh: '多丝杆同步定位，适合频繁换单和多规格订单的高效生产。',
      en: 'Synchronous multi-screw positioning for frequent order changes and mixed-size production.',
      ru: 'Синхронное многовинтовое позиционирование для частой смены заказов и разных форматов.'
    },
    functions: {
      zh: ['NC 伺服控制', '多工位调整', '精密压痕', '配方快速调用'],
      en: ['NC servo control', 'Multi-station adjustment', 'Precision scoring', 'Fast recipe recall'],
      ru: ['NC сервоуправление', 'Многопозиционная настройка', 'Точная биговка', 'Быстрый вызов рецептов']
    }
  },
  {
    slug: 'spiral-knife-cutoff',
    image: images[4],
    speed: '250-400 m/min',
    width: '1800 / 2200 / 2500 / 2800 mm',
    changeover: { zh: '自动长度设定', en: 'Automatic length setting', ru: 'Автоматическая настройка длины' },
    name: {
      zh: '全自动螺旋刀横切机',
      en: 'Fully Automatic Spiral Knife Cut-Off Machine',
      ru: 'Полностью автоматический поперечный резак со спиральным ножом'
    },
    desc: {
      zh: '螺旋刀低噪声切割，断面平整，可适配高速线体。',
      en: 'Low-noise spiral knife cutting with smooth edges for high-speed corrugated lines.',
      ru: 'Низкошумная резка спиральным ножом с ровной кромкой для высокоскоростных линий.'
    },
    functions: {
      zh: ['螺旋刀横切', '低噪声切割', '平整断面', '动平衡'],
      en: ['Spiral knife cut-off', 'Low-noise cutting', 'Smooth edge', 'Dynamic balancing'],
      ru: ['Поперечная резка спиральным ножом', 'Низкий шум', 'Ровная кромка', 'Динамическая балансировка']
    }
  },
  {
    slug: 'small-gantry-stacker',
    image: images[5],
    speed: '150-250 m/min',
    width: '1800 / 2200 / 2500 mm',
    changeover: { zh: '自动分批', en: 'Automatic batch separation', ru: 'Автоматическое разделение партий' },
    name: {
      zh: '全自动小龙门堆码机',
      en: 'Automatic Small Gantry Stacker',
      ru: 'Автоматический малый портальный укладчик'
    },
    desc: {
      zh: '结构紧凑，适合中小规格订单的自动收纸、计数和堆码。',
      en: 'Compact automatic receiving, counting and stacking for medium and small orders.',
      ru: 'Компактный прием, подсчет и укладка листов для средних и малых заказов.'
    },
    functions: {
      zh: ['小龙门堆码', '水平输送', '批次数量统计', '节省人工'],
      en: ['Small gantry stacking', 'Horizontal delivery', 'Batch counting', 'Labor saving'],
      ru: ['Малый портальный укладчик', 'Горизонтальная подача', 'Подсчет партий', 'Экономия труда']
    }
  },
  {
    slug: 'double-layer-basket-stacker',
    image: images[6],
    speed: '220-350 m/min',
    width: '1800 / 2200 / 2500 / 2800 mm',
    changeover: { zh: '上下层自动切换', en: 'Upper / lower layer switching', ru: 'Переключение верхнего / нижнего слоя' },
    name: {
      zh: '全自动双层大吊篮堆码机',
      en: 'Automatic Double-Layer Large Basket Stacker',
      ru: 'Автоматический двухслойный укладчик с большой корзиной'
    },
    desc: {
      zh: '双层吊篮高速收纸，自动换垛，减少人工干预。',
      en: 'High-speed double-layer basket receiving with automatic pile change and lower labor input.',
      ru: 'Высокоскоростной прием в два слоя с автоматической сменой стопы и меньшим участием оператора.'
    },
    functions: {
      zh: ['双层吊篮', '高速堆码', '自动换垛', '整齐收纸'],
      en: ['Double-layer basket', 'High-speed stacking', 'Automatic pile change', 'Clean board receiving'],
      ru: ['Двухслойная корзина', 'Высокоскоростная укладка', 'Автосмена стопы', 'Ровный прием листов']
    }
  },
  {
    slug: 'gantry-basket-offset-stacker',
    image: images[7],
    speed: '220-350 m/min',
    width: '1800 / 2200 / 2500 / 2800 mm',
    changeover: { zh: '错位分垛功能', en: 'Offset pile function', ru: 'Функция смещения стопы' },
    name: {
      zh: '带吊篮及错位功能龙门堆码机',
      en: 'Gantry Basket Stacker with Offset Function',
      ru: 'Портальный укладчик с корзиной и смещением'
    },
    desc: {
      zh: '支持错位分垛与连续收纸，便于后续物流识别与转运。',
      en: 'Supports offset batching and continuous receiving for easier logistics and identification.',
      ru: 'Поддерживает смещение стоп и непрерывный прием для удобной логистики.'
    },
    functions: {
      zh: ['吊篮收纸', '错位堆码', '分垛识别', '安全护栏'],
      en: ['Basket receiving', 'Offset stacking', 'Pile separation', 'Safety fence'],
      ru: ['Прием корзиной', 'Укладка со смещением', 'Разделение стоп', 'Защитное ограждение']
    }
  },
  {
    slug: 'full-servo-tape-adhesive',
    image: images[8],
    speed: { zh: '与产线同步', en: 'Line-synchronized', ru: 'Синхронизация с линией' },
    width: '1800 / 2200 / 2500 / 2800 mm',
    changeover: { zh: '伺服配方控制', en: 'Servo recipe control', ru: 'Сервоуправление рецептами' },
    name: {
      zh: '全伺服胶带粘贴机',
      en: 'Full Servo Tape Adhesive Machine',
      ru: 'Полносерво машина для наклейки ленты'
    },
    desc: {
      zh: '与干端线联动，实现胶带定位粘贴和批量订单稳定生产。',
      en: 'Line-synchronized tape positioning and adhesive production for stable batch orders.',
      ru: 'Синхронизированное позиционирование и наклейка ленты для стабильных партий.'
    },
    functions: {
      zh: ['胶带粘贴', '伺服定位', '在线同步', '稳定贴合'],
      en: ['Tape adhesive', 'Servo positioning', 'Online synchronization', 'Stable bonding'],
      ru: ['Наклейка ленты', 'Сервопозиционирование', 'Онлайн-синхронизация', 'Стабильное приклеивание']
    }
  },
  {
    slug: 'manual-servo-thin-blade',
    image: images[9],
    speed: '120-220 m/min',
    width: '1400 / 1800 / 2200 mm',
    changeover: { zh: '手动 + 伺服辅助', en: 'Manual + servo assist', ru: 'Ручная настройка + сервоассистент' },
    name: {
      zh: '伺服薄刀手动分切压痕机',
      en: 'Servo Thin Blade Manual Slitter Scorer',
      ru: 'Серво ручной тонконожевой слиттер-скорер'
    },
    desc: {
      zh: '面向预算敏感或空间有限的产线，保留伺服微调能力。',
      en: 'For budget-sensitive or compact lines while keeping servo fine adjustment capability.',
      ru: 'Компактное решение с ручной настройкой и серво-точной регулировкой.'
    },
    functions: {
      zh: ['手动订单设置', '伺服微调', '薄刀分切', '占地紧凑'],
      en: ['Manual order setup', 'Servo fine-tuning', 'Thin blade slitting', 'Compact footprint'],
      ru: ['Ручная настройка заказа', 'Серво-точная регулировка', 'Тонконожевая резка', 'Компактная компоновка']
    }
  },
  {
    slug: 'single-wall-slitting-stacking-unit',
    image: images[10],
    speed: '150-250 m/min',
    width: '1400 / 1800 / 2200 mm',
    changeover: { zh: '一体化循环', en: 'Integrated cycle', ru: 'Интегрированный цикл' },
    name: {
      zh: '单面瓦楞纸板分切堆码一体机',
      en: 'Single-Wall Corrugated Slitting & Stacking Unit',
      ru: 'Агрегат резки и укладки одностороннего гофрокартона'
    },
    desc: {
      zh: '将分切、横切、收纸和堆码合并为紧凑单元，适合单瓦线。',
      en: 'Combines slitting, cross cutting, receiving and stacking in one compact unit.',
      ru: 'Объединяет продольную резку, поперечную резку, прием и укладку в одном модуле.'
    },
    functions: {
      zh: ['单瓦纸板分切', '横切', '收纸', '堆码'],
      en: ['Single-wall board slitting', 'Cross cutting', 'Receiving', 'Stacking'],
      ru: ['Резка одностороннего картона', 'Поперечная резка', 'Прием', 'Укладка']
    }
  },
  {
    slug: 'z-fold-continuous-stacker',
    image: asset('/images/z-fold-continuous-stacker.jpg'),
    speed: { zh: '连续生产', en: 'Continuous production', ru: 'Непрерывное производство' },
    width: { zh: '定制线宽', en: 'Custom line width', ru: 'Индивидуальная ширина линии' },
    changeover: { zh: '自动换垛', en: 'Automatic stack replacement', ru: 'Автоматическая замена стопы' },
    name: {
      zh: '连续纸板 Z 型折叠堆码系统',
      en: 'Continuous Board Z-Fold Stacking System',
      ru: 'Система непрерывной Z-укладки картона'
    },
    desc: {
      zh: '用于连续瓦楞纸板压线、折叠和自动堆码，可对接生产管理系统。',
      en: 'For continuous corrugated board creasing, folding and stacking, ready for production management integration.',
      ru: 'Для биговки, Z-складки и автоматической укладки непрерывного гофрокартона.'
    },
    functions: {
      zh: ['压线', 'Z 型折叠', '连续纸板处理', '可对接 ERP / PMS'],
      en: ['Creasing line', 'Z-fold stacking', 'Continuous board handling', 'ERP / PMS interface ready'],
      ru: ['Биговочная линия', 'Z-укладка', 'Непрерывная обработка картона', 'Интерфейс ERP / PMS']
    }
  }
]

const countryBase = [
  { key: 'china', lat: 35.8, lng: 104.1, count: 180, name: { zh: '中国', en: 'China', ru: 'Китай' } },
  { key: 'vietnam', lat: 16.1, lng: 108, count: 42, name: { zh: '越南', en: 'Vietnam', ru: 'Вьетнам' } },
  { key: 'india', lat: 22.9, lng: 79, count: 38, name: { zh: '印度', en: 'India', ru: 'Индия' } },
  { key: 'indonesia', lat: -2.5, lng: 118, count: 28, name: { zh: '印度尼西亚', en: 'Indonesia', ru: 'Индонезия' } },
  { key: 'thailand', lat: 15.8, lng: 101, count: 24, name: { zh: '泰国', en: 'Thailand', ru: 'Таиланд' } },
  { key: 'malaysia', lat: 4.2, lng: 102, count: 20, name: { zh: '马来西亚', en: 'Malaysia', ru: 'Малайзия' } },
  { key: 'pakistan', lat: 30.4, lng: 69.3, count: 18, name: { zh: '巴基斯坦', en: 'Pakistan', ru: 'Пакистан' } },
  { key: 'bangladesh', lat: 23.7, lng: 90.4, count: 16, name: { zh: '孟加拉国', en: 'Bangladesh', ru: 'Бангладеш' } },
  { key: 'philippines', lat: 12.9, lng: 122.7, count: 15, name: { zh: '菲律宾', en: 'Philippines', ru: 'Филиппины' } },
  { key: 'uzbekistan', lat: 41.4, lng: 64.6, count: 14, name: { zh: '乌兹别克斯坦', en: 'Uzbekistan', ru: 'Узбекистан' } },
  { key: 'kazakhstan', lat: 48, lng: 67, count: 13, name: { zh: '哈萨克斯坦', en: 'Kazakhstan', ru: 'Казахстан' } },
  { key: 'egypt', lat: 26.8, lng: 30.8, count: 12, name: { zh: '埃及', en: 'Egypt', ru: 'Египет' } },
  { key: 'nigeria', lat: 9.1, lng: 8.7, count: 10, name: { zh: '尼日利亚', en: 'Nigeria', ru: 'Нигерия' } },
  { key: 'kenya', lat: 0.2, lng: 37.9, count: 9, name: { zh: '肯尼亚', en: 'Kenya', ru: 'Кения' } },
  { key: 'brazil', lat: -14, lng: -51, count: 8, name: { zh: '巴西', en: 'Brazil', ru: 'Бразилия' } },
  { key: 'mexico', lat: 23.6, lng: -102, count: 7, name: { zh: '墨西哥', en: 'Mexico', ru: 'Мексика' } }
]

const copy = {
  zh: {
    brand: '盛中',
    nav: { about: '公司与全球', products: '产品矩阵', advantages: '公司优势', contact: '联系' },
    detailBack: '返回首页',
    detailCta: '咨询此设备',
    hero: {
      eyebrow: 'CYS CNC EQUIPMENT',
      title: '让瓦楞纸板干端产线更快、更稳、更聪明',
      subtitle: '从横切、分切压痕到堆码与胶带粘贴，构建高自动化干端解决方案。',
      primary: '浏览产品矩阵',
      secondary: '查看全球交付'
    },
    about: {
      label: '公司介绍 / 全球设备',
      title: '从青岛制造，到服务多区域纸板产线',
      desc: '公司成立于2010年8月，长期专注瓦楞纸板生产线干端设备。我们用标准化设备、可配置工程方案和多语言资料服务不同地区客户。',
      globeTitle: '设备销往国家与地区',
      globeDesc: '金色光点代表重点交付区域，光点密度映射当地设备数量。',
      timelineTitle: '发展历程',
      timeline: [
        ['2010', '公司成立，从干端设备制造与 OEM 服务积累工程经验。'],
        ['2015', '组建研发团队，形成自主品牌与标准化产品体系。'],
        ['2018', '产品覆盖横切、分切压痕、堆码、输送等核心工序。'],
        ['2020', '面向海外市场完善俄语、英语资料和远程方案支持。'],
        ['2024', '推进智能制造升级，持续优化高速线体稳定性。']
      ]
    },
    products: {
      label: '产品模块',
      title: '12 款核心设备与组合单元',
      desc: '首页保持克制展示，点击任一设备进入详情页，查看参数、核心功能和主要配件产地。',
      open: '查看详情'
    },
    advantages: {
      label: '公司优势',
      title: '不是堆参数，而是让产线长期稳定运行',
      items: [
        ['工程化配置', '按速度、宽幅、工序和厂房条件做组合，而不是只卖单机。'],
        ['高速换单', '伺服、PLC 与配方管理减少人工调整时间。'],
        ['核心部件透明', 'PLC、传感器、导轨、气动件等配件来源清晰。'],
        ['海外沟通能力', '提供中文、俄语、英语资料，支持跨区域沟通。']
      ]
    },
    contact: {
      label: '整屏收尾',
      title: '把您的产线参数发给盛中',
      desc: '留下速度、纸板宽度、目标工序和预算区间，我们会给出设备组合建议。',
      phone: '+86 138 5327 7793',
      phone2: '+7 9600405880',
      email: 'qdszsk@126.com',
      website: 'www.sdszsk.com',
      address: '青岛市即墨区大信镇信华街272号',
      company: '青岛盛中数控设备有限公司',
      form: ['姓名', '电话 / WhatsApp', '产线需求', '提交咨询', '已收到']
    },
    detail: {
      overview: '设备概览',
      functions: '核心功能',
      params: '技术参数',
      components: '主要配件与产地',
      origin: '产地 / 品牌'
    }
  },
  en: {
    brand: 'ShengZhong',
    nav: { about: 'Company & Globe', products: 'Products', advantages: 'Advantages', contact: 'Contact' },
    detailBack: 'Back Home',
    detailCta: 'Inquire This Machine',
    hero: {
      eyebrow: 'CYS CNC EQUIPMENT',
      title: 'Faster, steadier and smarter dry-end corrugated lines',
      subtitle: 'From cut-off and slitter scoring to stacking and tape adhesive modules, built for automated dry-end production.',
      primary: 'Explore Products',
      secondary: 'Global Delivery'
    },
    about: {
      label: 'Company / Global Equipment',
      title: 'From Qingdao manufacturing to multi-region board lines',
      desc: 'Founded in August 2010, Shengzhong focuses on dry-end equipment for corrugated board lines, serving customers with standardized machines, configurable engineering solutions and multilingual materials.',
      globeTitle: 'Countries and regions served',
      globeDesc: 'Golden dots mark delivery regions, with denser dots suggesting more installed equipment.',
      timelineTitle: 'Development Timeline',
      timeline: [
        ['2010', 'Founded with dry-end equipment manufacturing and OEM service experience.'],
        ['2015', 'R&D team formed and own-brand standardized portfolio established.'],
        ['2018', 'Products covered cut-off, slitting, scoring, stacking and conveying.'],
        ['2020', 'Russian and English materials improved for overseas markets.'],
        ['2024', 'Smart manufacturing upgrade and high-speed line stability optimization.']
      ]
    },
    products: {
      label: 'Product Module',
      title: '12 core machines and combined units',
      desc: 'The homepage stays concise. Click a machine to open a detailed page with parameters, functions and component origins.',
      open: 'View detail'
    },
    advantages: {
      label: 'Advantages',
      title: 'Not just parameters, but long-term line stability',
      items: [
        ['Engineered configuration', 'Configured by speed, width, process and plant conditions.'],
        ['Fast order change', 'Servo, PLC and recipe management reduce manual adjustment.'],
        ['Transparent components', 'Clear origins for PLC, sensors, guides and pneumatic parts.'],
        ['Global communication', 'Chinese, Russian and English materials for cross-region projects.']
      ]
    },
    contact: {
      label: 'Full-Screen Closing',
      title: 'Send us your line parameters',
      desc: 'Share speed, board width, target process and budget range. We will suggest a suitable equipment combination.',
      phone: '+86 138 5327 7793',
      phone2: '+7 9600405880',
      email: 'qdszsk@126.com',
      website: 'www.sdszsk.com',
      address: 'No.272 Xinhua St, Daxin, Jimo District, Qingdao',
      company: 'Qingdao Shengzhong CNC Equipment Co., Ltd.',
      form: ['Name', 'Phone / WhatsApp', 'Line requirement', 'Send Inquiry', 'Received']
    },
    detail: {
      overview: 'Overview',
      functions: 'Core Functions',
      params: 'Technical Parameters',
      components: 'Components & Origin',
      origin: 'Origin / Brand'
    }
  },
  ru: {
    brand: 'ShengZhong',
    nav: { about: 'Компания и мир', products: 'Продукция', advantages: 'Преимущества', contact: 'Контакты' },
    detailBack: 'На главную',
    detailCta: 'Запросить оборудование',
    hero: {
      eyebrow: 'CYS CNC EQUIPMENT',
      title: 'Быстрее, стабильнее и умнее сухая часть линии',
      subtitle: 'Поперечная резка, продольная резка и биговка, укладка и клеевые модули для автоматизации сухой части.',
      primary: 'Смотреть продукцию',
      secondary: 'Глобальные поставки'
    },
    about: {
      label: 'Компания / поставки',
      title: 'От производства в Циндао к линиям в разных регионах',
      desc: 'Компания основана в августе 2010 года и специализируется на оборудовании сухой части линий гофрокартона, предлагая стандартные машины, конфигурируемые решения и многоязычные материалы.',
      globeTitle: 'Страны и регионы поставок',
      globeDesc: 'Золотые точки отмечают ключевые регионы поставок; плотность точек отражает количество оборудования.',
      timelineTitle: 'История развития',
      timeline: [
        ['2010', 'Основание компании и накопление инженерного опыта в производстве оборудования сухой части.'],
        ['2015', 'Создание R&D-команды и формирование собственного стандартизированного портфеля.'],
        ['2018', 'Линейка охватила резку, биговку, укладку и транспортировку.'],
        ['2020', 'Развитие русских и английских материалов для зарубежных рынков.'],
        ['2024', 'Модернизация интеллектуального производства и повышение стабильности высокоскоростных линий.']
      ]
    },
    products: {
      label: 'Продукция',
      title: '12 основных машин и комбинированных модулей',
      desc: 'Нажмите на оборудование, чтобы открыть подробные параметры, функции и происхождение компонентов.',
      open: 'Подробнее'
    },
    advantages: {
      label: 'Преимущества',
      title: 'Не только параметры, а стабильная работа линии',
      items: [
        ['Инженерная конфигурация', 'Подбор по скорости, ширине, процессу и условиям цеха.'],
        ['Быстрая смена заказа', 'Серво, PLC и рецепты сокращают ручную настройку.'],
        ['Прозрачные компоненты', 'Понятные бренды PLC, датчиков, направляющих и пневматики.'],
        ['Международная коммуникация', 'Материалы на китайском, русском и английском языках.']
      ]
    },
    contact: {
      label: 'Финальный экран',
      title: 'Отправьте параметры вашей линии',
      desc: 'Укажите скорость, ширину картона, нужный процесс и бюджет. Мы предложим подходящую комбинацию оборудования.',
      phone: '+86 138 5327 7793',
      phone2: '+7 9600405880',
      email: 'qdszsk@126.com',
      website: 'www.sdszsk.com',
      address: 'ул. Синьхуа 272, район Цзимо, Циндао',
      company: 'Qingdao Shengzhong CNC Equipment Co., Ltd.',
      form: ['Имя', 'Телефон / WhatsApp', 'Параметры линии', 'Отправить', 'Получено']
    },
    detail: {
      overview: 'Обзор',
      functions: 'Основные функции',
      params: 'Технические параметры',
      components: 'Компоненты и происхождение',
      origin: 'Происхождение / бренд'
    }
  }
}

const localizedValue = (value, lang) => (typeof value === 'object' ? value[lang] : value)

const productItems = (lang) => productBase.map((item) => {
  const labels = paramLabels[lang]
  const fixed = fixedParamValues[lang]
  return {
    slug: item.slug,
    image: item.image,
    speed: localizedValue(item.speed, lang),
    width: localizedValue(item.width, lang),
    changeover: localizedValue(item.changeover, lang),
    name: item.name[lang],
    desc: item.desc[lang],
    functions: item.functions[lang],
    params: [
      [labels[0], localizedValue(item.speed, lang)],
      [labels[1], localizedValue(item.width, lang)],
      [labels[2], localizedValue(item.changeover, lang)],
      [labels[3], fixed[0]],
      [labels[4], fixed[1]],
      [labels[5], fixed[2]]
    ],
    components: componentOrigins[lang]
  }
})

const countryItems = (lang) => countryBase.map((country) => ({
  ...country,
  name: country.name[lang]
}))

export function getSiteData(lang = 'zh') {
  const activeLang = copy[lang] ? lang : 'zh'
  return {
    ...copy[activeLang],
    products: {
      ...copy[activeLang].products,
      items: productItems(activeLang)
    },
    countries: countryItems(activeLang)
  }
}

export default getSiteData
