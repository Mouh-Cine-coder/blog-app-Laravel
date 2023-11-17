import ResponsiveNavLink from "./ResponsiveNavLink";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";
import userSvg from "./UserSvg";

function UserDropdown({user}) {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                {/* <userSvg /> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="grey"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </Dropdown.Trigger>

            <Dropdown.Content>
                <div className="border-gray-500 border-b-[0.2px] px-4 py-3">
                    <h1 className="block w-full  text-lg leading-5 text-gray-700 dark:text-gray-300  focus:outline-none">
                        {user.name}
                    </h1>
                    <span className="block w-full   text-sm  text-gray-500 dark:text-gray-400">
                        {user.email}
                    </span>
                </div>
                <Dropdown.Link href="/dashboard">Dashboard</Dropdown.Link>
                <Dropdown.Link href="/settings">Settings</Dropdown.Link>
                <Dropdown.Link href={route('logout')} method="post" as="button">Sign out</Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );
}

export default function Header({ auth }) {
    // To do:
    //  change the anchor tags if still exist with <NavLink>
    // use inertia dropdown
    return (
        <nav className="bg-white  border-b-2 border-slate-700 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                </NavLink>

                {/**
                 * using <Dropdown /> implement a user dropdown like the one in here:
                 *         https://flowbite.com/docs/components/navbar/#user-menu-dropdown
                 */}
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-user"
                >
                    <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <ResponsiveNavLink>Home</ResponsiveNavLink>
                        </li>
                        <li>
                            <ResponsiveNavLink>Blog</ResponsiveNavLink>
                        </li>
                        <li>
                            <ResponsiveNavLink>Tags</ResponsiveNavLink>
                        </li>
                        <li>
                            <ResponsiveNavLink>Projects</ResponsiveNavLink>
                        </li>
                        <li>
                            <ResponsiveNavLink>About</ResponsiveNavLink>
                        </li>
                        <li>
                            {
                              auth.user ? <UserDropdown user={auth.user}/> : <ResponsiveNavLink href="/login">Login</ResponsiveNavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
