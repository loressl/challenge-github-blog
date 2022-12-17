import { PostProps } from "../../context/useGitHub";
import { Description, PostContainer, TitleContainer } from "./styles";

type Post = Omit<PostProps, 'user' | 'comments'>

interface PostComponentProps {
    handlePost: (issueNumber: number) => void
    post: Post
}

export function PostComponent({handlePost, post}: PostComponentProps) {
    return (
        <PostContainer onClick={() => handlePost(post.number)}>
            <TitleContainer>
                <span>{post.title}</span>
                <p>{post.updated_at}</p>
            </TitleContainer>

            <Description>
                {post.body}
            </Description>
        </PostContainer>
    )
}