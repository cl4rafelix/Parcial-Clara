import {SafeAreaView, StyleSheet} from 'react-native'
import {Maqui} from './components/Maqui'
export default function App(){
  return(
    <SafeAreaView style={styles.body}>

      <Maqui/>
      
    </SafeAreaView>

  )
}
const styles = StyleSheet.create(
  {
    body:{
      width: '100%',
      height: '100%',
      backgroundColor: '#F8F8FF'
    }
  }
  )