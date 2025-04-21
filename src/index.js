const imgContainer = document.getElementById('dog-image-container');
const breedDropDown= document.getElementById('breed-dropdown');


addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(data => {
            data.message.forEach(item => {
                const img = document.createElement('img');
                img.src = item;
                imgContainer.appendChild(img);

            });
        })
        .catch(error => console.error('Error fetching images:', error));
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(res =>res.json())
        .then(data =>{
            Object.keys(data.message).forEach(breed => {
                const li = document.createElement('li');
                li.innerText = breed;
                document.getElementById('dog-breeds').appendChild(li);
                li.addEventListener('click',(event)=>{
                    event.target.style.color ='pink';
                })
            });
           
            
        })
        
});

breedDropDown.addEventListener('change', (event) => {
    const selectedBreed = event.target.value;
    const allBreeds = document.querySelectorAll('#dog-breeds li');
    
    allBreeds.forEach(breed => {
        if ( breed.innerText.startsWith(selectedBreed)) {
            breed.style.display = 'list-item';
        } else {
            breed.style.display = 'none';
        }
    });
})

