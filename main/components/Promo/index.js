import React from 'react'
import { View, ImageBackground } from 'react-native'
import { observer } from 'startupjs'
import { Text } from 'components'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

const MENU_ITEMS = ['HOME', 'ABOUT', 'SHOP', 'PAGES', 'BLOG', 'CONTACT']
const ICONS = ['/search.png', '/bag.png', '/menu.png']

export default observer(function TopBar () {
  return pug`
    View.root
      ImageBackground.bg(source={uri: BASE_URL + '/banner.jpg'})
        Text(title bold) Shop
        View.breadcrumb
          Text(subtitle bold) HOME / SHOP
  `
})
