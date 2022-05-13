var express = require('express')
var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SERVER_PORT = process.env.PORT || 3000;
const MAX_LENGTH_WORD = 10;

app.post('/getWordLengthFrequency', function (req, res) {
    console.log("post requested received with data: ");

    var data = req.body.data;

    console.log(data);

    var result = new Array(MAX_LENGTH_WORD);
    result.fill(0);

    var stringLen = 0;
    var resultStr = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i] == " " || i == data.length - 1) {
            if (stringLen != 0 || stringLen > 9) {
                if (i == data.length - 1) {
                    if (data[i + 1] != " ") {
                        stringLen++;
                    }
                }
                result[(stringLen - 1)]++;
                stringLen = -1;
            }
        }
        resultStr = resultStr + data[i];
        console.log(resultStr)
        stringLen++;
    }

    console.table(result);
    res.send(result);
    res.end();

})

app.listen(SERVER_PORT, () => {
    console.log("Server listening on port: " + SERVER_PORT);
})