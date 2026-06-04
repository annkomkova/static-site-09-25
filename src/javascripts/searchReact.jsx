import React from 'react'
import { createRoot } from 'react-dom/client'

import { W_SearchContainer } from '../components/W_SearchContainer.jsx'

const root = createRoot(document.querySelector('.O_SearchContainer'))
root.render(<W_SearchContainer />)
