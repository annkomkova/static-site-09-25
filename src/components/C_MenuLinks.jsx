import React from 'react'

import A_MenuLink from './A_MenuLink.jsx'

export default function C_MenuLinks({ homeURL, menu }) {
  const menuElements = menu.map(({ text, url }, i) => {
    const linkURL = homeURL + url

    return <A_MenuLink key={i} text={text} url={linkURL} />
  })

  return <div className="C_MenuLinks">{menuElements}</div>
}
