
const input=document.querySelector("input");
const btn=document.getElementById("tap");
const result=document.getElementById("result");
btn.addEventListener("click",()=>{
    // calling the api
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`).then((res)=>{
                return (res.json());
    }).then((data)=>{
        // console.log(data);
        // changing the data in html using dom
        let change=`<h2>Results</h2>
        <p>your searched for word:${input.value}</p>
        <p>part of speech:${data[0].meanings[0].partOfSpeech}</p>
        <h4>Definitions: ${data[0].meanings[0].definitions[0].definition}</h4>`;
        // remove the input so that we can use that without again and again delete the word.
        input.value="";
        // finally change the inner html
        result.innerHTML=change;
    })
})