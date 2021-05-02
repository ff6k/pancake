import React from 'react'
import { DataResponse } from 'utils/getLotteryRoundData'
import PastRoundCardError from './PastRoundCardError'
import PastRoundCardDetails from './PastRoundCardDetails'
import { Card } from '../../../../components/Pancakeswap/uikit/src'

interface PastRoundCardProps {
  error: {
    message: string
  }
  data: DataResponse
}

const PastRoundCard: React.FC<PastRoundCardProps> = ({ error, data }) => {
  return <Card>{error.message ? <PastRoundCardError error={error} /> : <PastRoundCardDetails data={data} />}</Card>
}

export default PastRoundCard
