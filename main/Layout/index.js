import React from 'react'
import { observer } from 'startupjs'
import { Layout } from '@startupjs/ui'

export default observer(function ({ children }) {
  return pug`
    Layout
      =children
  `
})
