import React from 'react'
import { View, Image } from 'react-native'
import { observer } from 'startupjs'
import { Text } from 'components'
import Product from './Product'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function Products() {
  const array = Array(12).fill(1)
  return pug`
    View.root
      each _, i in array
        Product(key=i sale=!(i % 2) uri=BASE_URL + '/products/' + i + '.jpg' even=i % 2)
  `
})
