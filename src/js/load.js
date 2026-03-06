// Function to dynamically load files
function loadHTML(file, id)
{
    fetch(file)
        .then(
            function(response)
            {
                return response.text();
            }
        )
        .then(
            function(data)
            {
                document.getElementById(id).innerHTML=data;
                console.log(`Successfully loaded ${id} into ${file}.`);
            }
        )
        .catch(
            function(error)
            {
                console.error(`Loading ${id} into ${file} failed.\nError - ${error}`);
            }
        )
}
// When DOM content is loaded
document.addEventListener("DOMContentLoaded",
    function()
    {
        //Load header dynamically
        loadHTML("src/pages/header.html", "header-placeholder");
        
    }
);