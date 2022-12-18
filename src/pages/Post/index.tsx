import { useGitHub } from "../../context/useGitHub";
import { PostInfo } from "./components/PostInfo";
import { Content, PostContainer } from "./styles";
import remarkGfm from 'remark-gfm'

export function Post() {
    const { post } = useGitHub()

    return (
        <PostContainer>
            <main>
                <PostInfo />

                <Content remarkPlugins={[remarkGfm]}>
                    {post.body}
                </Content>
            </main>
        </PostContainer>
    )
}