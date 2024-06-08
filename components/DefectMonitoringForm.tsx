import { Button } from '@/components/Button'
import { ImagePlaceholder } from '@/components/ImagePlaceholder'
import { Message } from '@/components/Message'
import { Text } from '@/components/Text'
import { TextArea } from '@/components/TextArea'
import { Colors } from '@/constants/Colors'
import { block, level, trade, zone } from '@/data'
import { CreateDefectMonitoringSchema } from '@/validation'
import { Picker } from '@react-native-picker/picker'
import { Stack } from 'expo-router'
import { Controller, useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'

export function DefectMonitoringForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateDefectMonitoringSchema>()

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Text type='link' style={{ color: Colors.white }}>
              Save
            </Text>
          ),
        }}
      />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View>
            <Text type='label'>Block</Text>
            <Controller
              name='block'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={onChange}
                  style={{ backgroundColor: Colors.gray1 }}
                >
                  {block.map(item => (
                    <Picker.Item key={item} label={item} value={item} />
                  ))}
                </Picker>
              )}
            />
            {errors.block && (
              <Message type='error'>{errors.block.message}</Message>
            )}
          </View>
          <View>
            <Text type='label'>Level</Text>
            <Controller
              name='level'
              control={control}
              render={({ field: { value, onChange } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={onChange}
                  style={{ backgroundColor: Colors.gray1 }}
                >
                  {level.map(item => (
                    <Picker.Item key={item} label={item} value={item} />
                  ))}
                </Picker>
              )}
            />
            {errors.level && (
              <Message type='error'>{errors.level.message}</Message>
            )}
          </View>
          <View>
            <Text type='label'>Zone</Text>
            <Controller
              name='zone'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={onChange}
                  style={{ backgroundColor: Colors.gray1 }}
                >
                  {zone.map(item => (
                    <Picker.Item key={item} label={item} value={item} />
                  ))}
                </Picker>
              )}
            />
            {errors.zone && (
              <Message type='error'>{errors.zone.message}</Message>
            )}
          </View>
          <View>
            <Text type='label'>Trade</Text>
            <Controller
              name='trade'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={onChange}
                  style={{ backgroundColor: Colors.gray1 }}
                >
                  {trade.map(item => (
                    <Picker.Item key={item} label={item} value={item} />
                  ))}
                </Picker>
              )}
            />
            {errors.zone && (
              <Message type='error'>{errors.zone.message}</Message>
            )}
          </View>
          <View>
            <Text type='label'>Image</Text>
            <ImagePlaceholder />
            <Controller
              name='image'
              control={control}
              render={({ field }) => (
                <Button
                  label='Pick an image'
                  variant='secondary'
                  style={{ marginTop: 10 }}
                />
              )}
            />
          </View>
          <View>
            <Text type='label'>Description</Text>
            <Controller
              name='description'
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextArea
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  numberOfLines={8}
                  placeholder='Enter a description of the defect.'
                />
              )}
            />
            {errors.description && (
              <Message type='error'>{errors.description.message}</Message>
            )}
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 32,
  },
  innerContainer: {
    rowGap: 16,
  },
})
