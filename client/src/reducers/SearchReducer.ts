
const searchUrls = {
    web:    'https://www.google.com/search?q=',
    images: 'https://www.google.com/search?tbm=isch&q=',
    videos: 'https://www.google.com/search?tbm=vid&q=',
}

type StateType = {
    searchUrl: string;
}
type ActionType = {
    type: string;
}
/*
    reducer switch the state according the choise of the user click
    on navbar, and put inside the search engine the href that the
    user want images/videos or just normal search.
*/

const SearchReducer = (state: StateType={searchUrl: ""},action: ActionType)=>{
    switch(action.type){
        case 'WEB':
            return {...state,searchUrl: searchUrls.web}
        case 'IMAGES':
            return {...state,searchUrl: searchUrls.images}
        case 'VIDEOS':
            return {...state,searchUrl: searchUrls.videos}
        default:
            return {...state,searchUrl: searchUrls.web};
    }
}
export default SearchReducer;