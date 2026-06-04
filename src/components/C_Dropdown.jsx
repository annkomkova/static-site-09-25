import React from 'react'

import { M_SearchResult } from './M_SearchResult.jsx'

export function C_Dropdown({ items, isVisible }) {
  if (!items.length) {
    return (
      <div className="C_Dropdown">
        <p>Ничего не найдено</p>
      </div>
    )
  }

  return (
    <div
      className="C_Dropdown"
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      {items.map((item, i) => (
        <M_SearchResult item={item} key={i} />
      ))}
    </div>
  )
}
