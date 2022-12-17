import { Avatar, Bio, ProfileContainer, ProfileInfo, ProfileTitle } from "./styles";
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { GitHub } from "../../../../components/GitHub";
import { useTheme } from "styled-components";
import { GroupInfo } from "../../../../components/GroupInfo";
import { useGitHub } from "../../../../context/useGitHub";
import { useMemo } from "react";


export function Profile() {
    const theme = useTheme()
    const { profile } = useGitHub()

    const contentInfo = useMemo(() => [
        {
            iconInfo: faGithub,
            content: profile.login
        },
        {
            iconInfo: faBuilding,
            content: profile.company
        },
        {
            iconInfo: faUserGroup,
            content: `${profile.followers} seguidores`
        },
    ], [profile])

    return (
        <ProfileContainer>
            <Avatar src={profile.avatar_url} alt="avatar" />
            <ProfileInfo>

                <ProfileTitle>
                    <span>{profile.name}</span>
                    <GitHub title="Github" url={profile.html_url} />
                </ProfileTitle>

                <Bio>{profile.bio}</Bio>

                <GroupInfo
                    gap={1.5}
                    colorLabel={theme["base-label"]}
                    colorSubtitle={theme["base-subtitle"]}
                    infoList={contentInfo}
                />
            </ProfileInfo>
        </ProfileContainer>
    )
}