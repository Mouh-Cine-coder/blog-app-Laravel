import MainLayout from "@/Layouts/MainLayout";
import { Head } from '@inertiajs/react'
import Card from "@/Components/Card";
<Head title="Blog" />

export default function Home({ articles }) {
    
    const articlesList = articles.map(article =>  <li className="py-12"> <Card title={article.title} /> </li>)
    return (
        <MainLayout>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 ">
                        Latest Blogs
                    </h1>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {articlesList}
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
}
