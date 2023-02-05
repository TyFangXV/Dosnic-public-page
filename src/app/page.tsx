import { PT_Sans } from '@next/font/google'
import styles from './page.module.css'
import axios from 'axios';
import { useEffect, } from 'react';


const PTSans = PT_Sans({
  weight: ["400","700", "400"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})


async function getData() {
  const {data, status} = await axios.get('https://s3.ap.cloud-object-storage.appdomain.cloud/dosnic/.dosnic.app_data.json');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data...');
  }

  return JSON.parse(JSON.stringify(data))
}

export default async function Home() {
  const data = await getData();
  return (
    <div style={{backgroundColor : "#1E2019"}}> 
      <main className={PTSans.className}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>Dosnic</h1>
            <h2>The ultimate movie streaming app</h2>
            <div className={styles.headerButtonContainer}>
                <a className={styles.downloadButton} download href={`https://dosnic-dl.kryx.cf/dosnic/${data.download_file_name}`}>Download</a>
            </div>
            <p style={{marginTop: "5vh"}} className={styles.btmNav}>
              <a href="#alert">Alerts</a>
              <a href="#">Devlog</a>
              <a href="#feature">Feature</a>
              <a href="https://discord.gg/gBr8ZWTrWQ">Discord</a>
            </p>
          </div>
        </div>
        <div className={styles.appScreenshotContainer}>
          <img src="/home.png" alt="Dosnic App Screenshot" className={styles.appScreenshot}/>
          <img src="/explore.png" alt="Dosnic App Screenshot" className={styles.appScreenshot}/>
          <img src="/search.png" alt="Dosnic App Screenshot" className={styles.appScreenshot}/>
        </div>
        <div className={styles.features} id="feature">
          <h2>Features</h2>
          <div>
            <ul>
              <li>High-definition video quality</li>
              <li>Huge library of movies and TV shows</li>
              <li>Multiple language subtitles</li>
              <li>Up-to-date with new the newest releases</li>            
            </ul>
          </div>
        </div>
      <div className={styles.alerts} id="alert">
          <h1>Alerts</h1>
          <div className={styles.alert}>
            <h3>App beta release</h3>
            <p>The app is finally available to download. Please contact us on our discord server, if you have any inquiries</p>
          </div>
      </div>
    </main>
    </div>
  )
}

