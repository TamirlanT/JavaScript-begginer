// Kr8dKAVENA_PD8y85hQdJ_2aRv7npAp8KfyZKBVFpH4
//https://api.unsplash.com/
//client_id=Kr8dKAVENA_PD8y85hQdJ_2aRv7npAp8KfyZKBVFpH4

// if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     функция();
//     }

///photos/random

let randomPhoto;

const photoContainer = document.querySelector('#photo-container')

async function showImages() {
    const url = 'https://api.unsplash.com/photos/random/?client_id=Kr8dKAVENA_PD8y85hQdJ_2aRv7npAp8KfyZKBVFpH4&count=1'

    const response = await fetch(url)
    console.log(response.status);
    console.log(response.ok);

    randomPhoto = await response.json();
    // const urlsImg = Array.from(randomPhoto[0].urls)

    // console.log(randomPhoto[0].urls.regular);

    randomPhoto.forEach(el => {
        const img = document.createElement('img')
        img.setAttribute('src', `${el.urls.regular}`)
        img.setAttribute('width', '600')
        img.setAttribute('height', '400')

        const photograferName = document.createElement('p')
        photograferName.classList.add('photografer-name')
        photograferName.textContent = el.user.name

        const imgBox = document.createElement('div')
        imgBox.classList.add('photo-cart', 'photo')

        const likeCounter = document.createElement('p')
        likeCounter.classList.add('like-counter')
        likeCounter.textContent = el.likes

        const likeButton = document.createElement('button')
        likeButton.classList.add('like-button')
        likeButton.textContent = 'Like'

        const likeBox = document.createElement('div')
        likeBox.classList.add('like-box')
        likeBox.append(likeCounter, likeButton)

        imgBox.append(img, photograferName, likeBox)

        photoContainer.append(imgBox)

        localStorage.setItem(el.user.name, el.id)

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('active');
            let changeLike = parseInt(likeCounter.textContent);
            if (likeButton.textContent === 'Like') {
                likeButton.textContent = ''
                changeLike += 1
                likeCounter.textContent = changeLike
            } else {
                likeButton.textContent = 'Like'
                changeLike -= 1
                likeCounter.textContent = changeLike
            }
        })
    })
}

showImages();


setTimeout(() => {
    const ulList = document.querySelector('.history-list')
    let history = localStorage.length
    for (let i = 0; i < history; i++) {
        let detailsElem = document.createElement('details');
        let summaryElem = document.createElement('summary')

        let key = summaryElem.textContent = localStorage.key(i);
        const img = document.createElement('img')


        async function historyImg(key) {
            const url = `https://api.unsplash.com/photos/${localStorage.getItem(key)}?client_id=Kr8dKAVENA_PD8y85hQdJ_2aRv7npAp8KfyZKBVFpH4`


            const response = await fetch(url)

            const Photo = await response.json();
            console.log(Photo);

            img.setAttribute('src', `${Photo.urls.small}`)
            img.setAttribute('width', '200')
            img.setAttribute('height', '100')
        }
        historyImg(key)
        detailsElem.append(summaryElem, img)
        ulList.prepend(detailsElem)
        // historyList.prepand() /photos/:id
    }
}, 2500);