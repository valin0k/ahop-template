import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { Text } from 'components'
import { TopBar } from 'main/components'
import './index.styl'
import { Content } from '@startupjs/ui'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      TopBar
  `
})
