import React from 'react'
import { useBlock } from 'state/hooks'
import { Progress, ProgressProps } from './Pancakeswap/uikit/src'

interface BlockProgressProps extends ProgressProps {
  startBlock: number
  endBlock: number
}

const BlockProgress: React.FC<BlockProgressProps> = ({ startBlock, endBlock, ...props }) => {
  const { currentBlock } = useBlock()
  const rawProgress = ((currentBlock - startBlock) / (endBlock - startBlock)) * 100
  const progress = rawProgress <= 100 ? rawProgress : 100

  return <Progress primaryStep={progress} {...props} />
}

export default BlockProgress
