import React,{use, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
     //redirect to /prize in 2 seconds
    setTimeout(() => {

      router.push('/prize')
    }, 2000)

  }, [])

  return (
    <div className={styles.container}>
      <h1>Welcome to My App</h1>
      <p>This page will redirect in a few seconds...</p>
      <p className={styles.note}>Developed by Eric 2022</p>
    </div>
  )
}
