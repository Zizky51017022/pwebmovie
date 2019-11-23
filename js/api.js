//script untuk menangani proses responses dari proses request Api

function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response .status);
    //Method reject () akan membuat blok catch terpanggil

    return Promise.reject (new Error(response.statusText));
  } else {
    //Mengubah suatu objek menjadi Promiseagar bisa "di-then-kan"
    return Promise.resolve (response);
  }
}
//Block kode untuk mem-persaing json menjadi array javascript
function json (response) {
  return response.json();

}
//blok kode untuk meng-handle kesalahan di blok catch
function error(error){
  //Parameter error berasal dari Promise.reject ()
  console.log("Error : " +  error);
}
