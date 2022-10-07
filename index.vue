<!DOCTYPE html>
<html lang = "en">
  <head>
    <title>Anagram Challenge</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="vue_instance.js"></script>
    <script type = "text/javascript" src = "index.js"></script>
    <script type="text/javascript" src="..\webservice\app.js"></script>
  </head>
  <body>
    <div id = "intro" style = "text-align: center">
      <h1>{{introMessage}}</h1>
    </div>
    <div id = "instructions" style = "text-align: center">
      <h3>{{instructionsMessage}}</h3>
    </div>
    <div id = "letters" style = "text-align: center"></div>
    <div id = "input" style = "text-align: center display: none">
      <input id = "textInput" type ="text"></input>
      <input id = "submitButton" type = "button" onclick = "guessWord()" value = "Submit"></input>
      <input id = "hintButton" type = "button" onclick = "provideHint()" value = "Hint"></input>
      <p id = "hint"></p>
    </div>
    <div id = "win" style = "text-align: center display: none">
      <h1>You Win!</h1>
      <input id = "againButton" type = "button" onclick = "main()" value = "Play again?"></input>
      <input id = "quitButton" type = "button" onclick = "quit()" value = "Quit?"></input>
    </div>
    <input id = "beginButton" type = "button" onclick = "main()" value = "Begin!"></input>
    <div id = "guessedWords" style = "text-align: center"></div>
    <div id = "quit" style = "text-align: center" style = "display:none">
      <h1>{{quitMessage}}</h1>
    </div>
    <script type = "text/javascript">
      $(document).ready(function () {
        main()
      })
    </script>
  </body>  
</html>
<script>
export default {
  name: 'IndexPage',
}
</script>
