import classes from './index.module.css'

function Tweet({ item }) {
  const { title, description, date, likes } = item;
  return (
    <div className={classes.tweet}>
      <h2 className={classes.tweet_title}>{title}</h2>
      <p className={classes.tweet_body}>{description}</p>
      <div className={classes.divider}></div>
      <div className={classes.tweet_stats}>
        <p className={classes.tweet_date}>{new Date(date).getDay()}</p>
        <p className={classes.tweet_like}>{likes} Likes</p>
      </div>
    </div>
  )
}

export default Tweet;
