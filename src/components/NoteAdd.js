
import { SendOutlined } from '@ant-design/icons/lib/icons'
import { Input } from 'antd'
import React from 'react'

export default function NoteAdd() {
  return (
    <div style={{width:'50%' ,margin:'0 auto',paddingBottom:'50px' }}>

    <Input  size="large" addonAfter={<SendOutlined />} placeholder="Güzel bir gün..."  />
    </div>
  )
}
