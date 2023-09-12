import { useState } from "react";
import { useDeleteFood } from "../../hooks/useDeleteFood";
import "./card.css";
import { EditModal } from "../edit-modal/edit-modal";

interface CardProps {
  price: number;
  title: string;
  image: string;
  id?: number;
}

export function Card({ price, image, title, id }: CardProps) {
  const { deleteFoodItem, isLoading, isError } = useDeleteFood();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Tem certeza que deseja deletar este item?")) {
      // Chama a função de exclusão quando o usuário confirma a deleção
      deleteFoodItem(id);
    }
  };

  return (
    <div className="card">
      <img src={image} />
      <h2>{title}</h2>
      <p>
        <b>Valor: </b>
        {price}
      </p>
      <p>
        <b>ID:{id}</b>
      </p>
      <a type="button" onClick={() => handleDeleteClick()}>
        Deletar
      </a>
      <a type="button" onClick={handleOpenModal}>
        Editar
      </a>
      {isModalOpen && (
        <EditModal
          initialData={{ title, price, image }}
          foodId={id}
          closeModal={handleOpenModal}
        />
      )}
    </div>
  );
}
