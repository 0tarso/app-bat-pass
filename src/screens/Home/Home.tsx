import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles'
import Menu from '../../components/Menu/Menu';
import BatLogo from '../../components/BatLogo/BatLogo';
import BatTextInput from '../../components/BatTextInput/BatTextInput';
import BatButtons from '../../components/BatButton/BatButton';

const Home = () => {
  return (
    <View style={styles.container}>

      <BatLogo />

      <View style={styles.buttonContainer}>
        <BatButtons />
      </View>
      {/* <Menu /> */}
    </View>
  );
}

export default Home


