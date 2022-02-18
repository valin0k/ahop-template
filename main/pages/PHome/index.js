import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, View } from 'react-native'
import { Text } from 'components'
import { TopBar, Promo, Sidebar, ProductFilter, Products, Footer } from 'main/components'
import './index.styl'
import { Content } from '@startupjs/ui'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      TopBar
      Promo
      View.content
        View.contentData
          Sidebar
          View.main
            ProductFilter
            Products
      Footer
  `
})
