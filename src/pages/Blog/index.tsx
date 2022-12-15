import { PostComponent } from "../../components/PostComponent";
import { Profile } from "./components/Profile";
import { SearchInput } from "../../components/SearchInput";
import { Container, ListPostContainer } from "./styles";

import { useNavigate } from 'react-router-dom'

export function Blog(){

    const navigate = useNavigate()

    const handlePost = () => {
        navigate('/post', { state: { name: 'teste' }})
    }

    return(
        <Container>
            <main>
                <Profile />
                <SearchInput />

                <ListPostContainer>
                    <PostComponent handlePost={handlePost} />
                </ListPostContainer>
            </main>
        </Container>
    )
}