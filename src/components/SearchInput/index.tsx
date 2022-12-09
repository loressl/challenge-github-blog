import { Input, Publication, SearchInputContainer } from "./styles";

export function SearchInput(){
    return(
        <SearchInputContainer>
            <Publication>
                <span>Publicações</span>
                <p>6 publicações</p>
            </Publication>
            <Input placeholder="Buscar conteúdo" />
        </SearchInputContainer>
    )
}