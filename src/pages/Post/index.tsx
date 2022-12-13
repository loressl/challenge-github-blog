import { useLocation } from "react-router-dom";
import { PostInfo } from "./components/PostInfo";
import { PostContainer } from "./styles";

export function Post(){
    const { state } = useLocation()
    console.log(state)

    return(
        <PostContainer>
            <main>
                <PostInfo />
            </main>
        </PostContainer>
    )
}