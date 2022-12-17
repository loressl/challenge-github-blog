import { useMemo } from "react"
import { useRouteError } from "react-router-dom"

export function ErrorPage(){
    const error = useRouteError()
    console.log(error)
    // const message = useMemo(() => {
    //     if(error?.statusText) {
    //         return error?.statusText
    //     }
    // },[error])

    return(
        <div>
            <h1>Oops!</h1>
            <p>Desculpa, ocorreu um erro inesperado.</p>
            <p>
                <i></i>
            </p>
        </div>
    )
}