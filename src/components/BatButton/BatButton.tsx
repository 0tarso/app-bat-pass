import { View, Text, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import * as Clipboard from 'expo-clipboard'

import { styles } from './BatButtonStyles'
import BatTextInput from '../BatTextInput/BatTextInput'
import generatePass from '../../services/passwordService'

export default function BatButtons() {
  const [pass, setPass] = useState<string>('')
  const [isPassCopy, setIsPassCopy] = useState<boolean>(false)

  function handleGenerateButton() {
    let generateToken = generatePass()

    setIsPassCopy(false)
    setPass(generatePass)
  }


  async function handleCopyPassword() {
    await Clipboard.setStringAsync(pass)
    setIsPassCopy(true)
  }

  return (
    <View>

      <BatTextInput
        pass={pass}
      />

      <TouchableHighlight
        style={styles.container}
        onPress={handleGenerateButton}
        underlayColor="#DDDDDD80"
      >
        <Text style={styles.text}>GENERATE</Text>
      </TouchableHighlight>

      <TouchableOpacity
        style={styles.container}
        onPress={handleCopyPassword}
      >
        <Text style={styles.text}>⚡COPY⚡</Text>
      </TouchableOpacity>


      <Text style={styles.passCopyMessage}>{isPassCopy ? "Password copied successfully" : ''}</Text>


    </View>
  )
}