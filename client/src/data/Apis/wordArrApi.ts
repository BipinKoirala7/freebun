import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const wordArrApi = createApi({
    reducerPath: 'wordArr',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:4000/api/wordCollection'
    }),
    tagTypes: ['wordArr'],
    endpoints(build) {
        return {
            fetchWordArr: build.query({
                providesTags: (result, error, wordArr) => {
                    console.log(result,error,wordArr)
                    return [{
                        type:'wordArr',
                        word: wordArr.word,
                        id:wordArr.id
                }]
                },
                query: () => {
                    return {
                        method: 'GET',
                        url:'/wordArr'
                    }
                }
            }),
            addWordArr: build.mutation({
                query: (word) => {
                    return {
                        method: 'POST',
                        body: JSON.stringify({
                            word:word
                        }),
                        url:'/wordArr'
                    }
                }
            }),
            
        }
    },
})

export default wordArrApi