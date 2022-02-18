import React from 'react'
import { View } from 'react-native'
import { observer } from 'startupjs'
import { Text } from 'components'
import './index.styl'

const COLORS = ['#ff4136', '#ff01f0', '#3649ff', '#00c0ff', '#00ffae', '#8a00ff']

export default observer(function ColorPicker () {
  return pug`
    View.root
      View.title
        Text(subtitle bold) color
      View.colors
        each color, i in COLORS
          View.color(style={backgroundColor: color} key=color styleName={first: !i})
  `
})
