
// beer id FileList
// GET https://api.openbrewerydb.org/breweries/autocomplete?query=dog


// beer pad=ge data all
// https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=10


// mad tree Image
// https://www.madtreebrewing.com/wp-content/themes/madtree/images/footer-logo.svg


//  beer tin can img
// 	https://www.madtreebrewing.com/wp-content/uploads/2020/01/Home_Stat-2-.jpg


// cover img 
// https://www.madtreebrewing.com/wp-content/uploads/2019/11/Psych-Web-Lifestyle-Image-41-500x500.jpg


// funk tree
// https://www.madtreebrewing.com/wp-content/uploads/2022/09/Raspberry-Lemon-Website-Image-500x500.jpg



var container = document.querySelector(".container")


var mb_3 = document.createElement('div')
mb_3.setAttribute("class", "mb-3")

container.append(mb_3)


var btngroup = document.createElement('div')
btngroup.setAttribute("class", "btn-group")
mb_3.append(btngroup)

var creat_search_input = document.createElement('input');
creat_search_input.setAttribute('type', 'text');
creat_search_input.setAttribute('class', 'form-control')
creat_search_input.classList.add('p-3')
creat_search_input.setAttribute('placeholder','Serch You WANT! 25 Type of Breweries')
btngroup.append(creat_search_input)


var search_btn = document.createElement('button')
search_btn.setAttribute('class','btn')
search_btn.textContent="search"
search_btn.setAttribute('onclick','searching(this)')
search_btn.classList.add("search-btn")
search_btn.classList.add('btn-outline-warning')
btngroup.append(search_btn)




// https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=12


async function breweries(){
    
    var breweries_url ='https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=25'

 var breweries_fetch_url = await fetch(breweries_url)
 var json_fetch = await breweries_fetch_url.json()

 console.log(json_fetch);

 var card_row = document.createElement('div')
card_row.setAttribute('class', 'row')
container.append(card_row)

for(var data of json_fetch){

  var col_md_4 = document.createElement('div')
    col_md_4.setAttribute('class',"col-md-4" )

card_row.append(col_md_4)
var card = document.createElement('div')
card.setAttribute('class','card')
card.classList.add('mb-5')
col_md_4.append(card)




 var img = document.createElement('img')
 img.setAttribute('src',"https://i0.wp.com/absolutebeer.com/wp-content/uploads/2020/02/AB-Breweries-MadTree-Brewing-Company-Beers-Ramble-On-Thumb.jpg?fit=1200%2C1200&ssl=1")
img.setAttribute('class', 'card-img-top' )
img.classList.add('gap-5')
img.setAttribute('alt', "Tin Brewery")

card.append(img)


var card_body = document.createElement('div')
card_body.setAttribute('class', 'card-body')
card.append(card_body)


var h4 = document.createElement('h4')
h4.setAttribute('class','text-white')

h4.classList.add('card-title')
h4.textContent= data.name

card_body.append(h4)


var para1 = document.createElement('p')
if(data.phone == null && data.address_2 == null && data.address_3 == null ){

    para1.innerHTML=`
    <h4>Details</h4>
    
<p> Type : normal</p>
    <p> Address :  ${data.state}   </p>
    <p> Contact : Visit Our Webiste </p>
    
    `
    
}   else{
    
    
    para1.innerHTML=`
    <h4>Details</h4>
    
    <p> Type :  ${data.brewery_type}</p>
    <p> Address :  ${data.state} ${data.city} ${data.country}  </p>
    <p> Contact : ${data.phone}</p>
 

    ` 

} 



card_body.append(para1)

var mb_3_2 =document.createElement('div');
mb_3_2.setAttribute( 'class','mb-0' )
mb_3_2.classList.add('text-center')

card_body.append(mb_3_2)

var btn = document.createElement('button')
btn.setAttribute('class','btn' )

btn.classList.add('btn-outline-warning')

var atag = document.createElement('a')
atag.setAttribute('href', data.website_url)
atag.setAttribute('target', '_blank')

atag.textContent="Offical Contact"


btn.append(atag)
mb_3_2.append(btn)



}

}
breweries()








var inputfield = document.querySelector('.form-control')



function searching(){
    console.log("clicked search");
    
    




    var searchs = document.querySelector('.form-control')

    var filter = searchs.value.toLowerCase()
    
    var listitem = document.querySelectorAll('.card-title')
    
    
    
    listitem.forEach((item)=>{
    
    var text = item.textContent;
    
    console.log(item.textContent);
    
    
    if(text.toLowerCase().includes(filter)){
        item.parentElement.parentElement.style.display = '';
    
    
    }
    else{
        item.parentElement.parentElement.style.display = 'none'
    }
    
    
    });














    

    
    
    
    


}





var inputs = document.querySelector('.form-control')

inputs.addEventListener('input',filterlist)


function filterlist(){


var searchs = document.querySelector('.form-control')

var filter = searchs.value.toLowerCase()

var listitem = document.querySelectorAll('.card-title')



listitem.forEach((item)=>{

var text = item.textContent;

console.log(item.textContent);


if(text.toLowerCase().includes(filter)){
    item.parentElement.parentElement.style.display = '';


}
else{
    item.parentElement.parentElement.style.display = 'none'
}


});


}















