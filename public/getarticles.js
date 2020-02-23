    async function apiCall() {
        let res = await fetch("http://localhost:5500/api/articles")

        return res.json();
    }

    async function getArticles() {
        let res = await apiCall();
        
        for(let i = 0; i < res.length; i++) {

            //Create table for articles
            let card = document.createElement("table");

            //Create button to delete articles
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "x";
            deleteButton.id = "close";
            //console.log(res);

            //USE with function to delete from UI
            deleteButton.addEventListener("click", deleteArticle);    
            

            let row = document.createElement("tr");
            row.id = "table-row";
            let articleData = document.createElement("td");
            articleData.className = "card-body";
            articleData.innerHTML = res[i].title + '<br> By: ' + res[i].poster;
            
            // articleData.appendChild(editButton);
            articleData.appendChild(deleteButton);
            
            row.appendChild(articleData);
            
            //card.appendChild(row);
            document.getElementById("table-data").appendChild(row);
        }
        //console.log(res);
    }

    getArticles();

