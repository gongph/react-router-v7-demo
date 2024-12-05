import { Link } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export function meta() {
  return [
    { title: "About - " + import.meta.env.VITE_SITE_NAME },
    {
      name: "description",
      content: "This is the about page",
    },
  ];
}

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <Link to={"/"} className="text-violet-800">
        Home
      </Link>
    </div>
  );
}
