export type Locale = 'en' | 'ja' | 'th' | 'zh'

export const localeNames: Record<Locale, string> = {
  en: 'EN', ja: '日本語', th: 'ไทย', zh: '中文',
}

const en = {
  nav: ['Heritage', 'Quality', 'Products', 'Global', 'Official'],
  heroEyebrow: 'JAPAN / GLOBAL CARE', heroTitle: 'A quiet standard for everyday care.',
  heroBody: 'Born from professional routines in Japan. Made clear for homes and trusted channels around the world.', discover: 'Discover RANTO', verify: 'Verify official channel',
  proof: [['JAPAN', 'Professional origin'], ['GLOBAL', 'Brand perspective'], ['SIX', 'Care systems'], ['OFFICIAL', 'Verified channels']],
  heritageEyebrow: 'OUR HERITAGE / 日本の原点', heritageTitle: 'Professional first. Consumer later.',
  heritageBody: 'RANTO grew from environments where cleanliness is part of the experience—refined hospitality, culinary care and premium residences. That disciplined knowledge is translated into calm, intuitive routines for everyday homes.', heritageLink: 'Read the Japan story',
  heritagePillars: [['01', 'Professional routines', 'Care developed around repeatable results, material awareness and quiet service.'], ['02', 'High-standard scenes', 'Hospitality, culinary and residential settings where details remain visible.'], ['03', 'Consumer clarity', 'Professional logic simplified into products that are easy to understand and use.'], ['04', 'Worldwide relevance', 'One disciplined brand language, adapted responsibly for each market.']],
  placesEyebrow: 'TRUSTED WHERE DETAILS MATTER', placesTitle: 'From high-touch service to everyday care.', placesBody: 'The discipline behind every product comes from environments where consistency is never optional.',
  places: [['BOUTIQUE HOSPITALITY', 'Guest rooms, linens and shared spaces'], ['CULINARY SPACES', 'Degreasing and surface care without harsh residue'], ['PREMIUM RESIDENCES', 'Reliable routines for materials people live with']],
  qualityEyebrow: 'QUALITY & MANUFACTURING', qualityTitle: 'Trust is built before the bottle.',
  qualityBody: 'RANTO treats quality as a chain of controlled decisions—from specification and incoming materials to mixing, inspection, packaging and traceable release.',
  qualityPoints: ['Specification-led formula control', 'Incoming material and lot records', 'Controlled mixing and in-process checks', 'Filling, packaging and release review'], qualityLink: 'Explore quality system',
  processEyebrow: 'FROM FORMULA TO RELEASE', processTitle: 'Six controlled stages. One visible standard.',
  process: [['01', 'FORMULA CONTROL', 'Performance targets, material compatibility and use profile are defined.'], ['02', 'RAW MATERIAL INTAKE', 'Supplied documents, incoming checks and lot registration are reviewed.'], ['03', 'CONTROLLED MIXING', 'Sequence, timing and operator verification follow the production record.'], ['04', 'IN-PROCESS CHECKS', 'Appearance, odour, pH and functional checks follow specification.'], ['05', 'FILLING & PACKAGING', 'Fill weight, closure, label position and leak integrity are checked.'], ['06', 'BATCH RELEASE', 'Final review and traceable release complete the workflow.']],
  productsEyebrow: 'SIX CARE SYSTEMS', productsTitle: 'One calm system for the whole home.', productsBody: 'Six care categories, developed from professional routines and translated into intuitive daily use.',
  productDescriptions: ['Daily fabric care', 'Food-space reset', 'Bathroom material care', 'Whole-home maintenance', 'Targeted footwear care', 'Pre-measured simplicity'],
  partnersEyebrow: 'SELECTED RETAIL & PROFESSIONAL NETWORK', partnersTitle: 'Seen in trusted places.',
  partnersBody: 'RANTO builds credibility through qualified production, offline retail, hospitality, professional-use and market-ready fulfilment relationships. Specific partner names are published only after official verification.',
  partnerTypes: ['QUALIFIED PRODUCTION', 'PREMIUM OFFLINE RETAIL', 'HOSPITALITY', 'CULINARY', 'RESIDENTIAL', 'SOCIAL COMMERCE'],
  globalEyebrow: 'GLOBAL PRESENCE', globalTitle: 'Japanese standards. A worldwide view.',
  globalBody: 'Japan is the origin. Thailand is one retail market—not the definition of the brand. RANTO presents one disciplined identity across professional spaces, offline retail and verified digital channels worldwide.', globalLink: 'Explore global network',
  marketsTitle: 'Global by standard, local by understanding.', markets: [['JAPAN', 'ORIGIN & HERITAGE', 'Professional-use heritage, refined routines and brand archive.'], ['SOUTHEAST ASIA', 'RETAIL GROWTH', 'Modern household care through verified retail and social commerce.'], ['EAST ASIA', 'PARTNER DEVELOPMENT', 'Market education, specialised retail and category expansion.'], ['GLOBAL', 'SELECTIVE EXPANSION', 'Distribution, hospitality and premium retail partnerships.']],
  ecosystemTitle: 'A brand becomes credible through its relationships.', ecosystemBody: 'The official site documents the systems behind the brand: production discipline, retail presence, professional contexts and authorised channels.',
  ecosystem: [['Manufacturing', 'Documented process and traceable release'], ['Offline retail', 'Physical environments that strengthen trust'], ['Professional use', 'Routine-based credibility beyond advertising'], ['Official channels', 'Clear market-by-market purchase guidance']],
  repeatEyebrow: 'LESS WASTE, SAME STANDARD', repeatTitle: 'Designed to be used again, not replaced again.', repeatBody: 'Concentrated formulas and refill formats are designed to reduce packaging and transport burden while keeping the daily routine consistent.',
  confidenceEyebrow: 'WHAT BUYERS CAN VERIFY', confidenceTitle: 'Confidence should come from visible evidence.', confidence: [['BRAND ORIGIN', 'A consistent Japan-origin story and global brand identity.'], ['QUALITY PROCESS', 'A documented chain from specification to release.'], ['CHANNEL STATUS', 'Official-store and offline-retail guidance listed by market.']],
  officialEyebrow: 'BUY WITH CONFIDENCE', officialTitle: 'Verify an official RANTO channel.',
  officialBody: 'Check a TikTok Shop, retail account, distributor or offline seller before purchase. This site is for brand information and channel verification—not direct checkout.', placeholder: 'Store, account or country', verifyButton: 'Verify channel', emptyResult: 'Enter a store, account or market to begin.',
  searchResult: 'We will confirm this channel against the official market list. For Thailand, contact LINE @ranto.th or hello@ranto.co.th.',
  officialRows: [['GLOBAL BRAND SITE', 'CANONICAL SOURCE'], ['TIKTOK SHOP', 'MARKET VERIFIED'], ['OFFLINE RETAIL', 'LISTED BY MARKET']],
  ctaEyebrow: 'OFFICIAL CONTACT', ctaTitle: 'Need channel or partnership confirmation?', ctaBody: 'Consumer verification, retail enquiries and professional-use cooperation are handled through the official market contact.', ctaButton: 'Contact RANTO',
  footerBody: 'Japanese professional care, made clear for the world.', footerLocation: 'TOKYO / BANGKOK / WORLDWIDE',
}

const zh = {
  ...en,
  nav: ['品牌传承', '品质制造', '产品系统', '全球网络', '官方渠道'],
  heroEyebrow: '日本专业起源 / 全球家居护理', heroTitle: '把专业场景里的安静标准，带进每一天。', heroBody: '源于日本专业使用场景，为全球家庭与可信渠道建立清晰、克制且一致的护理体系。', discover: '了解 RANTO', verify: '验证官方渠道',
  proof: [['日本起源', '专业场景传承'], ['全球视角', '统一品牌表达'], ['六大系统', '覆盖日常护理'], ['官方渠道', '按市场核验']],
  heritageEyebrow: '品牌传承 / 日本の原点', heritageTitle: '先服务专业场景，再进入日常家庭。', heritageBody: 'RANTO 最初服务于把清洁视为体验一部分的高标准环境——精品酒店、餐饮空间与高端居住场景。如今，我们把这套专业逻辑转化为更直观、更克制的日常护理方式。', heritageLink: '阅读日本品牌故事',
  heritagePillars: [['01', '专业流程', '围绕稳定效果、材质意识与细致服务建立的护理逻辑。'], ['02', '高标准场景', '在酒店、餐饮与居住空间中，每一个细节都经得起检验。'], ['03', '消费端清晰表达', '把专业知识转化为消费者看得懂、用得明白的产品系统。'], ['04', '全球适用', '保持统一品牌标准，同时尊重不同市场的真实生活方式。']],
  placesEyebrow: '在细节重要的地方建立信任', placesTitle: '从高标准服务，到每一个普通家庭。', placesBody: '每一件产品背后的纪律，来自那些不允许结果偶然的真实使用环境。', places: [['精品酒店', '客房、织物与公共空间护理'], ['餐饮空间', '强力去油，同时减少刺激性残留'], ['高端居住', '针对长期接触材质的稳定日常护理']],
  qualityEyebrow: '品质与制造', qualityTitle: '信任，在装瓶之前就已经开始。', qualityBody: 'RANTO 将品质视为一条可追溯的控制链：从规格、来料，到混合、检验、包装与批次放行。', qualityPoints: ['以规格为起点的配方控制', '来料检查与批次记录', '受控混合与过程检查', '灌装、包装与放行复核'], qualityLink: '了解品质体系',
  processEyebrow: '从配方到放行', processTitle: '六个受控环节，一套看得见的标准。', process: [['01', '配方控制', '明确性能目标、材质适配与使用场景。'], ['02', '原料入库', '审查供应文件、来料状态与批次登记。'], ['03', '受控混合', '依照生产记录控制顺序、时间与操作复核。'], ['04', '过程检查', '按照规格检查外观、气味、pH 与功能表现。'], ['05', '灌装与包装', '检查灌装量、封口、标签位置与密封完整性。'], ['06', '批次放行', '完成最终复核和可追溯放行。']],
  productsEyebrow: '六大护理系统', productsTitle: '一套克制而完整的全屋护理体系。', productsBody: '六大品类都来自专业护理逻辑，并被转化为更直观的日常使用体验。', productDescriptions: ['日常织物护理', '厨房去油与复原', '卫浴材质护理', '全屋表面维护', '针对性鞋履护理', '预先定量，更简单'],
  partnersEyebrow: '线下零售与专业场景网络', partnersTitle: '在真实场景里被看见，信任才会成立。', partnersBody: 'RANTO 通过合格生产、线下零售、酒店、专业使用与市场履约关系建立品牌可信度。具体合作方名称仅在完成官方核验后对外公布。', partnerTypes: ['合格生产', '高端线下零售', '酒店场景', '餐饮空间', '居住场景', '社交电商'],
  globalEyebrow: '全球品牌视角', globalTitle: '日本标准，全球视野。', globalBody: '日本是品牌起源，泰国只是其中一个零售市场，并不定义 RANTO。我们在全球专业场景、线下零售与官方数字渠道中保持一致的品牌身份。', globalLink: '了解全球网络',
  marketsTitle: '全球统一标准，本地真实理解。', markets: [['日本', '起源与传承', '专业场景传承、克制护理与品牌档案。'], ['东南亚', '零售增长', '通过可信线下零售与社交电商服务现代家庭。'], ['东亚', '伙伴发展', '市场教育、专业零售与品类拓展。'], ['全球', '选择性拓展', '面向分销、酒店与高端零售的合作。']],
  ecosystemTitle: '品牌的可信度，来自真实关系。', ecosystemBody: '官网负责呈现品牌背后的系统：生产纪律、线下存在、专业场景与授权渠道。', ecosystem: [['生产制造', '有记录的流程与可追溯放行'], ['线下零售', '消费者能够真实接触的可信环境'], ['专业使用', '超越广告的日常使用背书'], ['官方渠道', '按市场提供清晰购买指引']],
  repeatEyebrow: '减少浪费，标准不变', repeatTitle: '设计为再次使用，而不是再次丢弃。', repeatBody: '浓缩配方与补充装旨在减少包装和运输负担，同时保持稳定的日常使用体验。',
  confidenceEyebrow: '消费者可以核验什么', confidenceTitle: '信任，应该来自看得见的证据。', confidence: [['品牌起源', '一致的日本起源叙事与全球品牌身份。'], ['品质流程', '从规格到批次放行的完整控制链。'], ['渠道状态', '按市场公开官方店铺与线下零售指引。']],
  officialEyebrow: '放心购买', officialTitle: '验证 RANTO 官方渠道。', officialBody: '购买前核验 TikTok Shop、零售账号、经销商或线下卖家。本网站只提供品牌信息与渠道背书，不提供在线下单。', placeholder: '输入店铺、账号或国家/地区', verifyButton: '验证渠道', emptyResult: '请输入店铺、账号或市场。', searchResult: '我们会根据官方市场名单核验该渠道。泰国市场可联系 LINE @ranto.th 或 hello@ranto.co.th。', officialRows: [['全球品牌官网', '品牌信息源'], ['TIKTOK SHOP', '按市场核验'], ['线下零售', '按市场收录']],
  ctaEyebrow: '官方联系', ctaTitle: '需要确认渠道或洽谈合作？', ctaBody: '消费者核验、零售合作与专业场景合作，统一通过官方市场联系方式处理。', ctaButton: '联系 RANTO', footerBody: '源于日本专业场景，为全球家庭建立清晰的护理方式。', footerLocation: '东京 / 曼谷 / 全球',
}

const ja = {
  ...en,
  nav: ['ヘリテージ', '品質・製造', '製品システム', 'グローバル', '公式チャネル'],
  heroEyebrow: 'JAPAN / GLOBAL CARE', heroTitle: '静かな基準を、毎日のケアへ。', heroBody: '日本のプロフェッショナルな現場から生まれ、世界の暮らしと信頼できるチャネルへ。', discover: 'RANTOを知る', verify: '公式チャネルを確認', proof: [['日本発', 'プロの現場が原点'], ['グローバル', '一貫したブランド視点'], ['6 SYSTEMS', '暮らしを支えるケア'], ['OFFICIAL', '市場別の公式確認']],
  heritageEyebrow: 'OUR HERITAGE / 日本の原点', heritageTitle: 'プロの現場から、日常の暮らしへ。', heritageBody: 'RANTOは、清潔さそのものが体験価値となるホテル、料理空間、上質な住環境で培われた考え方を、分かりやすく静かな日常ケアへと翻訳します。', heritageLink: '日本のストーリーを読む',
  qualityEyebrow: 'QUALITY & MANUFACTURING', qualityTitle: '信頼は、ボトルになる前から始まる。', qualityBody: '仕様、原料、混合、工程検査、充填、包装、ロット出荷まで。品質を連続した管理判断として捉えます。', qualityLink: '品質システムを見る',
  productsEyebrow: 'SIX CARE SYSTEMS', productsTitle: '家全体を整える、ひとつの静かなシステム。', productsBody: 'プロのケアロジックを、直感的に使える6つのカテゴリーへ。',
  partnersEyebrow: 'RETAIL & PROFESSIONAL NETWORK', partnersTitle: '信頼は、実際の場所で育つ。', partnersBody: '生産、オフライン小売、ホスピタリティ、プロユース、各市場の公式チャネルを通じてブランドの信頼性を築きます。名称は公式確認後に公開します。',
  globalEyebrow: 'GLOBAL PRESENCE', globalTitle: '日本の基準。世界の視点。', globalBody: '日本は原点。タイはひとつの小売市場であり、ブランド全体を定義するものではありません。世界のプロ空間、店舗、公式デジタルチャネルで一貫したブランドを伝えます。', globalLink: 'グローバルネットワークを見る',
  officialEyebrow: 'BUY WITH CONFIDENCE', officialTitle: 'RANTOの公式チャネルを確認。', officialBody: '購入前にTikTok Shop、販売アカウント、代理店、店舗を確認できます。本サイトはブランド情報と公式確認のためのもので、オンライン販売は行いません。', placeholder: '店舗・アカウント・国名', verifyButton: 'チャネルを確認', emptyResult: '店舗、アカウント、または市場を入力してください。', searchResult: '公式市場リストに基づき確認します。タイ市場は LINE @ranto.th または hello@ranto.co.th へ。',
  ctaEyebrow: 'OFFICIAL CONTACT', ctaTitle: '公式確認・パートナー相談はこちら。', ctaBody: '消費者向け確認、小売、プロユースのご相談は公式窓口で受け付けます。', ctaButton: 'RANTOへ連絡', footerBody: '日本のプロフェッショナルケアを、世界の暮らしへ。', footerLocation: '東京 / バンコク / 世界',
}

const th = {
  ...en,
  nav: ['มรดกแบรนด์', 'คุณภาพ', 'ผลิตภัณฑ์', 'เครือข่ายโลก', 'ช่องทางทางการ'],
  heroEyebrow: 'JAPAN / GLOBAL CARE', heroTitle: 'มาตรฐานที่สงบ สำหรับการดูแลทุกวัน', heroBody: 'ถือกำเนิดจากงานดูแลระดับมืออาชีพในญี่ปุ่น และถ่ายทอดสู่บ้านและช่องทางที่เชื่อถือได้ทั่วโลก', discover: 'รู้จัก RANTO', verify: 'ตรวจสอบช่องทางทางการ', proof: [['JAPAN', 'ต้นกำเนิดจากมืออาชีพ'], ['GLOBAL', 'มุมมองแบรนด์สากล'], ['SIX', 'ระบบดูแล 6 หมวด'], ['OFFICIAL', 'ช่องทางที่ตรวจสอบได้']],
  heritageEyebrow: 'OUR HERITAGE / 日本の原点', heritageTitle: 'เริ่มจากมืออาชีพ ก่อนเข้าสู่ทุกบ้าน', heritageBody: 'RANTO เติบโตจากสถานที่ที่ความสะอาดเป็นส่วนหนึ่งของประสบการณ์—โรงแรม พื้นที่อาหาร และที่พักอาศัยระดับพรีเมียม ก่อนถ่ายทอดวินัยนั้นให้ใช้งานได้ง่ายในชีวิตประจำวัน', heritageLink: 'อ่านเรื่องราวจากญี่ปุ่น',
  qualityEyebrow: 'QUALITY & MANUFACTURING', qualityTitle: 'ความไว้วางใจถูกสร้างก่อนบรรจุขวด', qualityBody: 'RANTO มองคุณภาพเป็นห่วงโซ่การควบคุม ตั้งแต่ข้อกำหนด วัตถุดิบ การผสม การตรวจสอบ บรรจุภัณฑ์ จนถึงการปล่อยล็อตที่ตรวจสอบย้อนกลับได้', qualityLink: 'ดูระบบคุณภาพ',
  productsEyebrow: 'SIX CARE SYSTEMS', productsTitle: 'ระบบเดียวที่ดูแลบ้านได้อย่างสงบและครบถ้วน', productsBody: '6 หมวดการดูแลที่พัฒนาจากกิจวัตรแบบมืออาชีพ และทำให้เข้าใจง่ายสำหรับทุกวัน',
  partnersEyebrow: 'RETAIL & PROFESSIONAL NETWORK', partnersTitle: 'แบรนด์ที่น่าเชื่อถือ ต้องมองเห็นได้ในสถานที่จริง', partnersBody: 'RANTO สร้างความน่าเชื่อถือผ่านการผลิตที่มีคุณสมบัติ ร้านค้าปลีกออฟไลน์ งานโรงแรม การใช้งานระดับมืออาชีพ และช่องทางดิจิทัลที่ยืนยันตามตลาด รายชื่อพันธมิตรจะเผยแพร่หลังการตรวจสอบอย่างเป็นทางการ',
  globalEyebrow: 'GLOBAL PRESENCE', globalTitle: 'มาตรฐานญี่ปุ่น มุมมองระดับโลก', globalBody: 'ญี่ปุ่นคือจุดเริ่มต้น ประเทศไทยเป็นหนึ่งในตลาดค้าปลีก ไม่ใช่นิยามทั้งหมดของแบรนด์ RANTO รักษาอัตลักษณ์เดียวกันในพื้นที่มืออาชีพ ร้านค้า และช่องทางดิจิทัลที่ได้รับการยืนยันทั่วโลก', globalLink: 'ดูเครือข่ายทั่วโลก',
  officialEyebrow: 'BUY WITH CONFIDENCE', officialTitle: 'ตรวจสอบช่องทาง RANTO อย่างเป็นทางการ', officialBody: 'ตรวจสอบ TikTok Shop บัญชีร้านค้า ผู้จัดจำหน่าย หรือร้านออฟไลน์ก่อนซื้อ เว็บไซต์นี้ใช้สำหรับข้อมูลแบรนด์และการยืนยันช่องทางเท่านั้น ไม่มีระบบสั่งซื้อโดยตรง', placeholder: 'ร้านค้า บัญชี หรือประเทศ', verifyButton: 'ตรวจสอบช่องทาง', emptyResult: 'กรุณากรอกร้านค้า บัญชี หรือตลาด', searchResult: 'เราจะตรวจสอบกับรายชื่อทางการของแต่ละตลาด สำหรับประเทศไทย ติดต่อ LINE @ranto.th หรือ hello@ranto.co.th',
  ctaEyebrow: 'OFFICIAL CONTACT', ctaTitle: 'ต้องการยืนยันช่องทางหรือสอบถามความร่วมมือ?', ctaBody: 'การยืนยันสำหรับผู้บริโภค ความร่วมมือค้าปลีก และการใช้งานระดับมืออาชีพ ดำเนินการผ่านช่องทางตลาดอย่างเป็นทางการ', ctaButton: 'ติดต่อ RANTO', footerBody: 'การดูแลแบบมืออาชีพจากญี่ปุ่น ถ่ายทอดอย่างชัดเจนสู่โลก', footerLocation: 'โตเกียว / กรุงเทพฯ / ทั่วโลก',
}

export const copy = { en, ja, th, zh }
