import Nav from "../../components/Nav";
import classes from './index.module.css'


function Followings() {
    const followers = [
        {
            name: "John Doe",
            handle: "@johndoe"
        },
        {
            name: "John Doe",
            handle: "@johndoe"
        },
        {
            name: "John Doe",
            handle: "@johndoe"
        },
    ];
    return (
        <>
            <Nav />
            <div className={classes.container}>
                <h2>Followers</h2>
                {followings.map((followings, index) => {
                    return (
                        <div key={index} className={classes.followings}>
                            <h3>{followings.name}</h3>
                            <p>{followings.handle}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
export default Followings;