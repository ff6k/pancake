import React from 'react'
import useI18n from 'hooks/useI18n'
import { TranslatableText as AchievementTitleType } from 'state/types'
import { Text, TextProps } from '../../../components/Pancakeswap/uikit/src'

interface AchievementTitleProps extends TextProps {
  title: AchievementTitleType
}

const AchievementTitle: React.FC<AchievementTitleProps> = ({ title, ...props }) => {
  const TranslateString = useI18n()

  if (typeof title === 'string') {
    return (
      <Text bold {...props}>
        {title}
      </Text>
    )
  }

  const { id, fallback, data = {} } = title

  return (
    <Text bold {...props}>
      {TranslateString(id, fallback, data)}
    </Text>
  )
}

export default AchievementTitle
