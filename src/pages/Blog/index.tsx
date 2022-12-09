import { PostComponent } from "../../components/PostComponent";
import { Profile } from "../../components/Profile";
import { SearchInput } from "../../components/SearchInput";
import { Container, ListPostContainer } from "./styles";

export function Blog(){
    return(
        <Container>
            <main>
                <Profile />
                <SearchInput />

                <ListPostContainer>
                    <PostComponent />
                    <PostComponent />
                    <PostComponent />
                </ListPostContainer>
            </main>
        </Container>
    )
}