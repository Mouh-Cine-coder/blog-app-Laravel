import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

export default function Create({ auth }) {
    
    const  { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        title: '',
        body: '',
        category: '',
        image: '',
        tags: [],
    })



    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create an article"/>
            <ThemeProvider theme={darkTheme}>
                <div className="py-12 w-full h-screen overflow-y-scroll">
                    <div className="mx-auto sm:px-6 lg:px-8">
                        <h1 className="text-white font-extrabold font-mono text-2xl">create a new article</h1>
                    </div>
                    <div className="text-white max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className=" p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <div>
                                <InputLabel htmlFor="title" value="title" />

                                <TextInput
                                    id="title"
                                    className="mt-1 block w-full"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                    isFocused
                                    autoComplete="title"
                                />

                                <InputError className="mt-2" message={errors.title} />
                            </div>

                            <div className="my-5">
                                    <Autocomplete
                                        multiple
                                        limitTags={2}
                                        id="multiple-limit-tags"
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        defaultValue={[top100Films[1], top100Films[2], top100Films[3]]}
                                        renderInput={(params) => (
                                            <TextField {...params} label="limitTags" placeholder="Favorites" />
                                        )}
                                        sx={{ width: '500px' }}
                                    />
                            </div> 

                            <div>
                                <InputLabel htmlFor="body" value="body" />

                                <TextInput
                                    id="body"
                                    className="mt-1 block w-full"
                                    value={data.body}
                                    onChange={(e) => setData('body', e.target.value)}
                                    required
                                    isFocused
                                    autoComplete="body"
                                />

                                <InputError className="mt-2" message={errors.body} />
                            </div>  
                            
                            <div className="my-5">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={['hello', 'world']}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Category" />}
                                />
                            </div>
                                            
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        
        </AuthenticatedLayout>
    );
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
];