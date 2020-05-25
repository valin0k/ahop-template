import React from 'react'
import { View, ImageBackground } from 'react-native'
import { observer } from 'startupjs'
import { Span, Button } from '@startupjs/ui'
import { Text } from 'components'
// import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(function Product({ sale, uri, even, third }) {
  return pug`
    View.root(styleName={ even, third })
      ImageBackground.image(source={uri})
        if sale
          Span.sale SALE
      View.content
        View.label
          Text WOODEN FURNITURE
          Text(red) $110.00
        Text Electronic
        // Button.icon(color='secondaryText' icon=faShoppingBag variant='text') ADD TO CART
          
  `
})
