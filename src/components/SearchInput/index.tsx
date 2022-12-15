import { ChangeEvent, SyntheticEvent } from "react";
import { Input, Publication, SearchInputContainer } from "./styles";

interface SearchInputProps {
    search: string
    onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void
    onSubmit: (event: SyntheticEvent) => void
}

export function SearchInput(){
    return(
        <SearchInputContainer>
            <Publication>
                <span>Publicações</span>
                <p>6 publicações</p>
            </Publication>
            <form>
                <Input
                    type="text" 
                    placeholder="Buscar conteúdo" 
                />
            </form>
        </SearchInputContainer>
    )
}