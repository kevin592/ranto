export type ChannelId = 'email' | 'instagram' | 'facebook' | 'tiktok'
type Channel = { id: ChannelId; name: string } & ({ status: 'pending'; href?: never } | { status: 'active'; href: string })

// Activate only verified channels here. Use mailto: for email and HTTPS for social profiles.
export const contactChannels: readonly Channel[] = [
  { id: 'email', name: 'Email', status: 'pending' },
  { id: 'instagram', name: 'Instagram', status: 'pending' },
  { id: 'facebook', name: 'Facebook', status: 'pending' },
  { id: 'tiktok', name: 'TikTok', status: 'pending' },
]
