document.body.innerHTML = `<div class="heading-container">
<h1>HBO - Series</h1>
<div id="maincontainer" class="main-container"> </div>`;




const getData = async()=>{

try{
    const data=await fetch("https://api.tvmaze.com/search/shows?q=girls");
    const shows=await data.json();
    console.log(shows);
    maincontainer.innerHTML="";
    shows.forEach((shows) =>{
        displayData(shows);
    })
} catch(error){
    console.log(error);
}
}

getData();

const displayData=(obj)=>{
maincontainer.innerHTML+= `
<div class="container">
<h3 class="blue">Name: <span>${obj.show.name}</span></h3>
<p>Type:<span>${obj.show.type}</span></p>
<p>Language:<span>${obj.show.language}</span></p>
<p>Genres:<span>${obj.show.genres}</span></p>
<p>Link:<span>${obj.show.officialSite}</span></p>
<p>Rating:<span>${obj.show.rating.average}</span></p>
</div> `
    
}

