import {useState} from 'react'
import Nav from '../../components/Nav'
import classes from './index.module.css'


function Setting() {
  const [confirmationState, setConfirmationState] = useState(true);
  const [name, setName] = useState("name");
  const [description, setDescription] = useState(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia impedit repellat qui. Laudantium, quos minus voluptate, earum minima, quasi modi error voluptas quidem corrupti sed");
  const [oldPassword, setOldPassword] = useState(" ");
  const [newPassword, setNewPassword] = useState(" ");
  const [confirmNewPassword, setConfirmNewPassword] = useState(" ");

  return (
    <>
      <Nav />
      <div className={classes.container}>
        
        <h2>Basic Info</h2>
        <form className={classes.basic}>
          <input type="text"  placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
          <textarea placeholder="Enter your bio here..." onChange={(e)=>setDescription(e.target.value)}>
          </textarea>
          <input className={classes.input_btn} type="submit" value="Update Info"
            onClick={() => setConfirmationState(true)}/>
        
          {confirmationState && (
            <div className={classes.basic_confirmation}>
              <input className={classes.yes_btn} type="button" value="Yes" />
              <input
                className={classes.no_btn}
                onClick={() => setConfirmationState(false)}
                type="button"
                value="No"
              />
            </div>
          )}
        </form>

        <h2>Update Password</h2>
        <form className={classes.credential}>
          <input type="password"  placeholder="Old Password" onChange={(e)=>setOldPassword(e.target.value)}/>
          <input type="password"  placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} />
          <input type="password"  placeholder="Confirm New Password" onChange={(e)=>setConfirmNewPassword(e.target.value)}/>

          <input className={classes.input_btn} type="submit" value="Update Password" />
        </form>
      </div>
    </>
  )
}

export default Setting

