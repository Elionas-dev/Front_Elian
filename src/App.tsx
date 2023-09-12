import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/card";
import { FoodData } from "./interface/FoodData";
import { useFoodData } from "./hooks/useFoodData";
import { CreateModal } from "./components/create-modal/create-modal";
import NavbarMenu from "./components/menu/menu";

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <NavbarMenu /> {/* Renderize o menu aqui */}
      <h1>Ingredientes para fazer a receita</h1>
      <div className="card-grid">
        {data?.map(
          (foodData) => (
            console.log(foodData, "foodData"),
            (
              <Card
                price={foodData.price}
                title={foodData.title}
                image={foodData.image}
                id={foodData.id}
              />
            )
          )
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  );
}

export default App;
