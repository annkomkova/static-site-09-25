import React from 'react'

import { C_Dropdown } from './C_Dropdown.jsx'
import { A_SearchInput } from './A_SearchInput.jsx'
import { articles } from '../javascripts/searchData.js'

import { useMemo, useState } from 'react'

export function W_SearchContainer() {
  const [query, setQuery] = useState('')

  const filteredArticles = useMemo(() => {
    const normilizedQuery = query.trim().toLowerCase()

    if (!normilizedQuery) {
      return articles
    }

    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(normilizedQuery) ||
        article.description.toLowerCase().includes(normilizedQuery)
    )
  }, [query])

  const isVisible = query.trim().length > 0

  return (
    <div className="W_SearchContainer">
      <A_SearchInput value={query} onChange={setQuery} />

      <C_Dropdown items={filteredArticles} isVisible={isVisible} />
    </div>
  )
}
