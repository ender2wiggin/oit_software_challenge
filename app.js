const express = require('express')
export function getWord(){
    let data = ''
    
    const request = http.get('https://random-word-api.herokuapp.com/home/word', (response) => {
        response.setEncoding('utf8')
        response.on('data', (chunk) => {
            data += chunk
        })
        response.on('end', () => {
            return data
        })
    })
    request.on('error', (error) => {
        console.error(error)
    })
    request.end()
}
String.prototype.scramble = function (){
    let a = this.split("")
    let n = a.length
    for(let i = n-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1))
        let tmp = a[i]
        a[i] = a[j]
        a[j] = tmp
    }
    return a.join("\t")
}
const app = express()

app.get('api/word?', (req, res) => {
    let original_word = getWord()
    let mixed_word = original_word.scramble()
    res.send({
        'original_word': original_word,
        'mixed_word': mixed_word
    })
})

export function main(){
    const port = 3000
    app.listen(port, console.log('Server started on port ${port}'))
}

if(require.main == module){
    main()
}