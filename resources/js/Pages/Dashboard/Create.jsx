import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";



export default function Create({ auth }) {
    
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <div className="py-12 w-full h-screen overflow-y-scroll">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-white font-extrabold font-mono text-2xl">create a new article</h1>
                </div>
            </div>
        
        </AuthenticatedLayout>
    )
}