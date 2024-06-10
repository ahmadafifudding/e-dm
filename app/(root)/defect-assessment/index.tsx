import { DefectAssessmentItem } from '@/components/DefectAssessmentItem'
import { Link } from '@/components/Link'
import { LoadingScreen } from '@/components/LoadingScreen'
import { Colors } from '@/constants/Colors'
import { useRefreshByUser } from '@/hooks/useRefreshByUser'
import { useRefreshOnFocus } from '@/hooks/useRefreshOnFocus'
import { fetchDefectAssessment } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import React from 'react'
import { FlatList, StyleSheet, Text, RefreshControl } from 'react-native'
import { Separator } from '@/components/Separator'

export default function DefectAssestment() {
  const { isPending, data, refetch } = useQuery({
    queryKey: ['defect-assessment'],
    queryFn: () => fetchDefectAssessment(),
  })

  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)
  useRefreshOnFocus(refetch)

  if (isPending) return <LoadingScreen />

  if (!data) return <Text>No data</Text>

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => <Link href='/defect-assessment/create'>Add</Link>,
        }}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <DefectAssessmentItem item={item} />}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={isRefetchingByUser}
            onRefresh={refetchByUser}
            colors={[Colors.primary]}
          />
        }
        ItemSeparatorComponent={() => <Separator />}
      />
    </>
  )
}

const styles = StyleSheet.create({})
