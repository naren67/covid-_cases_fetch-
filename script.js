var click_here = document.getElementById('click_here');

click_here.addEventListener('click',()=>{

link ='https://corona.lmao.ninja/v2/countries';

fetch(link)
.then((response)=>{
    return response.json();
})
.then((data)=>{

    var data_output = document.getElementById('data_output');

    var template = `<h1 class='mt-4 text-center second_header'>Covid <span>data</span></h2>`

    data.forEach((element) => {
        template += `
        
       <div class="result_block">

       <ul class='list-group>
       <li class='list-group-items'><strong>Country : </strong>${element.country}</li>
       <li class='list-group-items'><strong>Cases   : </strong>${element.cases}</li>
       <li class='list-group-items'><strong>Active  : </strong>${element.active}</li>
       </ul>
       </div>

        `
    });

    data_output.innerHTML=template; 

})


})