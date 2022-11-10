import { useState } from "react";
import { Divider, Input } from 'antd';

// Pega a informação de BookCard por props
function AddNewForm(props) {
    // Seta os estados iniciais dos inputs
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    // Monitora os inputs a cada mudança
    const handleNameInput = (e) => {
        setName(e.target.value);
    }
    const handleImageInput = (e) => {
        setImage(e.target.value);
    }
    const handleCaloriesInput = (e) => {
        setCalories(e.target.value);
    }
    const handleServingsInput = (e) => {
        setServings(e.target.value);
    }

    // Trata o evento submit e cria um novo objeto
    const handleSubmit = (e) => {
        // Impede que a página seja recarregada
        e.preventDefault();
        // Cria um novo objeto
        const newFood = {
            name,
            image,
            calories,
            servings
        }
        // Chama o addFood que está sendo passado por props
        props.addFood(newFood);
        // Limpa os inputs no final do processo
        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>
    
            <label>Name</label>
            <Input value={name} type="text" onChange={handleNameInput} placeholder="Escreva o nome da comida" />
    
            <label>Image</label>
            <Input value={image} type="text" onChange={handleImageInput} placeholder="Insira o caminho da imagem"/>
    
            <label>Calories</label>
            <Input value={calories} type="number" onChange={handleCaloriesInput} />
    
            <label>Servings</label>
            <Input value={servings} type="number" onChange={handleServingsInput} />
    
            <button type="submit">Create</button>
        </form>
    )
}

export default AddNewForm;