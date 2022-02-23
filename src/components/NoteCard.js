import { DeleteOutlined, EditOutlined } from '@ant-design/icons/lib/icons'
import { Card } from 'antd'
import React from 'react'

export default function NoteCard() {



  return (
    <Card title="Note" style={{ width: 300 }} loading hoverable actions={[<DeleteOutlined />,<EditOutlined />]}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
  )
}
