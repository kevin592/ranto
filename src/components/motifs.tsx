/* 品牌辅助图形：四角星（线稿）与蓝绿双弧 */

export function Star({
  size = 14,
  color = '#1A1A1A',
  className = '',
  strokeWidth = 1,
}: {
  size?: number
  color?: string
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

/* 星形条文：重复线稿纹理分隔带 */
export function StarField({ color = '#1A1A1A', opacity = 0.1 }: { color?: string; opacity?: number }) {
  const stars = []
  for (let i = 0; i < 14; i++) {
    stars.push(
      <Star key={i} size={16} color={color} strokeWidth={0.9} />,
    )
  }
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-between overflow-hidden px-6 py-5 select-none"
      style={{ opacity }}
    >
      {stars}
    </div>
  )
}

/* 双弧：蓝上绿下，只取片段 */
export function DualArc({ className = '', width = 220 }: { className?: string; width?: number }) {
  const h = width * 0.32
  return (
    <svg
      width={width}
      height={h}
      viewBox="0 0 220 70"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 66 C 60 10, 160 4, 216 34" stroke="#0554B8" strokeWidth="3" strokeLinecap="round" />
      <path d="M4 70 C 70 26, 150 22, 204 44" stroke="#3FAD32" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M212 8 L213.6 15.4 L221 17 L213.6 18.6 L212 26 L210.4 18.6 L203 17 L210.4 15.4 Z"
        fill="#0554B8"
      />
    </svg>
  )
}

/* 四系列色线阵列 */
export function ColorLines({ className = '' }: { className?: string }) {
  const colors = ['#2E6BD6', '#4CAF7D', '#E3A7B8', '#3FA7A0']
  return (
    <div className={`flex gap-2 ${className}`} aria-hidden="true">
      {colors.map((c) => (
        <span key={c} className="block h-[3px] w-10" style={{ backgroundColor: c }} />
      ))}
    </div>
  )
}

/* 小节标签：Liter 拉丁装饰字 + 色线 */
export function SectionLabel({ en, text, color = '#0554B8' }: { en: string; text: string; color?: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="block h-[2px] w-8" style={{ backgroundColor: color }} />
      <span className="font-liter text-[11px]" style={{ color }}>
        {en}
      </span>
      <span className="text-[13px] tracking-[0.2em] text-neutral-500">{text}</span>
    </div>
  )
}
