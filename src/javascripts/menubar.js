import { props } from './menubarData.js'

const React = require('react')
const ReactDOMServer = require('react-dom/server')

const C_MenuLinks = require('../components/C_MenuLinks.jsx').default

const menubar = ReactDOMServer.renderToString(
  React.createElement(C_MenuLinks, props)
)

export { menubar }
