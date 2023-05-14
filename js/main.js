const fromText = document.querySelector("#from-text");
toText = document.querySelector("#to-text");
// const translateFrom = document.querySelector("#translateFrom");
// const translateTo = document.querySelector("#translateTo");
// console.log(translateFrom);
// console.log(translateTo);
selectTag = document.querySelectorAll("Select");
console.log(selectTag);
const icon = document.querySelector("i");
console.log(icon);
const btn = document.querySelector("#btn");
console.log(btn);

selectTag.forEach((tag, id )=>{
    for (const country_code in countries){
// selecting english by default a From language and Urdu as To language
    let selected;
    if(id == 0 && country_code == "en-GB" ){
        selected = "selected";
    } else if(id == 1 && country_code == "ur-UR"){
        selected = "selected";
    }
        let option = `<option value="${country_code}"${selected}>${countries[country_code]}</option>`;
   console.log(option);
   tag.insertAdjacentHTML("beforeend", option);   //adding option tag inside the tag which is in the function 
}

});
// let set the icon
icon.addEventListener("click",() =>{
let tempText = fromText.value;
fromText.value = toText.value;
toText.value = tempText;
}); 


// EventListener programe on translateBtn
btn.addEventListener("click",()=> {
let text = fromText.value;
translateFrom = selectTag[0].value,
translateTo = selectTag[1].value;
console.log(text);
let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`

fetch(apiUrl).then(res => res.json()).then(data => {
console.log(data);
toText.value = data.responseData.translatedText;
});
});

