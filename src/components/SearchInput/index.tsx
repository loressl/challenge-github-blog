import { useFormContext } from "react-hook-form";
import { ErrorMessage, Input, Publication, SearchInputContainer } from "./styles";

export function SearchInput() {
    const { register, formState: { errors } } = useFormContext()
    console.log(errors)
    return (
        <SearchInputContainer>
            <Publication>
                <span>Publicações</span>
                <p>6 publicações</p>
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