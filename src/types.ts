export type Locale = 'en' | 'zh' | 'th' | 'ja'
export type PageId = 'home' | 'products' | 'quality' | 'story' | 'global' | 'official'
export type ProductId = 'multipurpose' | 'bathroom' | 'lingerie'
export type TextItem = { title: string; body: string }
export interface ProductCopy {
  name: string
  category: string
  short: string
  description: string
  uses: string[]
  directions: string
  precautions: string
  origin?: string
  ingredients?: string
  suitability?: string
}
export interface SiteCopy {
  nav: Record<Exclude<PageId, 'home'>, string>
  common: { menu: string; close: string; language: string; navigation: string; skip: string; home: string; explore: string; contact: string; back: string }
  hero: { eyebrow: string; title: string; body: string; cta: string }
  collection: { title: string; intro: string; viewAll: string }
  scenes: { title: string; body: string; items: TextItem[] }
  philosophy: { eyebrow: string; title: string; body: string; points: TextItem[] }
  inspiration: { eyebrow: string; title: string; body: string; items: TextItem[] }
  routines: { title: string; intro: string; items: TextItem[] }
  selection: { title: string; intro: string; items: TextItem[] }
  faq: { title: string; intro: string; items: TextItem[] }
  localLife: { title: string; intro: string; items: TextItem[] }
  story: { title: string; intro: string; paragraphs: string[]; principles: TextItem[]; closing: string }
  quality: { title: string; intro: string; items: TextItem[]; readLabelTitle: string; readLabelBody: string; evidenceTitle: string; evidenceIntro: string; evidenceScope: string; evidenceOpen: string; evidenceTypes: { notification: string; design: string } }
  global: { title: string; intro: string; visionTitle: string; visionBody: string; marketTitle: string; marketBody: string; languagesTitle: string; languagesBody: string }
  contact: { title: string; intro: string; channelsTitle: string; pending: string; pendingBody: string; emailName: string; consumerTitle: string; consumerBody: string; emailLabel: string; emailBody: string; cooperationTitle: string; cooperationBody: string; prepareTitle: string; prepareItems: string[]; availability: string }
  productUI: { title: string; intro: string; details: string; comingSoon: string; volume: string; usage: string; category: string; directions: string; precautions: string; origin: string; packView: string; fullImage: string; labelNote: string; ingredients: string; suitability: string; technicalTitle: string; gallery: { pack: string; scene: string; detail: string } }
  visual: { conceptCaption: string; productPreviewCaption: string; detailTitle: string; detailIntro: string; details: Record<ProductId, TextItem[]>; designTitle: string; designIntro: string; designSteps: TextItem[]; sceneLabels: Record<ProductId, string>; spaceTitle: string; spaceBody: string }
  products: Record<ProductId, ProductCopy>
  footer: { headline: string; body: string; contact: string; legal: string }
  meta: Record<PageId, { title: string; description: string }>
}
