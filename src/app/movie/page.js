import styles from '@/app/styles/commen.module.css'
import React from 'react'
import Moviecard from '../components/Moviecard';

const movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.RAPID_KEY;
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8205fcc0b8mshf2cc97c7b0fd0c0p198e5ejsn1222bbefc565',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }   
};
const res = await fetch(url, options);
const data = await res.json();
const main_data = data.titles;

console.log("new data", data);
  return (
    <>
        <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <Moviecard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
    </>
  )
}

export default movie