const axios = require('axios');

const data = 'O Hi this a test Car River Deer Car Bear and';

axios.post('http://cloud-lab-3.herokuapp.com/getWordLengthFrequency', { data })
    .then((res) => {
        var result = {};
        result.OneLetter = new Tableize(res.data[0]);
        result.TwoLetter = new Tableize(res.data[1]);
        result.ThreeLetter = new Tableize(res.data[2]);
        result.FourLetter = new Tableize(res.data[3]);
        result.FiveLetter = new Tableize(res.data[4]);
        result.SixLetter = new Tableize(res.data[5]);
        result.SevenLetter = new Tableize(res.data[6]);
        result.EightLetter = new Tableize(res.data[7]);
        result.NineLetter = new Tableize(res.data[8]);
        result.TenLetter = new Tableize(res.data[9]);

        console.log(data);
        console.table(result);
    }).catch((err) => {
        console.log(err);
    });

function Tableize(data) {
    this.words = data;
}
