import React from 'react'
import { View, Image } from 'react-native'
import { observer } from 'startupjs'
import { Span } from '@startupjs/ui'
import { Text } from 'components'
import './index.styl'

export default observer(function Product({ sale, uri, even, fourth, first }) {
  return pug`
    View.root(styleName={ even, fourth, first })
      Image.image(source={uri})
      if sale
        Span.sale SALE
      View.content
        View.label
          Text WOODEN FURNITURE
          Text(red) $110.00
        Text Electronic
  `
})
