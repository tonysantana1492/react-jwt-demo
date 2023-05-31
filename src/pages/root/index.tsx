import { NavLink, Outlet, useNavigation } from "react-router-dom";

export const Root = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <nav className="flex justify-center items-center gap-x-3 p-2">
        <NavLink
          className={({ isActive, isPending }) => {
            let base = "px-4 py-2 rounded-lg ";
            base += isActive
              ? "bg-blue-600 text-white"
              : "";

            return base;
          }}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            let base = "px-4 py-2 rounded-lg ";
            base += isActive
              ? "bg-blue-600 text-white"
              : "";

            return base;
          }}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
