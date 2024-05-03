import { URLS } from './constants'

export const getWhatsUrl = (text, url) => encodeURI(`${url || URLS.whatsapp}${ url ? `?text=${text}` : text}`)