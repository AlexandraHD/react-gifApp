/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState()

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={ handleSubmit } aria-label="form" >
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ handleInputChange }
        />
        
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}