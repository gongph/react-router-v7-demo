import { Outlet, Link } from "react-router";
export default function App() {
  return (
    <>
      <nav className="container mx-auto w-full h-14 bg-violet-800 text-white flex justify-center items-center">
        <div className="flex w-full space-x-4 px-4">
          <Link to={"/"} viewTransition>
            Home
          </Link>
          <Link to={"/about"} viewTransition>
            About
          </Link>
        </div>
      </nav>
      <main className="container mx-auto p-4 bg-gray-100">
        <Outlet />
      </main>
    </>
  );
}
