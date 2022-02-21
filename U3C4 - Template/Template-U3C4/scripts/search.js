let term = document.querySelector('#searchbar');

function storeSearchterm(term) {

   input.addEventListener("keypress",(e) => {

     if(e.key==="Enter") {

        let inputValue = document.getElementById("searchbar").value;

        localStorage.setItem("search_term",inputValue);

        window.location.href="search.html";
     }
   })
}

export default storeSearchterm