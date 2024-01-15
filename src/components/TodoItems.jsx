import Item from "./Item";

const TodoItems = ({todoItems,handleDeleteItem}) => {
  
  return (
    <div>
      {todoItems.map(item => <Item key={item.name} handleDeleteItem={handleDeleteItem} items={item}/>)}
    </div>
  )
}

export default TodoItems;