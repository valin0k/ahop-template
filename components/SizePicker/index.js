import React from 'react'
import { View } from 'react-native'
import { observer } from 'startupjs'
import { Text } from 'components'
import './index.styl'

const SIZES = ['XL', 'M', 'L', 'ML', 'LM']

export default observer(function SizePicker () {
  return pug`
    View.root
      View.title
        Text(subtitle bold) size
      View.sizes
        each size, i in SIZES
          View.size( key=size styleName={first: !i})
            Text=size
  `
})
