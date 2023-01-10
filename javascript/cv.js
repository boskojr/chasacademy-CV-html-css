let url = "/json/cv.json";


let expo = document.getElementById("expo");
let mains = document.getElementById("mai");

let button = document.createElement("button")
button.innerText = 'Details'
button.className = "btn"
expo.appendChild(button)



let toggle = true;

button.addEventListener("click", function ()  {
    
        toggle = !toggle;
        if(toggle){
            mycv();
        }else {
          mains.innerText = ""
        }
        // img.src = 'Sun-or-Moon\\moon.jgp';
    


})

async function mycv (){
    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        console.log(data);

        // Loop over the jobs array and create a list item for each job
        data.jobs.forEach(job => {
            let mylist = document.createElement('h1');
            mylist.innerHTML = `${job.Heading} <br> ${job.Year} <br> ${job.Titel} <br> ${job.Location}`;
            mylist.className = "mylist"
            mains.appendChild(mylist);
            console.log(mylist);
        });
    } else {
        console.log("http-error" + response.status);
    }
    // button.disabled = true
}