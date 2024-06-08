import { Stack, useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { fetchDefectMonitoringDetails } from '@/lib/api'
import { LoadingScreen } from '@/components/LoadingScreen'
import { DefectMonitoringDetails } from '@/components/DefectMonitoringDetails'
import { RefreshControl, ScrollView, StyleSheet } from 'react-native'
import { useRefreshByUser } from '@/hooks/useRefreshByUser'
import { useRefreshOnFocus } from '@/hooks/useRefreshOnFocus'
import { Colors } from '@/constants/Colors'

export default function DefectMonitoringDetailsScreen() {
  const { defectId } = useLocalSearchParams()
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['defect-monitoring-details', defectId as string],
    queryFn: () => fetchDefectMonitoringDetails(defectId as string),
  })
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)
  useRefreshOnFocus(refetch)

  if (isLoading) {
    return (
      <>
        <Stack.Screen options={{ title: 'Defect Monitoring Details' }} />
        <LoadingScreen />
      </>
    )
  }
  if (!data) return null

  return (
    <>
      <Stack.Screen options={{ title: 'Defect Monitoring Details' }} />
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={isRefetchingByUser}
            onRefresh={refetchByUser}
            colors={[Colors.primary]}
          />
        }
      >
        <DefectMonitoringDetails item={data} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
})
