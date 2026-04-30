import React from 'react'
import A_Title from './A_Title.jsx'
import M_Card from './M_Card.jsx'

const workshops = [
  {
    date: '9 апреля 2026',
    title: 'Постановка задач на 4 модуль'
  },
  {
    date: '16 апреля 2026',
    title: 'Разработка поискового модуля на ванильном JS'
  },
  {
    date: '23 апреля 2026',
    title: 'Программирование страницы поисковой выдачи'
  },
  {
    date: '30 апреля 2026',
    title: 'Основы React'
  }
]

export default function O_Container() {
  const cards = workshops.map((workshop, i) => (
    <M_Card name={workshop.title} date={workshop.date} key={i} />
  ))

  return (
    <div className="O_Container">
      <A_Title name="Расписание" />
      {cards}
    </div>
  )
}
