import React from 'react'

export function M_SearchResult({ item }) {
  return (
    <a className="M_SearchResult" href={item.url}>
      <h5 className="A_SearchResultHeader">{item.title}</h5>
      <p className="A_SearchResultDescription">{item.description}</p>
    </a>
  )
}
