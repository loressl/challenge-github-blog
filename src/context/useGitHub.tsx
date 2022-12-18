import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

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
    html_url: string
}

export interface ListPostProps {
    total_count: number
    posts: PostProps[]
}

interface GitHubContextProps {
    profile: ProfileGitHubProps
    listPost: ListPostProps
    post: PostProps
    fetchPosts: (search?: String) => void
    fetchIssue: (issueNumber: number) => void
}

const GitHubContext = createContext<GitHubContextProps>({} as GitHubContextProps)

const username = import.meta.env.VITE_USERNAME
const repository = import.meta.env.VITE_REPOSITORY

export function GitHubProvider({ children }: GitHubProviderProps) {

    const [profile, setProfile] = useState<ProfileGitHubProps>({
        login: '',
        avatar_url: "",
        html_url: "",
        company: '',
        bio: '',
        followers: 0,
        name: ''
    })

    const [listPost, setListPost] = useState<ListPostProps>({
        total_count: 0,
        posts: []
    })

    const [post, setPost] = useState<PostProps>({
        body: '',
        comments: 0,
        number: 0,
        title: '',
        updated_at: '',
        user: {
            html_url: '',
            login: '',
        },
        html_url: ''
    })

    const fetchProfile = useCallback(async () => {
        await api.get(`/users/${username}`).then((response) => {
            setProfile({
                avatar_url: response.data.avatar_url,
                bio: response.data.bio,
                company: response.data.company,
                followers: response.data.followers,
                html_url: response.data.html_url,
                login: response.data.login,
                name: response.data.name
            })
        }).catch((error) => console.log(error))
    }, [])

    const fetchPosts = useCallback(async (search?: String) => {
        await api.get(`/search/issues?q=${search || ' '}%20repo:${username}/${repository}`)
            .then((response) => {
                setListPost((oldPost) => {
                    return {
                        ...oldPost,
                        total_count: response.data.total_count,
                        posts: response.data.items,
                    }
                })
            }).catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        fetchProfile()
        fetchPosts()
    }, [])

    const fetchIssue = useCallback(async (issueNumber: number) => {
        await api.get(`/repos/${username}/${repository}/issues/${issueNumber}`)
            .then((response) => {
                setPost({
                    comments: response.data.comments,
                    number: response.data.number,
                    title: response.data.title,
                    updated_at: response.data.updated_at,
                    user: {
                        html_url: response.data.user.html_url,
                        login: response.data.user.login
                    },
                    body: response.data.body,
                    html_url: response.data.html_url
                })
            }).catch((error) => console.log(error))
    }, [])


    return (
        <GitHubContext.Provider
            value={{
                profile,
                listPost,
                post,
                fetchPosts,
                fetchIssue
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