axios.get('/activites')
.then(function(r) {
    let newItem = document.createElement('tr')
        newItem.innerHTML = `
            <th>${item}</th>
        `
        document.getElementById('toDoList').append(newItem)
        axios.put(`/activities/${e.target.id}`, {
            finished: parseInt(e.target.dataset.finished) === 0 ? true : false
        })
        .then(() => {
            window.location.reload()
        })
        .catch(e => console.error(e))
})

document.getElementById('addBtn').addEventListener('click', e => {
    e.preventDefault()
    let item = {
        thing: document.getElementById('item').value,
        finished: false
    }
    axios.post('/activities', item)
    .then(() => {
        window.location.reload()
    })
    .catch(e => console.error(e))
})

document.addEventListener('click', e => {
    if (e.target.className === 'item') {
        console.log(e.target.dataset.finished)
        console.log(e.target.id)
        let newItem = document.createElement('tr')
        newItem.innerHTML = `
            <th>${item}</th>
        `
        document.getElementById('toDoList').append(newItem)
        axios.put(`/activities/${e.target.id}`, {
            finished: parseInt(e.target.dataset.finished) === 0 ? true : false
        })
        .then(() => {
            window.location.reload()
        })
        .catch(e => console.error(e))
    }
})