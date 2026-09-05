import type { Locale, SiteCopy } from './types'
export type { Locale } from './types'

export const localeNames: Record<Locale, string> = {
  en: 'English', zh: '中文', th: 'ไทย', ja: '日本語',
}

const en: SiteCopy = {
  nav: { products: 'Products', quality: 'Our approach', story: 'About RANTO', global: 'International', official: 'Contact' },
  common: { menu: 'Menu', close: 'Close', language: 'Language', navigation: 'Main navigation', skip: 'Skip to content', home: 'Home', explore: 'Explore', contact: 'Contact us', back: 'Back to products' },
  hero: { eyebrow: 'RANTO HOME CARE', title: 'Care starts at home.', body: 'Home care for the spaces we live in and the clothes we wear.', cta: 'Explore the collection' },
  collection: { title: 'Three everyday essentials.', intro: 'Our first collection brings together household cleaning, bathroom care and lingerie laundry. Three products, each with a clear purpose.', viewAll: 'View all products' },
  scenes: { title: 'Part of your day.', body: 'Find the care that fits your task, from cleaning the bathroom to washing lingerie.', items: [
    { title: 'Around the home', body: 'Multi-Purpose Cleaner for everyday household cleaning.' },
    { title: 'In the bathroom', body: 'Bathroom Cleaner for taking care of the bathroom.' },
    { title: 'For lingerie', body: 'Lingerie Laundry Detergent for washing your intimate garments.' },
  ] },
  philosophy: { eyebrow: 'THE RANTO APPROACH', title: 'A little care, every day.', body: 'We believe the small things we do for our homes deserve our attention. So do the products we choose for them.', points: [
    { title: 'Choose for the task', body: 'Give your living spaces and your lingerie the care intended for each.' },
    { title: 'Know what you use', body: 'Take a moment to understand the product in your hand and how to use it.' },
    { title: 'Feel at home', body: 'Simple white packaging that belongs alongside the things you live with.' },
  ] },
  story: { title: 'Made for daily life.', intro: 'RANTO is a home-care brand with a simple belief: the small things we do at home matter.', paragraphs: [
    'Home is where ordinary moments add up. A room gets cleaned, the bathroom gets some attention, and a few pieces of laundry are washed. Small tasks, each part of making a place our own.',
    'RANTO looks at home care through these familiar routines. Looking after the bathroom is different from washing lingerie. We want to help you choose with that difference in mind, and understand the product you bring home.',
    'We also care about how everyday products look in the spaces we share. White bottles and a familiar family of designs sit naturally among the objects of daily life.',
    'Our idea of care starts here: paying attention to the task, choosing what belongs, and making room for the little routines that keep a home feeling like home.',
  ], principles: [
    { title: 'Everyday attention', body: 'Even the most familiar household task deserves a little care.' },
    { title: 'A choice for each task', body: 'Think about what you are caring for before choosing a product.' },
    { title: 'At home with you', body: 'The things you use every day can be things you enjoy having around.' },
  ], closing: 'Care starts with what we do every day.' },
  quality: { title: 'Know your everyday care.', intro: 'Choosing a product is part of looking after your home. We believe that choice should begin with understanding what you use.', items: [
    { title: 'Start with the task', body: 'A bathroom and a piece of lingerie ask for different care. Choose by the intended use of each product.' },
    { title: 'Get to know the bottle', body: 'Read the ingredients, directions and precautions on the pack to understand the product you have.' },
    { title: 'Look after what you own', body: 'Check the care guidance for the item you are cleaning, alongside the instructions on the product.' },
    { title: 'Make room for the everyday', body: 'We favour simple white packaging that feels at home among the objects you use each day.' },
  ], readLabelTitle: 'Before you begin.', readLabelBody: 'Read the directions and precautions on the pack. Check that the product is suitable for the intended use and follow the stated instructions.' },
  global: { title: 'Home, in every language.', intro: 'The details of daily life differ from place to place. The wish to look after a home is something we share.', visionTitle: 'Looking further ahead.', visionBody: 'Our ambition is to bring RANTO to more households over time, learning from local routines and the people who live them.', marketTitle: 'First, Thailand.', marketBody: 'We are preparing our first launch in Thailand with three 500 ml products. Contact RANTO for launch updates and purchase information.', languagesTitle: 'Explore in four languages.', languagesBody: 'Read about RANTO in English, Chinese, Thai or Japanese. Choose the language that feels most familiar to you.' },
  contact: { title: 'Talk to RANTO.', intro: 'For product questions, launch updates and business enquiries, get in touch through our official email.', emailLabel: 'Official enquiries', emailBody: 'Tell us which product or topic you would like to discuss.', cooperationTitle: 'Business enquiries', cooperationBody: 'Interested in retail or distribution? Introduce your business and the market you work in.', prepareTitle: 'Help us understand your enquiry.', prepareItems: ['The product or topic you are asking about', 'Your country or region', 'For business enquiries, your company and proposed cooperation'], availability: 'Our first three products are coming soon. Contact us for availability and purchase information.' },
  productUI: { title: 'The first collection.', intro: 'Three 500 ml products for everyday household cleaning, the bathroom and lingerie laundry.', details: 'View product', comingSoon: 'Coming soon', volume: 'Volume', usage: 'Intended use', category: 'Category', directions: 'Directions', precautions: 'Before use', origin: 'Made in', packView: 'Product preview', fullImage: 'View full-size packaging', labelNote: 'Product images show the planned packaging. Follow the information on the final pack.' },
  products: {
    multipurpose: { name: 'Multi-Purpose Cleaner', category: 'Household cleaning', short: 'For everyday household cleaning.', description: 'A 500 ml spray cleaner for everyday household cleaning.', uses: ['Household cleaning', 'Kitchen cleaning, as directed on the pack'], directions: 'Follow the directions on the pack before use.', precautions: 'Read the precautions on the pack and check suitability for your intended use.', origin: 'Made in Thailand.' },
    bathroom: { name: 'Bathroom Cleaner', category: 'Bathroom care', short: 'For cleaning the bathroom.', description: 'A 500 ml spray cleaner for the bathroom.', uses: ['Bathroom cleaning'], directions: 'Follow the directions on the pack before use.', precautions: 'Read the precautions on the pack and check suitability for your intended use.' },
    lingerie: { name: 'Lingerie Laundry Detergent', category: 'Lingerie care', short: 'For washing lingerie.', description: 'A 500 ml liquid laundry detergent intended for lingerie. A dedicated choice for this part of your laundry routine.', uses: ['Lingerie laundry'], directions: 'Follow the directions on the pack before use.', precautions: 'Read the product precautions and the care instructions on your garments before use.', origin: 'Made in Thailand.' },
  },
  footer: { headline: 'Care starts at home.', body: 'For the small things that make a home.', contact: 'Get in touch', legal: 'All rights reserved.' },
  meta: {
    home: { title: 'RANTO | Care starts at home', description: 'Discover RANTO home care. Our first collection includes Multi-Purpose Cleaner, Bathroom Cleaner and Lingerie Laundry Detergent.' },
    products: { title: 'Products | RANTO', description: 'Explore three 500 ml RANTO home-care products. Multi-Purpose Cleaner, Bathroom Cleaner and Lingerie Laundry Detergent are coming soon.' },
    quality: { title: 'Our approach | RANTO', description: 'Explore the RANTO approach to everyday care, from choosing for the task to understanding the product you use.' },
    story: { title: 'About RANTO', description: 'Meet RANTO, a home-care brand that believes the small things we do at home matter.' },
    global: { title: 'International | RANTO', description: 'Explore the RANTO outlook and plans for our first launch in Thailand.' },
    official: { title: 'Contact | RANTO', description: 'Contact RANTO for product questions, launch updates and retail or distribution enquiries.' },
  },
}

const zh: SiteCopy = {
  nav: { products: '产品', quality: '品牌理念', story: '关于 RANTO', global: '国际视野', official: '联系' },
  common: { menu: '菜单', close: '关闭', language: '语言', navigation: '主导航', skip: '跳至正文', home: '首页', explore: '了解更多', contact: '联系我们', back: '返回产品系列' },
  hero: { eyebrow: 'RANTO 家居护理', title: '认真照顾，日常的家。', body: '从生活的空间，到每日穿着的衣物，让家居护理成为日常里的一份用心。', cta: '探索产品系列' },
  collection: { title: '日常护理，从三款开始。', intro: '多用途清洁、浴室清洁与贴身衣物洗护。首发三款产品，各有清晰的用途。', viewAll: '查看全部产品' },
  scenes: { title: '走进日常的每一处。', body: '不同的家务，需要不同的选择。从眼前的护理需求，找到适合的产品。', items: [
    { title: '日常家居', body: '多功能清洁剂，用于日常家居清洁。' },
    { title: '浴室空间', body: '浴室清洁剂，为浴室清洁而设。' },
    { title: '贴身衣物', body: '内衣洗衣液，用于贴身衣物的洗涤。' },
  ] },
  philosophy: { eyebrow: 'RANTO 的理念', title: '日常小事，值得用心。', body: '我们相信，照顾家里的每一件小事，都值得认真对待。为这些日常选择的用品，也一样。', points: [
    { title: '按需要选择', body: '家居空间与贴身衣物，各自选择对应的护理产品。' },
    { title: '了解手中的产品', body: '花一点时间，读懂它的用途，也了解如何使用。' },
    { title: '自然融入家', body: '简洁的白色包装，与日常相伴的物品放在一起也自在。' },
  ] },
  story: { title: '从日常的家出发。', intro: 'RANTO 是一个家居护理品牌。我们相信，家里那些平常的小事，也值得认真对待。', paragraphs: [
    '家里的生活，是由许多普通的时刻组成的。清洁一间房，打理一下浴室，洗好几件衣物。看起来细小的家务，一点点让这个地方有了家的样子。',
    'RANTO 从这些熟悉的日常思考护理。清洁浴室与洗涤贴身衣物，有不同的需要。我们希望你能据此选择，也清楚了解带回家的是怎样一款产品。',
    '我们同样在意，每天使用的物品放在家里的样子。白色瓶身与相互呼应的外观，让它们自然融入生活，与家里其他物品相处。',
    '对我们来说，用心照顾家，可以从这里开始：留意眼前的家务，选择合适的用品，认真完成那些让家更像家的日常小事。',
  ], principles: [
    { title: '认真对待日常', body: '再熟悉的家务，也值得多一份用心。' },
    { title: '各有所需', body: '先了解需要照顾的空间或衣物，再选择对应产品。' },
    { title: '与家相处', body: '每天使用的用品，也可以是乐意摆在身边的物品。' },
  ], closing: '照顾好日常，也是照顾好家。' },
  quality: { title: '了解日常所用。', intro: '选择护理用品，也是照顾家的一部分。我们相信，好的选择从了解手中的产品开始。', items: [
    { title: '从用途出发', body: '浴室与贴身衣物，有不同的护理需要。请按照每款产品的指定用途选择。' },
    { title: '读懂手中的产品', body: '阅读包装上的成分、使用方法与注意事项，了解自己正在使用的产品。' },
    { title: '照顾已有的物品', body: '除了产品说明，也请查看所清洁物品本身的护理指引。' },
    { title: '自然融入日常', body: '我们偏爱简洁的白色包装，让护理用品与每天相伴的物品放在一起也自在。' },
  ], readLabelTitle: '使用前，先读包装。', readLabelBody: '请阅读包装上的使用方法与注意事项，确认产品适合预期用途，并按照标示说明使用。' },
  global: { title: '不同语言，共同的日常。', intro: '不同地方有不同的生活细节，认真照顾家的心意却可以相通。', visionTitle: '期待走进更多家庭。', visionBody: '未来，我们希望逐步把 RANTO 带给更多家庭，在了解当地生活习惯的过程中，继续思考日常护理。', marketTitle: '从泰国首发开始。', marketBody: '我们正筹备在泰国推出首批三款 500 ml 产品。欢迎联系 RANTO，了解上市动态与购买信息。', languagesTitle: '用四种语言了解我们。', languagesBody: '本网站提供英文、中文、泰文与日文，方便你选择熟悉的语言了解 RANTO。' },
  contact: { title: '与 RANTO 联系。', intro: '产品问题、上市动态与商务合作，欢迎通过官方邮箱与我们联系。', emailLabel: '官方咨询', emailBody: '请告诉我们你想了解的产品或话题。', cooperationTitle: '商务合作', cooperationBody: '如有零售或分销合作意向，欢迎介绍你的企业与所在市场。', prepareTitle: '这些信息有助于我们了解需求。', prepareItems: ['你关注的产品或咨询主题', '你所在的国家或地区', '商务咨询请附上企业介绍与合作意向'], availability: '首发三款产品即将上市。欢迎联系我们，了解供应及购买信息。' },
  productUI: { title: '首发产品系列。', intro: '三款 500 ml 产品，分别用于日常家居清洁、浴室清洁和贴身衣物洗护。', details: '查看产品', comingSoon: '即将上市', volume: '容量', usage: '产品用途', category: '所属品类', directions: '使用方法', precautions: '使用前须知', origin: '生产地', packView: '产品预览', fullImage: '查看完整包装图', labelNote: '产品图片为计划包装的预览，实际使用请以最终包装信息为准。' },
  products: {
    multipurpose: { name: '多功能清洁剂', category: '日常家居清洁', short: '用于日常家居清洁。', description: '500 ml 喷雾式家居清洁产品，是 RANTO 首发系列的一款。', uses: ['日常家居清洁', '按包装说明用于厨房清洁'], directions: '使用前，请阅读并遵循包装上的使用说明。', precautions: '请阅读包装注意事项，并确认产品适合预期用途。', origin: '泰国制造。' },
    bathroom: { name: '浴室清洁剂', category: '浴室护理', short: '用于浴室空间的清洁。', description: '500 ml 喷雾式浴室清洁剂，为 RANTO 系列中的浴室清洁需求而设。', uses: ['浴室清洁'], directions: '使用前，请阅读并遵循包装上的使用说明。', precautions: '请阅读包装注意事项，并确认产品适合预期用途。' },
    lingerie: { name: '内衣洗衣液', category: '贴身衣物洗护', short: '用于贴身衣物洗涤。', description: '500 ml 内衣洗衣液，为日常洗衣中的贴身衣物护理提供专门的选择。', uses: ['贴身衣物洗涤'], directions: '使用前，请阅读并遵循包装上的使用说明。', precautions: '使用前，请阅读产品注意事项与衣物的洗护标签。', origin: '泰国制造。' },
  },
  footer: { headline: '认真照顾，日常的家。', body: '日常家居护理，用心落在细节里。', contact: '联系我们', legal: '版权所有。' },
  meta: {
    home: { title: 'RANTO | 认真照顾，日常的家', description: '了解 RANTO 家居护理。首发系列包括多功能清洁剂、浴室清洁剂与内衣洗衣液。' },
    products: { title: '产品系列 | RANTO', description: '探索 RANTO 三款 500 ml 家居护理产品。多功能清洁剂、浴室清洁剂与内衣洗衣液即将上市。' },
    quality: { title: '品牌理念 | RANTO', description: '了解 RANTO 的日常护理理念：按用途选择，了解手中的产品，认真照顾日常的家。' },
    story: { title: '关于 RANTO', description: '认识 RANTO，一个相信家里平常的小事也值得认真对待的家居护理品牌。' },
    global: { title: '国际视野 | RANTO', description: '了解 RANTO 的国际视野、未来愿景与正在筹备的泰国首发。' },
    official: { title: '联系我们 | RANTO', description: '联系 RANTO，咨询产品、上市动态、零售或分销合作。' },
  },
}

const th: SiteCopy = {
  nav: { products: 'ผลิตภัณฑ์', quality: 'แนวคิดของเรา', story: 'เกี่ยวกับ RANTO', global: 'มุมมองสากล', official: 'ติดต่อเรา' },
  common: { menu: 'เมนู', close: 'ปิด', language: 'ภาษา', navigation: 'เมนูหลัก', skip: 'ข้ามไปยังเนื้อหา', home: 'หน้าหลัก', explore: 'ดูเพิ่มเติม', contact: 'ติดต่อเรา', back: 'กลับไปหน้าผลิตภัณฑ์' },
  hero: { eyebrow: 'RANTO ผลิตภัณฑ์ดูแลบ้าน', title: 'ใส่ใจ เริ่มได้ที่บ้าน', body: 'ใส่ใจการดูแลบ้านในทุกวัน ตั้งแต่พื้นที่ที่เราใช้ชีวิต ไปจนถึงเสื้อผ้าที่เราสวมใส่', cta: 'ดูผลิตภัณฑ์ของเรา' },
  collection: { title: 'เริ่มต้นด้วย 3 ผลิตภัณฑ์', intro: 'คอลเลกชันแรกสำหรับการทำความสะอาดบ้าน ห้องน้ำ และการซักชุดชั้นใน แต่ละผลิตภัณฑ์มีการใช้งานที่ชัดเจน', viewAll: 'ดูผลิตภัณฑ์ทั้งหมด' },
  scenes: { title: 'เป็นส่วนหนึ่งของทุกวัน', body: 'งานบ้านแต่ละอย่างต้องการการดูแลต่างกัน เลือกผลิตภัณฑ์ให้ตรงกับสิ่งที่คุณต้องการทำ', items: [
    { title: 'ภายในบ้าน', body: 'ผลิตภัณฑ์ทำความสะอาดอเนกประสงค์ สำหรับงานทำความสะอาดบ้านในชีวิตประจำวัน' },
    { title: 'ในห้องน้ำ', body: 'ผลิตภัณฑ์ทำความสะอาดห้องน้ำ สำหรับพื้นที่ส่วนนี้ของบ้านโดยเฉพาะ' },
    { title: 'ชุดชั้นใน', body: 'ผลิตภัณฑ์ซักผ้าสำหรับชุดชั้นใน สำหรับการดูแลเสื้อผ้าที่สวมใส่ใกล้ตัว' },
  ] },
  philosophy: { eyebrow: 'แนวคิดของ RANTO', title: 'เรื่องเล็กทุกวัน ก็ควรใส่ใจ', body: 'เราเชื่อว่าทุกเรื่องเล็ก ๆ ที่ทำเพื่อบ้านควรได้รับความใส่ใจ รวมถึงผลิตภัณฑ์ที่เราเลือกใช้ด้วย', points: [
    { title: 'เลือกให้ตรงกับงาน', body: 'เลือกการดูแลให้เหมาะกับพื้นที่ในบ้านและชุดชั้นใน ซึ่งมีความต้องการต่างกัน' },
    { title: 'รู้จักสิ่งที่ใช้', body: 'ใช้เวลาสักนิดเพื่อทำความเข้าใจผลิตภัณฑ์ในมือและวิธีใช้งาน' },
    { title: 'เป็นส่วนหนึ่งของบ้าน', body: 'บรรจุภัณฑ์สีขาวเรียบง่าย ที่อยู่ร่วมกับของใช้รอบตัวได้อย่างลงตัว' },
  ] },
  story: { title: 'เริ่มจากชีวิตประจำวัน', intro: 'RANTO คือแบรนด์ผลิตภัณฑ์ดูแลบ้าน ที่เชื่อว่าเรื่องธรรมดาเล็ก ๆ ในบ้านก็มีความหมาย', paragraphs: [
    'ชีวิตที่บ้านประกอบด้วยช่วงเวลาธรรมดามากมาย ทั้งการทำความสะอาดห้อง ดูแลห้องน้ำ และซักเสื้อผ้าสักสองสามชิ้น งานเล็ก ๆ เหล่านี้ค่อย ๆ ทำให้สถานที่แห่งหนึ่งมีความเป็นบ้าน',
    'RANTO มองการดูแลบ้านผ่านกิจวัตรที่คุ้นเคย การทำความสะอาดห้องน้ำกับการซักชุดชั้นในมีความต้องการต่างกัน เราอยากให้คุณเลือกโดยคำนึงถึงความต่างนี้ และเข้าใจผลิตภัณฑ์ที่นำกลับบ้าน',
    'เรายังใส่ใจว่าของใช้ประจำวันจะอยู่ในบ้านอย่างไร ขวดสีขาวและรูปแบบที่สอดคล้องกัน ช่วยให้คอลเลกชันอยู่ร่วมกับสิ่งของรอบตัวได้อย่างเป็นธรรมชาติ',
    'สำหรับเรา การดูแลเริ่มจากการใส่ใจกับงานตรงหน้า เลือกของใช้ให้เหมาะ และให้เวลากับกิจวัตรเล็ก ๆ ที่ทำให้บ้านเป็นบ้านของเรา',
  ], principles: [
    { title: 'ใส่ใจในทุกวัน', body: 'แม้แต่งานบ้านที่คุ้นเคยที่สุด ก็ควรได้รับความใส่ใจ' },
    { title: 'แต่ละงานมีสิ่งที่เหมาะ', body: 'คิดถึงสิ่งที่ต้องการดูแลก่อนเลือกผลิตภัณฑ์' },
    { title: 'อยู่ร่วมกับบ้าน', body: 'ของที่ใช้ทุกวัน ก็เป็นสิ่งที่เราอยากมีอยู่รอบตัวได้' },
  ], closing: 'การดูแลบ้านเริ่มจากสิ่งที่เราทำในทุกวัน' },
  quality: { title: 'รู้จักสิ่งที่ใช้ดูแลบ้าน', intro: 'การเลือกผลิตภัณฑ์เป็นส่วนหนึ่งของการดูแลบ้าน เราเชื่อว่าควรเริ่มจากความเข้าใจในสิ่งที่ใช้', items: [
    { title: 'เริ่มจากงานที่ต้องทำ', body: 'ห้องน้ำและชุดชั้นในต้องการการดูแลต่างกัน เลือกตามวัตถุประสงค์การใช้งานของแต่ละผลิตภัณฑ์' },
    { title: 'รู้จักผลิตภัณฑ์ในมือ', body: 'อ่านส่วนประกอบ วิธีใช้ และคำเตือนบนบรรจุภัณฑ์ เพื่อทำความเข้าใจผลิตภัณฑ์ที่คุณมี' },
    { title: 'ดูแลสิ่งของที่มี', body: 'อ่านคำแนะนำการดูแลของสิ่งที่กำลังทำความสะอาด ควบคู่กับวิธีใช้ผลิตภัณฑ์' },
    { title: 'เป็นส่วนหนึ่งของทุกวัน', body: 'เราชอบบรรจุภัณฑ์สีขาวเรียบง่าย ที่เข้ากับสิ่งของที่คุณใช้ในชีวิตประจำวัน' },
  ], readLabelTitle: 'อ่านฉลากก่อนใช้', readLabelBody: 'อ่านวิธีใช้และคำเตือนบนบรรจุภัณฑ์ ตรวจสอบว่าผลิตภัณฑ์เหมาะกับการใช้งานที่ต้องการ และปฏิบัติตามคำแนะนำที่ระบุ' },
  global: { title: 'บ้านที่เราต่างใส่ใจ', intro: 'รายละเอียดของชีวิตประจำวันอาจต่างกันไปในแต่ละแห่ง แต่ความตั้งใจที่จะดูแลบ้านเป็นสิ่งที่เรามีร่วมกัน', visionTitle: 'มองไปสู่วันข้างหน้า', visionBody: 'ในอนาคต เราหวังว่าจะค่อย ๆ นำ RANTO ไปสู่ครัวเรือนมากขึ้น พร้อมเรียนรู้กิจวัตรและวิถีชีวิตของผู้คนในแต่ละพื้นที่', marketTitle: 'เริ่มเปิดตัวในประเทศไทย', marketBody: 'เรากำลังเตรียมเปิดตัวผลิตภัณฑ์ 3 รายการแรก ขนาด 500 มล. ในประเทศไทย ติดต่อ RANTO เพื่อสอบถามข่าวการเปิดตัวและช่องทางซื้อ', languagesTitle: 'รู้จักเราใน 4 ภาษา', languagesBody: 'เว็บไซต์นี้มีเนื้อหาภาษาอังกฤษ จีน ไทย และญี่ปุ่น ให้คุณเลือกอ่านเรื่องราวของ RANTO ในภาษาที่คุ้นเคย' },
  contact: { title: 'พูดคุยกับ RANTO', intro: 'สอบถามเรื่องผลิตภัณฑ์ ข่าวการเปิดตัว หรือความร่วมมือทางธุรกิจ ผ่านอีเมลทางการของเรา', emailLabel: 'ช่องทางติดต่อทางการ', emailBody: 'แจ้งผลิตภัณฑ์หรือหัวข้อที่คุณต้องการสอบถาม', cooperationTitle: 'ความร่วมมือทางธุรกิจ', cooperationBody: 'หากสนใจด้านการค้าปลีกหรือการจัดจำหน่าย กรุณาแนะนำธุรกิจและตลาดที่คุณดำเนินงาน', prepareTitle: 'ข้อมูลที่ช่วยให้เราเข้าใจคุณ', prepareItems: ['ผลิตภัณฑ์หรือหัวข้อที่ต้องการสอบถาม', 'ประเทศหรือภูมิภาคของคุณ', 'สำหรับธุรกิจ กรุณาแนบข้อมูลบริษัทและรูปแบบความร่วมมือที่สนใจ'], availability: 'ผลิตภัณฑ์ 3 รายการแรกกำลังจะเปิดตัว ติดต่อเราเพื่อสอบถามข้อมูลการวางจำหน่ายและช่องทางซื้อ' },
  productUI: { title: 'คอลเลกชันแรกของเรา', intro: 'ผลิตภัณฑ์ขนาด 500 มล. 3 รายการ สำหรับทำความสะอาดบ้าน ห้องน้ำ และซักชุดชั้นใน', details: 'ดูผลิตภัณฑ์', comingSoon: 'เร็ว ๆ นี้', volume: 'ปริมาณ', usage: 'การใช้งาน', category: 'ประเภท', directions: 'วิธีใช้', precautions: 'ก่อนใช้งาน', origin: 'ประเทศที่ผลิต', packView: 'ภาพตัวอย่างผลิตภัณฑ์', fullImage: 'ดูภาพบรรจุภัณฑ์ขนาดเต็ม', labelNote: 'ภาพแสดงบรรจุภัณฑ์ที่วางแผนไว้ โปรดปฏิบัติตามข้อมูลบนบรรจุภัณฑ์จริง' },
  products: {
    multipurpose: { name: 'ผลิตภัณฑ์ทำความสะอาดอเนกประสงค์', category: 'ทำความสะอาดบ้าน', short: 'สำหรับงานทำความสะอาดบ้านในชีวิตประจำวัน', description: 'ผลิตภัณฑ์ทำความสะอาดบ้านในรูปแบบขวดสเปรย์ ขนาด 500 มล. หนึ่งในคอลเลกชันแรกของ RANTO', uses: ['ทำความสะอาดบ้าน', 'ทำความสะอาดบริเวณครัวตามคำแนะนำบนฉลาก'], directions: 'อ่านและปฏิบัติตามวิธีใช้บนบรรจุภัณฑ์ก่อนใช้งาน', precautions: 'อ่านคำเตือนบนบรรจุภัณฑ์ และตรวจสอบความเหมาะสมกับการใช้งานที่ต้องการ', origin: 'ผลิตในประเทศไทย' },
    bathroom: { name: 'ผลิตภัณฑ์ทำความสะอาดห้องน้ำ', category: 'ดูแลห้องน้ำ', short: 'สำหรับการทำความสะอาดห้องน้ำ', description: 'ผลิตภัณฑ์ทำความสะอาดห้องน้ำในรูปแบบขวดสเปรย์ ขนาด 500 มล. สำหรับงานดูแลห้องน้ำในคอลเลกชัน RANTO', uses: ['ทำความสะอาดห้องน้ำ'], directions: 'อ่านและปฏิบัติตามวิธีใช้บนบรรจุภัณฑ์ก่อนใช้งาน', precautions: 'อ่านคำเตือนบนบรรจุภัณฑ์ และตรวจสอบความเหมาะสมกับการใช้งานที่ต้องการ' },
    lingerie: { name: 'ผลิตภัณฑ์ซักผ้าสำหรับชุดชั้นใน', category: 'ดูแลชุดชั้นใน', short: 'สำหรับการซักชุดชั้นใน', description: 'ผลิตภัณฑ์ซักผ้าชนิดน้ำ ขนาด 500 มล. สำหรับชุดชั้นในโดยเฉพาะ อีกหนึ่งทางเลือกในการดูแลเสื้อผ้าประจำวัน', uses: ['ซักชุดชั้นใน'], directions: 'อ่านและปฏิบัติตามวิธีใช้บนบรรจุภัณฑ์ก่อนใช้งาน', precautions: 'อ่านคำเตือนของผลิตภัณฑ์และป้ายคำแนะนำการดูแลเสื้อผ้าก่อนใช้งาน', origin: 'ผลิตในประเทศไทย' },
  },
  footer: { headline: 'ใส่ใจ เริ่มได้ที่บ้าน', body: 'ดูแลบ้านทุกวัน ด้วยความใส่ใจในรายละเอียด', contact: 'ติดต่อเรา', legal: 'สงวนลิขสิทธิ์' },
  meta: {
    home: { title: 'RANTO | ใส่ใจ เริ่มได้ที่บ้าน', description: 'รู้จักผลิตภัณฑ์ดูแลบ้าน RANTO คอลเลกชันแรกสำหรับทำความสะอาดอเนกประสงค์ ห้องน้ำ และซักชุดชั้นใน' },
    products: { title: 'ผลิตภัณฑ์ | RANTO', description: 'พบกับผลิตภัณฑ์ RANTO ขนาด 500 มล. 3 รายการ สำหรับบ้าน ห้องน้ำ และชุดชั้นใน เร็ว ๆ นี้' },
    quality: { title: 'แนวคิดของเรา | RANTO', description: 'รู้จักแนวคิดการดูแลบ้านของ RANTO ตั้งแต่การเลือกตามงาน ไปจนถึงการเข้าใจผลิตภัณฑ์ที่ใช้ในทุกวัน' },
    story: { title: 'เกี่ยวกับ RANTO', description: 'รู้จัก RANTO แบรนด์ดูแลบ้านที่เชื่อว่าเรื่องเล็ก ๆ ในชีวิตประจำวันก็ควรได้รับความใส่ใจ' },
    global: { title: 'มุมมองสากล | RANTO', description: 'แนวคิดของ RANTO และแผนการเปิดตัวคอลเลกชันแรกในประเทศไทย' },
    official: { title: 'ติดต่อเรา | RANTO', description: 'ติดต่อ RANTO เพื่อสอบถามผลิตภัณฑ์ ข่าวการเปิดตัว และความร่วมมือด้านการค้าปลีกหรือการจัดจำหน่าย' },
  },
}

const ja: SiteCopy = {
  nav: { products: '製品', quality: '大切にすること', story: 'RANTO について', global: '世界への視点', official: 'お問い合わせ' },
  common: { menu: 'メニュー', close: '閉じる', language: '言語', navigation: 'メインナビゲーション', skip: '本文へ移動', home: 'ホーム', explore: '詳しく見る', contact: 'お問い合わせ', back: '製品一覧へ戻る' },
  hero: { eyebrow: 'RANTO ホームケア', title: '毎日の暮らしに、心を配る。', body: '過ごす場所から、身につける衣類まで。日々の暮らしを考えたホームケア。', cta: '製品を見る' },
  collection: { title: '3つの製品から、はじまる。', intro: '住まいの掃除、浴室の掃除、下着の洗濯。最初のコレクションは、それぞれの用途に合わせた3製品です。', viewAll: 'すべての製品を見る' },
  scenes: { title: 'いつもの暮らしの中で。', body: '家事の内容に合わせて、使うものを選ぶ。目的に合った製品を見つけてください。', items: [
    { title: '住まいの掃除に', body: '日常の住まいの掃除に、多目的クリーナー。' },
    { title: '浴室の掃除に', body: '浴室を掃除するときは、浴室用クリーナー。' },
    { title: '下着の洗濯に', body: '身につける下着の洗濯に、ランジェリー用洗剤。' },
  ] },
  philosophy: { eyebrow: 'RANTO の考え方', title: '小さな家事にも、心を配る。', body: '住まいのために毎日している、小さなこと。そのために選ぶものにも、心を配りたいと考えています。', points: [
    { title: '用途に合わせて', body: '住まいの掃除と下着の洗濯。それぞれに合ったケアを選ぶ。' },
    { title: '使うものを知る', body: '手にした製品の用途と使い方を、少し立ち止まって確かめる。' },
    { title: '暮らしになじむ', body: 'シンプルな白いパッケージで、いつもの道具と自然に並ぶ。' },
  ] },
  story: { title: '日々の暮らしから。', intro: 'RANTO は、家で過ごす何気ない日々を大切にしたいと考えるホームケアブランドです。', paragraphs: [
    '部屋を掃除する。浴室を整える。数枚の衣類を洗う。暮らしは、そんな普通の時間の積み重ねです。小さな家事の一つひとつが、その場所を自分の家にしていきます。',
    'RANTO は、こうした身近な習慣からケアを考えます。浴室の掃除と下着の洗濯では、必要なことが違う。その違いに合わせて選び、持ち帰った製品のことをきちんと知ってほしいと考えています。',
    '毎日使うものが、家の中でどう見えるかも大切にしたい。白いボトルと揃えたデザインで、いつもの道具のそばに自然に並ぶコレクションを目指しています。',
    '目の前の家事に目を向け、用途に合うものを選ぶ。そして、家を自分らしい場所にする小さな習慣を大切にする。それが、私たちの考える日々のケアです。',
  ], principles: [
    { title: '日常に心を配る', body: '慣れた家事にも、少しの気配りを。' },
    { title: 'それぞれに合う選択', body: '何をケアするのかを考えてから、使う製品を選ぶ。' },
    { title: '暮らしのそばに', body: '毎日使うものだから、身近に置きたくなるものを。' },
  ], closing: '暮らしを大切にすることは、毎日の小さな習慣から。' },
  quality: { title: '毎日使うものを、よく知る。', intro: '製品を選ぶことも、住まいを大切にすることの一つ。まずは使うものを知ることから始めたいと考えています。', items: [
    { title: '用途から選ぶ', body: '浴室と下着では、必要なケアが違います。それぞれの製品に記載された用途に合わせて選びましょう。' },
    { title: '表示を読んで知る', body: '成分、使用方法、注意事項を読んで、手元の製品について確かめてください。' },
    { title: '持ち物を大切に', body: '製品の使用方法とあわせて、掃除や洗濯をする物のケア方法もご確認ください。' },
    { title: 'いつもの道具とともに', body: '私たちは、毎日使う道具のそばになじむ、シンプルな白いパッケージを大切にしています。' },
  ], readLabelTitle: '使う前に、表示を確認。', readLabelBody: 'パッケージの使用方法と注意事項をお読みください。目的の用途に適しているかを確認し、記載の方法に従ってご使用ください。' },
  global: { title: '言葉を越えて、暮らしへ。', intro: '場所が変われば、日々の暮らしも変わります。それでも、住まいを大切にしたい気持ちは共通しています。', visionTitle: 'これから目指すこと。', visionBody: 'その土地の習慣や暮らす人々から学びながら、将来はより多くの家庭へ RANTO を届けたいと考えています。', marketTitle: '最初の発売は、タイで。', marketBody: 'タイでの初回発売に向けて、3つの500 ml製品を準備しています。発売情報や購入方法は、RANTO へお問い合わせください。', languagesTitle: '4つの言語でご案内。', languagesBody: 'このウェブサイトは、英語、中国語、タイ語、日本語に対応しています。読みやすい言語で RANTO についてご覧ください。' },
  contact: { title: 'RANTO にお問い合わせ。', intro: '製品についてのご質問、発売情報、ビジネスのご相談は、公式メールアドレスへお寄せください。', emailLabel: '公式お問い合わせ窓口', emailBody: 'ご関心のある製品や、お問い合わせ内容をお知らせください。', cooperationTitle: 'ビジネスのご相談', cooperationBody: '小売・販売代理店としての協業にご関心がある方は、事業内容と活動されている市場をご紹介ください。', prepareTitle: '次の内容をお知らせください。', prepareItems: ['対象の製品、またはお問い合わせの内容', 'お住まいの国・地域', 'ビジネスのご相談は、会社紹介とご希望の協業内容'], availability: '最初の3製品は発売予定です。取り扱いや購入方法については、お問い合わせください。' },
  productUI: { title: '最初のコレクション。', intro: '日常の住まいの掃除、浴室の掃除、下着の洗濯に。それぞれの用途に合わせた3つの500 ml製品。', details: '製品を見る', comingSoon: '発売予定', volume: '内容量', usage: '用途', category: 'カテゴリー', directions: '使用方法', precautions: '使用前の確認', origin: '製造国', packView: '製品プレビュー', fullImage: 'パッケージ画像を原寸で見る', labelNote: '画像は予定しているパッケージのイメージです。ご使用の際は、最終パッケージの表示に従ってください。' },
  products: {
    multipurpose: { name: '多目的クリーナー', category: '住まいの掃除', short: '毎日の住まいの掃除に。', description: '住まいの掃除に使う500 mlのスプレータイプのクリーナー。RANTO の最初のコレクションの一つです。', uses: ['住まいの掃除', 'パッケージの表示に従ったキッチンまわりの掃除'], directions: '使用前にパッケージの使用方法を読み、記載の方法に従ってください。', precautions: 'パッケージの注意事項を読み、目的の用途に適しているかをご確認ください。', origin: 'タイ製。' },
    bathroom: { name: '浴室用クリーナー', category: '浴室のケア', short: '浴室の掃除に。', description: '浴室の掃除に使う500 mlのスプレータイプのクリーナー。RANTO コレクションの浴室用製品です。', uses: ['浴室の掃除'], directions: '使用前にパッケージの使用方法を読み、記載の方法に従ってください。', precautions: 'パッケージの注意事項を読み、目的の用途に適しているかをご確認ください。' },
    lingerie: { name: 'ランジェリー用洗剤', category: '下着のケア', short: '下着の洗濯に。', description: '下着の洗濯に使う500 mlの液体洗剤。日々の洗濯の中で、下着のケアに合わせて選べる製品です。', uses: ['下着の洗濯'], directions: '使用前にパッケージの使用方法を読み、記載の方法に従ってください。', precautions: '使用前に、製品の注意事項と衣類の洗濯表示をご確認ください。', origin: 'タイ製。' },
  },
  footer: { headline: '毎日の暮らしに、心を配る。', body: '日々のホームケアを、細部まで丁寧に。', contact: 'お問い合わせ', legal: '無断転載・複製を禁じます。' },
  meta: {
    home: { title: 'RANTO | 毎日の暮らしに、心を配る', description: 'RANTO のホームケア。最初のコレクションは、多目的クリーナー、浴室用クリーナー、ランジェリー用洗剤の3製品です。' },
    products: { title: '製品 | RANTO', description: 'RANTO の500 ml製品をご紹介。多目的クリーナー、浴室用クリーナー、ランジェリー用洗剤を発売予定です。' },
    quality: { title: '大切にすること | RANTO', description: '用途に合わせて選び、使うものを知る。RANTO が毎日のホームケアで大切にすることをご紹介します。' },
    story: { title: 'RANTO について', description: '何気ない家事にも心を配りたい。日々の小さな習慣を大切にするホームケアブランド、RANTO をご紹介します。' },
    global: { title: '世界への視点 | RANTO', description: 'RANTO のこれからの方向性と、タイでの初回発売に向けた取り組みをご紹介します。' },
    official: { title: 'お問い合わせ | RANTO', description: '製品に関するご質問、発売情報、小売・販売代理店としてのご相談は、RANTO へお問い合わせください。' },
  },
}

export const copy: Record<Locale, SiteCopy> = { en, zh, th, ja }
