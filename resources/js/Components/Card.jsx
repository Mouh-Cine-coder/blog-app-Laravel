import { Link } from '@inertiajs/react';

export default function Card({ title, description, imgSrc, href, tags })  {
    // i didn't change the colors for hovering the tags when it is not dark mode, to be implemented in the future
    return (
        <article>
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time datetime="2023-11-08T00:00:00.000Z">November 8, 2023</time>
                    </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link className="text-gray-900 dark:text-gray-100" href="/blog/generating-structured-output-from-llms">{title}</Link>
                            </h2>
                            <div className="flex flex-wrap">
                                {tags.map(tag => (
                                    <Link className="mr-3 text-sm font-medium uppercase text-blue-300 hover:text-primary-600 dark:hover:text-blue-500" href={`/tags/${tag.name}`}>{tag.name}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            A survey on the different methodologies used to generate structured output from LLMs, from model fine-tuning, to domain specific language, and schema engineering.
                        </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                        <Link className="text-blue-300 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Read &quot;Generating Structured Output from LLMs&quot;" href="/blog/generating-structured-output-from-llms">Read more →</Link>
                    </div>
                </div>
            </div>
        </article>
    )
    
}
