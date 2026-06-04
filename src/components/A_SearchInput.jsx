import React from 'react'

export function A_SearchInput({ value, onChange }) {
  return (
    <input
      placeholder="Поиск..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="A_SearchInput"
    />
  )
}
