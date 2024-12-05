import { Link } from "react-router";
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      <Link to="/about">About</Link>
    </div>
  );
}
