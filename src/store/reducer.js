export const initialeState = {
    loading : true , 
    movies : [] , 
    error : 'error has occured' , 
    pagination : 10 , 
    page : 1 , 
    search : ''
}

export const reducer = (state , action )=>{
    return {...state , ...action }
}
