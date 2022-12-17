import { useFormContext } from "react-hook-form";
import { useGitHub } from "../../context/useGitHub";
import { ErrorMessage, Input, Publication, SearchInputContainer } from "./styles";

export function SearchInput() {
    const { register, formState: { errors } } = useFormContext()
    const { listPost } = useGitHub()

    return (
        <SearchInputContainer>
            <Publication>
                <span>Publicações</span>
                <p>{`${listPost.total_count} publicações`}</p>
            </Publication>
            <Input
                {...register('search')}
                type="text"
                placeholder="Buscar conteúdo"
            />
            {errors.search && <ErrorMessage>* {errors.search.message?.toString()}</ErrorMessage>}
        </SearchInputContainer>
    )
}