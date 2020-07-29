import React from 'react'
import { Card } from 'semantic-ui-react'

export default function TaskCard({ header, description, meta }) {
  return (
    <Card header={header} description={description} meta={meta} />
  )
}
