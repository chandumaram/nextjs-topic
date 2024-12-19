import Link from "next/link";

const Home = () => {
  return (
    <main>
      <div>Hello World</div>
      <div className="flex flex-col">
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
};

export default Home;
