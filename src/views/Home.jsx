import { Link } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export function meta() {
  return [
    {
      title: "Home - " + import.meta.env.VITE_SITE_NAME,
    },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      <Link to="./about" className="text-violet-800">
        About
      </Link>
    </div>
  );
}
