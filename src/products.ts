import type { ProductId } from './types'

export const productIds: ProductId[] = ['multipurpose', 'bathroom', 'lingerie']
export const products = {
  multipurpose: { image: './images/launch/multipurpose.png', displayImage: './images/launch/multipurpose.webp', volume: '500 ml', status: 'comingSoon', format: 'spray' },
  bathroom: { image: './images/launch/bathroom.png', displayImage: './images/launch/bathroom.webp', volume: '500 ml', status: 'comingSoon', format: 'spray' },
  lingerie: { image: './images/launch/lingerie.png', displayImage: './images/launch/lingerie.webp', volume: '500 ml', status: 'comingSoon', format: 'bottle' },
} as const

export function isProductId(value: string): value is ProductId { return productIds.includes(value as ProductId) }
