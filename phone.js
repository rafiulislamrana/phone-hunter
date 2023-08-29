const phoneData = async(search) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    const data =  await res.json();
    console.log(data.data);
    addList(data.data);
}

const onePhone = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const dataInd =  await res.json();
    singlePhone(dataInd.data);
    
}

const image = document.getElementById('p-image');
const name = document.getElementById('p-name');
const storage = document.getElementById('p-storage');
const size = document.getElementById('p-size');
const chipset = document.getElementById('p-chipset');
const memory = document.getElementById('p-memory');
const release = document.getElementById('p-release');
const brand = document.getElementById('p-brand');
const gps = document.getElementById('p-gps');
const modalE = document.getElementById('my_modal_5');

const singlePhone = (info) => {
    
    console.log(info);
    
   
    image.setAttribute('src', `${info.image}`);
    
    name.innerText = `${info.name}`;
    
    storage.innerText = `${info.mainFeatures.storage}`;
    
    size.innerText = `${info.mainFeatures.displaySize}`;
    
    chipset.innerText = `${info.mainFeatures.chipSet}`;
    
    memory.innerText = `${info.mainFeatures.memory}`;
    
    release.innerText = `${info.releaseDate}`;
   
    brand.innerText = `${info.brand}`;
    
    gps.innerText = `${info.others.GPS}`;
    callModal();

}

const callModal = () => {
    modalE.showModal();
}


document.getElementById('search-text').addEventListener('click', function(){
    const inputField = document.getElementById('input-value');
    const inputValue = inputField.value;
    phoneData(inputValue);
    phoneContainer.innerHTML = '';
    inputField.value = '';

})

const phoneContainer = document.getElementById('phone-list');

const showPhones = (datas) => {
    const div = document.createElement('div');
    div.classList.add("card", "w-96", "bg-base-100", "border");
    div.innerHTML = `
    <figure class="p-10 bg-[#0d6efd0d] mx-6 mt-6">
         <img src="${datas.image}" alt="Shoes" class="rounded-xl" />
     </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title text-2xl">${datas.phone_name}</h2>
        <p class="text-[#706F6F]">If a dog chews shoes whose shoes does he choose?</p>
        <h2 class="card-title text-2xl">$999</h2>
    <div class="card-actions">
        <button id="details-phone" class="btn primary-bg text-xl capitalize text-white" onclick="onePhone('${datas.slug}')">Show Details</button>
        
        
        
    </div>
    </div>`;
    phoneContainer.appendChild(div);
}

const addList = (datas) =>{
    for(const data of datas){
        showPhones(data);
    }
}

// onePhone('${datas.slug}')
