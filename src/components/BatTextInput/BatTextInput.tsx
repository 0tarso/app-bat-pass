import { View, Text, TextInput } from 'react-native'
import React from 'react'

import styles from './BatTextInputStyles'

interface BatTextInputProps {
  pass: string
}

export default function BatTextInput(props: BatTextInputProps) {


  return (
    <>
      <TextInput
        style={styles.inputer}
        placeholder='Generated Pass'
        placeholderTextColor={"#05050570"}
        value={props.pass}
        readOnly
      />
    </>
  )
}