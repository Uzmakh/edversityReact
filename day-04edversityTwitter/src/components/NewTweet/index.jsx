import classes from "./index.module.css";

function NewTweet({ newTweetTitle, newTweetDescription, setNewTweetTitle, setNewTweetDescription }) {
  
  const [userID, setUserID] = useState(null);


    const sendNewTweet = (e) => {
        e.preventDefault();
        if (!newTweetTitle.trim() || !newTweetDescription.trim()) {
            alert("One of the field is empty!")
            return;
        }
        const db = getDatabase();
        const tweetRef = ref(db, "users/" + userID + "/tweets");
        const newTweetRef = push(tweetRef);
        set(newTweetRef, {
            title: title,
            description: description,
            date: new Date().getTime(),
            likes: 0,
        });
        alert("New Tweet Created!");
        setNewTweetTitle("");
        setNewTweetDescription("");
    };
    
    return (
        <form className={classes.tweet} onSubmit={(e) => sendNewTweet(e)} >
        <input type="text" placeholder="Tweet Title"
        value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Tweet Description"
        value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            <input type="submit" className={classes.tweet_submit} value={"Add Tweet"}/>
     </form>
    );
}

export default NewTweet;