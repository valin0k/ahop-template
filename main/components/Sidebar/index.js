import React from 'react'
import { View, Image } from 'react-native'
import { observer } from 'startupjs'
import { Text, Search, Filter, Categories, ColorPicker, SizePicker, TopRated } from 'components'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

console.info("__Search__", Search)

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
