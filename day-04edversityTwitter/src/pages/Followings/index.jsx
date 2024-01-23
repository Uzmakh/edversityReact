import Nav from "../../components/Nav";
import classes from './index.module.css'


function Followings() {
    const followings = [
        {
            name: "Shamsheer Ali",
            handle: "@shamsheer"
        },
        {
            name: "Ahmed Sohail",
            handle: "@sohail"
        },
        {
            name: "Dilawar Khan",
            handle: "@dilawar"
        },
    ];
    return (
        <>
            <Nav />
            <div className={classes.container}>
                <h2>Followings</h2>
                {followings.map((following, index) => {
                    return (
                        <div key={index} className={classes.following}>
                            <h3>{following.name}</h3>
                            <p>{following.handle}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
export default Followings;