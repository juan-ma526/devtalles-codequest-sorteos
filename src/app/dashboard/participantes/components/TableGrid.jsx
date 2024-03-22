"use client";
import { useContext } from "react";
import { TableItem } from "./TableItem";
import { UserContext } from "@/app/context/userContext";
import { Page404 } from "@/app/components/Page404";

export const TableGrid = ({ participantes }) => {
  const { user } = useContext(UserContext);

  const dontUserRender = () => <Page404 />;

  const userRender = () => (
    <>
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Sorteo</th>
            <th>Username</th>
            <th>Email</th>
            {/* <th>Avatar</th> */}
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {participantes.map((participante, index) => (
            <TableItem key={index} participante={participante} index={index} />
          ))}
        </tbody>
      </table>
    </>
  );

  return <>{user ? userRender() : dontUserRender()}</>;
};
