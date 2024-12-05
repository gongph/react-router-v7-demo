import { useLoaderData } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export async function clientLoader() {
  return { message: "Hello World" };
}

export default function Hero() {
  const data = useLoaderData();
  return <h2>This a hero, {data.message}</h2>;
}
