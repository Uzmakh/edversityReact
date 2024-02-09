import Nav from '../../components/Nav';
import Profile from '../../components/Profile';
import Tweet from '../../components/Tweet';
import NewTweet from '../../components/NewTweet';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import classes from './index.module.css'

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState(null);
  const [userData, setUserData] = useState();
  const [newTweetTitle, setNewTweetTitle] = useState("");
  const [newTweetDescription, setNewTweetDescription] = useState("");
  const [tweetData, setTweetData] = useState([]);

  // const tweetData = [
  //   {
  //     title: "My first tweet",
  //     content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nostrum, dolor cumque beatae quia non fuga sed pariatur reprehenderit rerum ut! Deserunt, non reiciendis! Voluptatibus assumenda nostrum modi impedit dignissimos?",
  //     date: "01 Jan, 2024",
  //     likes: 18
  //   },
  //   {
  //     title: "My second tweet",
  //     content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nostrum, dolor cumque beatae s! Voluptatibus assumenda nostrum modi impedit dignissimos?",
  //     date: "02 Jan, 2024",
  //     likes: 20
  //   },
  //   {
  //     title: "My third tweet",
  //     content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nostrum, dolor cumque beatae quia non fuga sed pariatur reprehenderit rerum ut! ",
  //     date: "03 Jan, 2024",
  //     likes: 15
  //   },
  //   {
  //     title: "My forth tweet",
  //     content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nostrum, dolor cumque beatae quia non fuga sed pariatur reprehenderit rerum ut! Deserunt, non reiciendis! Voluptatibus assumenda nostrum modi impedit dignissimos?",
  //     date: "04 Jan, 2024",
  //     likes: 40
  //   }
  // ]

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUserID(uid);
        setIsLoggedIn(true);
        // console.log("User is Logged In!")
      } else {
        navigate('/');
        console.log("User is NOT logged in!")
      }
    });
  }, []);



  useEffect(() => {
    const db = getDatabase();
    const userDataRef = ref(db, "users/" + userID);
    onValue(userDataRef, (snapshot) => {
      // console.log(snapshot.val());
      const data = snapshot.val();
      setUserData(data);
      // console.log(data);
      // console.log(data.tweet);

       if (data?.tweets) {
        const tweets = data.tweets;
        const tweetsList = [];
        for (const tweet in tweets) {
          tweetsList.push(tweets[tweet]);
        }
         setTweetData(tweetsList);
      }
    })
  }, [userID])

  return (
    <>
      {isLoggedIn ? (
      <>
       < Nav />
        <div className={classes.container}>
            <Profile basicInfo={userData} />
            <NewTweet
              sendNewTweet={sendNewTweet}
              title={newTweetTitle} description={newTweetDescription}
              setTitle={setNewTweetTitle}
              setDescription={setNewTweetDescription}
            />
          {tweetData.map((item, index) => {
            return <Tweet key={index} item={item} />;
          }
          )}
        </div>
       
        </>) : "Loading ..."
      }
   
    </>
  )
}

export default Home;
