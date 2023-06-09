'use client'

import {
  FacebookLogo,
  WhatsappLogo,
  LinkedinLogo,
  TelegramLogo,
  TwitterLogo,
} from '@phosphor-icons/react'
import {
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookShareButton,
} from 'next-share'

interface ShareProps {
  id: string
}

export default function Share({ id }: ShareProps) {
  const link = `http://www.localhost:3000/memories/${id}`
  const title =
    'Em minha vida pude viver coisas inesquecíveis, a Spacetime nos permite compartilhar esses momentos com apenas um click. Que tal conferir a minha memória? Vem comigo!🚀\n'

  return (
    <div>
      <div className="flex items-center justify-end gap-2">
        <span className="text-sm leading-relaxed">compartilhar via: </span>
        <TwitterShareButton
          className="flex cursor-pointer items-center"
          url={link}
          title={title}
        >
          <TwitterLogo
            size={24}
            className="transition-transform hover:scale-105 hover:fill-green-500"
          />
        </TwitterShareButton>
        <FacebookShareButton
          className="flex cursor-pointer items-center"
          url={link}
          title={title}
        >
          <FacebookLogo
            size={24}
            className="transition-transform hover:scale-105 hover:fill-green-500"
          />
        </FacebookShareButton>
        <LinkedinShareButton
          className="flex cursor-pointer items-center"
          url={link}
          title={title}
        >
          <LinkedinLogo
            size={24}
            className="transition-transform hover:scale-105 hover:fill-green-500"
          />
        </LinkedinShareButton>
        <WhatsappShareButton
          className="flex cursor-pointer items-center"
          url={link}
          title={title}
        >
          <WhatsappLogo
            size={24}
            className="transition-transform hover:scale-105 hover:fill-green-500"
          />
        </WhatsappShareButton>
        <TelegramShareButton
          className="flex cursor-pointer items-center"
          url={link}
          title={title}
        >
          <TelegramLogo
            size={24}
            className="transition-transform hover:scale-105 hover:fill-green-500"
          />
        </TelegramShareButton>
      </div>
    </div>
  )
}
