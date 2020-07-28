import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export const StackOverflowProfile = ({ id }) => {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  console.log(profile.profile_image)
  useEffect(() => {
    fetch(`https://api.stackexchange.com/2.2/users/${id}?site=stackoverflow`)
      .then(response => response.json())
      .then(data => {
        const so = data.items && data.items[0]
        console.log(so)
        setProfile(so)
        setLoading(false)
      })
  }, [])
  return <div className={styles.stackoverflow}>
    {loading ? <div className={styles.so_card}>Loading</div>
      : <div className={styles.so_card}>
        <a href={profile.link} target='_blank' className={styles.so_profile_link} />
        <div className={styles.so_header}>
          <span className={styles.so_logo}>
            <img src={'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png'} alt='Stackoverflow' />
          </span>
          <div className={styles.so_profile_picture_container}>
            <img src={profile.profile_image} alt={profile.display_name} />
          </div>
          <h4 className={styles.so_display_name}>{profile.display_name}</h4>
        </div>
        <div className={styles.so_content}>
          <p className={styles.so_reputation}>{profile.reputation}</p>
          <small className={styles.so_reputation_label}>Stackoverflow reputation</small>
        </div>

        <div className={styles.so_footer}>
          <span className={styles.so_badges_label}>Badges</span>

          <span className={styles.so_badge_wrapper}>
            <span className={`${styles.so_badge} ${styles.so_badge_gold}`} />
            <span className={styles.so_badge_count}>{profile.badge_counts.gold}</span>
          </span>

          <span className={styles.so_badge_wrapper}>
            <span className={`${styles.so_badge} ${styles.so_badge_silver}`} />
            <span className={styles.so_badge_count}>{profile.badge_counts.silver}</span>
          </span>

          <span className={styles.so_badge_wrapper}>
            <span className={`${styles.so_badge} ${styles.so_badge_bronze}`} />
            <span className={styles.so_badge_count}>{profile.badge_counts.silver}</span>
          </span>
        </div>
      </div>
    }
  </div>
}
