import React from 'react'

export default function A_MenuLink({ text, url }) {
  return (
    <a className="A_MenuLink" href={url}>
      {text}
    </a>
  )
}
