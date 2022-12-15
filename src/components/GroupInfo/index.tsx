import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContentInfo, GroupInfoContainer } from "./styles";

interface InfoProps {
    iconInfo: IconDefinition
    content: string
}

interface GroupInfoProps {
    gap: number
    colorLabel?: string
    colorSubtitle?: string;
    infoList: InfoProps[]
}

export function GroupInfo({gap, colorLabel, colorSubtitle, infoList}: GroupInfoProps){
    return(
        <GroupInfoContainer gap={gap} colorLabel={colorLabel} colorSubtitle={colorSubtitle}>
            {infoList.map((item) => (
                    <ContentInfo key={item.content}>
                        <FontAwesomeIcon icon={item.iconInfo} />
                        <span>{item.content}</span>
                    </ContentInfo>
                ))}
        </GroupInfoContainer>
    )
}