"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Register", link: "/register" },
  { name: "Login", link: "/login" },
  { name: "Forgot Password", link: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const route = useRouter();
  const goToHame = () => {
    console.log("Go to Home clicked");
    route.push("/");
  };
  return (
    <>
      <div className="flex gap-3">
        {navLinks.map((nav) => {
          const isActive = pathName.startsWith(nav.link);
          return (
            <Link
              key={nav.link}
              href={nav.link}
              className={isActive ? "font-bold" : ""}
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
      <div className="py-5">{children}</div>
      <div>
        <button onClick={goToHame}>Go to Home</button>
      </div>
    </>
  );
}
