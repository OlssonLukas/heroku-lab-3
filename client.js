const data = {
    data: 'O Hi this a test Car River Deer Car Bear and'

};

document.getElementById("sentence").innerHTML = data.data;


axios.post('http://127.0.0.1:5500/getWordLengthFrequency', data.data)
    .then((res) => {
        console.log(data);
        console.log(res.data);
        document.getElementById("sentence").innerHTML = res.data
    }).catch((err) => {
        console.log(err);
    });



