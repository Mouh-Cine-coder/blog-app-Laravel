import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import DangerButton from "@/Components/DangerButton";


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/cn/Card";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/Components/cn/Table"
   

export default function DashboardIndex({ auth, articles }) {
    console.log(articles);
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-12 w-full h-screen overflow-y-scroll">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <Link 
                        href={route('articles.create')}
                        className="text-white float-right bg-lime-600 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:outline-none"
                        >
                        Add article &#43;
                    </Link>
                    <div className="text-gray-800 dark:text-gray-200 overflow-hidden shadow-sm sm:rounded-lg p-4">
                        {/* statistic cards */}

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Subscriptions
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        +2350
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +180.1% from last month
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Active Now
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        +573
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +201 since last hour
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <Table className="mt-3 h-fit overflow-y-scroll">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[50px]">#</TableHead>
                                    <TableHead>title</TableHead>
                                    <TableHead>writer</TableHead>
                                    <TableHead>catergory</TableHead>
                                    <TableHead>created at</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {articles.map((article) => (
                                    <TableRow key={article.id}>
                                        <TableCell className="font-medium">
                                            {article.id}
                                        </TableCell>
                                        <TableCell>
                                            {article.title}
                                        </TableCell>
                                        <TableCell>
                                            {article.user.name}
                                        </TableCell>
                                        <TableCell>
                                            {article.category.name}
                                        </TableCell>
                                        <TableCell>
                                            {article.created_at.slice(0, 10)}
                                        </TableCell>
                                        <TableCell>
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                                    <div className="cursor-pointer text-lg font-bold text-slate-200">
                                                        ...
                                                    </div>
                                                </Dropdown.Trigger>

                                                <Dropdown.Content align="left" contentClasses="py-0 max-w-fit bg-white dark:bg-gray-700">
                                                    <Dropdown.Link>Edit</Dropdown.Link>
                                                    {/* implment a model here */}
                                                    <DangerButton className="rounded-t-none w-full">Delete</DangerButton>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            {/* <TableFooter></TableFooter> */}
                        </Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
