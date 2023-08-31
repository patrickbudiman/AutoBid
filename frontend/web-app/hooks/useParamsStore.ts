import { create } from "zustand"

type State = {
    pageNumber: number
    pageSize: number
    pageCount: number
    searchTerm: string
    searchValue: string
    orderBy: string
    filterBy: string
}

type Actions = {
    setParams: (params: Partial<State>) => void
    reset: () => void
    setSearchValue: (value: string) => void
}

const initialState: State = {
    pageNumber: 1,
    pageSize: 12,
    pageCount: 1,
    searchTerm: '',
    searchValue: '', //from search textbox
    orderBy: 'make',
    filterBy: 'live'
}

export const useParamsStore = create<State & Actions>()((set) => ({
    ...initialState,

    setParams: (newParams: Partial<State>) => {
        set((state) => {
            if(newParams.pageNumber){
                //changing only page number
                return {...state, pageNumber: newParams.pageNumber}
            }
            else{
                //changing other
                //example while on pageNumber 3 changing pageSize 12, then reset pageNumber to 1
                return {...state, ...newParams, pageNumber: 1}
            }
        })
    },

    reset: () => {
        set(initialState)
    },

    setSearchValue : (value: string) => {
        set({searchValue: value})
    }
}))