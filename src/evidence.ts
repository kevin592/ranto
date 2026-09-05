import type { ProductId } from './types'
export interface ProductEvidence { product: ProductId; number: string; date: string; pdf: string; preview: string; fullPreview: string }
export const productEvidence: ProductEvidence[] = [
  { product: 'multipurpose', number: 'สค 99/2569', date: '2026-08-31', pdf: './documents/product-notifications/multipurpose-notification-redacted.pdf', preview: './images/evidence/multipurpose-notification-thumb.webp', fullPreview: './images/evidence/multipurpose-notification.webp' },
  { product: 'lingerie', number: 'สค 95/2569', date: '2026-08-21', pdf: './documents/product-notifications/lingerie-notification-redacted.pdf', preview: './images/evidence/lingerie-notification-thumb.webp', fullPreview: './images/evidence/lingerie-notification.webp' },
]
