import type { Locale, SiteCopy } from './types'
export type { Locale } from './types'

type CoreCopy = Omit<SiteCopy, 'visual' | 'depth'>

const visualCopy: Record<Locale, SiteCopy['visual']> = {
  "en": {
    "conceptCaption": "Concept scene · Care and home inspiration",
    "productPreviewCaption": "Product packaging preview",
    "detailTitle": "A closer look at the pack.",
    "detailIntro": "The bottle shapes, closures and label layouts in the current design previews.",
    "details": {
      "multipurpose": [
        {
          "title": "Trigger and contoured bottle",
          "body": "A white trigger head sits above a bottle with a shaped grip. The silhouette is shared with the bathroom cleaner."
        },
        {
          "title": "A kitchen reference on the label",
          "body": "The front brings together the product name, a kitchen image and the 500 ml size. The reverse carries the product information."
        }
      ],
      "bathroom": [
        {
          "title": "A familiar bottle shape",
          "body": "The design uses the same white trigger format as the multipurpose cleaner, with a separate product label."
        },
        {
          "title": "The bathroom on the front",
          "body": "The Bathroom Cleaner name and bathroom image distinguish this product within the pair of sprays."
        }
      ],
      "lingerie": [
        {
          "title": "Rounded shoulders, flip-top cap",
          "body": "A broad cap and rounded bottle distinguish the lingerie detergent from the two spray products."
        },
        {
          "title": "Blue lettering on white",
          "body": "The Thai product name, vertical Japanese text and 500 ml volume sit on a white bottle, with blue as the main lettering colour."
        }
      ]
    },
    "designTitle": "How the pack takes shape.",
    "designIntro": "Packaging design references for the Multi-Purpose Cleaner: a bottle, trigger and front-label layout. These show the proposed pack, not a completed production run.",
    "designSteps": [
      {
        "title": "Contoured bottle",
        "body": "An unlabelled bottle with a screw cap shows the shaped waist and grooves in the bottle body."
      },
      {
        "title": "Trigger sprayer",
        "body": "A separate white trigger head with its dip tube shows the sprayer component in the packaging reference."
      },
      {
        "title": "Front-label layout",
        "body": "Flat front-label artwork shows the arrangement of the name, imagery and product information."
      }
    ],
    "sceneLabels": {
      "multipurpose": "Kitchen setting",
      "bathroom": "Bathroom setting",
      "lingerie": "Laundry setting"
    },
    "spaceTitle": "Order, through small details.",
    "spaceBody": "Clear counters, folded fabrics and tools set in place are visual references for the RANTO idea of care. This concept scene expresses that inspiration."
  },
  "zh": {
    "conceptCaption": "概念场景图 · 表达护理与居家灵感",
    "productPreviewCaption": "产品包装预览",
    "detailTitle": "把包装看近一点。",
    "detailIntro": "看看当前设计预览中的瓶型、开盖方式与标签版面。",
    "details": {
      "multipurpose": [
        {
          "title": "喷头与收腰瓶身",
          "body": "白色扳机喷头搭配带握持凹槽的瓶身，与浴室清洁剂采用相同的瓶型轮廓。"
        },
        {
          "title": "标签上的厨房场景",
          "body": "正面结合产品名称、厨房图片与 500 ml 容量，背面安排产品相关信息。"
        }
      ],
      "bathroom": [
        {
          "title": "相同瓶型，不同用途",
          "body": "与多功能清洁剂共用白色扳机喷雾的外观形式，以独立标签区分产品。"
        },
        {
          "title": "一眼辨认浴室用途",
          "body": "Bathroom Cleaner 品名与浴室图片，共同区分这款清洁剂在两款喷雾中的用途。"
        }
      ],
      "lingerie": [
        {
          "title": "圆肩瓶身与翻盖",
          "body": "宽盖与圆润瓶肩，让内衣洗衣液在外观上区别于两款喷雾产品。"
        },
        {
          "title": "白底上的蓝色排版",
          "body": "泰文品名、竖排日文与 500 ml 容量置于白色瓶身上，主要文字采用蓝色。"
        }
      ]
    },
    "designTitle": "包装，如何成形。",
    "designIntro": "以下是多功能清洁剂的瓶型、喷头与正面标签设计参考，呈现包装方案，不代表已完成量产。",
    "designSteps": [
      {
        "title": "收腰瓶型方案",
        "body": "未贴标的空瓶配有螺帽，展示收腰轮廓与瓶身凹槽。"
      },
      {
        "title": "扳机喷头",
        "body": "独立的白色扳机喷头带有吸管，用于查看包装方案中的喷头部件。"
      },
      {
        "title": "正面标签版面",
        "body": "正面标签展开图，呈现品名、场景图片与产品信息的排布。"
      }
    ],
    "sceneLabels": {
      "multipurpose": "厨房场景",
      "bathroom": "浴室场景",
      "lingerie": "洗衣场景"
    },
    "spaceTitle": "秩序，藏在小细节里。",
    "spaceBody": "清楚的台面、叠好的织物、放置有序的工具，是 RANTO 护理理念的视觉参照。这张概念场景表达的是这份灵感。"
  },
  "th": {
    "conceptCaption": "ภาพแนวคิด · สื่อแรงบันดาลใจในการดูแลและชีวิตที่บ้าน",
    "productPreviewCaption": "ภาพตัวอย่างบรรจุภัณฑ์",
    "detailTitle": "ดูบรรจุภัณฑ์ให้ใกล้ขึ้น",
    "detailIntro": "รูปทรงขวด ฝาปิด และการจัดวางฉลากในภาพตัวอย่างการออกแบบปัจจุบัน",
    "details": {
      "multipurpose": [
        {
          "title": "หัวสเปรย์และทรงขวด",
          "body": "หัวสเปรย์แบบไกสีขาวอยู่เหนือขวดที่มีส่วนเว้าสำหรับจับ โดยใช้รูปทรงเดียวกับผลิตภัณฑ์ห้องน้ำ"
        },
        {
          "title": "ภาพครัวบนฉลาก",
          "body": "ด้านหน้ารวมชื่อผลิตภัณฑ์ ภาพครัว และปริมาณ 500 มล. ส่วนด้านหลังเป็นข้อมูลเกี่ยวกับผลิตภัณฑ์"
        }
      ],
      "bathroom": [
        {
          "title": "รูปทรงขวดที่เข้าชุดกัน",
          "body": "ใช้ขวดสเปรย์แบบไกสีขาวเช่นเดียวกับผลิตภัณฑ์อเนกประสงค์ และแยกผลิตภัณฑ์ด้วยฉลากของตัวเอง"
        },
        {
          "title": "บอกการใช้ในห้องน้ำ",
          "body": "ชื่อ Bathroom Cleaner และภาพห้องน้ำช่วยแยกผลิตภัณฑ์นี้ออกจากสเปรย์อีกขวดในคอลเลกชัน"
        }
      ],
      "lingerie": [
        {
          "title": "ไหล่ขวดโค้งและฝาเปิด",
          "body": "ฝาทรงกว้างและไหล่ขวดโค้งทำให้ผลิตภัณฑ์ซักชุดชั้นในมีรูปทรงต่างจากผลิตภัณฑ์สเปรย์ทั้งสองขวด"
        },
        {
          "title": "ตัวอักษรสีน้ำเงินบนพื้นขาว",
          "body": "ชื่อภาษาไทย ข้อความภาษาญี่ปุ่นแนวตั้ง และปริมาณ 500 มล. อยู่บนขวดสีขาว โดยใช้สีน้ำเงินเป็นสีหลักของข้อความ"
        }
      ]
    },
    "designTitle": "กว่าจะเป็นภาพบรรจุภัณฑ์",
    "designIntro": "เอกสารอ้างอิงการออกแบบบรรจุภัณฑ์ของผลิตภัณฑ์ทำความสะอาดอเนกประสงค์ แสดงขวด หัวสเปรย์ และฉลากด้านหน้า เป็นแนวทางการออกแบบ ไม่ใช่บันทึกการผลิตเสร็จแล้ว",
    "designSteps": [
      {
        "title": "ขวดทรงเว้า",
        "body": "ขวดเปล่าที่ยังไม่มีฉลากพร้อมฝาเกลียว แสดงส่วนเอวและร่องบนตัวขวด"
      },
      {
        "title": "หัวสเปรย์แบบไก",
        "body": "หัวสเปรย์สีขาวแยกชิ้นพร้อมสายดูด แสดงส่วนประกอบหัวฉีดในเอกสารอ้างอิงบรรจุภัณฑ์"
      },
      {
        "title": "แบบฉลากด้านหน้า",
        "body": "งานฉลากด้านหน้าแบบคลี่ แสดงการจัดวางชื่อ ภาพ และข้อมูลผลิตภัณฑ์"
      }
    ],
    "sceneLabels": {
      "multipurpose": "บรรยากาศในครัว",
      "bathroom": "บรรยากาศในห้องน้ำ",
      "lingerie": "บรรยากาศการดูแลผ้า"
    },
    "spaceTitle": "ความเป็นระเบียบในรายละเอียด",
    "spaceBody": "เคาน์เตอร์ที่จัดไว้เรียบร้อย ผ้าที่พับไว้ และเครื่องมือที่วางเป็นที่ คือภาพอ้างอิงแนวคิดการดูแลของ RANTO ภาพแนวคิดนี้สื่อถึงแรงบันดาลใจดังกล่าว"
  },
  "ja": {
    "conceptCaption": "コンセプトシーン · ケアと住まいの着想を表現",
    "productPreviewCaption": "パッケージのデザインイメージ",
    "detailTitle": "パッケージを、近くで見る。",
    "detailIntro": "現在のデザインイメージから、ボトルの形、開け方、表示の配置をご紹介します。",
    "details": {
      "multipurpose": [
        {
          "title": "トリガーとくびれのある形",
          "body": "白いトリガーヘッドと、握る部分にくぼみのあるボトル。浴室用クリーナーと共通の輪郭です。"
        },
        {
          "title": "ラベルにキッチンのイメージを",
          "body": "正面に製品名、キッチンの画像、500 mlの内容量を組み合わせ、裏面に製品情報を配置しています。"
        }
      ],
      "bathroom": [
        {
          "title": "揃えたボトルの形",
          "body": "多目的クリーナーと共通の白いトリガーボトルを使い、製品ごとのラベルで区別しています。"
        },
        {
          "title": "浴室用とわかる正面",
          "body": "Bathroom Cleaner の名前と浴室の画像で、2つのスプレーのうちどちらを選ぶかがわかる構成です。"
        }
      ],
      "lingerie": [
        {
          "title": "丸い肩とフリップトップ",
          "body": "幅のあるキャップと丸い肩で、ランジェリー用洗剤を2つのスプレー製品と形で分けています。"
        },
        {
          "title": "白地に青い文字",
          "body": "タイ語の製品名、縦組みの日本語、500 mlの内容量を白いボトルに配置し、文字は青を中心にしています。"
        }
      ]
    },
    "designTitle": "パッケージのかたち。",
    "designIntro": "多目的クリーナーのボトル、トリガー、正面ラベルのデザイン参考です。包装の提案を示すもので、量産完了の記録ではありません。",
    "designSteps": [
      {
        "title": "くびれのあるボトル案",
        "body": "ラベルのない空ボトルにスクリューキャップを付け、くびれと本体の溝を示しています。"
      },
      {
        "title": "トリガースプレー",
        "body": "吸い上げチューブの付いた白いトリガーヘッドを単体で示した、部品の参考です。"
      },
      {
        "title": "正面ラベルの配置",
        "body": "正面ラベルの展開図で、製品名、画像、製品情報の配置をご覧いただけます。"
      }
    ],
    "sceneLabels": {
      "multipurpose": "キッチンのシーン",
      "bathroom": "浴室のシーン",
      "lingerie": "洗濯のシーン"
    },
    "spaceTitle": "細部から生まれる秩序。",
    "spaceBody": "整えたカウンター、畳んだ布、定位置にある道具。RANTO のケアの考え方を表す視覚的な着想を、このコンセプトシーンに込めています。"
  }
}

export const localeNames: Record<Locale, string> = {
  "en": "English",
  "zh": "中文",
  "th": "ไทย",
  "ja": "日本語"
}

const en: CoreCopy = {
  "nav": {
    "products": "Products",
    "quality": "Our approach",
    "story": "About RANTO",
    "global": "International",
    "official": "Contact"
  },
  "common": {
    "menu": "Menu",
    "close": "Close",
    "language": "Language",
    "navigation": "Main navigation",
    "skip": "Skip to content",
    "home": "Home",
    "explore": "Explore",
    "contact": "Contact updates",
    "back": "Back to products"
  },
  "hero": {
    "eyebrow": "RANTO · FOR HOMES IN THAILAND",
    "title": "Clean spaces. Considered care.",
    "body": "Cleaning and fabric care for Thai homes, inspired by the attention to detail in Japanese salons and spas.",
    "cta": "Find your everyday care"
  },
  "collection": {
    "title": "Three tasks. Three clear choices.",
    "intro": "Household cleaning, the bathroom and lingerie laundry. Our first collection gives each its own place, in three 500 ml bottles.",
    "viewAll": "Explore the three products"
  },
  "scenes": {
    "title": "Care, where it belongs.",
    "body": "A place for preparing food, a space for washing, and clothes worn close. Begin with what you want to care for.",
    "items": [
      {
        "title": "Around the kitchen",
        "body": "Multi-Purpose Cleaner for household and kitchen cleaning, following the pack directions."
      },
      {
        "title": "In the bathroom",
        "body": "Bathroom Cleaner for the room that has its own cleaning routine."
      },
      {
        "title": "For lingerie",
        "body": "Lingerie Laundry Detergent for this distinct part of the laundry."
      }
    ]
  },
  "philosophy": {
    "eyebrow": "THE PACKAGING APPROACH",
    "title": "A collection you can tell apart.",
    "body": "Two trigger bottles for cleaning. One rounded bottle for lingerie laundry. A shared white palette brings the three together.",
    "points": [
      {
        "title": "Different forms",
        "body": "The cleaners and the laundry product have distinct bottle and closure formats."
      },
      {
        "title": "Names that guide the choice",
        "body": "Each label identifies the product, with its own use information and 500 ml volume."
      },
      {
        "title": "A shared presence",
        "body": "White packaging and the blue-green RANTO mark connect the collection without making the three labels identical."
      }
    ]
  },
  "story": {
    "title": "The shape of everyday care.",
    "intro": "Japanese salon and spa spaces inspire our sense of order. The collection takes that visual starting point into cleaning and fabric care for Thai homes.",
    "paragraphs": [
      "A clear counter, folded fabrics and tools set in place make a care space feel ordered. RANTO takes these details from Japanese salon and spa spaces as inspiration for the way everyday products can sit together at home.",
      "We begin with three household routines: kitchen and household cleaning, the bathroom, and a small lingerie wash. The two cleaners share a trigger-bottle shape, while the lingerie detergent uses rounded shoulders and a flip-top cap.",
      "Keeping the bottles white gives the collection a common starting point. The product names, pictures and lettering then do the work of distinguishing what is inside each 500 ml pack.",
      "These choices shape the collection we are preparing for Thailand. The packaging images and design references let you look closely at the bottles, while product documents add specific information where it is available."
    ],
    "principles": [
      {
        "title": "Shape",
        "body": "A recognisable difference between spray cleaning and lingerie laundry."
      },
      {
        "title": "Label",
        "body": "Product identity and volume are the starting points for comparison."
      },
      {
        "title": "Setting",
        "body": "A coordinated collection that can sit among the objects of everyday life."
      }
    ],
    "closing": "Order in the space. Attention in the details."
  },
  "quality": {
    "title": "Details you can check.",
    "intro": "Explore the packaging and product-specific documents behind the first collection.",
    "items": [
      {
        "title": "Product identity",
        "body": "Compare the product name, intended use and 500 ml pack shown on its page."
      },
      {
        "title": "A closer view",
        "body": "Inspect the bottle, closure and label through the full-size packaging image."
      },
      {
        "title": "Product-specific records",
        "body": "Read the available notification information for the multipurpose cleaner and lingerie detergent."
      },
      {
        "title": "The instructions on your pack",
        "body": "For directions and precautions, follow the final pack supplied with your product."
      }
    ],
    "readLabelTitle": "Before you use the product.",
    "readLabelBody": "Read the directions and precautions on the final pack, and check the care guidance for the surface or garment.",
    "evidenceTitle": "Product documents",
    "evidenceIntro": "Selected information from product notifications and packaging design references.",
    "evidenceScope": "Notifications record submitted product information; they are not efficacy tests or performance certifications. Listed key ingredients are not the complete formula. Design references show the proposed pack.",
    "evidenceOpen": "View document excerpt",
    "evidenceTypes": {
      "notification": "Product notification",
      "design": "Packaging design reference"
    }
  },
  "global": {
    "title": "Japanese inspiration. A Thai launch.",
    "intro": "Our starting point is a collection for households in Thailand, shaped around three familiar settings.",
    "visionTitle": "Where we hope to go",
    "visionBody": "We hope to reach more homes over time. For now, our focus is preparing the first three products for Thailand.",
    "marketTitle": "Three products in preparation",
    "marketBody": "All three are 500 ml and coming soon. Launch and purchase information will be published on this website.",
    "languagesTitle": "One collection, four languages",
    "languagesBody": "Read the same product collection in English, Chinese, Thai or Japanese."
  },
  "contact": {
    "title": "Official channels, coming soon.",
    "intro": "We are preparing the contact channels for our first launch in Thailand. Their details will be published on this page.",
    "channelsTitle": "Our four contact channels",
    "pending": "Coming soon",
    "pendingBody": "Official details for each channel will appear here when available.",
    "emailName": "Email",
    "consumerTitle": "For your home",
    "consumerBody": "Product pages cover the intended use, volume and current packaging. Check this page for future consumer contact details.",
    "emailLabel": "Email",
    "emailBody": "The official email address will be announced here.",
    "cooperationTitle": "Retail and distribution",
    "cooperationBody": "The contact details for business enquiries will be published here when available.",
    "prepareTitle": "Information to look for",
    "prepareItems": [
      "The three products and their intended uses",
      "Launch dates and purchase information",
      "Official consumer and business contact details"
    ],
    "availability": "Three 500 ml products are coming soon in Thailand. Launch and purchase information will be added to this website."
  },
  "productUI": {
    "title": "The first collection.",
    "intro": "Three 500 ml products for everyday household cleaning, the bathroom and lingerie laundry.",
    "details": "View product",
    "comingSoon": "Coming soon",
    "volume": "Volume",
    "usage": "Intended use",
    "category": "Category",
    "directions": "Directions",
    "precautions": "Before use",
    "origin": "Made in",
    "packView": "Product preview",
    "fullImage": "View full-size packaging",
    "labelNote": "Product images show the planned packaging. Follow the information on the final pack.",
    "ingredients": "Key ingredients listed in the notification",
    "suitability": "Use information",
    "technicalTitle": "Product information",
    "gallery": {
      "pack": "Packaging",
      "scene": "Setting",
      "detail": "Details"
    }
  },
  "products": {
    "multipurpose": {
      "name": "Multi-Purpose Cleaner",
      "category": "Household cleaning",
      "short": "For everyday household cleaning.",
      "description": "A 500 ml spray cleaner for everyday household cleaning.",
      "uses": [
        "Household cleaning",
        "Kitchen cleaning, as directed on the pack"
      ],
      "directions": "Follow the directions on the pack before use.",
      "precautions": "Read the precautions on the pack and check suitability for your intended use.",
      "origin": "Made in Thailand. Manufacturer: บริษัท จิ่วซือ กรุ๊ป จำกัด.",
      "ingredients": "Alkyl polyglycoside 2.0% w/w; Polyoxyethylene lauryl ether 2.0% w/w; Sodium alpha olefin sulfonate 1.0% w/w; Sodium dodecanoyloxybenzene sulfonate 1.5% w/w.",
      "suitability": "For household cleaning. Check the final pack for use on specific surfaces and materials."
    },
    "bathroom": {
      "name": "Bathroom Cleaner",
      "category": "Bathroom care",
      "short": "For cleaning the bathroom.",
      "description": "A 500 ml spray cleaner for the bathroom.",
      "uses": [
        "Bathroom cleaning"
      ],
      "directions": "Follow the directions on the pack before use.",
      "precautions": "Read the precautions on the pack and check suitability for your intended use."
    },
    "lingerie": {
      "name": "Lingerie Laundry Detergent",
      "category": "Lingerie care",
      "short": "For washing lingerie.",
      "description": "A 500 ml liquid laundry detergent intended for lingerie. A dedicated choice for this part of your laundry routine.",
      "uses": [
        "Lingerie laundry"
      ],
      "directions": "Follow the directions on the pack before use.",
      "precautions": "Read the product precautions and the care instructions on your garments before use.",
      "origin": "Made in Thailand. Manufacturer: บริษัท จิ่วซือ กรุ๊ป จำกัด.",
      "ingredients": "Alkyl polyglycoside 1.0% w/w; Coconut diethanolamide 1.0% w/w; Polyoxyethylene lauryl ether 1.0% w/w; Sodium dodecanoyloxybenzene sulfonate 4.0% w/w; Sodium lauryl ether sulfate 5.0% w/w; Cocamidopropyl betaine 2.0% w/w.",
      "suitability": "For laundering lingerie. Check the garment care label together with the product directions."
    }
  },
  "footer": {
    "headline": "Clean spaces. Considered care.",
    "body": "Cleaning and fabric care for homes in Thailand.",
    "contact": "Contact updates",
    "legal": "All rights reserved."
  },
  "meta": {
    "home": {
      "title": "RANTO | Clean spaces. Considered care.",
      "description": "Cleaning and fabric care for Thai homes, inspired by the attention to detail in Japanese salons and spas. Three 500 ml products coming soon."
    },
    "products": {
      "title": "Products | RANTO",
      "description": "Explore three 500 ml RANTO home-care products. Multi-Purpose Cleaner, Bathroom Cleaner and Lingerie Laundry Detergent are coming soon."
    },
    "quality": {
      "title": "Our approach | RANTO",
      "description": "Explore the packaging and product-specific documents behind the first collection."
    },
    "story": {
      "title": "About RANTO",
      "description": "Japanese salon and spa spaces inspire our sense of order. The collection takes that visual starting point into cleaning and fabric care for Thai homes."
    },
    "global": {
      "title": "International | RANTO",
      "description": "Our starting point is a collection for households in Thailand, shaped around three familiar settings."
    },
    "official": {
      "title": "Contact | RANTO",
      "description": "Official RANTO contact details are being prepared. Check this page for the four channels and launch information when announced."
    }
  },
  "inspiration": {
    "eyebrow": "OUR INSPIRATION",
    "title": "The care behind a well-kept space.",
    "body": "Japanese salons and spas inspire us through their orderly spaces and attention to small details. We want to bring that way of thinking into homes in Thailand.",
    "items": [
      {
        "title": "Clean surroundings",
        "body": "A cared-for room sets the tone for a visit. At home, we start with the kitchen and bathroom tasks that deserve their own attention."
      },
      {
        "title": "A sense of order",
        "body": "Tools have a place and the next step is clear. We translate that into distinct product choices and packaging you can recognise together."
      },
      {
        "title": "Attention to the individual",
        "body": "Care begins by noticing different needs. For a home, that means choosing differently for a room and for the lingerie you wash."
      }
    ]
  },
  "routines": {
    "title": "Find the task before the bottle.",
    "intro": "These are three different uses. Choose the one that matches your task, then follow its pack directions.",
    "items": [
      {
        "title": "Kitchen and household cleaning",
        "body": "Reach for the multipurpose category for household cleaning. Check the pack for the kitchen uses and materials it covers."
      },
      {
        "title": "Bathroom cleaning",
        "body": "Choose the bathroom product for this room. Check its directions and suitability for the surface before you begin."
      },
      {
        "title": "Lingerie laundry",
        "body": "Choose the lingerie detergent for washing lingerie. Read both the product instructions and the garment care label."
      }
    ]
  },
  "selection": {
    "title": "Why these three?",
    "intro": "We begin with three familiar household tasks. Each bottle has a different intended use, so you can choose by what needs care.",
    "items": [
      {
        "title": "The kitchen",
        "body": "The kitchen counter is used before a meal and again when the dishes are done. This repeated place in daily life makes it a natural focus for RANTO."
      },
      {
        "title": "The bathroom",
        "body": "After a morning wash or an evening shower, there are towels to hang and bottles to put back. We see this daily return to order as a place for care."
      },
      {
        "title": "Personal laundry",
        "body": "A few pieces of lingerie make up a small, personal part of the laundry. We want this familiar routine to have its own place in the collection."
      }
    ]
  },
  "faq": {
    "title": "A few things to know.",
    "intro": "Start here for the collection, its inspiration and our first launch.",
    "items": [
      {
        "title": "Who is RANTO for?",
        "body": "Our first collection is for households in Thailand, with products for household cleaning, the bathroom and lingerie laundry."
      },
      {
        "title": "What does considered care mean at home?",
        "body": "Start with the task, give each product its place, and keep its instructions easy to find. RANTO draws on the order and attention to detail of Japanese care spaces, bringing that idea into everyday household cleaning and fabric care."
      },
      {
        "title": "How do I choose a product?",
        "body": "Choose by the task: Multi-Purpose Cleaner for its stated household uses, Bathroom Cleaner for the bathroom, or Lingerie Laundry Detergent for lingerie. Read the pack for specific directions and suitability."
      },
      {
        "title": "When can I buy the collection?",
        "body": "The first three 500 ml products are coming soon in Thailand. Launch dates and purchase information will be published on this website."
      },
      {
        "title": "Where will product and contact information appear?",
        "body": "Product pages show packaging and available product information. Follow the final pack when using the product. Details for our four official contact channels are coming soon on the contact page."
      }
    ]
  },
  "localLife": {
    "title": "Three settings, different choices.",
    "intro": "We keep the kitchen, bathroom and lingerie wash distinct because they play different parts in household life.",
    "items": [
      {
        "title": "A working kitchen",
        "body": "The counter is used before and after meals. The multipurpose design pairs a trigger bottle with a kitchen reference on the label."
      },
      {
        "title": "A bathroom put back in order",
        "body": "After washing, towels are hung and bottles return to their places. The bathroom cleaner shares the spray format, with a label of its own."
      },
      {
        "title": "A personal part of the laundry",
        "body": "A few pieces of lingerie call for their own place in the routine. Rounded shoulders and a flip-top cap distinguish the laundry bottle."
      }
    ]
  }
}

const zh: CoreCopy = {
  "nav": {
    "products": "产品系列",
    "quality": "品牌理念",
    "story": "关于 RANTO",
    "global": "国际视野",
    "official": "联系"
  },
  "common": {
    "menu": "菜单",
    "close": "关闭",
    "language": "语言",
    "navigation": "主导航",
    "skip": "跳至正文",
    "home": "首页",
    "explore": "了解更多",
    "contact": "联系渠道动态",
    "back": "返回产品系列"
  },
  "hero": {
    "eyebrow": "RANTO · 为泰国家庭而来",
    "title": "整洁有序，照顾入微。",
    "body": "以日本沙龙与 SPA 的细致照顾为灵感，为泰国家庭带来日常清洁与织物护理。",
    "cta": "选择日常所需"
  },
  "collection": {
    "title": "三件日常，各有选择。",
    "intro": "日常家居、浴室与贴身衣物。首发三款 500 ml 产品，让每一种需要都有清楚的选择。",
    "viewAll": "了解三款产品"
  },
  "scenes": {
    "title": "把照顾放在需要的地方。",
    "body": "准备餐食的厨房、每日使用的浴室、贴身穿着的衣物。从眼前的需要，选择护理产品。",
    "items": [
      {
        "title": "厨房与家居",
        "body": "多功能清洁剂，按包装说明用于日常家居与厨房清洁。"
      },
      {
        "title": "浴室空间",
        "body": "浴室清洁剂，对应这个空间自己的清洁日常。"
      },
      {
        "title": "贴身衣物",
        "body": "内衣洗衣液，为洗衣中的贴身衣物单独作出选择。"
      }
    ]
  },
  "philosophy": {
    "eyebrow": "包装的取舍",
    "title": "放在一起，也分得清楚。",
    "body": "两款清洁剂采用扳机喷雾瓶，内衣洗衣液采用圆肩瓶。共同的白色基调，将三款产品联系起来。",
    "points": [
      {
        "title": "瓶型有所区别",
        "body": "清洁剂与洗衣液采用不同的瓶身与开盖形式。"
      },
      {
        "title": "通过标签选择",
        "body": "每款标签标明产品身份，呈现各自用途信息与 500 ml 容量。"
      },
      {
        "title": "共同的系列感",
        "body": "白色包装与蓝绿 RANTO 标识连接整个系列，同时保留三款标签各自的特点。"
      }
    ]
  },
  "story": {
    "title": "日常护理，也有自己的样子。",
    "intro": "日本沙龙与 SPA 的有序空间，给了我们视觉灵感。这套系列将这一起点，带入泰国家庭的清洁与织物护理。",
    "paragraphs": [
      "清楚的台面、叠好的织物、摆放有序的工具，让护理空间显得井然。RANTO 从日本沙龙与 SPA 的这些细节中获得灵感，思考日常用品如何自然地放在家里。",
      "我们从三种家务开始：厨房与日常家居清洁、浴室清洁，以及小份的内衣洗涤。两款清洁剂共用扳机喷雾瓶的轮廓，内衣洗衣液则采用圆肩与翻盖。",
      "保持白色瓶身，为系列建立共同的基调。产品名称、图片与文字排版，再帮助你辨认每一瓶 500 ml 包装中的产品。",
      "这些取舍组成了我们正在为泰国筹备的首发系列。包装图片与设计资料让你看近一点，相关产品文件则在有依据的地方补充具体信息。"
    ],
    "principles": [
      {
        "title": "看瓶型",
        "body": "喷雾清洁与贴身衣物洗护，在外观上有所区别。"
      },
      {
        "title": "读标签",
        "body": "从产品身份与容量开始比较，再了解各自信息。"
      },
      {
        "title": "放进日常",
        "body": "相互呼应的外观，与家里已有的物品一起相处。"
      }
    ],
    "closing": "空间有秩序，细节有照顾。"
  },
  "quality": {
    "title": "细节，有处可查。",
    "intro": "了解首发系列的包装设计，以及各款产品对应的资料。",
    "items": [
      {
        "title": "产品身份",
        "body": "对照产品名称、指定用途与页面所示的 500 ml 包装。"
      },
      {
        "title": "近看包装",
        "body": "通过完整包装图查看瓶身、开盖方式与标签细节。"
      },
      {
        "title": "每款对应的记录",
        "body": "查看多功能清洁剂与内衣洗衣液已有的产品申报信息。"
      },
      {
        "title": "手中的使用说明",
        "body": "使用方法与注意事项，请遵循随实际产品提供的最终包装说明。"
      }
    ],
    "readLabelTitle": "使用之前，读包装。",
    "readLabelBody": "请阅读最终包装上的使用方法与注意事项，也查看所清洁表面或衣物的护理指引。",
    "evidenceTitle": "产品资料",
    "evidenceIntro": "来自产品事实申报与包装设计参考资料的相关摘录。",
    "evidenceScope": "申报资料记录所提交的产品信息，不是功效检测或性能认证。所列主要成分不是完整配方；设计参考呈现的是包装方案。",
    "evidenceOpen": "查看资料摘录",
    "evidenceTypes": {
      "notification": "产品事实申报资料",
      "design": "包装设计参考"
    }
  },
  "global": {
    "title": "日本灵感，泰国首发。",
    "intro": "我们从泰国家庭的三种熟悉场景出发，筹备第一套产品系列。",
    "visionTitle": "未来的方向",
    "visionBody": "我们希望未来走进更多家庭。当前的重点，是准备在泰国推出首批三款产品。",
    "marketTitle": "三款新品筹备中",
    "marketBody": "三款容量均为 500 ml，即将上市。发布与购买信息将在本网站公布。",
    "languagesTitle": "同一套系列，四种语言",
    "languagesBody": "你可以用英文、中文、泰文或日文，了解同一套产品系列。"
  },
  "contact": {
    "title": "官方联系渠道，即将公布。",
    "intro": "我们正在筹备泰国首发的联系渠道，具体信息将在本页公布。",
    "channelsTitle": "四个官方联系渠道",
    "pending": "即将公布",
    "pendingBody": "各渠道的官方信息将在准备就绪后显示于此。",
    "emailName": "邮箱",
    "consumerTitle": "为你的日常家庭",
    "consumerBody": "产品页面提供用途、容量与当前包装信息。后续消费者联系渠道，请关注本页公布。",
    "emailLabel": "邮箱",
    "emailBody": "官方邮箱地址将在此公布。",
    "cooperationTitle": "零售与分销合作",
    "cooperationBody": "商务咨询的联系方式将在准备就绪后于本页公布。",
    "prepareTitle": "后续可以关注的信息",
    "prepareItems": [
      "三款产品与各自用途",
      "上市日期与购买信息",
      "消费者与商务合作的官方联系方式"
    ],
    "availability": "三款 500 ml 产品即将在泰国上市，发布与购买信息将更新于本网站。"
  },
  "productUI": {
    "title": "首发产品系列。",
    "intro": "三款 500 ml 产品，分别用于日常家居清洁、浴室清洁和贴身衣物洗护。",
    "details": "查看产品",
    "comingSoon": "即将上市",
    "volume": "容量",
    "usage": "产品用途",
    "category": "所属品类",
    "directions": "使用方法",
    "precautions": "使用前须知",
    "origin": "生产地",
    "packView": "产品预览",
    "fullImage": "查看完整包装图",
    "labelNote": "产品图片为计划包装的预览，实际使用请以最终包装信息为准。",
    "ingredients": "申报所列主要成分",
    "suitability": "用途说明",
    "technicalTitle": "产品信息",
    "gallery": {
      "pack": "包装",
      "scene": "场景",
      "detail": "细节"
    }
  },
  "products": {
    "multipurpose": {
      "name": "多功能清洁剂",
      "category": "日常家居清洁",
      "short": "用于日常家居清洁。",
      "description": "500 ml 喷雾式家居清洁产品，是 RANTO 首发系列的一款。",
      "uses": [
        "日常家居清洁",
        "按包装说明用于厨房清洁"
      ],
      "directions": "使用前，请阅读并遵循包装上的使用说明。",
      "precautions": "请阅读包装注意事项，并确认产品适合预期用途。",
      "origin": "泰国制造。制造方：บริษัท จิ่วซือ กรุ๊ป จำกัด。",
      "ingredients": "Alkyl polyglycoside 2.0% w/w; Polyoxyethylene lauryl ether 2.0% w/w; Sodium alpha olefin sulfonate 1.0% w/w; Sodium dodecanoyloxybenzene sulfonate 1.5% w/w.",
      "suitability": "用于家居清洁。具体表面与材质的适用性，请查看最终包装说明。"
    },
    "bathroom": {
      "name": "浴室清洁剂",
      "category": "浴室护理",
      "short": "用于浴室空间的清洁。",
      "description": "500 ml 喷雾式浴室清洁剂，为 RANTO 系列中的浴室清洁需求而设。",
      "uses": [
        "浴室清洁"
      ],
      "directions": "使用前，请阅读并遵循包装上的使用说明。",
      "precautions": "请阅读包装注意事项，并确认产品适合预期用途。"
    },
    "lingerie": {
      "name": "内衣洗衣液",
      "category": "贴身衣物洗护",
      "short": "用于贴身衣物洗涤。",
      "description": "500 ml 内衣洗衣液，为日常洗衣中的贴身衣物护理提供专门的选择。",
      "uses": [
        "贴身衣物洗涤"
      ],
      "directions": "使用前，请阅读并遵循包装上的使用说明。",
      "precautions": "使用前，请阅读产品注意事项与衣物的洗护标签。",
      "origin": "泰国制造。制造方：บริษัท จิ่วซือ กรุ๊ป จำกัด。",
      "ingredients": "Alkyl polyglycoside 1.0% w/w; Coconut diethanolamide 1.0% w/w; Polyoxyethylene lauryl ether 1.0% w/w; Sodium dodecanoyloxybenzene sulfonate 4.0% w/w; Sodium lauryl ether sulfate 5.0% w/w; Cocamidopropyl betaine 2.0% w/w.",
      "suitability": "用于贴身衣物洗涤。请结合衣物洗护标签与产品说明确认使用。"
    }
  },
  "footer": {
    "headline": "整洁有序，照顾入微。",
    "body": "为泰国家庭而来的清洁与织物护理。",
    "contact": "查看联系渠道",
    "legal": "版权所有。"
  },
  "meta": {
    "home": {
      "title": "RANTO | 整洁有序，照顾入微",
      "description": "以日本沙龙与 SPA 的细致照顾为灵感，为泰国家庭带来日常清洁与织物护理。首发三款 500 ml 产品即将上市。"
    },
    "products": {
      "title": "产品系列 | RANTO",
      "description": "探索 RANTO 三款 500 ml 家居护理产品。多功能清洁剂、浴室清洁剂与内衣洗衣液即将上市。"
    },
    "quality": {
      "title": "品牌理念 | RANTO",
      "description": "了解首发系列的包装设计，以及各款产品对应的资料。"
    },
    "story": {
      "title": "关于 RANTO",
      "description": "日本沙龙与 SPA 的有序空间，给了我们视觉灵感。这套系列将这一起点，带入泰国家庭的清洁与织物护理。"
    },
    "global": {
      "title": "国际视野 | RANTO",
      "description": "我们从泰国家庭的三种熟悉场景出发，筹备第一套产品系列。"
    },
    "official": {
      "title": "联系我们 | RANTO",
      "description": "RANTO 官方联系方式正在筹备中。本页将公布四个联系渠道及相关上市信息。"
    }
  },
  "inspiration": {
    "eyebrow": "我们的灵感",
    "title": "整洁空间背后的细致照顾。",
    "body": "日本沙龙与 SPA 的有序空间和细节照顾，给了我们灵感。RANTO 希望把这份态度，带到泰国家庭的日常之中。",
    "items": [
      {
        "title": "整洁",
        "body": "被认真打理的环境，为一次护理定下基调。在家里，我们从厨房与浴室各自需要的清洁开始。"
      },
      {
        "title": "秩序",
        "body": "工具有位置，下一步清楚可知。回到家庭，就是容易分辨的产品用途，以及放在一起也协调的包装。"
      },
      {
        "title": "细致",
        "body": "照顾从留意不同需要开始。在家里，打理一个空间与洗好贴身衣物，也值得分别作出选择。"
      }
    ]
  },
  "routines": {
    "title": "先看家务，再选产品。",
    "intro": "三款对应不同用途。选择与你眼前家务相符的一款，再按它的包装说明使用。",
    "items": [
      {
        "title": "厨房与日常家居清洁",
        "body": "日常家居清洁可查看多功能清洁剂。具体厨房用途与适用材质，请阅读包装说明。"
      },
      {
        "title": "浴室清洁",
        "body": "为浴室选择对应的清洁产品。开始前，先确认使用方法及对所清洁表面的适用性。"
      },
      {
        "title": "贴身衣物洗护",
        "body": "洗涤内衣时，选择内衣洗衣液，同时阅读产品说明与衣物洗护标签。"
      }
    ]
  },
  "selection": {
    "title": "为什么从这三款开始？",
    "intro": "从三种熟悉的家庭日常开始，让每一瓶有各自的用途，也让选择有据可循。",
    "items": [
      {
        "title": "厨房的日常",
        "body": "从准备一餐，到饭后收拾，厨房台面在一天里反复被使用。这份每天都在继续的照料，是 RANTO 首先关注它的原因。"
      },
      {
        "title": "浴室的整理",
        "body": "晨间洗漱或晚间淋浴之后，毛巾需要挂好，瓶罐回到原处。我们在意这份每天用水之后，让空间重新有序的照顾。"
      },
      {
        "title": "贴身的小份洗衣",
        "body": "几件内衣，是日常洗衣里小小的一份，也贴近个人生活。我们希望这份熟悉而私人的日常，在产品系列里有自己的位置。"
      }
    ]
  },
  "faq": {
    "title": "先了解这几件事。",
    "intro": "关于产品、灵感与首发安排，你可以从这里开始。",
    "items": [
      {
        "title": "RANTO 适合谁？",
        "body": "首发系列面向泰国家庭消费者，提供日常家居清洁、浴室清洁与贴身衣物洗护三种选择。"
      },
      {
        "title": "RANTO 如何理解日常护理？",
        "body": "从分清用途开始，让每件用品各有其位，让每一次使用有清楚的指引。RANTO 借鉴日本护理空间对整洁、秩序与细节的关注，将这份态度融入家庭清洁和织物护理。"
      },
      {
        "title": "三款产品怎么选？",
        "body": "按用途选择：多功能清洁剂用于包装所列的家居清洁，浴室清洁剂用于浴室，内衣洗衣液用于贴身衣物。具体使用方法与适用性，请阅读包装。"
      },
      {
        "title": "什么时候可以买到？",
        "body": "首发三款 500 ml 产品即将在泰国上市，具体日期与购买信息将在本网站公布。"
      },
      {
        "title": "在哪里查看产品与联系信息？",
        "body": "产品页面展示包装与已有的产品信息，实际使用请遵循最终包装。四个官方联系渠道的具体信息即将于联系页面公布。"
      }
    ]
  },
  "localLife": {
    "title": "三个场景，各有取舍。",
    "intro": "厨房、浴室与内衣洗涤，在家庭生活中扮演不同角色，我们也让它们各有选择。",
    "items": [
      {
        "title": "反复使用的厨房",
        "body": "餐前准备与餐后收拾，让台面成为日常照料的一部分。多功能清洁剂的设计，将扳机喷雾瓶与标签上的厨房场景结合。"
      },
      {
        "title": "重新整理的浴室",
        "body": "用水之后，毛巾挂好，瓶罐归位。浴室清洁剂延续喷雾瓶型，用自己的标签区分用途。"
      },
      {
        "title": "贴近个人的小份洗衣",
        "body": "几件内衣，在洗衣日常中有自己的位置。圆肩瓶身与翻盖，让这款洗衣液与两款喷雾有所区别。"
      }
    ]
  }
}

const th: CoreCopy = {
  "nav": {
    "products": "ผลิตภัณฑ์",
    "quality": "แนวคิดของเรา",
    "story": "เกี่ยวกับ RANTO",
    "global": "มุมมองสากล",
    "official": "ติดต่อเรา"
  },
  "common": {
    "menu": "เมนู",
    "close": "ปิด",
    "language": "ภาษา",
    "navigation": "เมนูหลัก",
    "skip": "ข้ามไปยังเนื้อหา",
    "home": "หน้าหลัก",
    "explore": "ดูเพิ่มเติม",
    "contact": "ข่าวช่องทางติดต่อ",
    "back": "กลับไปหน้าผลิตภัณฑ์"
  },
  "hero": {
    "eyebrow": "RANTO · เพื่อบ้านในประเทศไทย",
    "title": "บ้านเป็นระเบียบ ใส่ใจทุกการดูแล",
    "body": "ผลิตภัณฑ์ทำความสะอาดและดูแลผ้าเพื่อบ้านในไทย ด้วยแรงบันดาลใจจากความใส่ใจในรายละเอียดของซาลอนและสปาญี่ปุ่น",
    "cta": "เลือกการดูแลสำหรับทุกวัน"
  },
  "collection": {
    "title": "3 งานในบ้าน 3 ทางเลือก",
    "intro": "ทำความสะอาดบ้าน ห้องน้ำ และซักชุดชั้นใน คอลเลกชันแรกมี 3 ผลิตภัณฑ์ ขนาด 500 มล. แต่ละขวดมีหน้าที่ชัดเจน",
    "viewAll": "รู้จักทั้ง 3 ผลิตภัณฑ์"
  },
  "scenes": {
    "title": "ดูแลให้ตรงกับสิ่งที่ต้องการ",
    "body": "ครัวที่เตรียมอาหาร ห้องน้ำที่ใช้ทุกวัน และเสื้อผ้าที่สวมใส่ใกล้ตัว เริ่มจากสิ่งที่คุณอยากดูแล",
    "items": [
      {
        "title": "ครัวและพื้นที่ในบ้าน",
        "body": "ผลิตภัณฑ์ทำความสะอาดอเนกประสงค์ สำหรับบ้านและบริเวณครัวตามคำแนะนำบนฉลาก"
      },
      {
        "title": "พื้นที่ห้องน้ำ",
        "body": "ผลิตภัณฑ์ทำความสะอาดห้องน้ำ สำหรับกิจวัตรดูแลพื้นที่ส่วนนี้โดยเฉพาะ"
      },
      {
        "title": "ชุดชั้นใน",
        "body": "ผลิตภัณฑ์ซักผ้าสำหรับชุดชั้นใน ให้คุณเลือกการดูแลสำหรับผ้ากลุ่มนี้โดยเฉพาะ"
      }
    ]
  },
  "philosophy": {
    "eyebrow": "แนวทางของบรรจุภัณฑ์",
    "title": "เข้าชุดกัน แต่แยกแยะได้",
    "body": "ผลิตภัณฑ์ทำความสะอาดสองรายการใช้ขวดสเปรย์แบบไก ส่วนผลิตภัณฑ์ซักชุดชั้นในใช้ขวดไหล่โค้ง สีขาวเป็นจุดร่วมที่เชื่อมทั้งสามขวด",
    "points": [
      {
        "title": "รูปทรงที่ต่างกัน",
        "body": "ผลิตภัณฑ์ทำความสะอาดและผลิตภัณฑ์ซักผ้าใช้รูปทรงขวดและฝาที่ต่างกัน"
      },
      {
        "title": "เลือกจากฉลาก",
        "body": "ฉลากแต่ละรายการระบุผลิตภัณฑ์ ข้อมูลการใช้งาน และปริมาณ 500 มล."
      },
      {
        "title": "เอกลักษณ์ร่วมกัน",
        "body": "บรรจุภัณฑ์สีขาวและตรา RANTO สีน้ำเงินเขียวเชื่อมทั้งคอลเลกชัน โดยแต่ละฉลากยังมีลักษณะของตัวเอง"
      }
    ]
  },
  "story": {
    "title": "รูปแบบของการดูแลทุกวัน",
    "intro": "พื้นที่ที่เป็นระเบียบของซาลอนและสปาญี่ปุ่นเป็นแรงบันดาลใจด้านภาพให้เรา ก่อนนำมาคิดต่อเป็นผลิตภัณฑ์ทำความสะอาดและดูแลผ้าสำหรับบ้านในไทย",
    "paragraphs": [
      "เคาน์เตอร์ที่จัดเรียบร้อย ผ้าที่พับไว้ และเครื่องมือที่มีตำแหน่ง ทำให้พื้นที่ดูแลมีความเป็นระเบียบ RANTO ได้แรงบันดาลใจจากรายละเอียดเหล่านี้ในซาลอนและสปาญี่ปุ่น เพื่อคิดว่าของใช้ประจำวันจะอยู่ร่วมกันในบ้านอย่างไร",
      "เราเริ่มจากงานสามอย่าง: ทำความสะอาดครัวและบ้าน ดูแลห้องน้ำ และซักชุดชั้นในจำนวนน้อย ผลิตภัณฑ์ทำความสะอาดทั้งสองใช้รูปทรงขวดสเปรย์แบบไกร่วมกัน ส่วนผลิตภัณฑ์ซักชุดชั้นในใช้ไหล่ขวดโค้งและฝาเปิด",
      "ขวดสีขาวเป็นจุดร่วมของคอลเลกชัน จากนั้นชื่อผลิตภัณฑ์ ภาพ และการจัดวางข้อความช่วยแยกสิ่งที่อยู่ในแต่ละบรรจุภัณฑ์ขนาด 500 มล.",
      "การเลือกเหล่านี้เป็นส่วนหนึ่งของคอลเลกชันแรกที่เรากำลังเตรียมสำหรับไทย ภาพบรรจุภัณฑ์และเอกสารการออกแบบให้คุณดูรายละเอียดใกล้ขึ้น ส่วนเอกสารผลิตภัณฑ์ช่วยเพิ่มข้อมูลเฉพาะในส่วนที่มีแหล่งอ้างอิง"
    ],
    "principles": [
      {
        "title": "ดูรูปทรง",
        "body": "แยกผลิตภัณฑ์สเปรย์และผลิตภัณฑ์ซักชุดชั้นในได้จากรูปลักษณ์"
      },
      {
        "title": "อ่านฉลาก",
        "body": "เริ่มเปรียบเทียบจากชื่อผลิตภัณฑ์และปริมาณ"
      },
      {
        "title": "อยู่ร่วมกับบ้าน",
        "body": "รูปลักษณ์ที่เข้ากัน วางอยู่กับของใช้ประจำวันที่มีอยู่แล้วได้"
      }
    ],
    "closing": "พื้นที่เป็นระเบียบ รายละเอียดได้รับความใส่ใจ"
  },
  "quality": {
    "title": "รายละเอียดที่ตรวจดูได้",
    "intro": "รู้จักบรรจุภัณฑ์และเอกสารเฉพาะผลิตภัณฑ์ของคอลเลกชันแรก",
    "items": [
      {
        "title": "ข้อมูลประจำผลิตภัณฑ์",
        "body": "เปรียบเทียบชื่อ วัตถุประสงค์การใช้งาน และบรรจุภัณฑ์ขนาด 500 มล. ที่แสดงบนหน้าแต่ละผลิตภัณฑ์"
      },
      {
        "title": "ดูบรรจุภัณฑ์ใกล้ขึ้น",
        "body": "เปิดภาพขนาดเต็มเพื่อดูขวด ฝา และรายละเอียดฉลาก"
      },
      {
        "title": "เอกสารของแต่ละรายการ",
        "body": "อ่านข้อมูลการแจ้งข้อเท็จจริงที่มีสำหรับผลิตภัณฑ์อเนกประสงค์และผลิตภัณฑ์ซักชุดชั้นใน"
      },
      {
        "title": "วิธีใช้บนขวดที่มี",
        "body": "ปฏิบัติตามวิธีใช้และคำเตือนบนบรรจุภัณฑ์จริงที่มากับผลิตภัณฑ์"
      }
    ],
    "readLabelTitle": "อ่านฉลากก่อนใช้งาน",
    "readLabelBody": "อ่านวิธีใช้และคำเตือนบนบรรจุภัณฑ์จริง พร้อมตรวจสอบคำแนะนำการดูแลพื้นผิวหรือเสื้อผ้า",
    "evidenceTitle": "เอกสารผลิตภัณฑ์",
    "evidenceIntro": "ข้อมูลบางส่วนจากเอกสารแจ้งข้อเท็จจริงและเอกสารอ้างอิงการออกแบบบรรจุภัณฑ์",
    "evidenceScope": "เอกสารแจ้งข้อเท็จจริงบันทึกข้อมูลผลิตภัณฑ์ที่ยื่น ไม่ใช่ผลทดสอบหรือใบรับรองประสิทธิภาพ รายการสารสำคัญไม่ใช่สูตรทั้งหมด ส่วนเอกสารการออกแบบแสดงแนวทางบรรจุภัณฑ์",
    "evidenceOpen": "ดูข้อมูลจากเอกสาร",
    "evidenceTypes": {
      "notification": "เอกสารแจ้งข้อเท็จจริง",
      "design": "เอกสารอ้างอิงการออกแบบบรรจุภัณฑ์"
    }
  },
  "global": {
    "title": "แรงบันดาลใจจากญี่ปุ่น เปิดตัวที่ไทย",
    "intro": "เราเริ่มจากคอลเลกชันสำหรับครัวเรือนในประเทศไทย ผ่านพื้นที่ที่คุ้นเคยสามแบบ",
    "visionTitle": "สิ่งที่มองไว้ในอนาคต",
    "visionBody": "เราหวังว่าจะเข้าถึงบ้านอีกหลายแห่งในอนาคต ขณะนี้เรามุ่งเตรียมผลิตภัณฑ์สามรายการแรกสำหรับประเทศไทย",
    "marketTitle": "เตรียมผลิตภัณฑ์ใหม่ 3 รายการ",
    "marketBody": "ทุกรายการมีขนาด 500 มล. และกำลังจะเปิดตัว โดยจะประกาศข่าวและข้อมูลการซื้อบนเว็บไซต์นี้",
    "languagesTitle": "คอลเลกชันเดียวใน 4 ภาษา",
    "languagesBody": "อ่านเกี่ยวกับคอลเลกชันเดียวกันได้ในภาษาอังกฤษ จีน ไทย หรือญี่ปุ่น"
  },
  "contact": {
    "title": "ช่องทางติดต่อทางการ เร็ว ๆ นี้",
    "intro": "เรากำลังเตรียมช่องทางติดต่อสำหรับการเปิดตัวในไทย โดยจะประกาศรายละเอียดบนหน้านี้",
    "channelsTitle": "ช่องทางติดต่อทางการทั้ง 4 ช่องทาง",
    "pending": "จะประกาศเร็ว ๆ นี้",
    "pendingBody": "ข้อมูลทางการของแต่ละช่องทางจะแสดงที่นี่เมื่อพร้อม",
    "emailName": "อีเมล",
    "consumerTitle": "สำหรับบ้านของคุณ",
    "consumerBody": "หน้าผลิตภัณฑ์มีข้อมูลการใช้งาน ปริมาณ และบรรจุภัณฑ์ปัจจุบัน ติดตามหน้านี้สำหรับช่องทางติดต่อผู้บริโภคที่จะประกาศต่อไป",
    "emailLabel": "อีเมล",
    "emailBody": "จะประกาศอีเมลทางการที่นี่",
    "cooperationTitle": "การค้าปลีกและการจัดจำหน่าย",
    "cooperationBody": "รายละเอียดการติดต่อสำหรับธุรกิจจะประกาศบนหน้านี้เมื่อพร้อม",
    "prepareTitle": "ข้อมูลที่จะติดตามได้",
    "prepareItems": [
      "ผลิตภัณฑ์ทั้ง 3 รายการและการใช้งาน",
      "วันวางจำหน่ายและข้อมูลการซื้อ",
      "ช่องทางติดต่อทางการสำหรับผู้บริโภคและธุรกิจ"
    ],
    "availability": "ผลิตภัณฑ์ 3 รายการ ขนาด 500 มล. กำลังจะเปิดตัวในไทย โดยจะอัปเดตข่าวและข้อมูลการซื้อบนเว็บไซต์นี้"
  },
  "productUI": {
    "title": "คอลเลกชันแรกของเรา",
    "intro": "ผลิตภัณฑ์ขนาด 500 มล. 3 รายการ สำหรับทำความสะอาดบ้าน ห้องน้ำ และซักชุดชั้นใน",
    "details": "ดูผลิตภัณฑ์",
    "comingSoon": "เร็ว ๆ นี้",
    "volume": "ปริมาณ",
    "usage": "การใช้งาน",
    "category": "ประเภท",
    "directions": "วิธีใช้",
    "precautions": "ก่อนใช้งาน",
    "origin": "ประเทศที่ผลิต",
    "packView": "ภาพตัวอย่างผลิตภัณฑ์",
    "fullImage": "ดูภาพบรรจุภัณฑ์ขนาดเต็ม",
    "labelNote": "ภาพแสดงบรรจุภัณฑ์ที่วางแผนไว้ โปรดปฏิบัติตามข้อมูลบนบรรจุภัณฑ์จริง",
    "ingredients": "สารสำคัญที่ระบุในเอกสารแจ้ง",
    "suitability": "ข้อมูลการใช้งาน",
    "technicalTitle": "ข้อมูลผลิตภัณฑ์",
    "gallery": {
      "pack": "บรรจุภัณฑ์",
      "scene": "บรรยากาศ",
      "detail": "รายละเอียด"
    }
  },
  "products": {
    "multipurpose": {
      "name": "ผลิตภัณฑ์ทำความสะอาดอเนกประสงค์",
      "category": "ทำความสะอาดบ้าน",
      "short": "สำหรับงานทำความสะอาดบ้านในชีวิตประจำวัน",
      "description": "ผลิตภัณฑ์ทำความสะอาดบ้านในรูปแบบขวดสเปรย์ ขนาด 500 มล. หนึ่งในคอลเลกชันแรกของ RANTO",
      "uses": [
        "ทำความสะอาดบ้าน",
        "ทำความสะอาดบริเวณครัวตามคำแนะนำบนฉลาก"
      ],
      "directions": "อ่านและปฏิบัติตามวิธีใช้บนบรรจุภัณฑ์ก่อนใช้งาน",
      "precautions": "อ่านคำเตือนบนบรรจุภัณฑ์ และตรวจสอบความเหมาะสมกับการใช้งานที่ต้องการ",
      "origin": "ผลิตในประเทศไทย ผู้ผลิต: บริษัท จิ่วซือ กรุ๊ป จำกัด",
      "ingredients": "Alkyl polyglycoside 2.0% w/w; Polyoxyethylene lauryl ether 2.0% w/w; Sodium alpha olefin sulfonate 1.0% w/w; Sodium dodecanoyloxybenzene sulfonate 1.5% w/w.",
      "suitability": "สำหรับทำความสะอาดในบ้าน ตรวจสอบการใช้กับพื้นผิวและวัสดุเฉพาะจากฉลากจริง"
    },
    "bathroom": {
      "name": "ผลิตภัณฑ์ทำความสะอาดห้องน้ำ",
      "category": "ดูแลห้องน้ำ",
      "short": "สำหรับการทำความสะอาดห้องน้ำ",
      "description": "ผลิตภัณฑ์ทำความสะอาดห้องน้ำในรูปแบบขวดสเปรย์ ขนาด 500 มล. สำหรับงานดูแลห้องน้ำในคอลเลกชัน RANTO",
      "uses": [
        "ทำความสะอาดห้องน้ำ"
      ],
      "directions": "อ่านและปฏิบัติตามวิธีใช้บนบรรจุภัณฑ์ก่อนใช้งาน",
      "precautions": "อ่านคำเตือนบนบรรจุภัณฑ์ และตรวจสอบความเหมาะสมกับการใช้งานที่ต้องการ"
    },
    "lingerie": {
      "name": "ผลิตภัณฑ์ซักผ้าสำหรับชุดชั้นใน",
      "category": "ดูแลชุดชั้นใน",
      "short": "สำหรับการซักชุดชั้นใน",
      "description": "ผลิตภัณฑ์ซักผ้าชนิดน้ำ ขนาด 500 มล. สำหรับชุดชั้นในโดยเฉพาะ อีกหนึ่งทางเลือกในการดูแลเสื้อผ้าประจำวัน",
      "uses": [
        "ซักชุดชั้นใน"
      ],
      "directions": "อ่านและปฏิบัติตามวิธีใช้บนบรรจุภัณฑ์ก่อนใช้งาน",
      "precautions": "อ่านคำเตือนของผลิตภัณฑ์และป้ายคำแนะนำการดูแลเสื้อผ้าก่อนใช้งาน",
      "origin": "ผลิตในประเทศไทย ผู้ผลิต: บริษัท จิ่วซือ กรุ๊ป จำกัด",
      "ingredients": "Alkyl polyglycoside 1.0% w/w; Coconut diethanolamide 1.0% w/w; Polyoxyethylene lauryl ether 1.0% w/w; Sodium dodecanoyloxybenzene sulfonate 4.0% w/w; Sodium lauryl ether sulfate 5.0% w/w; Cocamidopropyl betaine 2.0% w/w.",
      "suitability": "สำหรับซักชุดชั้นใน อ่านป้ายการดูแลเสื้อผ้าควบคู่กับวิธีใช้ผลิตภัณฑ์"
    }
  },
  "footer": {
    "headline": "บ้านเป็นระเบียบ ใส่ใจทุกการดูแล",
    "body": "ผลิตภัณฑ์ทำความสะอาดและดูแลผ้าเพื่อบ้านในไทย",
    "contact": "ดูช่องทางติดต่อ",
    "legal": "สงวนลิขสิทธิ์"
  },
  "meta": {
    "home": {
      "title": "RANTO | บ้านเป็นระเบียบ ใส่ใจทุกการดูแล",
      "description": "ผลิตภัณฑ์ทำความสะอาดและดูแลผ้าเพื่อบ้านในไทย แรงบันดาลใจจากความใส่ใจของซาลอนและสปาญี่ปุ่น 3 ผลิตภัณฑ์ ขนาด 500 มล. เร็ว ๆ นี้"
    },
    "products": {
      "title": "ผลิตภัณฑ์ | RANTO",
      "description": "พบกับผลิตภัณฑ์ RANTO ขนาด 500 มล. 3 รายการ สำหรับบ้าน ห้องน้ำ และชุดชั้นใน เร็ว ๆ นี้"
    },
    "quality": {
      "title": "แนวคิดของเรา | RANTO",
      "description": "รู้จักบรรจุภัณฑ์และเอกสารเฉพาะผลิตภัณฑ์ของคอลเลกชันแรก"
    },
    "story": {
      "title": "เกี่ยวกับ RANTO",
      "description": "พื้นที่ที่เป็นระเบียบของซาลอนและสปาญี่ปุ่นเป็นแรงบันดาลใจด้านภาพให้เรา ก่อนนำมาคิดต่อเป็นผลิตภัณฑ์ทำความสะอาดและดูแลผ้าสำหรับบ้านในไทย"
    },
    "global": {
      "title": "มุมมองสากล | RANTO",
      "description": "เราเริ่มจากคอลเลกชันสำหรับครัวเรือนในประเทศไทย ผ่านพื้นที่ที่คุ้นเคยสามแบบ"
    },
    "official": {
      "title": "ติดต่อเรา | RANTO",
      "description": "ช่องทางติดต่อทางการของ RANTO อยู่ระหว่างเตรียมการ ติดตามหน้านี้สำหรับข้อมูลทั้ง 4 ช่องทางและข่าวเปิดตัว"
    }
  },
  "inspiration": {
    "eyebrow": "แรงบันดาลใจของเรา",
    "title": "ความใส่ใจเบื้องหลังพื้นที่ที่ดูแลอย่างดี",
    "body": "พื้นที่ที่เป็นระเบียบและความใส่ใจในรายละเอียดของซาลอนและสปาญี่ปุ่นเป็นแรงบันดาลใจให้เรา RANTO อยากนำแนวคิดนี้มาสู่บ้านในประเทศไทย",
    "items": [
      {
        "title": "ความสะอาดของพื้นที่",
        "body": "สถานที่ที่ได้รับการดูแลช่วยสร้างบรรยากาศของการมาเยือน เมื่อกลับบ้าน เราเริ่มจากงานทำความสะอาดครัวและห้องน้ำที่มีความต้องการต่างกัน"
      },
      {
        "title": "ความเป็นระเบียบ",
        "body": "เครื่องมือมีที่อยู่ และรู้ว่าขั้นตอนต่อไปคืออะไร สำหรับบ้าน เรานำแนวคิดนี้มาใช้กับทางเลือกผลิตภัณฑ์ที่แยกได้ชัดและบรรจุภัณฑ์ที่เข้าชุดกัน"
      },
      {
        "title": "ความใส่ใจเฉพาะเรื่อง",
        "body": "การดูแลเริ่มจากการสังเกตความต้องการที่ต่างกัน เช่นเดียวกับที่บ้าน การดูแลห้องกับการซักชุดชั้นในก็ควรเลือกให้ต่างกัน"
      }
    ]
  },
  "routines": {
    "title": "เริ่มจากงาน แล้วจึงเลือกขวด",
    "intro": "ทั้ง 3 ผลิตภัณฑ์มีการใช้งานต่างกัน เลือกให้ตรงกับงาน และปฏิบัติตามวิธีใช้บนฉลากของผลิตภัณฑ์นั้น",
    "items": [
      {
        "title": "ทำความสะอาดครัวและบ้าน",
        "body": "ดูผลิตภัณฑ์ทำความสะอาดอเนกประสงค์เมื่อต้องการทำความสะอาดบ้าน ตรวจสอบการใช้ในครัวและวัสดุที่เหมาะสมจากฉลาก"
      },
      {
        "title": "ทำความสะอาดห้องน้ำ",
        "body": "เลือกผลิตภัณฑ์สำหรับห้องน้ำ อ่านวิธีใช้และตรวจสอบความเหมาะสมกับพื้นผิวก่อนเริ่ม"
      },
      {
        "title": "ซักชุดชั้นใน",
        "body": "เลือกผลิตภัณฑ์ซักผ้าสำหรับชุดชั้นใน พร้อมอ่านทั้งวิธีใช้ผลิตภัณฑ์และป้ายคำแนะนำการดูแลเสื้อผ้า"
      }
    ]
  },
  "selection": {
    "title": "ทำไมจึงเริ่มด้วย 3 ผลิตภัณฑ์นี้",
    "intro": "เราเริ่มจากงานบ้านที่คุ้นเคย 3 อย่าง แต่ละขวดมีการใช้งานของตัวเอง เพื่อให้เลือกตามสิ่งที่ต้องการดูแลได้",
    "items": [
      {
        "title": "กิจวัตรในครัว",
        "body": "ตั้งแต่เตรียมอาหารจนถึงเก็บล้างหลังมื้ออาหาร เคาน์เตอร์ครัวถูกใช้ซ้ำตลอดวัน การดูแลที่เกิดขึ้นเป็นประจำนี้คือเหตุผลที่ RANTO เริ่มให้ความสำคัญกับครัว"
      },
      {
        "title": "จัดห้องน้ำให้เข้าที่",
        "body": "หลังล้างหน้าในตอนเช้าหรืออาบน้ำตอนเย็น ยังมีผ้าขนหนูให้แขวนและขวดต่าง ๆ ให้เก็บเข้าที่ เราใส่ใจกับกิจวัตรที่ช่วยให้พื้นที่กลับมาเป็นระเบียบหลังการใช้น้ำในแต่ละวัน"
      },
      {
        "title": "ผ้าส่วนน้อยที่ใกล้ตัว",
        "body": "ชุดชั้นในไม่กี่ชิ้นเป็นส่วนเล็ก ๆ ของการซักผ้า แต่ใกล้ชิดกับชีวิตส่วนตัว เราอยากให้กิจวัตรที่คุ้นเคยนี้มีพื้นที่ของตัวเองในคอลเลกชัน"
      }
    ]
  },
  "faq": {
    "title": "เรื่องที่ควรรู้ก่อน",
    "intro": "เริ่มรู้จักคอลเลกชัน แรงบันดาลใจ และการเปิดตัวของเราได้ที่นี่",
    "items": [
      {
        "title": "RANTO เหมาะกับใคร",
        "body": "คอลเลกชันแรกสำหรับครัวเรือนในประเทศไทย มีผลิตภัณฑ์สำหรับทำความสะอาดบ้าน ห้องน้ำ และซักชุดชั้นใน"
      },
      {
        "title": "RANTO มองการดูแลบ้านในชีวิตประจำวันอย่างไร",
        "body": "เริ่มจากเลือกผลิตภัณฑ์ให้ตรงกับงาน จัดวางของใช้ให้เป็นที่ และอ่านคำแนะนำได้สะดวก RANTO ได้แรงบันดาลใจจากความเป็นระเบียบและความใส่ใจในรายละเอียดของพื้นที่ดูแลในญี่ปุ่น เพื่อนำแนวคิดนี้มาใช้กับการทำความสะอาดบ้านและดูแลผ้าในทุกวัน"
      },
      {
        "title": "ควรเลือกผลิตภัณฑ์อย่างไร",
        "body": "เลือกตามงาน: ผลิตภัณฑ์อเนกประสงค์สำหรับงานในบ้านตามฉลาก ผลิตภัณฑ์ห้องน้ำสำหรับห้องน้ำ และผลิตภัณฑ์ซักชุดชั้นในสำหรับชุดชั้นใน อ่านฉลากเพื่อดูวิธีใช้และความเหมาะสมโดยละเอียด"
      },
      {
        "title": "จะซื้อได้เมื่อไร",
        "body": "ผลิตภัณฑ์ 3 รายการแรก ขนาด 500 มล. กำลังจะเปิดตัวในไทย โดยจะประกาศวันวางจำหน่ายและข้อมูลการซื้อบนเว็บไซต์นี้"
      },
      {
        "title": "จะดูข้อมูลผลิตภัณฑ์และช่องทางติดต่อได้ที่ไหน",
        "body": "หน้าผลิตภัณฑ์แสดงบรรจุภัณฑ์และข้อมูลที่มี เมื่อใช้จริงให้ปฏิบัติตามฉลาก ช่องทางติดต่อทางการทั้ง 4 ช่องทางจะประกาศบนหน้าติดต่อเร็ว ๆ นี้"
      }
    ]
  },
  "localLife": {
    "title": "3 พื้นที่ ทางเลือกต่างกัน",
    "intro": "ครัว ห้องน้ำ และการซักชุดชั้นในมีบทบาทต่างกันในชีวิตที่บ้าน เราจึงแยกทางเลือกให้แต่ละงาน",
    "items": [
      {
        "title": "ครัวที่ใช้งานทุกวัน",
        "body": "ก่อนและหลังมื้ออาหาร เคาน์เตอร์เป็นส่วนหนึ่งของงานดูแลประจำวัน การออกแบบผลิตภัณฑ์อเนกประสงค์จึงจับคู่ขวดสเปรย์กับภาพครัวบนฉลาก"
      },
      {
        "title": "ห้องน้ำที่จัดกลับเข้าที่",
        "body": "หลังใช้น้ำ ผ้าขนหนูถูกแขวนและขวดถูกเก็บเข้าที่ ผลิตภัณฑ์ห้องน้ำใช้ขวดสเปรย์เช่นกัน แต่แยกด้วยฉลากของตัวเอง"
      },
      {
        "title": "ผ้าส่วนน้อยที่ใกล้ตัว",
        "body": "ชุดชั้นในไม่กี่ชิ้นมีที่ทางของตัวเองในงานซักผ้า ไหล่ขวดโค้งและฝาเปิดช่วยให้รูปแบบขวดนี้ต่างจากสเปรย์สองขวด"
      }
    ]
  }
}

const ja: CoreCopy = {
  "nav": {
    "products": "製品",
    "quality": "大切にすること",
    "story": "RANTO について",
    "global": "世界への視点",
    "official": "お問い合わせ"
  },
  "common": {
    "menu": "メニュー",
    "close": "閉じる",
    "language": "言語",
    "navigation": "メインナビゲーション",
    "skip": "本文へ移動",
    "home": "ホーム",
    "explore": "詳しく見る",
    "contact": "連絡先のご案内",
    "back": "製品一覧へ戻る"
  },
  "hero": {
    "eyebrow": "RANTO · タイの家庭へ",
    "title": "整った空間に、細やかなケアを。",
    "body": "日本のサロンやスパの細やかな心配りに着想を得た、タイの家庭のための住まいと衣類のケア。",
    "cta": "毎日のケアを選ぶ"
  },
  "collection": {
    "title": "3つの家事に、3つの選択。",
    "intro": "住まいの掃除、浴室の掃除、下着の洗濯。最初のコレクションは、それぞれの用途に合わせた3つの500 ml製品です。",
    "viewAll": "3つの製品を見る"
  },
  "scenes": {
    "title": "必要なところに、ケアを。",
    "body": "食事を用意するキッチン、毎日使う浴室、身につける衣類。何をケアしたいかを考えるところから。",
    "items": [
      {
        "title": "キッチンと住まいに",
        "body": "多目的クリーナーは、パッケージの表示に従って住まいやキッチンまわりの掃除に。"
      },
      {
        "title": "浴室に",
        "body": "浴室用クリーナーは、この空間のための掃除に。"
      },
      {
        "title": "下着に",
        "body": "ランジェリー用洗剤は、下着の洗濯に合わせた選択です。"
      }
    ]
  },
  "philosophy": {
    "eyebrow": "パッケージの考え方",
    "title": "揃えて置いても、見分けられる。",
    "body": "掃除には2つのトリガーボトル。下着の洗濯には丸い肩のボトル。共通の白で、3つの製品をつなぎます。",
    "points": [
      {
        "title": "形を分ける",
        "body": "クリーナーと洗剤で、ボトルの形と開け方を変えています。"
      },
      {
        "title": "ラベルで選ぶ",
        "body": "それぞれのラベルに製品名、用途の情報、500 mlの内容量を記載しています。"
      },
      {
        "title": "共通の表情を持たせる",
        "body": "白いパッケージと青緑の RANTO マークでつなぎながら、ラベルには製品ごとの特徴を残しています。"
      }
    ]
  },
  "story": {
    "title": "日々のケアのかたち。",
    "intro": "日本のサロンやスパの整った空間を、視覚的な着想源に。タイの家庭のための清掃と衣類ケアへ、その考え方をつなげています。",
    "paragraphs": [
      "整えたカウンター、畳んだ布、定位置にある道具。こうした細部がケアの空間を整えます。RANTO は日本のサロンやスパから着想を得て、毎日使う製品が家でどう並ぶかを考えています。",
      "出発点は3つの家事です。キッチンと住まいの掃除、浴室の掃除、少量の下着の洗濯。2つのクリーナーはトリガーボトルの形を共有し、ランジェリー用洗剤は丸い肩とフリップトップを使っています。",
      "ボトルを白で揃え、コレクションに共通の表情を持たせました。製品名、画像、文字の配置で、それぞれの500 mlパックの中身を見分ける構成です。",
      "これらの選択が、タイに向けて準備している最初のコレクションを形づくっています。パッケージ画像とデザイン資料で細部をご覧いただき、該当する製品資料で具体的な情報を補っています。"
    ],
    "principles": [
      {
        "title": "形を見る",
        "body": "スプレーでの掃除と下着の洗濯を、見た目で分ける。"
      },
      {
        "title": "ラベルを読む",
        "body": "製品名と内容量から比較を始める。"
      },
      {
        "title": "暮らしに置く",
        "body": "揃えた見た目で、いつもの道具のそばに並ぶ。"
      }
    ],
    "closing": "空間には秩序を、細部には心配りを。"
  },
  "quality": {
    "title": "確かめられる、製品の細部。",
    "intro": "最初のコレクションのパッケージと、製品ごとの資料をご案内します。",
    "items": [
      {
        "title": "製品を見分ける情報",
        "body": "各ページで製品名、指定用途、表示されている500 mlパックを比較できます。"
      },
      {
        "title": "パッケージを近くで",
        "body": "原寸画像を開き、ボトル、キャップ、ラベルの細部をご覧ください。"
      },
      {
        "title": "製品ごとの記録",
        "body": "多目的クリーナーとランジェリー用洗剤について、届出資料の情報をご覧いただけます。"
      },
      {
        "title": "手元の製品の使い方",
        "body": "使用方法と注意事項は、実際の製品に付属する最終パッケージの表示に従ってください。"
      }
    ],
    "readLabelTitle": "使う前に、表示を確認。",
    "readLabelBody": "最終パッケージの使用方法と注意事項を読み、対象の面や衣類のケア方法もご確認ください。",
    "evidenceTitle": "製品資料",
    "evidenceIntro": "製品の届出資料とパッケージのデザイン参考から、関連情報を抜粋しています。",
    "evidenceScope": "届出資料は提出された製品情報の記録であり、効能試験や性能認証ではありません。記載の主要成分は全処方ではなく、デザイン資料はパッケージの提案を示しています。",
    "evidenceOpen": "資料の抜粋を見る",
    "evidenceTypes": {
      "notification": "製品の届出資料",
      "design": "パッケージのデザイン参考"
    }
  },
  "global": {
    "title": "日本の着想、タイでの発売。",
    "intro": "タイの家庭に向けたコレクションを、身近な3つの場面から準備しています。",
    "visionTitle": "これから目指すこと",
    "visionBody": "将来はより多くの住まいへ届けたいと考えています。現在は、タイに向けた最初の3製品の準備に取り組んでいます。",
    "marketTitle": "3つの新製品を準備中",
    "marketBody": "すべて500 mlで、発売予定です。発売情報と購入方法は、このウェブサイトでご案内します。",
    "languagesTitle": "同じコレクションを4言語で",
    "languagesBody": "英語、中国語、タイ語、日本語で、同じコレクションをご覧いただけます。"
  },
  "contact": {
    "title": "公式連絡先は、近日ご案内。",
    "intro": "タイでの初回発売に向けて、お問い合わせ窓口を準備しています。詳細はこのページでお知らせします。",
    "channelsTitle": "4つの公式連絡先",
    "pending": "近日ご案内",
    "pendingBody": "各窓口の公式情報は、準備が整い次第こちらに掲載します。",
    "emailName": "メール",
    "consumerTitle": "ご家庭で使う方へ",
    "consumerBody": "製品ページで用途、容量、現在のパッケージをご案内しています。今後の消費者向け連絡先は、このページをご確認ください。",
    "emailLabel": "メール",
    "emailBody": "公式メールアドレスはこちらでご案内します。",
    "cooperationTitle": "小売・販売代理店について",
    "cooperationBody": "ビジネスのお問い合わせ先は、準備が整い次第このページに掲載します。",
    "prepareTitle": "今後ご案内する情報",
    "prepareItems": [
      "3つの製品とそれぞれの用途",
      "発売日と購入方法",
      "消費者・ビジネス向けの公式連絡先"
    ],
    "availability": "タイで3つの500 ml製品を発売予定です。発売情報と購入方法は、このウェブサイトでご案内します。"
  },
  "productUI": {
    "title": "最初のコレクション。",
    "intro": "日常の住まいの掃除、浴室の掃除、下着の洗濯に。それぞれの用途に合わせた3つの500 ml製品。",
    "details": "製品を見る",
    "comingSoon": "発売予定",
    "volume": "内容量",
    "usage": "用途",
    "category": "カテゴリー",
    "directions": "使用方法",
    "precautions": "使用前の確認",
    "origin": "製造国",
    "packView": "製品プレビュー",
    "fullImage": "パッケージ画像を原寸で見る",
    "labelNote": "画像は予定しているパッケージのイメージです。ご使用の際は、最終パッケージの表示に従ってください。",
    "ingredients": "届出に記載された主要成分",
    "suitability": "用途について",
    "technicalTitle": "製品情報",
    "gallery": {
      "pack": "パッケージ",
      "scene": "シーン",
      "detail": "細部"
    }
  },
  "products": {
    "multipurpose": {
      "name": "多目的クリーナー",
      "category": "住まいの掃除",
      "short": "毎日の住まいの掃除に。",
      "description": "住まいの掃除に使う500 mlのスプレータイプのクリーナー。RANTO の最初のコレクションの一つです。",
      "uses": [
        "住まいの掃除",
        "パッケージの表示に従ったキッチンまわりの掃除"
      ],
      "directions": "使用前にパッケージの使用方法を読み、記載の方法に従ってください。",
      "precautions": "パッケージの注意事項を読み、目的の用途に適しているかをご確認ください。",
      "origin": "タイ製。製造者：บริษัท จิ่วซือ กรุ๊ป จำกัด。",
      "ingredients": "Alkyl polyglycoside 2.0% w/w; Polyoxyethylene lauryl ether 2.0% w/w; Sodium alpha olefin sulfonate 1.0% w/w; Sodium dodecanoyloxybenzene sulfonate 1.5% w/w.",
      "suitability": "住まいの掃除に。個別の面や素材に使用できるかは、最終パッケージでご確認ください。"
    },
    "bathroom": {
      "name": "浴室用クリーナー",
      "category": "浴室のケア",
      "short": "浴室の掃除に。",
      "description": "浴室の掃除に使う500 mlのスプレータイプのクリーナー。RANTO コレクションの浴室用製品です。",
      "uses": [
        "浴室の掃除"
      ],
      "directions": "使用前にパッケージの使用方法を読み、記載の方法に従ってください。",
      "precautions": "パッケージの注意事項を読み、目的の用途に適しているかをご確認ください。"
    },
    "lingerie": {
      "name": "ランジェリー用洗剤",
      "category": "下着のケア",
      "short": "下着の洗濯に。",
      "description": "下着の洗濯に使う500 mlの液体洗剤。日々の洗濯の中で、下着のケアに合わせて選べる製品です。",
      "uses": [
        "下着の洗濯"
      ],
      "directions": "使用前にパッケージの使用方法を読み、記載の方法に従ってください。",
      "precautions": "使用前に、製品の注意事項と衣類の洗濯表示をご確認ください。",
      "origin": "タイ製。製造者：บริษัท จิ่วซือ กรุ๊ป จำกัด。",
      "ingredients": "Alkyl polyglycoside 1.0% w/w; Coconut diethanolamide 1.0% w/w; Polyoxyethylene lauryl ether 1.0% w/w; Sodium dodecanoyloxybenzene sulfonate 4.0% w/w; Sodium lauryl ether sulfate 5.0% w/w; Cocamidopropyl betaine 2.0% w/w.",
      "suitability": "下着の洗濯に。製品の使い方と衣類の洗濯表示をあわせてご確認ください。"
    }
  },
  "footer": {
    "headline": "整った空間に、細やかなケアを。",
    "body": "タイの家庭のための、住まいと衣類のケア。",
    "contact": "連絡先のご案内",
    "legal": "無断転載・複製を禁じます。"
  },
  "meta": {
    "home": {
      "title": "RANTO | 整った空間に、細やかなケアを",
      "description": "日本のサロンやスパの心配りに着想を得た、タイの家庭のための住まいと衣類のケア。3つの500 ml製品を発売予定です。"
    },
    "products": {
      "title": "製品 | RANTO",
      "description": "RANTO の500 ml製品をご紹介。多目的クリーナー、浴室用クリーナー、ランジェリー用洗剤を発売予定です。"
    },
    "quality": {
      "title": "大切にすること | RANTO",
      "description": "最初のコレクションのパッケージと、製品ごとの資料をご案内します。"
    },
    "story": {
      "title": "RANTO について",
      "description": "日本のサロンやスパの整った空間を、視覚的な着想源に。タイの家庭のための清掃と衣類ケアへ、その考え方をつなげています。"
    },
    "global": {
      "title": "世界への視点 | RANTO",
      "description": "タイの家庭に向けたコレクションを、身近な3つの場面から準備しています。"
    },
    "official": {
      "title": "お問い合わせ | RANTO",
      "description": "RANTO の公式連絡先を準備しています。4つの窓口と発売情報は、このページでご案内します。"
    }
  },
  "inspiration": {
    "eyebrow": "インスピレーション",
    "title": "整った空間の、その奥に。",
    "body": "日本のサロンやスパの整った空間と、細部への心配りが私たちの着想源です。そのケアへの姿勢を、タイの家庭へ届けたいと考えています。",
    "items": [
      {
        "title": "清潔な空間",
        "body": "手入れされた場所は、訪れる時間の雰囲気をつくります。家庭では、キッチンと浴室それぞれの掃除に目を向けることから。"
      },
      {
        "title": "整った順序",
        "body": "道具に置き場所があり、次にすることがわかる。家庭では、用途の違いがわかる製品と、一緒に並ぶパッケージへつなげます。"
      },
      {
        "title": "一つひとつへの気配り",
        "body": "ケアは、異なる必要に気づくことから。家庭でも、部屋を掃除するときと下着を洗うときでは、選ぶものを変える。"
      }
    ]
  },
  "routines": {
    "title": "家事を決めてから、製品を。",
    "intro": "3つの製品は用途が異なります。目的に合うものを選び、それぞれのパッケージの使用方法に従ってください。",
    "items": [
      {
        "title": "キッチンと住まいの掃除",
        "body": "住まいの掃除には、多目的クリーナーの用途を確認。キッチンでの使い方や使用できる素材は、パッケージをご覧ください。"
      },
      {
        "title": "浴室の掃除",
        "body": "浴室には、浴室用の製品を選ぶ。使う前に、使用方法と対象の面に使えるかを確かめてください。"
      },
      {
        "title": "下着の洗濯",
        "body": "下着を洗うときは、ランジェリー用洗剤を。製品の使い方と、衣類の洗濯表示の両方をご確認ください。"
      }
    ]
  },
  "selection": {
    "title": "この3つから始める理由。",
    "intro": "身近な3つの家事を出発点に。それぞれのボトルに用途があるから、ケアしたいものに合わせて選べます。",
    "items": [
      {
        "title": "キッチンの日常",
        "body": "食事の準備から食後の片づけまで、キッチンの作業台は一日に何度も使われます。この繰り返される日常に、RANTO は最初に目を向けました。"
      },
      {
        "title": "浴室を整える時間",
        "body": "朝の洗顔や夜のシャワーのあとには、タオルを掛け、ボトルを元に戻す時間があります。水を使った空間を日々整え直す、その心配りを大切にしたいと考えています。"
      },
      {
        "title": "身近な、少量の洗濯",
        "body": "数枚の下着は、日々の洗濯の小さな一部であり、個人の暮らしに近いものです。この身近な習慣に、コレクションの中で一つの場所をつくりたいと考えています。"
      }
    ]
  },
  "faq": {
    "title": "知っておきたいこと。",
    "intro": "製品、着想源、初回発売について、こちらでご案内します。",
    "items": [
      {
        "title": "RANTO はどんな人のための製品ですか？",
        "body": "最初のコレクションは、タイの家庭向けです。住まいの掃除、浴室の掃除、下着の洗濯のための製品をご用意します。"
      },
      {
        "title": "RANTO が考える日々のケアとは？",
        "body": "用途に合うものを選び、使うものの置き場所を整え、使い方を確かめやすくすること。RANTO は日本のケア空間に見られる整頓と細部への心配りに着想を得て、その考え方を家庭の掃除と衣類のケアに取り入れています。"
      },
      {
        "title": "製品はどのように選べばよいですか？",
        "body": "用途でお選びください。多目的クリーナーは表示された住まいの掃除に、浴室用クリーナーは浴室に、ランジェリー用洗剤は下着に。詳しい使用方法と適合性はパッケージをご確認ください。"
      },
      {
        "title": "いつ購入できますか？",
        "body": "3つの500 ml製品をタイで発売予定です。発売日と購入方法は、このウェブサイトでご案内します。"
      },
      {
        "title": "製品情報と連絡先はどこに掲載されますか？",
        "body": "製品ページでパッケージと公開できる製品情報をご覧いただけます。使用時は最終パッケージの表示に従ってください。4つの公式連絡先は、お問い合わせページで近日ご案内します。"
      }
    ]
  },
  "localLife": {
    "title": "3つの場面、それぞれの選択。",
    "intro": "キッチン、浴室、下着の洗濯は、日々の暮らしで役割が異なります。それぞれの用途を分けて考えています。",
    "items": [
      {
        "title": "繰り返し使うキッチン",
        "body": "食事の前後に使う作業台は、日々の手入れの一部。多目的クリーナーはトリガーボトルとキッチンの画像を組み合わせています。"
      },
      {
        "title": "整え直す浴室",
        "body": "水を使ったあとはタオルを掛け、ボトルを元の場所へ。浴室用クリーナーは共通のスプレー形状に、独自のラベルを合わせています。"
      },
      {
        "title": "身近な少量の洗濯",
        "body": "数枚の下着にも、洗濯の中でひとつの役割があります。丸い肩とフリップトップで、2つのスプレーとの違いを示しています。"
      }
    ]
  }
}

const depthCopy: Record<Locale, SiteCopy['depth']> = {
  "zh": {
    "home": {
      "title": "从认识品牌，到看清产品。",
      "intro": "沿着三个入口，了解系列的设计取舍、对应资料与首发安排。",
      "items": [
        {
          "title": "关于我们的选择",
          "body": "为什么从厨房、浴室和贴身衣物开始？从护理空间的灵感，看到三款包装如何形成一个系列。"
        },
        {
          "title": "把细节与资料放在一起看",
          "body": "近看瓶型和标签，再查看对应产品的申报摘录，分清设计信息与产品记录。"
        },
        {
          "title": "关注泰国首发",
          "body": "了解当前已经展示的内容，以及上市与官方联系信息后续公布的位置。"
        }
      ]
    },
    "story": {
      "closingBody": [
        "一套护理用品，应该容易分辨，也能自然地放进日常。厨房、浴室与贴身衣物分别对应不同的家务，三款产品让这些用途在选择时就清楚可见。",
        "白色瓶身与蓝绿标识维持系列感，瓶型和正面标签保留各自特点。我们希望这份一致与区别，让日常用品在家里各得其所。"
      ]
    },
    "comparison": {
      "title": "同样 500 ml，用在不同日常。",
      "intro": "先按清洁对象选择产品，再查看对应包装与产品说明。容量相同，不代表用途或使用方法相同。",
      "format": "包装形式",
      "spray": "扳机喷雾瓶",
      "bottle": "圆肩翻盖瓶"
    },
    "reading": {
      "title": "一份资料，回答一个具体问题。",
      "intro": "看产品时，把外观、申报信息和实际使用要求分别核对，会更容易找到需要的答案。",
      "items": [
        {
          "title": "包装图：这是什么产品？",
          "body": "先看品名、用途和容量，再查看瓶型与开盖方式。当前图片展示包装设计，标签上的全部细节可在产品页放大查看。"
        },
        {
          "title": "申报摘录：对应哪款记录？",
          "body": "多功能清洁剂对应 สค 99/2569，内衣洗衣液对应 สค 95/2569。查看产品名称、编号和日期，避免把一款资料套用到整个系列。"
        },
        {
          "title": "实际使用：以哪份说明为准？",
          "body": "请以随实际产品提供的最终包装为准。使用量、操作方式与适用范围要按具体产品核对；衣物还需结合自身洗护标签。"
        }
      ]
    },
    "preparation": {
      "title": "首发进展，看得到的每一步。",
      "intro": "这里按信息是否已经公开，说明目前可以了解什么、后续还会公布什么。",
      "items": [
        {
          "title": "产品预览 · 已提供",
          "body": "首发三款 500 ml 产品的包装、用途分类和细节预览已在产品页展示。"
        },
        {
          "title": "产品资料 · 已提供两款摘录",
          "body": "多功能清洁剂和内衣洗衣液的申报摘录可在品牌理念页查看；资料分别对应具体产品。"
        },
        {
          "title": "发售与联系 · 待公布",
          "body": "正式发售时间、购买入口，以及邮箱、Instagram、Facebook、TikTok 的官方地址，将在准备就绪后更新。"
        }
      ]
    },
    "business": {
      "title": "商务联系开放后，可准备这些信息",
      "items": [
        "公司或机构名称、所在市场与业务类型。",
        "希望了解的产品，以及零售、分销、内容或其他合作方向。",
        "计划覆盖的渠道、地区与时间安排，方便明确沟通范围。"
      ]
    }
  },
  "en": {
    "home": {
      "title": "From the brand to the details.",
      "intro": "Explore the design choices, product records and plans for our first launch.",
      "items": [
        {
          "title": "Understand our choices",
          "body": "Why begin with the kitchen, bathroom and lingerie laundry? Follow the inspiration behind the collection and the choices that connect its three packs."
        },
        {
          "title": "Read the details alongside the records",
          "body": "Look closely at bottles and labels, then read the relevant notification excerpts. Each source answers a different question."
        },
        {
          "title": "Follow the Thai launch",
          "body": "See what is available to explore today and where release updates and official contact details will appear."
        }
      ]
    },
    "story": {
      "closingBody": [
        "Care products should be easy to tell apart and feel at home in everyday spaces. The kitchen, bathroom and lingerie laundry each call for a different task; the collection makes these uses visible from the moment of selection.",
        "White bottles and the blue-green mark connect the collection, while bottle shapes and front labels retain their own character. We want that balance to help each product find its place at home."
      ]
    },
    "comparison": {
      "title": "One size. Different everyday tasks.",
      "intro": "Choose by the object you need to clean, then read the relevant pack and instructions. The same volume does not mean the same use or method.",
      "format": "Pack format",
      "spray": "Trigger spray bottle",
      "bottle": "Rounded flip-top bottle"
    },
    "reading": {
      "title": "A specific question for each source.",
      "intro": "Consider appearance, notified information and practical directions separately to find the answer you need.",
      "items": [
        {
          "title": "Packaging: which product is this?",
          "body": "Start with the name, use and volume, then look at the bottle and closure. The current images show packaging designs; open the full pack view on the product page for a closer look."
        },
        {
          "title": "Notification: which record applies?",
          "body": "Multi-Purpose Cleaner corresponds to สค 99/2569 and Lingerie Laundry Detergent to สค 95/2569. Match the product name, reference and date; a record for one product does not cover the whole collection."
        },
        {
          "title": "In use: which instructions should I follow?",
          "body": "Follow the final packaging supplied with the actual product. Check the quantity, method and suitability for that product; for garments, also consult the fabric care label."
        }
      ]
    },
    "preparation": {
      "title": "The first launch, step by step.",
      "intro": "An overview of the information already available and the details still to be announced.",
      "items": [
        {
          "title": "Product previews · Available",
          "body": "The three 500 ml launch products can be explored through their packaging, use categories and detail views."
        },
        {
          "title": "Product records · Two excerpts available",
          "body": "Notification excerpts for Multi-Purpose Cleaner and Lingerie Laundry Detergent are on the approach page. Each record relates to a specific product."
        },
        {
          "title": "Release and contacts · To be announced",
          "body": "The release date, purchase destinations and official email, Instagram, Facebook and TikTok details will be updated when ready."
        }
      ]
    },
    "business": {
      "title": "For future business enquiries",
      "items": [
        "Your company or organisation, market and type of business.",
        "The products of interest and your proposed retail, distribution, content or other collaboration.",
        "The channels, locations and timeframe you have in mind, to help define the discussion."
      ]
    }
  },
  "ja": {
    "home": {
      "title": "ブランドから、製品の細部へ。",
      "intro": "デザインの選択、製品ごとの資料、最初の発売に向けた案内をご覧ください。",
      "items": [
        {
          "title": "私たちの選択を知る",
          "body": "なぜキッチン、浴室、下着の洗濯から始めるのか。着想から、3つのパッケージをつなぐ工夫までをご紹介します。"
        },
        {
          "title": "細部と資料を見比べる",
          "body": "ボトルとラベルを近くで見たあと、対応する届出の抜粋をご確認ください。デザインと製品記録を分けて読み取れます。"
        },
        {
          "title": "タイでの発売に向けて",
          "body": "現在ご覧いただける情報と、発売や公式連絡先の今後の案内をご確認いただけます。"
        }
      ]
    },
    "story": {
      "closingBody": [
        "ケア用品は見分けやすく、日々の暮らしになじむものであってほしい。キッチン、浴室、下着の洗濯。それぞれの家事に対応する3つの製品で、選ぶときから用途が伝わることを目指しています。",
        "白いボトルと青緑のマークでシリーズをつなぎ、ボトルの形と正面ラベルにはそれぞれの特徴を残します。その共通点と違いが、家の中での置き場所を考えるきっかけになります。"
      ]
    },
    "comparison": {
      "title": "同じ500 ml、それぞれの用途。",
      "intro": "まず洗う対象に合わせて選び、製品ごとの表示と使い方をご確認ください。同じ容量でも、用途や使用方法は異なります。",
      "format": "容器の形",
      "spray": "トリガースプレーボトル",
      "bottle": "丸い肩のフリップトップボトル"
    },
    "reading": {
      "title": "資料ごとに、確かめること。",
      "intro": "外観、届出情報、実際の使い方を分けて確認すると、必要な情報を見つけやすくなります。",
      "items": [
        {
          "title": "パッケージ：どの製品？",
          "body": "製品名、用途、容量を確認し、容器と開け方をご覧ください。現在の画像はパッケージデザインのプレビューです。製品ページで全体図を拡大できます。"
        },
        {
          "title": "届出：どの記録に対応？",
          "body": "多目的クリーナーは สค 99/2569、ランジェリー用洗剤は สค 95/2569 に対応します。製品名、番号、日付を照合し、1製品の資料をシリーズ全体に当てはめないでください。"
        },
        {
          "title": "使うとき：どの説明に従う？",
          "body": "実際の製品に付属する最終パッケージの説明に従ってください。使用量、手順、適用範囲は製品ごとに確認し、衣類は洗濯表示も併せてご覧ください。"
        }
      ]
    },
    "preparation": {
      "title": "最初の発売に向けた案内。",
      "intro": "現在公開している情報と、今後お知らせする内容をまとめています。",
      "items": [
        {
          "title": "製品プレビュー · 公開中",
          "body": "最初の3製品、各500 mlのパッケージ、用途区分、細部を製品ページでご覧いただけます。"
        },
        {
          "title": "製品資料 · 2製品の抜粋を公開",
          "body": "多目的クリーナーとランジェリー用洗剤の届出抜粋を理念ページに掲載しています。資料はそれぞれの製品に対応しています。"
        },
        {
          "title": "発売・連絡先 · 後日ご案内",
          "body": "発売日、購入先、公式メール、Instagram、Facebook、TikTokの連絡先は、準備が整い次第更新します。"
        }
      ]
    },
    "business": {
      "title": "今後のお取引のご相談に向けて",
      "items": [
        "会社・団体名、対象市場、事業の種類。",
        "関心のある製品と、小売・流通・コンテンツなど希望する協業の内容。",
        "想定する販売経路、地域、時期など、ご相談の範囲が分かる情報。"
      ]
    }
  },
  "th": {
    "home": {
      "title": "จากเรื่องราวแบรนด์ สู่รายละเอียดผลิตภัณฑ์",
      "intro": "สำรวจแนวคิดการออกแบบ เอกสารของแต่ละผลิตภัณฑ์ และข้อมูลการเปิดตัวครั้งแรก",
      "items": [
        {
          "title": "เข้าใจสิ่งที่เราเลือก",
          "body": "ทำไมจึงเริ่มจากห้องครัว ห้องน้ำ และการซักชุดชั้นใน ติดตามแรงบันดาลใจและแนวคิดที่เชื่อมบรรจุภัณฑ์ทั้งสามเข้าด้วยกัน"
        },
        {
          "title": "ดูรายละเอียดควบคู่กับเอกสาร",
          "body": "ดูขวดและฉลากอย่างใกล้ชิด แล้วอ่านข้อความคัดย่อจากเอกสารแจ้งข้อเท็จจริงที่ตรงกับผลิตภัณฑ์ เพื่อแยกข้อมูลการออกแบบออกจากบันทึกผลิตภัณฑ์"
        },
        {
          "title": "ติดตามการเปิดตัวในไทย",
          "body": "ดูข้อมูลที่เปิดให้อ่านแล้ว และจุดที่จะประกาศกำหนดวางจำหน่ายกับช่องทางติดต่อทางการ"
        }
      ]
    },
    "story": {
      "closingBody": [
        "ของใช้เพื่อการดูแลควรแยกแยะได้ง่ายและเข้ากับชีวิตประจำวัน ห้องครัว ห้องน้ำ และชุดชั้นในเป็นงานดูแลคนละแบบ ผลิตภัณฑ์ทั้งสามจึงแสดงหน้าที่ของตนให้เห็นตั้งแต่ขั้นตอนการเลือก",
        "ขวดสีขาวและเครื่องหมายสีน้ำเงินเขียวเชื่อมคอลเลกชันเข้าด้วยกัน ขณะที่รูปทรงขวดและฉลากด้านหน้ายังคงมีลักษณะเฉพาะ เราอยากให้ความเหมือนและความต่างนี้ช่วยให้ของใช้แต่ละชิ้นมีที่ของตัวเองในบ้าน"
      ]
    },
    "comparison": {
      "title": "ขนาด 500 มล. เท่ากัน ดูแลคนละงาน",
      "intro": "เลือกตามสิ่งที่ต้องการทำความสะอาด แล้วอ่านฉลากและคำแนะนำของผลิตภัณฑ์นั้น ปริมาณเท่ากันไม่ได้หมายถึงการใช้งานหรือวิธีใช้ที่เหมือนกัน",
      "format": "รูปแบบบรรจุภัณฑ์",
      "spray": "ขวดสเปรย์แบบไกปืน",
      "bottle": "ขวดไหล่มนฝาเปิดปิด"
    },
    "reading": {
      "title": "เอกสารแต่ละแบบ ตอบคำถามต่างกัน",
      "intro": "แยกดูรูปลักษณ์ ข้อมูลที่แจ้ง และคำแนะนำการใช้งาน เพื่อค้นหาคำตอบที่ต้องการได้ชัดเจนขึ้น",
      "items": [
        {
          "title": "บรรจุภัณฑ์: คือผลิตภัณฑ์ใด",
          "body": "เริ่มจากชื่อ การใช้งาน และปริมาณ แล้วดูขวดและวิธีเปิด ภาพปัจจุบันเป็นตัวอย่างการออกแบบ สามารถเปิดภาพบรรจุภัณฑ์เต็มในหน้าผลิตภัณฑ์เพื่อดูรายละเอียด"
        },
        {
          "title": "เอกสารแจ้งข้อเท็จจริง: ตรงกับรายการใด",
          "body": "ผลิตภัณฑ์ทำความสะอาดอเนกประสงค์ตรงกับ สค 99/2569 และผลิตภัณฑ์ซักผ้าสำหรับชุดชั้นในตรงกับ สค 95/2569 ตรวจชื่อ เลขที่ และวันที่ โดยไม่ใช้เอกสารของผลิตภัณฑ์หนึ่งอ้างแทนทั้งคอลเลกชัน"
        },
        {
          "title": "การใช้งาน: ควรยึดคำแนะนำใด",
          "body": "ปฏิบัติตามฉลากฉบับสุดท้ายที่มาพร้อมผลิตภัณฑ์จริง ตรวจปริมาณ วิธีใช้ และขอบเขตการใช้งานของแต่ละผลิตภัณฑ์ สำหรับเสื้อผ้าให้อ่านป้ายดูแลผ้าร่วมด้วย"
        }
      ]
    },
    "preparation": {
      "title": "ข้อมูลการเปิดตัวในแต่ละขั้น",
      "intro": "สรุปสิ่งที่เปิดให้ดูแล้ว และรายละเอียดที่จะประกาศในภายหลัง",
      "items": [
        {
          "title": "ภาพผลิตภัณฑ์ · เปิดให้ดูแล้ว",
          "body": "หน้าผลิตภัณฑ์แสดงบรรจุภัณฑ์ ประเภทการใช้งาน และรายละเอียดของผลิตภัณฑ์เปิดตัวทั้งสาม ขนาด 500 มล."
        },
        {
          "title": "เอกสารผลิตภัณฑ์ · มีข้อความคัดย่อสองรายการ",
          "body": "ดูข้อความคัดย่อจากเอกสารแจ้งข้อเท็จจริงของผลิตภัณฑ์ทำความสะอาดอเนกประสงค์และผลิตภัณฑ์ซักผ้าสำหรับชุดชั้นในได้ในหน้าแนวคิดของเรา แต่ละเอกสารตรงกับผลิตภัณฑ์นั้นโดยเฉพาะ"
        },
        {
          "title": "การจำหน่ายและการติดต่อ · รอประกาศ",
          "body": "จะอัปเดตวันวางจำหน่าย ช่องทางซื้อ และอีเมล Instagram Facebook กับ TikTok ทางการเมื่อพร้อม"
        }
      ]
    },
    "business": {
      "title": "ข้อมูลที่เตรียมไว้สำหรับการติดต่อธุรกิจในอนาคต",
      "items": [
        "ชื่อบริษัทหรือองค์กร ตลาดที่ดำเนินงาน และประเภทธุรกิจ",
        "ผลิตภัณฑ์ที่สนใจและรูปแบบความร่วมมือ เช่น ค้าปลีก จัดจำหน่าย หรือเนื้อหา",
        "ช่องทาง พื้นที่ และช่วงเวลาที่วางแผนไว้ เพื่อให้กำหนดขอบเขตการพูดคุยได้ชัดเจน"
      ]
    }
  }
}

export const copy: Record<Locale, SiteCopy> = {
  en: { ...en, visual: visualCopy.en, depth: depthCopy.en },
  zh: { ...zh, visual: visualCopy.zh, depth: depthCopy.zh },
  th: { ...th, visual: visualCopy.th, depth: depthCopy.th },
  ja: { ...ja, visual: visualCopy.ja, depth: depthCopy.ja },
}
