import { createContext, ReactNode, useContext, useState } from "react";

interface GitHubProviderProps {
    children: ReactNode
}

export interface ProfileGitHubProps {
    login: string
    avatar_url: string
    html_url: string
    company: string
    bio: string
    followers: number
}

interface GitHubContextProps {
    profile: ProfileGitHubProps
    handleSearch: () => void
    handleIssue: () => void
}

const GitHubContext = createContext<GitHubContextProps>({} as GitHubContextProps)

export function GitHubProvider({ children }: GitHubProviderProps) {
    const [profile, setProfile] = useState<ProfileGitHubProps>({
        login: '',
        avatar_url: '',
        html_url: '',
        company: '',
        bio: '',
        followers: 0,
    })

    const handleSearch = () => {

    }
    
    const handleIssue = () => {

    }
    

    return(
        <GitHubContext.Provider 
            value={{
                profile,
                handleSearch,
                handleIssue
            }}
        >
            {children}
        </GitHubContext.Provider>
    )
}

export function useGitHub(): GitHubContextProps {
    const context = useContext(GitHubContext)

    return context
}