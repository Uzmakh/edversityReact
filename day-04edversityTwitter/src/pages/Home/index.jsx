import Nav from '../../components/Nav'
import Profile from '../../components/Profile'
import Tweet from '../../components/Tweet'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import classes from './index.module.css'


function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const tweetData = [
    {
      title: "My first tweet",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nostrum, dolor cumque beatae quia non fuga sed pariatur reprehenderit rerum ut! Deserunt, non reiciendis! Voluptatibus assumenda nostrum modi impedit dignissimos?",
      date: "01 Jan, 2024",
      likes: 18
    },
    {
      title: "My second tweet",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nostrum, dolor cumque beatae s! Voluptatibus assumenda nostrum modi impedit dignissimos?",
      date: "02 Jan, 2024",
      likes: 20
    },
    {
      title: "My third tweet",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nostrum, dolor cumque beatae quia non fuga sed pariatur reprehenderit rerum ut! ",
      date: "03 Jan, 2024",
      likes: 15
    },
    {
      title: "My forth tweet",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nostrum, dolor cumque beatae quia non fuga sed pariatur reprehenderit rerum ut! Deserunt, non reiciendis! Voluptatibus assumenda nostrum modi impedit dignissimos?",
      date: "04 Jan, 2024",
      likes: 40
    }
  ]

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setIsLoggedIn(true);
        // console.log("User is Logged In!")
      } else {
        navigate('/');
        console.log("User is NOT logged in!")
      }
    });
  }, []);

  return (
    <>
      {isLoggedIn ? (
      <>
        {""}
        < Nav />
        <div className={classes.container}>
          <Profile />
          {tweetData.map((item, index) => {
            return <Tweet key={index} item={item} />;
          }
          )}
        </div>
          {""} 
        </>) : "Loading ..."
      }
   
    </>
  )
}

export default Home;
