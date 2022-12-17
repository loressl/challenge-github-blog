import { useParams } from "react-router-dom";
import { useGitHub } from "../../context/useGitHub";
import { PostInfo } from "./components/PostInfo";
import { Content, PostContainer } from "./styles";

export function Post() {
    const params = useParams()
    const { post } = useGitHub()
    console.log(params)

    return (
        <PostContainer>
            <main>
                <PostInfo />

                <Content>
                    <span>
                        {post.body}
                    </span>
                        {/* <br />
                        <br />
                    <p>Dynamic typing</p>
                    <span>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:</span> */}
                </Content>
            </main>
        </PostContainer>
    )
}