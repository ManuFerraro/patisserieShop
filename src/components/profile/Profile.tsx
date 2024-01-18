'use client'
import { IUserAndToken } from '@/lib/interfaces/User'
import Image from 'next/image';
import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

interface Params {
    user: IUserAndToken | undefined 
}

const Profile = ({user}: Params) => {

   const dataUserOn = user;
   const [showInputFile, setShowInputFile] = useState<boolean>(false)
   const [isShowData, setisShowData] = useState(true)

   console.log('JAJAJA0', user)
   


  return (
    <section className='max-w-screen-lg mx-auto border border-black'>
           
    </section>
  )
}

export default Profile