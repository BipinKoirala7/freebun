import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query'

const beeApi = createApi({
    reducerPath: 'freebee',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://localhost:4000'
    }),
    tagTypes: ['bee'],
    endpoints(builder) {
        return {
            fetchBeeNewGame:builder.query({
                query: ()=> {
                    return {
                        url: '/api/game/random',
                        method: 'GET',
                    }
                }
            }),
            // addbees:builder.query({
            //     query: ()=> {

            //     }
            // }),
            
        }
    }
    
})

export default beeApi