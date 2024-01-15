import React from 'react'

const Item = ({items,handleDeleteItem}) => {
  return (
    <div className='container'>
      <div className="row mt-3">
        <div className="col-6">
          <h3>{items.name}</h3>
        </div>
        <div className="col-4">
          <h3>{items.date}</h3>
        </div>
        <div className="col-2">
          <button className='btn btn-danger'
          onClick={() =>handleDeleteItem(items.name)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Item