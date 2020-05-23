import React from 'react'
import { View, Image } from 'react-native'
import { observer } from 'startupjs'
import { Text } from 'components'
import './index.styl'

const CATEGORIES = [
  {label: 'Accessories', value: 4},
  {label: 'Book', value: 9},
  {label: 'Clothing', value: 5},
  {label: 'Homelife', value: 3},
  {label: 'Kids & Baby', value: 4},
]

export default observer(function Categories () {
  return pug`
    View.root
      View.title
        Text(subtitle bold) Categories
      View.categories
        each category, i in CATEGORIES
          View.category(styleName={first: !i} key=category.label)
            Text=category.label
            Text=category.value
          
  `
})
