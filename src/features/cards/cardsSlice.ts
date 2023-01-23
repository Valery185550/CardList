import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Card } from "../../types"; 
import { getDate } from '../../utilities/getDate';


export const cardsSlice = createApi({
    reducerPath:`cardsApi`,
    baseQuery:fetchBaseQuery({baseUrl:"https://my-json-server.typicode.com/Valery185550/JSON_API"}),
    endpoints:(builder)=>({
        getAllCards:builder.query<Card[],void>({
            query:()=> ({url:'cards'}),
            transformResponse:(response:Card[]) => response?.map(card=>({...card,
                date:getDate(card.date),
                title:(card.title as string).substring(0,46)+" ...",
                description:(card.description as string).substring(0, 100)+" ..."
                }
            ))
        }),
        getCardById:builder.query<Card,string>({
            query:(id)=> ({url:`cards/${id}`}),
        })
    })
})

export const {useGetAllCardsQuery, useGetCardByIdQuery} = cardsSlice;