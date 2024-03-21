import {Text, View, StyleSheet, Pressable, Image, ScrollView, StatusBar} from 'react-native'

export function Maqui(){
  return(
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.nav}>EssênciasBeauty</Text>

        <Pressable>
          <Image source={require('../assets/icons8-perfume-100.png')} style={styles.colum1}/>
          <Text style={styles.colum11}>PERFUMES</Text>
        </Pressable>
        
        <Pressable>
          <Image source={require('../assets/icons8-po-facial-100.png')} style={styles.colum2}/>
          <Text style={styles.colum22}>MAQUIAGEM</Text>
        </Pressable>

        <Pressable>
          <Image source={require('../assets/icons8-esmalte-100.png')} style={styles.colum1}/>
          <Text style={styles.colum11}>ESMALTES</Text>
        </Pressable>

        <Pressable>
          <Image source={require('../assets/icons8-tubo-de-creme-100.png')} style={styles.colum2}/>
          <Text style={styles.colum22}>CREMES</Text>
        </Pressable>
        
        <Pressable>
          <Image source={require('../assets/icons8-xampu-100.png')} style={styles.colum1}/>
          <Text style={styles.colum11}>SHAMPOOS</Text>
        </Pressable>

        <Pressable>
          <Image source={require('../assets/icons8-dispensador-de-xampu-100.png')} style={styles.colum2}/>
          <Text style={styles.colum22}>LOCÃO</Text>
        </Pressable>
      </ScrollView>
    
    </View>
  )
}

const styles = StyleSheet.create({
    nav: {
      backgroundColor: '#C30098',
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
      color: '#fff'
    },
    colum1:{
      marginLeft: 30,
      marginTop: 35,
    },
    colum11:{
        width: 100,
        height:  40,
        backgroundColor: '#250043',
        marginLeft: 30,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        borderEndEndRadius: 10,
        borderEndStartRadius:10,
        color: '#fff'
    },
    colum2:{
      marginLeft: 200,
      marginTop: -138,
    },
    colum22:{
        width: 100,
        height:  40,
        backgroundColor: '#250043',
        marginLeft: 200,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        borderEndEndRadius: 10,
        borderEndStartRadius:10,
        color: '#fff'  
    },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    marginHorizontal: 0,
    backgroundColor: '#f0f0f0',
  },
}
)