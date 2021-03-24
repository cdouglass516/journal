export const getData = (src) =>{
    let dataSource = determineSource(src);
    return fetch(dataSource)
    .then(response => {return response.json()})  
}
export const saveData = (src) =>{
    
}

// const fetchTheData = (src) =>{


// }

// const saveTheData = (src) =>{

// }

const determineSource = (src) => {
    switch (src) {
        case "mood":
            return '../data/mood.json';
        case "posts":
            return '../data/posts.json';
        default:
            return 'error';

    }

}