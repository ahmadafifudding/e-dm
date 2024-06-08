import { View, Image, StyleSheet } from 'react-native'

export function Header() {
  return (
    <View>
      <Image
        source={require('@/assets/images/subway-construction.png')}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
})
