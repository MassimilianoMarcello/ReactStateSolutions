import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className="bg-blue-500 text-white p-4 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-extrabold text-yellow-500">ReactStateSolutions</h1>
                    <p className="text-lg font-medium text-gray-200 mt-2">Same TODO project with different state manager</p>
                </div>

                <ul className="flex space-x-8 mt-4 md:mt-0">
                    <li className=" px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-600">
                        <Link to="/todo-usestate" className="text-white hover:text-gray-300">useState</Link>
                    </li>
                    <li className="px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-600">
                        <Link to="/todo-usereducer" className="text-white hover:text-gray-300">useReducer</Link>
                    </li>
                    <li className="px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-600">
                        <Link to="/todo-usecontext" className="text-white hover:text-gray-300">useContext</Link>
                    </li>
                    <li className="px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-600">
                        <Link to="/todo-redux" className="text-white hover:text-gray-300">Redux</Link>
                    </li>
                    <li className="px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-600">
                        <Link to="/todo-zustand" className="text-white hover:text-gray-300">Zustand</Link>
                    </li>
                    <li className="px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-600">
                        <Link to="/todo-jotai" className="text-white hover:text-gray-300">Jotai</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar

