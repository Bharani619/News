async function apiCall(url) {

 try{
     
    
    let res = await fetch(url);
    let data = await res.json();
    
    return data;
    // console.log(data);

 }
 catch (err) {
     console.log("err:",err)
 }


}


function appendArticles(articles, main) {

    articles.forEach((elem) => {

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src=elem.urlToImage;
        image.setAttribute("width","100%");

        let Title = document.createElement("p");
        Title.textContent=elem.title

        div.append(image,Title);
        main.append(div);


        div.onclick=() => {
           localStorage.setItem("article",JSON.stringify(elem));
           window.location.href="news.html"
        }

    })

}

export { apiCall, appendArticles }