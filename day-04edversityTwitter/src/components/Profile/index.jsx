import classes from './index.module.css'

function Profile() {
  return (

    <div className={classes.profile}>
      <div className={classes.profile_cover}> </div>
      <div className={classes.profile_basics}>
        <div className={classes.profile_basics_img}></div>
        <div>
          <h2 className={classes.profile_basics_name}>Display Name</h2>
          <p className={classes.profile_basics_handle}>@handle</p>
        </div>
      </div>
      <div className={classes.profile_bio}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia impedit repellat qui. Laudantium, quos minus voluptate, earum minima, quasi modi error voluptas quidem corrupti sed!</p>
      </div>
      <div className={classes.profile_stats}>
        <div>
          <h3>Following</h3>
          <p>2000</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p>200</p>
        </div>
      </div>
    </div>
  )
}

export default Profile



