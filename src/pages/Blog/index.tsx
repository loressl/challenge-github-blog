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

    const handlePost = () => {
        navigate('/post', { state: { name: 'teste' }})
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
                    <PostComponent handlePost={handlePost} />
                </ListPostContainer>
            </main>
        </Container>
    )
}