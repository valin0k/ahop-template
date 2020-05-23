import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, View } from 'react-native'
import { Text } from 'components'
import { TopBar, Promo, Sidebar, ProductFilter } from 'main/components'
import './index.styl'
import { Content } from '@startupjs/ui'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      TopBar
      Promo
      View.content
        Sidebar
        View.main
          ProductFilter
  `
})
