"use client";

import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Page404 } from "../components/Page404";

export default function SuccesPage() {
  const { user } = useContext(UserContext);
  console.log(user);
  const renderDontUser = () => <Page404 />;
  const renderUser = () => (
    <>
      <div>
        <span>{user}</span>
      </div>
    </>
  );
  return <div>{user ? renderUser() : renderDontUser()}</div>;
}
