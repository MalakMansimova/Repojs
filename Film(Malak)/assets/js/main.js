let Malakfilm=document.getElementById("pen");
fetch("https://api.tvmaze.com/shows")
.then(data=>data.json())
.then(task=>{
    for(let i=0;i<task.length;i++){
        let filmtv=document.createElement("div");
        filmtv.className="col-md-3 mt-5";
        filmtv.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="${task[i].image.medium}"class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">average: ${task[i].rating.average}</h4>
        <p class="card-text">${task[i].name}</p>
        <a href="${task[i].url}"> class=btn btn-primary>Watch Now</a>
        </div>
        
       </div>`
       Malakfilm.appendChild(filmtv)
    }
})