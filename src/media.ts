import type { ProductId } from './types'
export const editorialMedia = {
  careSpace: './images/editorial/care-space.webp',
  designBottle: './images/editorial/design-bottle.webp',
  designTrigger: './images/editorial/design-trigger.webp',
  designLabel: './images/editorial/design-label.webp',
} as const
export const sceneMedia: Record<ProductId, string> = {
  multipurpose: './images/editorial/kitchen-scene.webp',
  bathroom: './images/editorial/bathroom-scene.webp',
  lingerie: './images/editorial/laundry-scene.webp',
}
