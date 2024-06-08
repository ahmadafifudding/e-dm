import { LoadingScreen } from '@/components/LoadingScreen'
import { Colors } from '@/constants/Colors'
import { useAuth } from '@/providers/AuthProvider'
import { Redirect, Stack } from 'expo-router'

export default function AppLayout() {
  const { session, isLoading } = useAuth()

  if (isLoading) return <LoadingScreen />
  if (!session) return <Redirect href='/sign-in' />

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: Colors.background },
        headerTitleStyle: { fontSize: 22, color: Colors.white },
        headerStyle: { backgroundColor: Colors.primary },
        headerTitleAlign: 'center',
        statusBarColor: Colors.primary,
        statusBarStyle: 'light',
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen name='index' options={{ title: 'Home' }} />
      <Stack.Screen name='defect-monitoring' options={{ headerShown: false }} />
    </Stack>
  )
}
