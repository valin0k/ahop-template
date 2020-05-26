import React from 'react'
import { View, Image } from 'react-native'
import { observer } from 'startupjs'
import { TextInput } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import { Text } from 'components'
import './index.styl'

export default observer(function Search () {
  return pug`
    View.root
      View.title
        Text(subtitle bold) Search Products
      View.search
        TextInput.input(placeholder='Search products...')
        View.button
          Image.icon(source={uri: BASE_URL + '/searchRed.png'})
          
  `
})
