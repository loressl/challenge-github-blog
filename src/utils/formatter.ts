import { formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'

export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const distanceToNow = (date: string) => formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR
})