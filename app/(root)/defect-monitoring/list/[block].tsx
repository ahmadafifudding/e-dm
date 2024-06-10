import { DefectMonitoringItem } from '@/components/DefectMonitoringItem'
import { LoadingScreen } from '@/components/LoadingScreen'
import { Separator } from '@/components/Separator'
import { Colors } from '@/constants/Colors'
import { useRefreshByUser } from '@/hooks/useRefreshByUser'
import { useRefreshOnFocus } from '@/hooks/useRefreshOnFocus'
import { fetchDefectMonitoring } from '@/lib/api'
import { Tables } from '@/types/database.types'
import { useQuery } from '@tanstack/react-query'
import { Stack, router, useLocalSearchParams } from 'expo-router'
import { useCallback } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { Text } from '@/components/Text'

export default function DefectMonitoringListScreen() {
  const { block } = useLocalSearchParams()
  const { isPending, data, refetch } = useQuery({
    queryKey: ['defect-monitoring', block as string],
    queryFn: () => fetchDefectMonitoring(block as string),
  })
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)
  useRefreshOnFocus(refetch)

  const onListItemPress = useCallback(
    (item: Tables<'defect-monitoring'>) => {
      router.push(`/defect-monitoring/details/${item.id}`)
    },
    [router]
  )

  const renderItem = useCallback(
    ({ item }: { item: Tables<'defect-monitoring'> }) => {
      return <DefectMonitoringItem item={item} onPress={onListItemPress} />
    },
    [onListItemPress]
  )

  if (isPending)
    return (
      <>
        <Stack.Screen options={{ title: block as string }} />
        <LoadingScreen />
      </>
    )

  return (
    <>
      <Stack.Screen options={{ title: block as string }} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={isRefetchingByUser}
            onRefresh={refetchByUser}
            colors={[Colors.primary]}
          />
        }
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={() => (
          <Text type='subtitle' style={{ marginTop: 32, textAlign: 'center' }}>
            No data
          </Text>
        )}
      />
    </>
  )
}
