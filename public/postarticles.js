document.getElementById('addPost').addEventListener('submit', addPost);

function addPost(e) {
        e.preventDefault();

        let title = document.getElementById("article-title").value;
        let poster = document.getElementById("article-poster").value;

        fetch("http://localhost:5500/api/articles", {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                poster: poster
                })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }