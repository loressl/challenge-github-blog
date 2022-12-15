import { faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChooseOption, PostInfoContainer, PostInfoHeader, PostInfoTitle } from "./styles";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GitHub } from '../../../../components/GitHub';
import { GroupInfo } from '../../../../components/GroupInfo';
import { useTheme } from 'styled-components';

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
    const theme = useTheme()

    return (
        <PostInfoContainer>
            <PostInfoHeader>
                <ChooseOption to="/">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Voltar</span>
                </ChooseOption>

                <GitHub title="ver no github" url="#" />
            </PostInfoHeader>

            <PostInfoTitle>JavaScript data types and data structures</PostInfoTitle>

            <GroupInfo 
                gap={2}
                colorLabel={theme['base-span']}
                colorSubtitle='inherit'
                infoList={contentInfo}
            />
        </PostInfoContainer>
    )
}