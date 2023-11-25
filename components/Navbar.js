import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <nav className="flex gap-4 mt-8">
      <NavbarLink name="Last 4 Weeks" url="short_term" />
      <NavbarLink name="Last 6 Months" url="medium_term" />
      <NavbarLink name="All Time" url="long_term" />
    </nav>
  );
}
