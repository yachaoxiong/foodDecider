import React, { useState, useRef, useEffect } from 'react'
import { LuckyGrid,LuckyWheel } from '@lucky-canvas/react'
import styles from './styles.module.css'
import AppModal from '../components/ui/AppModal'
import Lottie from "lottie-react";
import firework from '../public/firework.json'
import { IoCloseSharp } from 'react-icons/io5'
import useSound from 'use-sound';
import { useWindowDimensions } from '../hooks/useWindowDimensions'

export default function LuckyGridScreen() {
  const orientation = useWindowDimensions()
  const [play, { stop }] = useSound('./bg.mp3')
  const [playS, { stops }] = useSound('./success.wav')
  const [isOpen, setIsOpen] = useState(false)
  const [result, setResult] = useState(null)
  const [resultImg, setResultImg] = useState(null)
  const [blocks] = useState([
    {
      borderRadius: "30px", padding: '10px', background: '#0A2647', color: '#fff',
    },
    {
      borderRadius: "30px", padding: '10px', background: '#0a2647d1', color: '#fff',
    }
  ])

  const ChineseDishes = {
    src: "./nianyikuaizi.jpg",
    width: '50%',
    top: '30%',
    fonts: [
      {
        text: '拈一筷子',
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
      },
    ],
  }

  const hotpot = {
    src: "./dahuhotpot.jpg",
    width: '50%',
    top: '30%',
    fonts: [
      {
        text: '大虎火锅',
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
      },
    ],
  }
  const jbbq = {
    src: "./gyubee.jpg",
    width: '50%',
    top: '30%',
    fonts: [
      {
        text: '牛兵卫烧烤',
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
      },
    ],
  }
  const cbbq = {
    src: "./gala.jpg",
    width: '50%',
    top: '30%',
    fonts: [
      {
        text: '旮旯小串',
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
      },
    ],
  }
  const airasushi = {
    src: "./aira.jpg",
    width: '50%',
    top: '20%',
    fonts: [
      {
        text: 'Aira 寿司',
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
      },
    ],
  }
  const leyuan = {
    src: "./leyuan.jpg",
    width: '50%',
    top: '30%',
    fonts: [
      {
        text: '乐园韩餐',
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
      },
    ],
  }
  
  const thefry = {
    src: "./thefry.png",
    width: '50%',
    top: '20%',
    fonts: [
      {
        text: 'The Fry 炸鸡',
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
      },
    ],
  }

  const pho = {
    src: "./phoTime.png",
    width: '50%',
    top: '20%',
    fonts: [
      {
        text: 'Pho Time 越南粉',
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
      },
    ]
  }
  const xiaolongkan = {
    src: "./xiaolongkan.jpg",
    width: '50%',
    top: '20%',
    fonts: [
      {
        text: '小龙坎火锅',
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
      },
    ]
  }
  const bbqChicken = {
    src: "./bbqChicken.png",
    width: '50%',
    width: '50%',
    top: '20%',
    fonts: [
      {
        text: 'BBQ Chicken 韩式炸鸡',
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
      },
    ]
  }
  const prizes =[
    { background: '#e9e8fe',imgs: [ChineseDishes] },
    { background: '#579BB1',imgs: [hotpot] },
    { background: '#FD8A8A',imgs: [thefry] },
    { background: '#579BB1',imgs: [pho] },
    { background: '#F1F7B5',imgs: [hotpot] },
    { background: '#144272',imgs: [jbbq] },
    { background: '#0A2647',imgs: [cbbq]},
    { background: '#579BB1',imgs: [leyuan] },
    { background: '#FFEBB7',imgs: [airasushi] },
    { background: '#FF6E31', imgs: [xiaolongkan] },
    { background: '#EB455F',imgs: [bbqChicken] },
  ]
//  const  buttons = [
//   {
//     x: 2, y: 2,
//     background: 'rgba(0,0,0,0)',
//     imgs: [{
//       src: './startBtn.png',
//       width: '80%',
//       height: '60%',
//       top: '20%',
//     }],
//   },
//   ]
const buttons= [
  { radius: '40%', background: '#0A2647' },
  { radius: '35%', background: '#144272' },
  {
    radius: '25%', background: '#0A2647',
    pointer: true,
    imgs: [{
      src: './wheelBtn.png',
      width: '110%',
      height: '160%',
      top: '-206%',
    }],
  },
]
  
  const myLucky = useRef()
  return <div className={styles.container}>
    <h1 className={styles.title}>今天吃点啥好呢？</h1>
    <img
      src="./main.jpg"
      alt='main'
      className={styles.mainBg}
      style={{}}
    />
    <LuckyWheel
      ref={myLucky}
      cols={5}
      rows={5}
      width={orientation.width > 768 ? '600px' : orientation.width <= 768 && orientation.width > 481 ? '500px' : '400px'}
      height={orientation.width > 768 ? '600px' : orientation.width <= 768 && orientation.width > 481 ? '500px' : '400px'}
      blocks={blocks}
      prizes={prizes}
      buttons={buttons}
      defaultStyle={{ borderRadius: '1220px', shadow: '0 2px 10px #F8F4EA'}}
      activeStyle={{ background: '#F8F4EA' ,shadow: '0 2px 10px #F8F4EA'}}
      onStart={() => { // 点击抽奖按钮会触发star回调
        myLucky.current.play()
        play()
        setTimeout(() => {
          const index = Math.random() * 6 >> 0
          myLucky.current.stop(index)
        }, 2500)
      }}
      onEnd={prize => {
        stop()
        setIsOpen(true)
        setResult(prize.imgs[0].fonts[0].text)
        setResultImg(prize.imgs[0].src)
        playS()
      }}
    />
    <AppModal
      showModal={isOpen}
      setShowModal={setIsOpen}
      className={styles.modalContainer}      
     >
      <div className={styles.mainContent}>
          <IoCloseSharp className={styles.closeIcon} fontSize={45} onClick={() => setIsOpen(false)}/>
          <Lottie 
              animationData={firework} 
              style={ orientation.width > 768 ? {  height: 200 } : orientation.width <= 768 && orientation.width > 481 ? {  height: 180 } : {  height: 120 }}
          /> 
        <h1 className={styles.resultTitle}>Wow! 就决定是你了 <span>{result}</span> </h1>
        <div className={styles.logo}>
          <img 
            src={resultImg}
            alt='main'
            className={styles.mainBg}
            style={orientation.width > 768 ? { width: 200, height: 200 } : orientation.width <= 768 && orientation.width > 481 ? { width: 160, height: 160 } : { width: 120, height: 120 }}
          />
        </div>
    </div>        
    </AppModal>
  </div>
  
}
