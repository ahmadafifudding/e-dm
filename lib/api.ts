import { Tables } from '@/types/database.types'
import { supabase } from './supabase'

export async function fetchDefectMonitoring(
  block: string
): Promise<Tables<'defect-monitoring'>[] | null> {
  const { data } = await supabase
    .from('defect-monitoring')
    .select('*')
    .eq('block', block)
  return data
}

export async function fetchDefectMonitoringDetails(
  defectId: string
): Promise<Tables<'defect-monitoring'> | null> {
  const { data } = await supabase
    .from('defect-monitoring')
    .select('*')
    .eq('id', defectId)
    .single()
  return data
}
