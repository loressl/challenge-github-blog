import { PostComponent } from "../../components/PostComponent";
import { Profile } from "./components/Profile";
import { SearchInput } from "../../components/SearchInput";
import { Container, ListPostContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from "react-hook-form";
import { useGitHub } from "../../context/useGitHub";
import { distanceToNow } from "../../utils/formatter";

const inputSearchValidationSchema = zod.object({
    search: zod.string(),
})

export type InputSearchForm = zod.infer<typeof inputSearchValidationSchema>

export function Blog(){
    const navigate = useNavigate()
    const { listPost, fetchPosts, fetchIssue } = useGitHub()

    const inputSearchForm = useForm<InputSearchForm>({
        resolver: zodResolver(inputSearchValidationSchema)
    })

    const { handleSubmit } = inputSearchForm

    const handlePost = async (issueNumber: number) => {
        navigate(`/post/${issueNumber}`)
        await fetchIssue(issueNumber)
    }

    const handleSearch = async (data: InputSearchForm) => {
        await fetchPosts(data.search)
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
                    {listPost.posts.map((post) => (
                        <PostComponent 
                            key={post.number}
                            handlePost={handlePost}
                            post={{
                                body: post.body,
                                number: post.number,
                                title: post.title,
                                updated_at: distanceToNow(post.updated_at),
                                html_url: post.html_url
                            }}
                        />
                    ))}
                </ListPostContainer>
            </main>
        </Container>
    )
}