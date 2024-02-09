import { useState, useEffect } from "react";
import classes from './index.module.css'

function Profile({ basicInfo }) {
  // console.log("Basic Info - ", basicInfo);
  const [userInfo, setUserInfo] = useState({
    name: "",
    followers: 0,
    followings: 0,
    bio: "",
  })

  useEffect(() => {
    // console.log("Basic Info - ", basicInfo);
    if (basicInfo) {
      console.log("Ready to show!")
      setUserInfo(basicInfo);
    }
  }, [basicInfo])
  
  return (
     <div className={classes.profile}>
      <div className={classes.profile_cover}> </div>
      <div className={classes.profile_basics}>
        <div className={classes.profile_basics_img}></div>
        <div>
          <h2 className={classes.profile_basics_name}>{userInfo.name}</h2>
          <p className={classes.profile_basics_handle}>@handle</p>
        </div>
      </div>
      <div className={classes.profile_bio}>
        <p>{userInfo.bio}</p>
      </div>
      <div className={classes.profile_stats}>
        <div>
          <h3>Following</h3>
          <p>{userInfo.followings}</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p>{userInfo.followers}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile



