import React, { useState, useRef, useEffect } from 'react'
import { LuckyGrid } from '@lucky-canvas/react'
import styles from './styles.module.css'
import AppModal from '../components/ui/AppModal'
import Lottie from "lottie-react";
import firework from '../public/firework.json'
import { IoCloseSharp } from 'react-icons/io5'
import useSound from 'use-sound';

export default function App() {
  const [play, { stop }] = useSound('./bg.mp3')
  const [playS, { stops}] = useSound('./success.wav')
  const [isOpen, setIsOpen] = useState(false)
  const [result, setResult] = useState(null)
  const [resultImg, setResultImg] = useState(null)
  const [blocks] = useState([
    {borderRadius:"30px", padding: '10px', background: '#0a2647d1' },
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
  const prizes =[
    { x: 0, y: 0, imgs: [ChineseDishes] },
    { x: 1, y: 0, imgs: [hotpot] },
    { x: 2, y: 0, imgs: [jbbq] },
    { x: 2, y: 1, imgs: [cbbq]},
    { x: 2, y: 2, imgs: [airasushi]},
    { x: 1, y: 2, imgs: [leyuan]},
    { x: 0, y: 2, imgs: [thefry] },
    { x: 0, y: 1, imgs: [pho]},
  ]
 const  buttons = [
  {
    x: 1, y: 1,
    background: 'rgba(0,0,0,0)',
    imgs: [{
      src: './startBtn.png',
      width: '80%',
      height: '60%',
      top: '20%',
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
    <LuckyGrid
      ref={myLucky}
      width="600px"
      height="600px"
      blocks={blocks}
      prizes={prizes}
      buttons={buttons}
      defaultStyle={{ borderRadius: '120px'}}
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
              style={{height:200}}
          /> 
        <h1 className={styles.resultTitle}>Wow! 就决定是你了 <span>{result}</span> </h1>
        <div className={styles.logo}>
          <img 
            src={resultImg}
            alt='main'
            className={styles.mainBg}
            style={{width: 200, height: 200}}
          />
        </div>
    </div>        
    </AppModal>
  </div>
  
}
