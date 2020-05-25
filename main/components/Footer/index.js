import React from 'react'
import { View, Image } from 'react-native'
import { observer } from 'startupjs'
import { BASE_URL } from 'clientHelpers'
import { Text } from 'components'
import './index.styl'

const ICONS = ['/twitter.png', '/t.png', '/fb.png', '/camera.png']
const MENU = ['HOME', 'ABOUT US', 'SHOP', 'BLOG', 'PAGES']
const CONTACTS = [
  {label: 'PHONE', value: '+012 345 678 102'},
  {label: 'EMAIL', value: 'info@example.com'},
  {label: 'ADDRESS', value: 'Dhaka Bangladesh'}
]

export default observer(function Footer () {
  return pug`
    View.root
      View.left
        Text 20 Years Experience
        View.icons
          each icon, i in ICONS
            View.iconWrapper(styleName={first: !i} key=icon)
              Image.icon(source={uri: BASE_URL + '/social' + icon})
      View.center
        View.logo
          Image.logo(source={uri: BASE_URL + '/logo.png'})
        View.menu
          each item, i in MENU
            View.menuItem(styleName={first: !i} key=item)
              Text(bold)=item
        View.divider
        View.copyright
          Text Copyright © neha 2018 . All Right Reserved.
      View.right
        View.contacts
          each contact in CONTACTS
            View.contact
              Text(bold)=contact.label 
              Text : #{contact.value}
  `
})
