console.log('Client side javascript file is loaded!')

fetch('http://localhost:3000/home?address=kanpur nagar').then((response) => {
    response.json().then((state) => {
        if (state.error) {
            console.log(state.error)
        } else {
            console.log(state)
            //console.log(data.forecast)
        }
    })
})
