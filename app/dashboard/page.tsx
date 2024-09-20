import QRCodePage from '@/components/qr-code'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

const Dashboard = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const userid = user.email?.split('@')[0]
  return (
    <div>Dashboard
      <QRCodePage state={userid} />
    </div>
  )
}

export default Dashboard