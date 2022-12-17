import { PostComponent } from "../../components/PostComponent";
import { Profile } from "./components/Profile";
import { SearchInput } from "../../components/SearchInput";
import { Container, ListPostContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from "react-hook-form";

const inputSearchValidationSchema = zod.object({
    search: zod.string().min(3, 'Sua busca deve conter mais de 3 caracteres'),
})

export type InputSearchForm = zod.infer<typeof inputSearchValidationSchema>

export function Blog(){
    const navigate = useNavigate()

    const inputSearchForm = useForm<InputSearchForm>({
        resolver: zodResolver(inputSearchValidationSchema)
    })

    const { handleSubmit } = inputSearchForm

    const handlePost = (issueNumber: number) => {
        navigate(`/post/${issueNumber}`,)
    }

    const handleSearch = (data: InputSearchForm) => {
        console.log(data)
    }

    return(
        <Container>
            <main>
                <Profile />

                <form onSubmit={handleSubmit(handleSearch)}>
                    <FormProvider {...inputSearchForm}>
                        <SearchInput />
                    </FormProvider>
                </form>

                <ListPostContainer>
                    <PostComponent 
                        handlePost={handlePost} 
                        post={{
                            body: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
                            number: 3,
                            title: 'JavaScript data types and data structures',
                            updated_at: 'há 1 dia',
                        }}
                    />
                </ListPostContainer>
            </main>
        </Container>
    )
}