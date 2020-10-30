import React from 'react'

const AddBookForm = () => {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
  const categoriesOptions = categories.map(category => <option>{category}</option>)
  
  return (
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Book</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">categories</label>
        <select class="form-control" id="exampleFormControlSelect1">
         {categoriesOptions}
        </select>
      </div>
      <button type="submit"></button>
    </form>
  )
}

export default AddBookForm
