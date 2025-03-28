import { Link, NavLink } from "react-router"


const Header = () => {

const clasButtonNav = 'p-3 bg-white grid place-content-center rounded-lg text-slate-900 hover:bg-slate-800 hover:text-white transition-all duration-300 ease-in-out'
  return (
    <header className="w-full h-20 bg-slate-900 flex flex-row justify-center items-center gap-1 flex-nowrap">
      <nav className="w-full h-full flex flex-row justify-between p-3 items-center gap-1 flex-nowrap">
      {/* NavLink makes it easy to show active states */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
      Logo
      </NavLink>

      <Link to="/about" className={`${clasButtonNav}`}>Concerts</Link>
      <Link to="/contact" className={`${clasButtonNav}`}>Contact</Link>
      <Link to="/kutralBurguer" className={`${clasButtonNav}`}>KutralBurguer</Link>
    </nav>
    </header>
  )
}

export default Header