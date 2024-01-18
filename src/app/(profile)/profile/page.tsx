import Profile from '@/components/profile/Profile';
import { dataUserByToken } from '@/lib/actions/getUser.action';
import { IUserAndToken } from '@/lib/interfaces/User';
import React from 'react'

const ProfilePage = async() => {
  await new Promise(resolve => setTimeout(resolve, 20000));
  const {user, success, message, error }= await dataUserByToken() as { user: IUserAndToken, success: boolean, message: string, error: string}
  // if(!success) return null;
  
  return (
    <main>
      <Profile user={user} />
    </main>
  )
}

export default ProfilePage