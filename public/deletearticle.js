//This function will delete item from UI
// function deleteArticle() {
//     //const article = article.findByIdAndRemove(id);
//     let deletedArticle = document.getElementById("table-row");
//     deletedArticle.remove();
//     console.log("click");
// }

async function deleteArticle(id) {
        async function apiCall() {
        let res = await fetch("http://localhost:3000/api/articles")
            
        return res.json();
    }

    let res = await apiCall();
    for(let i = 0; i < res.length; i++) {
        console.log(res[i]);
    }
}

//Some sucess with this method when placed in getarticles
// deleteButton.addEventListener("click", async deleteArticle => {
                
//                 const id = res[i]._id;
                
//                 const data = await fetch(
//                     `http://localhost:3000/api/articles/:id`,
//                     {
//                         method: "DELETE"
//                     }
//                 ).then(response => response.json());
//                 //data.remove(id);
//                 //console.log(data);
//                 console.log(res);
//             })
