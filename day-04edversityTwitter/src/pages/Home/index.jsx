
import Nav from '../../components/Nav'
import Profile from '../../components/Profile'
import Tweet from '../../components/Tweet'
import './index.css'

function Home() {
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
  return (
    <>
      <Nav />
      <div className='container'>
        <Profile />
        {tweetData.map((item,index) => {
          return <Tweet key={index} item={item} />;
        }
        )}
      </div>
    
    </>
  )
}

export default Home;
