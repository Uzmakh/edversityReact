import {Outlet} from 'react-router-dom'

export default function ProductLayout() {
    const outletContext = {
        name: "products",
        project: "Edversity Twitter",
        instituition:"Edversity"
    }
    return (
        <>
            <p>This is products Header </p>
           <Outlet context={outletContext}/> 

        <p>This is products Footer </p>
        </>
    )
}