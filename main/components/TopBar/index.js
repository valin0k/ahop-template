import React from 'react'
import { View } from 'react-native'
import { observer } from 'startupjs'
import { Span } from '@startupjs/ui'
import { Text } from 'components'
import './index.styl'

const MENU_ITEMS = ['HOME', 'ABOUT', 'SHOP', 'PAGES', 'BLOG', 'CONTACT']

export default observer(function TopBar () {
  return pug`
    View.root
      View.logo
        Text(title) Neha.
      View.menu
        each item in MENU_ITEMS
          View.menuItem
            Text(subtitle)=item
      View.cart
      
  `
})
