console.log("helooo");
let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");





btn.addEventListener("click", async ()=>{
    
    let input=document.querySelector("input").value;
    let universitiesNames= await getData(input);
    // console.log(universitiesNames);
    List(universitiesNames);
})






async function getData(country){
    try{
        let universities= await axios.get(url+country);
    console.log(universities.data);
    return universities.data;
    }
    catch(e){
        console.log("error is",e);
    }
}

async function List(universities) {
    let list=document.querySelector("#list");
    list.innerText="";
    for(uni of universities){
        console.log(uni.name)
        let li=document.createElement("li");
        li.innerText=uni.name;
        list.appendChild(li);
    }
}