import { Link } from '@inertiajs/react';
import Header from '@/Components/Header';

import { usePage } from '@inertiajs/react'

export default function Main({ children }) {
    const {auth} = usePage().props;
    return (
        <div className=" pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <Header auth={auth}/>

            <div className=" mx-auto max-w-3xl  sm:px-6 xl:max-w-5xl xl:px-0 sm:max-w-4xl mt-6 px-6 py-4  sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
