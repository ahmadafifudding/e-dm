import { View, StyleSheet } from 'react-native'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Background } from '@/components/Background'
import { router } from 'expo-router'
import { ButtonLink } from '@/components/ButtonLink'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* <Button label='Defect Assessment' variant='secondary' />
        <Button
          label='Defect Monitoring'
          variant='secondary'
          onPress={() => router.push('/block')}
        /> */}
        <ButtonLink href='/defect-assessment'>Defect Assessment</ButtonLink>
        <ButtonLink href='/defect-monitoring'>Defect Monitoring</ButtonLink>
      </View>
      <Background />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
  },
  content: {
    paddingHorizontal: 32,
    rowGap: 24,
    marginTop: 32,
  },
})
