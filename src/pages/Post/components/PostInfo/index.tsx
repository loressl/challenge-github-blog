import { faCalendarDay, faChevronLeft, faComment, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChooseOption, ContentInfo, PostInfoContainer, PostInfoFooter, PostInfoHeader, PostInfoTitle } from "./styles";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const contentInfo = [
    {
        iconInfo: faGithub,
        content: 'cameronwll'
    },
    {
        iconInfo: faCalendarDay,
        content: 'Há 1 dia'
    },
    {
        iconInfo: faComment,
        content: '5 comentários'
    },
]

export function PostInfo() {
    return (
        <PostInfoContainer>
            <PostInfoHeader>
                <ChooseOption to="/">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Voltar</span>
                </ChooseOption>

                <ChooseOption to="#">
                    <span>Ver no github</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </ChooseOption>
            </PostInfoHeader>

            <PostInfoTitle>JavaScript data types and data structures</PostInfoTitle>

            <PostInfoFooter>
                {contentInfo.map((item) => (
                    <ContentInfo key={item.content}>
                        <FontAwesomeIcon icon={item.iconInfo} />
                        <span>{item.content}</span>
                    </ContentInfo>
                ))}
            </PostInfoFooter>
        </PostInfoContainer>
    )
}