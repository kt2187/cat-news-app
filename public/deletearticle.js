//This function will delete item from UI
// function deleteArticle() {
//     let deletedArticle = document.getElementById("table-row");
//     deletedArticle.remove();
//     console.log("click");
// }

//Delete request atempt with fetch api on button click
//Deletes data from database when specific id # is entered
//Won't work on click event

async function deleteArticle(_id) {
    await fetch(`http://localhost:5500/api/articles/${_id}`, {
        method: "DELETE"
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    //console.log(data);
}

deleteArticle("5e5166b6f8b19753d75deb21");
//deleteArticle();