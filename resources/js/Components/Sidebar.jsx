import React, {useState} from 'react'
import { Button } from '@windmill/react-ui'
import ResponsiveNavLink from './ResponsiveNavLink'
import { Transition } from '@windmill/react-ui'
import { usePage } from '@inertiajs/react'

function ArrowDown({className}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}

function SidebarSubmenu({ route }) {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)
  
    function handleDropdownMenuClick() {
      setIsDropdownMenuOpen(!isDropdownMenuOpen)
    }
  
    return (
      <li className="relative px-6 py-3" key={route.name}>
        <button
          className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          onClick={handleDropdownMenuClick}
          aria-haspopup="true"
        >
          <span className="inline-flex items-center">
            {/* <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} /> */}
            <span className="ml-4">{route.name}</span>
          </span>
          <ArrowDown className="w-4 h-4" aria-hidden="true" />
        </button>
        <Transition
          show={isDropdownMenuOpen}
          enter="transition-all ease-in-out duration-300"
          enterFrom="opacity-25 max-h-0"
          enterTo="opacity-100 max-h-xl"
          leave="transition-all ease-in-out duration-300"
          leaveFrom="opacity-100 max-h-xl"
          leaveTo="opacity-0 max-h-0"
        >
          <ul
            className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
            aria-label="submenu"
          >
            {route.routes.map((r) => (
              <li
                className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                key={r.name}
              >
                <Link className="w-full" to={r.path}>
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </Transition>
      </li>
    )
  }

function Route({
  path,
  exact,
  children
}) {
  const pathname = usePage().url;
  const isMatched = exact ? pathname === path : pathname.startsWith(path);

  if (isMatched) {
    return <>
      {children}
    </>
  }
  else {
    return <></>
  }
}

function SidebarContent() {
  let routes = [
    {
      name: "Articles",
      path: route('articles.index'),
      exact: true,
    },
    {
      name: "Users",
      path: route('admin.users.index'),
      exact: true,
    },
  ];
  return (
    <div className="min-h-screen py-4 text-gray-500 dark:text-gray-400">
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <a
                exact={route.exact.toString()}
                href={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeclassname="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact.toString()}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                {/* <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} /> */}
                <span className="ml-4">{route.name}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

function DesktopSidebar(props) {
    return (
      <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
        <SidebarContent />
      </aside>
    )
  }

function Sidebar(props) {
    return (
        <>
         <DesktopSidebar/>
        </>
    )
}

export default Sidebar;