import { TableItem } from "./TableItem";

export const TableGrid = ({ participantes }) => {
  return (
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
};

/* https://cdn.discordapp.com/avatars/65f9a6ed967e2a567dd45f03/e42fae74221a1ade28235f60a058ed60.png */
