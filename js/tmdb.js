const key ='b3566690d2e7867cbf34a7d0a60d92b9'; //Api Keyy
const endpoint_url ='https://api.themoviedb.org/3';


function getListMovie() {
fetch(endpoint_url + "/movie/now_playing?api_key" + key + "&language=en-US&page=1")
then(status)

}
