import { Avatar, Bio, ProfileContainer, ProfileInfo, ProfileTitle } from "./styles";
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import avatar from '../../../../assets/avatar.svg'
import { GitHub } from "../../../../components/GitHub";
import { useTheme } from "styled-components";
import { GroupInfo } from "../../../../components/GroupInfo";

const contentInfo = [
    {
        iconInfo: faGithub,
        content: 'cameronwll'
    },
    {
        iconInfo: faBuilding,
        content: 'Rocketseat'
    },
    {
        iconInfo: faUserGroup,
        content: '32 seguidores'
    },
]

export function Profile() {
    const theme = useTheme()

    return (
        <ProfileContainer>
            <Avatar src={avatar} alt="avatar" />
            <ProfileInfo>

                <ProfileTitle>
                    <span>Cameron Williamson</span>
                    <GitHub title="Github" url="#" />
                </ProfileTitle>

                <Bio>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </Bio>

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