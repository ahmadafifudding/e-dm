import { Colors } from '@/constants/Colors'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={Colors.primary} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
