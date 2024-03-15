import Link from "next/link";

export const Page404 = () => {
  return (
    <div className="">
      <div id="notfound">
        <div className="">
          <div className="">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <Link href="/">Home</Link>
          <Link href="/login">SignIn</Link>
        </div>
      </div>
    </div>
  );
};
