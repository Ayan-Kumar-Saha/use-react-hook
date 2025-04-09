import { Link } from "react-router";
import { NAV_LINKS } from "../constants/nav-links";

const Sidebar = () => {
    return (
        <aside className="w-64 text-white p-4">
            <h2 className="text-xl font-bold mb-4">Content</h2>
            <ul className="space-y-2">
                {
                    NAV_LINKS.map(link => (
                        <li>
                            <Link key={link.id} to={link.path} className="block hover:text-gray-300">{link.name}</Link>
                        </li>
                    ))
                }

            </ul>
        </aside>
    )
}

export default Sidebar;