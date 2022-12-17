import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitHubContainer, Title } from "./styles";

interface GitHubProps {
    url: string;
    title: string;
}

export function GitHub({ url, title }: GitHubProps) {
    return (
        <GitHubContainer href={url}>
            <Title>{title}</Title>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </GitHubContainer>
    )
}