import React from 'react';
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import { Link } from 'gatsby'
import whatsappIcon from '../images/whatsappIcon.png';

const whatsAppIcon = () => {
  return (
    <Link
      to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}
      target='_blank'
    >
      <img
        src={whatsappIcon}
        alt='whatsapp icon'
        className='fixed bottom-6 right-6 sm:w-24 sm:h-24 w-16 h-16 z-10'
      ></img>
    </Link>
  );
};

export default whatsAppIcon;