import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

import "./modal.css";
import { useEditFood } from "../../hooks/useEditFood";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

interface ModalProps {
  closeModal(): void;
  initialData: FoodData;
  foodId?: number;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  );
};

export function EditModal({ closeModal, initialData, foodId }: ModalProps) {
  const [editedTitle, setEditedTitle] = useState(initialData.title);
  const [editedPrice, setEditedPrice] = useState(initialData.price);
  const [editedImage, setEditedImage] = useState(initialData.image);
  const { editFoodItem, isLoading } = useEditFood();

  const submit = () => {
    const foodData: FoodData = {
      title: editedTitle,
      price: editedPrice,
      image: editedImage,
    };
    if (foodId !== undefined) {
      editFoodItem({ id: foodId, newData: foodData });
      closeModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <div className="align">
          <h2 className="button-close">
            <p onClick={closeModal}>X</p>
          </h2>
        </div>
        <div>
          <h2 className="h2-color">Edite este item no cardápio</h2>
        </div>

        <form className="input-container">
          <Input
            label="title"
            value={editedTitle}
            updateValue={setEditedTitle}
          />
          <Input
            label="price"
            value={editedPrice}
            updateValue={setEditedPrice}
          />
          <Input
            label="image"
            value={editedImage}
            updateValue={setEditedImage}
          />
        </form>
        <button onClick={submit} className="btn-secondary">
          {isLoading ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}
