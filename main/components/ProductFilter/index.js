import React from 'react'
import { View, Image } from 'react-native'
import { observer } from 'startupjs'
import { BASE_URL } from 'clientHelpers'
import { Text } from 'components'
import './index.styl'

export default observer(function ProductFilter () {
  return pug`
    View.root
      View.left
        View.foundWrapper
          Text(red subtitle) 23 
          Text(subtitle) Product Found of 
          Text(red subtitle) 50
        View.sortWrapper
          Text(subtitle) Sort by : Default
          Image.caretImage(source={uri: BASE_URL + '/downArrow.png'})
      View.right
        Image.icon(source={uri: BASE_URL + '/nine.png'})
        Image.iconRight(source={uri: BASE_URL + '/menu.png'})
  `
})
