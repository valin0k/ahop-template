import React from 'react'
import { View, ImageBackground } from 'react-native'
import { observer } from 'startupjs'
import { Text } from 'components'
import './index.styl'

export default observer(function Product({sale, uri}) {
  return pug`
    View.root
      ImageBackground.image(source={uri})
        if sale
          Text SALE
      View.content
        View.label
          Text WOODEN FURNITURE
          Text(red) $110.00
          
  `
})
