import { useLocation } from "react-router-dom";
import { PostInfo } from "./components/PostInfo";
import { Content, PostContainer } from "./styles";

export function Post() {
    const { state } = useLocation()
    console.log(state)

    return (
        <PostContainer>
            <main>
                <PostInfo />

                <Content>
                    <span>
                        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                    </span>
                        <br />
                        <br />
                    <p>Dynamic typing</p>
                    <span>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:</span>
                </Content>
            </main>
        </PostContainer>
    )
}