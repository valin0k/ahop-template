import React from 'react'
import { View, Image } from 'react-native'
import { observer } from 'startupjs'
import { Text } from 'components'
import './index.styl'

export default observer(function Filter () {
  return pug`
    View.root
      View.title
        Text(subtitle bold) Filter by Price
      View.priceLine
        View.border
        View.line
        View.border
      View.labels
        Text Price: $20 - $100
        Text Filter
          
  `
})
