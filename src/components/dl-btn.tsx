import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../app/page.module.css'

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

export default async function Download_Button() {
  const data = await getData();
  return (
    <div className={styles.headerButtonContainer}>
      <a className={styles.downloadButton} download href={`https://dosnic-dl.kryx.cf/dosnic/${data.download_file_name}`}>Download</a>
  </div>
  );
}

