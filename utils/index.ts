import { website } from '~/data'

export const generateWhatsappLink = (carName: string) =>
  'https://api.whatsapp.com/send' +
  '?phone=62' +
  website.contact.phone.slice(1) +
  '&text=Halo%2C%20saya%20mau%20sewa%20mobil%20' +
  carName.replaceAll(' ', '%20')
