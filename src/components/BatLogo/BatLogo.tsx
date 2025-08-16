import { View, Text, Image } from 'react-native'
import React from 'react'

import batlogo from "../../../assets/batLogo.png"
import styles from './BatLogoStyles'

export default function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BATPASS GENERATOR</Text>
      <Image
        style={styles.batlogo}
        source={batlogo}
      />
    </View>
  )
}