const data = {
    data: 'O Hi this a test Car River Deer Car Bear and'

};

document.getElementById("sentence").innerHTML = data.data;


axios.post('http://cloud-lab-3.herokuapp.com/getWordLengthFrequency', data.data)
    .then((res) => {
        console.log(data);
        console.log(res.data);
        document.getElementById("sentence").innerHTML = res.data
    }).catch((err) => {
        console.log(err);
    });



