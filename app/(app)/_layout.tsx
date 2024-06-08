import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        statusBarStyle: 'dark',
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen name='(root)' options={{ headerShown: false }} />
      <Stack.Screen name='+not-found' />
      <Stack.Screen name='sign-in' options={{ headerShown: false }} />
      <Stack.Screen
        name='sign-up'
        options={{
          title: 'Create Account',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 24 },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  )
}
