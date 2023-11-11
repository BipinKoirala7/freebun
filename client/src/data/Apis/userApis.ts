import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";
import {
    RTKchangeUserPropertiesT,
} from "../../types";

const UserInfoApi = createApi({
    reducerPath: 'userInfo',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/api',
        credentials:'include'
    }),
    tagTypes: ['User'],
    endpoints(build) {
        return {
            fetchUserFromSession: build.query({
                providesTags: (result,error) => {
                    console.log(result,error)
                    return [{ type: 'User' }]
                },
                query: () => {
                    return {
                        method: 'GET',
                        url:'users/session/user'
                    }
                }
            }),
            changeUserProperties: build.mutation<void,RTKchangeUserPropertiesT>({
                invalidatesTags: () => { 
                    return[]
                },
                query: (params) => {
                    return {
                        method: 'POST',
                        url: `user/${params.user_id}/properties`,
                        body: {
                            [params.property]:params.changed_info
                        }
                    }
                }
            })
        }
    },
})

export { UserInfoApi }
export const { useFetchUserFromSessionQuery, useChangeUserPropertiesMutation } = UserInfoApi