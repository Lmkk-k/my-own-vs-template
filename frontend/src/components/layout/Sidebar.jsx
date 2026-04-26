import { NavLink } from 'react-router-dom'

export default function Sidebar({ links = [] }) {
  return (
    <aside className="w-60 min-h-screen bg-white border-r border-gray-200 flex flex-col py-6 px-4 gap-1">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
            ${isActive
              ? 'bg-indigo-50 text-indigo-700 font-medium'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`
          }
        >
          {link.icon && <span>{link.icon}</span>}
          {link.label}
        </NavLink>
      ))}
    </aside>
  )
}