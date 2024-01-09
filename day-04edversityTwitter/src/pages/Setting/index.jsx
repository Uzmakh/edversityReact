import {useState} from 'react'
import Nav from '../../components/Nav'
import classes from './index.module.css'


function Setting() {
  const [confirmationState, setConfirmationState] = useState(false);
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
          <input type="text"  placeholder="Enter your name" onChange={((e) => setName(e.target.value))} />
          <textarea  placeholder="Enter your bio here.." onChange={((e)=>setDescription(e.target.value))}>
          </textarea>
          <input className={classes.input_btn} type="submit" value="Update" />
        </form>

        <h2>Update Password</h2>
        <form className={classes.credential}>
          <input type="password"  placeholder="Old Password" onChange={((e)=>setOldPassword(e.target.value))}/>
          <input type="password"  placeholder="New Password" onChange={((e) => setNewPassword(e.target.value))} />
          <input type="password"  placeholder="Confirm New Password" onChange={((e)=>setConfirmNewPassword(e.target.value))}/>

          <input className={classes.input_btn} type="submit" value="Update Password" />
        </form>
      </div>
    </>
  )
}

export default Setting

