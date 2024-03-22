"use client";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import useModal from "../hooks/useModal";
import CreateSorteo from "./CreateSorteo";
import axios from "axios";
import Loading from "@/app/loading";
import Image from "next/image";
import { Page404 } from "@/app/components/Page404";
import { UserContext } from "@/app/context/userContext";
import { MdDelete, MdEdit } from "react-icons/md";

const ListaSorteos = ({ sorteos }) => {
  const { user } = useContext(UserContext);

  const router = useRouter();

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const [currentSorteo, setCurrentSorteo] = useState({});

  const [handleShowModal] = useModal("my_modal_1");

  const showModalCreate = () => {
    setCurrentSorteo({});
    handleShowModal();
  };

  const showModalEdit = (sorteo) => {
    setCurrentSorteo(sorteo);
    handleShowModal();
  };

  const handleDelete = (sorteo) => {
    setError(false);
    setLoading(true);
    setCurrentSorteo(sorteo);
    axios
      .delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sorteo/` + sorteo.id)
      .then((res) => {
        res;
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

    const winner = participantes[Math.floor(Math.random() * participantes.length)];

    let inputs = sorteo;
    inputs.winner = winner.username;

    axios
      .patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sorteo/` + sorteo.id, inputs)
      .then((res) => {
        res;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        router.refresh();
      });
  };

  const dontUserRender = () => <Page404 />;

  const UserRender = () => (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <section className="bg-white mt-6 p-4 rounded-lg">
            <div className="flex justify-between w-full">
              <h1 className="text-lg md:text-2xl font-bold">Sorteos</h1>

              <button type="text" className="btn btn-secondary text-white" onClick={() => showModalCreate()}>
                Create Sorteo
              </button>
            </div>

            <div className="w-[376px] md:w-full overflow-hidden rounded-lg border border-gray-200 shadow-md md:m-5 my-4">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="pr-0 pl-6 md:px-6 py-4 font-medium text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="pr-0 pl-6 md:px-6 py-4 font-medium text-gray-900">
                      Winner
                    </th>
                    <th scope="col" className="pr-0 pl-6 md:px-6 py-4 font-medium text-gray-900">
                      Select Winner
                    </th>
                    <th scope="col" className="pr-0 pl-6 md:px-6 py-4 font-medium text-gray-900"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {sorteos.map((sorteo) => (
                    <tr className="hover:bg-gray-50" key={sorteo.id}>
                      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                        <div className="hidden md:block relative h-10 w-10">
                          <Image
                            className="h-full w-full rounded-full object-cover object-center"
                            src="/normal-face.png"
                            alt="Imagen cara normal"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="text-sm">
                          <div className="font-bold text-gray-700">{sorteo.name}</div>
                          <div className="hidden md:block text-gray-400">
                            {sorteo.description.substring(0, 20).concat("...")}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        {sorteo.winner ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                            {sorteo.winner}
                          </span>
                        ) : (
                          "No winner selected"
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {sorteo.participantes.length > 0 ? (
                            <button
                              className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                              onClick={() => handleGenerateSorteo(sorteo)}
                            >
                              Generate a Winner
                            </button>
                          ) : (
                            "No participants"
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="hidden md:flex justify-end gap-4">
                          <div className="cursor-pointer" onClick={() => handleDelete(sorteo)}>
                            <MdDelete className="hover:text-purple-900" size={25} />
                          </div>
                          <div className="cursor-pointer" onClick={() => showModalEdit(sorteo)}>
                            <MdEdit className="hover:text-purple-900" size={25} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <CreateSorteo sorteo={currentSorteo} />
        </div>
      )}
    </>
  );

  return <>{user ? UserRender() : dontUserRender()}</>;
};

export default ListaSorteos;
