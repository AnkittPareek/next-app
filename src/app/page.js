import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next Js App</h1>
      <p>
        <Link href={"/about"}>About Us</Link>
      </p>
    </div>
  );
}
