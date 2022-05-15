




const form = document.querySelector("#searchForm")
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  console.log("submitted")
  const search = form.elements.query.value;
  

  const options = {
    method: 'GET',
    url: `https://nutritionix-api.p.rapidapi.com/v1_1/search/${search}`,
    params: {fields: 'item_name,item_id,brand_name,nf_calories,nf_total_fat'},
    headers: {
      'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com',
      'X-RapidAPI-Key': '33c7f18de4mshc566c0bc644ac33p16f338jsn1cca81e18952'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    console.log(response.data.hits[0].fields.nf_calories);
    renderData(response.data.hits);
  }).catch(function (error) {
    console.error("problemOcurred",error);
  });
})

const renderData=(itemList) =>{
  for(let item of itemList){
    const newDiv = document.createElement('DIV');
    // const foodImage = document.createElement('IMG');
    // newDiv.appendChild(foodImage);
    const foodTitle = document.createElement('H4');
    foodTitle.innerText =`${item.fields.item_name}`;
    newDiv.appendChild(foodTitle);
    const foodBrand = document.createElement('H5');
    foodBrand.innerText =`Brand : ${item.fields.brand_name}`;
    newDiv.appendChild(foodBrand);
    const foodCalorie = document.createElement('p');
    foodCalorie.innerText =`calories : ${item.fields.nf-calories}`;
    newDiv.appendChild(foodCalorie);
    const foodFat = document.createElement('p');
    foodFat.innerText =`Fat : ${item.fields.nf_total_fat}`;
    newDiv.appendChild(foodFat);
    let mainSection = document.querySelector('main');
    mainSection.appendChild(newDiv);
    console.log(newDiv);
  }
}