"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import useModal from "../hooks/useModal";
import CreateSorteo from "./CreateSorteo";
import axios from "axios";
import Loading from "@/app/loading";

const ListaSorteos = ({ sorteos }) => {

    const router = useRouter();

    const [error, setError] = useState(false);
    
    const [loading, setLoading] = useState(false)

    const [currentSorteo, setCurrentSorteo] = useState({});

    const [handleShowModal] = useModal('my_modal_1');

    const showModalCreate = () => {
        setCurrentSorteo({});
        handleShowModal();
    }

    const showModalEdit = (sorteo) => {
        setCurrentSorteo(sorteo)
        handleShowModal();
    }

    const handleDelete = (sorteo) => {
        setError(false);
        setLoading(true);
        setCurrentSorteo(sorteo)
        axios
            .delete("/api/sorteo/" + sorteo.id)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);

                setError(true);

                setTimeout(() => {
                    setError(false);
                }, 3000);

            })
            .finally(() => {
                setLoading(false);
                router.refresh();
            });
    };

    const handleGenerateSorteo = (sorteo) => {
        setLoading(true);
        const participantes = sorteo.participantes;

        const winner = participantes[(Math.floor(Math.random() * participantes.length))];

        let inputs = sorteo;
        inputs.winner = winner.username;

        axios
            .patch("/api/sorteo/"+sorteo.id, inputs)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
                router.refresh();
            });
    }

    return (
        <>
        { loading ?  <Loading /> : <div> <section className="bg-white mt-6 p-4 rounded-lg">

<div className='flex justify-between w-full'>
    <h1 className="text-lg md:text-2xl font-bold">Sorteos</h1>

    <button type="text"
        className="btn btn-secondary text-white"
        onClick={() => showModalCreate()}
    >
        Create Sorteo
    </button>
</div>

<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 my-4">
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Winner</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Select Winner</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {
                sorteos.map((sorteo) => (
                    <tr className="hover:bg-gray-50">
                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                            <div className="relative h-10 w-10">
                                <img
                                    className="h-full w-full rounded-full object-cover object-center"
                                    src="/normal-face.png"
                                    alt=""
                                />
                            </div>
                            <div className="text-sm">
                                <div className="font-medium text-gray-700">{sorteo.name}</div>
                                <div className="text-gray-400">{sorteo.description.substring(0, 20).concat('...')}</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">

                            {sorteo.winner ? <span
                                className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                            >
                                {sorteo.winner}
                            </span> : 'No winner selected'}

                        </td>
                        <td className="px-6 py-4">
                            <div className="flex gap-2">

                              {
                                sorteo.participantes.length > 0 ?   <button  class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
                                onClick={() => handleGenerateSorteo(sorteo)}>
                                    Generate a Winner
                                </button> : 'No participants'
                              }
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex justify-end gap-4">
                                <a x-data="{ tooltip: 'Delete' }" href="#" onClick={() => handleDelete(sorteo)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                        x-tooltip="tooltip"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </a>
                                <a x-data="{ tooltip: 'Edite' }" href="#" onClick={() => showModalEdit(sorteo)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                        x-tooltip="tooltip"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
</div>
</section>
<CreateSorteo sorteo={currentSorteo} /></div> }
           
        </>
    )
}

export default ListaSorteos