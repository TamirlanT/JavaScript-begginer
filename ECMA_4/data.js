// const getData = async (url) => {
//     const res = await fetch(url)
//     const json = await res.json()
//     return json
// }


const url = 'https://jsonplaceholder.typicode.com/users'
// try {
//     const data = await getData(url)
//     console.log(data);
// } catch (e) {
//     console.log(e);
// }
const getData = async (url) => {
    try {
        const respone = await fetch(url)

        const data = await respone.json();
        console.log(data);
        let count = 1;

        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);

            const clientBox = document.createElement('div');
            clientBox.classList.add('client__box')

            const client = document.createElement('p')
            client.classList.add('client')

            const btn = document.createElement('button')
            btn.classList.add('delete__button')
            btn.textContent = 'Delete client'

            clientBox.appendChild(client)
            clientBox.appendChild(btn)
            const body = document.querySelector('body')
            body.appendChild(clientBox)


            const text = JSON.stringify(data[i], null, 4);
            client.textContent = text;
            localStorage.setItem(count, text)
            count++;
        }
        const clientDelete = document.querySelectorAll('.delete__button');
        console.log(clientDelete);


        clientDelete.forEach(el => {
            el.addEventListener('click', function (e) {
                let target = e.target;
                let div = target.closest('div')
                let par = div.querySelector('p').textContent
                par = JSON.parse(par)
                console.log(par);
                let id = par.id;
                console.log(localStorage.removeItem(id));

                target.closest('div').remove()
            });
        });

    } catch (error) {
        console.log(`Error : ${error}`);
    }
}

getData(url)







