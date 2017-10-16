import React from 'react'

const InviceAdder = ({
  onChangeTitle,
  titleValue,
  onChangePrice,
  priceValue,
  onAddClick
}) => (
    <div>
      <input
        type="text"
        onChange={onChangeTitle.bind(this)}
        value={titleValue}
        placeholder="item name"
      />
      <input
        type="text"
        onChange={onChangePrice.bind(this)}
        value={priceValue}
      />
      <button onClick={onAddClick}>add</button>
    </div>
)

export default InviceAdder
