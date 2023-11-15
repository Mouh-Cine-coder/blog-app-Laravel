import { Link } from '@inertiajs/react';
import Header from '@/Components/Header';
export default function Main({ children }) {
    return (
        <div className=" pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            
            <Header />

            <div className="w-full mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 sm:max-w-4xl mt-6 px-6 py-4   overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
