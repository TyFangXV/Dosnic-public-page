import { PT_Sans } from '@next/font/google'
import styles from './page.module.css'
import axios from 'axios';
import { use, useEffect, useState, } from 'react';
import { useRouter } from 'next/router';




export default function Frame() {
  const router = useRouter();
  const { url} = router.query
  const [mu, setMu] = useState("")

  useEffect(() => {
      setMu(url as string)
  }, [url])
  
  return (
    <iframe style={{width : "100vw", height : "100vh" }} src={mu} allowFullScreen/>
  )
}

