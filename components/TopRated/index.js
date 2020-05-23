import React from 'react'
import { View, Image } from 'react-native'
import { observer } from 'startupjs'
import { BASE_URL } from 'clientHelpers'
import { Text } from 'components'
import './index.styl'


export default observer(function TopRated () {
  const array = Array(4).fill(1)
  return pug`
    View.root
      View.title
        Text(subtitle bold) Top rated products
      View.products
        each _, i in array
          View.product(styleName={first: !i} key=i)
            View.imageWrapper
              Image.image(source={uri: BASE_URL + '/top/' + i + '.jpg'})
            View.productContent
              Text Flying drone
              View.rate
                Image.rateImage(source={uri: BASE_URL + '/starFill.png'} styleName={first: true})
                Image.rateImage(source={uri: BASE_URL + '/starFill.png'})
                Image.rateImage(source={uri: BASE_URL + '/star.png'})
                Image.rateImage(source={uri: BASE_URL + '/star.png'})
                Image.rateImage(source={uri: BASE_URL + '/star.png'})
              View.price
                Text $140.00
  `
})
