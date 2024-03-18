"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import useModal from "../hooks/useModal";
import Error from "./Error";
import { useRouter } from "next/navigation";

const CreateSorteo = ({ sorteo }) => {
  const router = useRouter();

  const [error, setError] = useState(false);

  const [handleShowModal, handleCloseModal] = useModal("my_modal_1");

  const [inputs, setInputs] = useState(
    Object.keys(sorteo).length > 0
      ? sorteo
      : {
          name: "",
          description: "",
        }
  );

  useEffect(() => {
    setInputs(sorteo);
  }, [sorteo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (inputs.name === "" || inputs.description === "") {
      setError(true);
      return;
    }

    if (Object.keys(inputs).length === 0 && Object.keys(sorteo).length === 0) {
      setError(true);
      return;
    }

    if (Object.keys(sorteo).length > 0) {
      inputs.startDate = sorteo.startDate;
      inputs.status = sorteo.status;
      inputs.image = sorteo.image;
      inputs.winner = sorteo.winner;
      console.log(inputs, "inputs");
      axios
        .patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sorteo/` + sorteo.id, inputs)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setInputs({});
          router.refresh();
          handleCloseModal();
        });
    } else {
      inputs.startDate = new Date();
      inputs.status = true;
      inputs.image = "";
      inputs.winner = "";
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sorteo`, inputs)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setInputs({});
          router.refresh();
          handleCloseModal();
        });
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClose = () => {
    setError(false);
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>
            ✕
          </button>
        </form>
        {Object.keys(sorteo).length > 0 ? (
          <h1 className="text-lg md:text-2xl font-bold mb-4">Update a Sorteo</h1>
        ) : (
          <h1 className="text-lg md:text-2xl font-bold mb-4">Create a Sorteo</h1>
        )}
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form className="flex flex-col gap-4 modal-backdrop" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="name"
            className="input input-bordered input-sm text-black"
            value={inputs.name || ""}
            onChange={handleChange}
          />

          <textarea
            className="textarea textarea-bordered text-black"
            placeholder="Description"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn btn-secondary text-white">
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default CreateSorteo;
