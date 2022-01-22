import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  export interface Contact {
  [x: string]: any
  id: string
  name: string
}

type ContactsResponse = Contact[]

export const contactApi = createApi({

  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61687f6c09e030001712bfea.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: build => ({
    FetchContacts: build.query<ContactsResponse, void>({
      query: () => '/Contacts',
      providesTags: ['Contact'],
    }),
    DeleteContact: build.mutation<{ success: boolean; id: number }, number>({
      query: ContactId => ({
        url: `/Contacts/${ContactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    CreateContact: build.mutation({
      query: ({ name, phone }) => ({
        url: '/Contacts',
        method: 'POST',
        body: {
          name,
          phone,
        },
      }),
      invalidatesTags: ['Contact'],
    
    }),
  }),
})

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactApi;
