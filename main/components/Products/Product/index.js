import React from 'react'
import { View, ImageBackground } from 'react-native'
import { observer } from 'startupjs'
import { Span } from '@startupjs/ui'
import { Text } from 'components'
import './index.styl'

export default observer(function Product({sale, uri}) {
  return pug`
    View.root
      ImageBackground.image(source={uri})
        if sale
          Span.sale SALE
      View.content
        View.label
          Text WOODEN FURNITURE
          Text(red) $110.00
          
  `
})
