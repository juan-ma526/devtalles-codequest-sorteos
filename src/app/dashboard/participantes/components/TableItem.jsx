"use client";

import { LoadingDev } from "@/app/components/LoadingDev";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export const TableItem = ({ participante, index }) => {
  const [sorteo, setSorteo] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getSorteoById = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sorteo/${participante.sorteoId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();

      setSorteo(data.sorteoGetOne);
    };

    getSorteoById();
  }, [participante]);

  const handleDeleteParticipanteById = async (id) => {
    setError(false);
    setLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/participante/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Appplication/json",
      },
      credentials: "include",
    })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
        setError(true);

        setTimeout(() => {
          setError(false);
        }, 3000);
      })
      .finally(() => {
        setLoading(false);
        router.refresh();
      });

    if (!res.ok) {
      throw new Error("Failed to logout data");
    }
  };

  return (
    <>
      {loading ? (
        <tr>
          <td>
            <LoadingDev />
          </td>
        </tr>
      ) : (
        <tr>
          <th>{index + 1}</th>
          <td>{sorteo.name}</td>
          <td>{participante.username}</td>
          <td className="md:hidden">{participante.email.substring(0, 5).concat("..")}</td>
          <td className="hidden md:block">{participante.email}</td>
          <td className="cursor-pointer" onClick={() => handleDeleteParticipanteById(participante.id)}>
            <MdDelete className="hover:text-purple-900" size={25} />
          </td>
        </tr>
      )}
    </>
  );
};
