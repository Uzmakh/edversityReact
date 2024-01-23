import {useOutletContext} from 'react-router-dom'

function Products() {
  const context = useOutletContext();
console.log(context);
  return (
    <div>
      <h1>This is products page</h1>
      <p>Instituition: {context.instituition}</p>
    </div>
  )
}

export default Products

