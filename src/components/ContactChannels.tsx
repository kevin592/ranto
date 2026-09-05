import { ArrowUpRight, Mail, Instagram, Facebook, Music2 } from 'lucide-react'
import { contactChannels } from '../contact-channels'
import type { SiteCopy } from '../types'

const icons = { email: Mail, instagram: Instagram, facebook: Facebook, tiktok: Music2 }
export function ContactChannels({ t, compact = false }: { t: SiteCopy; compact?: boolean }) {
  return <ul className={`contact-channels${compact ? ' contact-channels--compact' : ''}`} aria-label={t.contact.channelsTitle}>
    {contactChannels.map(channel => {
      const Icon = icons[channel.id]
      const name = channel.id === 'email' ? t.contact.emailName : channel.name
      const content = <><Icon size={compact ? 16 : 25} strokeWidth={1.4} aria-hidden="true" /><span className="channel-name">{name}</span>{channel.status === 'pending' ? <span className="channel-status">{t.contact.pending}</span> : <ArrowUpRight size={18} aria-hidden="true" />}</>
      return <li key={channel.id} data-channel={channel.id} data-status={channel.status}>{channel.status === 'active' ? <a href={channel.href} {...(channel.id !== 'email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{content}</a> : <div className="channel-pending">{content}</div>}</li>
    })}
  </ul>
}
