import { faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChooseOption, PostInfoContainer, PostInfoHeader, PostInfoTitle } from "./styles";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GitHub } from '../../../../components/GitHub';
import { GroupInfo } from '../../../../components/GroupInfo';
import { useTheme } from 'styled-components';
import { useMemo } from 'react';
import { useGitHub } from '../../../../context/useGitHub';


export function PostInfo() {
    const theme = useTheme()
    const { post } = useGitHub()

    const contentInfo = useMemo(() => [
        {
            iconInfo: faGithub,
            content: post.user.login
        },
        {
            iconInfo: faCalendarDay,
            content: post.updated_at
        },
        {
            iconInfo: faComment,
            content: `${post.comments} comentários`
        },
    ], [])

    return (
        <PostInfoContainer>
            <PostInfoHeader>
                <ChooseOption to="/">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Voltar</span>
                </ChooseOption>

                <GitHub title="ver no github" url="#" />
            </PostInfoHeader>

            <PostInfoTitle>{post.title}</PostInfoTitle>

            <GroupInfo 
                gap={2}
                colorLabel={theme['base-span']}
                colorSubtitle='inherit'
                infoList={contentInfo}
            />
        </PostInfoContainer>
    )
}