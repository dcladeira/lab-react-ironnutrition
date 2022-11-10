import { useState } from 'react';
import { Card, Col, Button, Row} from 'antd';
import AddNewForm from '../AddNewForm/AddNewForm';
import Search from 'antd/lib/transfer/search';

// Importa imagens porque o computador do trabalho bloqueia o site usado no arquivo foods.json.
import Pizza from '../../img/eTmWoAN_d.webp';
import Salad from '../../img/DupGBz5_d.webp';
import SweetPotato from '../../img/hGraGyR_d.webp';
import Gnocchi from '../../img/93ekwW0_d.webp';
import PotRoast from '../../img/WCzJDWz_d.webp';
import Lasagna from '../../img/ClxOafl_d.webp';
import Hamburger from '../../img/LoG39wK_d.webp';
import PadThai from '../../img/5ktcSzF_d.webp';
import Almonds from '../../img/JRp4Ksx_d.webp';
import Sarma from '../../img/yOlf4Fj_d.webp';
import Bacon from '../../img/7GlqDsG_d.webp';
import HotDog from '../../img/QqVHdRu_d.webp';
import ChocolateCake from '../../img/yrgzA9x_d.webp';
import WheatBread from '../../img/TsWzMfM_d.webp';
import Orange from '../../img/abKGOcv_d.webp';
import Banana from '../../img/BMdJhu5_d.webp';
import Yogurt from '../../img/URhdrAm_d.webp';

function FoodBox() {

    // Cria array da comidas. Não foi possível importar o arquivo foods.json porque
    // o computador do trabalho bloquei o site das imagens.
    const foodsArray = [
        {
          "name": "Pizza",
          "calories": 400,
          "image": Pizza,
          "servings": 1
        },
        {
          "name": "Salad",
          "calories": 150,
          "image": Salad,
          "servings": 1
        },
        {
          "name": "Sweet Potato",
          "calories": 120,
          "image": SweetPotato,
          "servings": 1
        },
        {
          "name": "Gnocchi",
          "calories": 500,
          "image": Gnocchi,
          "servings": 1
        },
        {
          "name": "Pot Roast",
          "calories": 350,
          "image": PotRoast,
          "servings": 1
        },
        {
          "name": "Lasagna",
          "calories": 750,
          "image": Lasagna,
          "servings": 1
        },
        {
          "name": "Hamburger",
          "calories": 400,
          "image": Hamburger,
          "servings": 1
        },
        {
          "name": "Pad Thai",
          "calories": 475,
          "image": PadThai,
          "servings": 1
        },
        {
          "name": "Almonds",
          "calories": 75,
          "image": Almonds,
          "servings": 1
        },
        {
          "name": "Sarma",
          "calories": 200,
          "image": Sarma,
          "servings": 1
        },
        {
          "name": "Bacon",
          "calories": 175,
          "image": Bacon,
          "servings": 1
        },
        {
          "name": "Hot Dog",
          "calories": 275,
          "image": HotDog,
          "servings": 1
        },
        {
          "name": "Chocolate Cake",
          "calories": 490,
          "image": ChocolateCake,
          "servings": 1
        },
        {
          "name": "Wheat Bread",
          "calories": 175,
          "image": WheatBread,
          "servings": 1
        },
        {
          "name": "Orange",
          "calories": 85,
          "image": Orange,
          "servings": 1
        },
        {
          "name": "Banana",
          "calories": 175,
          "image": Banana,
          "servings": 1
        },
        {
          "name": "Yogurt",
          "calories": 125,
          "image": Yogurt,
          "servings": 1
        }
      ]

    const [foods, setFoods] = useState(foodsArray);

    // Adiciona um novo item na lista
    const addFood = (newFood) => {
      const updateFoods = [...foods, newFood];
      setFoods(updateFoods);
    }
  
    // Deleta um item da lista
    const deleteFood = (foodKey) => {
      const newFoods = foods.filter((food, index) => {
        return index !== foodKey;
      })
      setFoods(newFoods);
    }

    // Procura item na lista
    const searchFood = (substring) => {
      const newFoods = foods.filter((food, index) => {
        return food.name.includes(substring);
      })
      setFoods(newFoods);
    }
    
    // Renderiza todos os itens da lista
    const renderFoods = foods.map((food, index) => {
      return (
        <Col className="foodBox" key={index}>
            <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
            >
            <img src={food.image} height={60} alt="food" />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>
            <Button type="primary" onClick={()=>deleteFood(index)}> Delete </Button>
            </Card>
        </Col>
      )
    });

    return (
        <Col>
            <Row>
                <Search searchFood={searchFood} />
            </Row>
            <Row>
                <AddNewForm addFood={addFood} />
            </Row>
            <Row>
                {renderFoods}
            </Row>
        </Col>

    )
}

export default FoodBox;