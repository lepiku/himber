import { website } from '~/content'

export { appTheme } from '~/theme'

export const whatsappLink = (text: string) =>
  'https://api.whatsapp.com/send?' +
  new URLSearchParams({
    phone: '62' + website.contact.phone.slice(1),
    text,
  }).toString()
