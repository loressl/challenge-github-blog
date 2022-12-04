import { Avatar, Bio, ContentInfo, GitHub, Info, ProfileContainer, ProfileInfo, ProfileTitle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import avatar from '../../assets/avatar.svg'

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
    return(
        <ProfileContainer>
            <Avatar src={avatar} alt="avatar"/>
            <ProfileInfo>

                <ProfileTitle>
                    <span>Cameron Williamson</span>
                    <GitHub href="#">
                        <span>GITHUB</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </GitHub>
                </ProfileTitle>

                <Bio>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </Bio>

                <Info>
                    {contentInfo.map((item) => (
                        <ContentInfo key={item.content}>
                            <FontAwesomeIcon icon={item.iconInfo} />
                            <span>{item.content}</span>
                        </ContentInfo>
                    ))}
                </Info>
            </ProfileInfo>
        </ProfileContainer>
    )
}