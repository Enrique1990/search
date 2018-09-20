// READ the giphy API docs: https://developers.giphy.com/
//declar our variables and select our elements
var giphy_endpoint = 'http://api.giphy.com/v1/gifs/search';
var API_KEY = "lZlKwikrL3ndDKNOyoqqTE4T3LE87gx8";
var searchForm = document.querySelector("#search-form");
var searchInput = searchForm.querySelector("input");
var results = document.querySelector(".results");
// define our functions
function getGifs(){
    results.innerHTML = "";
    $.ajax({
        type:"GET",
        url:`${giphy_endpoint}?api_key=${API_KEY}&q=${searchInput.value}`,
        datatype:"json",
        success: function(data){
            console.log(data);
            for(var i=0; i<data.data.length; i++){
                results.innerHTML +=`
                <img class="image" src="${data.data[i].images.preview_gif.url}">`
            }
        },
        error: function(error){
            console.log("there was an error");
        }

    });

}
// call our functions and add our event listeners
searchForm.addEventListener('submit', function(event){
    event.preventDefault();
    getGifs();
})


