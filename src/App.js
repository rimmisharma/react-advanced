
/* Rendering lists in React */

const topDesserts = [
  {
    id:"1",
    title:"Tiramisu",
    description:"The best tiramisu in town",
    image:"https://sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg",
    price:"$5.00",
  },
  {
    id:"2",
    title:"Lemon Ice Cream",
    description:"Mind blowing taste",
    image:"https://www.lemonblossoms.com/wp-content/uploads/2022/05/Lemon-Ice-Cream-S4.jpg",
    price:"$4.50",
  },
  {
    id:"3",
    title:"Chocolate mousse",
    description:"Unexplored flavour",
    image:"https://marleysmenu.com/wp-content/uploads/2020/04/Boozy-Chocolate-Mousse-Featured-Image-1.jpg",
    price:"$6.00",
  },
];

export default function App(){
  const listItems = topDesserts.map(dessert => {
    const itemImage = <img src ={dessert.image} alt={dessert.description} className="image"></img>
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li className="list">{itemImage}<br></br>
    {itemText}</li>
  })
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}