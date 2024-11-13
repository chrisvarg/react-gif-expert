import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return
    
    // TODO: 80.emitir un evento desde el componente hijo al padre...
    onNewCategory(inputValue.trim());
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ handleInputChange}
      />
    </form>
  )
}
