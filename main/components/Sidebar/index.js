import React from 'react'
import { View } from 'react-native'
import { observer } from 'startupjs'
import { Text, Search, Filter, Categories, ColorPicker, SizePicker, TopRated } from 'components'
import './index.styl'

export default observer(function Sidebar () {
  return pug`
    View.root
      Search
      View.block
        Filter
      View.block
        Categories
      View.block
        ColorPicker
      View.block
        SizePicker
      View.block
        TopRated
  `
})
