axios.get('/activities')
    .then(function (r) {
        console.log(r.data)
        if(r.data !== []) {
            r.data.forEach(activity => {
                const newRow = `
                    <tr class="thing" data-thingid="${activity.id}" data-finished="${activity.finished}"> 
                        <td class="thing" data-thingid="${activity.id}" data-finished="${activity.finished}">${activity.thing}</td>
                        <td class="thing" data-thingid="${activity.id}" data-finished="${activity.finished}">${activity.finished}</td>
                    </tr>
                `
                document.getElementById('itemTable').innerHTML += newRow
            })
        }
    })
    .catch(e => console.error(e))

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
    console.log(e.target)
    if (e.target.className === 'thing') {
        console.log(e.target.dataset.finished)
        console.log(e.target.dataset.thingid)
        axios.put(`/activities/${e.target.dataset.thingid}`, {
            finished: e.target.dataset.finished === 'false' ? true : false
        })
            .then(() => {
                window.location.reload()
            })
            .catch(e => console.error(e))
    }
})