import React from 'react'
import Head from "next/head"

export default function Meta({title, keywords, description}) {
  
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <link 
        rel="stylesheet preload" 
        as="style" 
        href="https://pro.fontawesome.com/releases/v5.15.0/css/all.css" 
        crossOrigin="anonymous"
      />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Wiki Empressarios',
  keywords: '',
  description: '',
}