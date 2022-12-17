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
    name: string
}

export type UserPostProps = Omit<ProfileGitHubProps, 'avatar_url' | 'company' | 'bio' | 'followers' | 'name'>

export interface PostProps {
    number: number
    title: string
    user: UserPostProps
    updated_at: string
    body: string
    comments: number
}

export interface ListPostProps {
    total_count: number
    posts: PostProps[]
}

interface GitHubContextProps {
    profile: ProfileGitHubProps
    listPost: ListPostProps
    post: PostProps
    handleSearch: (search: String) => void
    handleIssue: (issueNumber: number) => void
}

const GitHubContext = createContext<GitHubContextProps>({} as GitHubContextProps)

export function GitHubProvider({ children }: GitHubProviderProps) {
    const [profile, setProfile] = useState<ProfileGitHubProps>({
        login: 'loressl',
        avatar_url: "https://avatars.githubusercontent.com/u/34512572?v=4",
        html_url: "https://github.com/loressl",
        company: 'Compass.UOL',
        bio: 'Graduated in Systems Analysis and Development',
        followers: 145,
        name: 'Lorena Lima'
    })

    const [listPost, setListPost] = useState<ListPostProps>({
        total_count: 0,
        posts: []
    })

    const [post, setPost] = useState<PostProps>({
        body: 'ahsdapsdhaosidhasoidjaosijdaijdiasjdiajs',
        comments: 5,
        number: 2,
        title: 'JavaScript data types and data structures',
        updated_at: 'há 1 dia',
        user: {
            html_url: '#',
            login: 'cameronwll',
        }
    })

    const handleSearch = (search: String) => {

    }
    
    const handleIssue = (issueNumber: number) => {

    }
    

    return(
        <GitHubContext.Provider 
            value={{
                profile,
                listPost,
                post,
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