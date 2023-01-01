let div=document.getElementById("showdata")

let data=localStorage.getItem("checkedata");
data=JSON.parse(data)
let subdiv=document.createElement("div");
function maped(a){

    subdiv.innerHTML=null

a.map(elem=>{
    let p=document.createElement("p");
    p.innerText=elem.Exhibitor_Name

    subdiv.append(p)
div.append(subdiv)
})

}
maped(data)


let list=[]

function search(){
  let txt=document.getElementById("search");
  txt=txt.value;
  txt=txt.toLowerCase();
  list=[]
  
  data.map((elem)=>{
    if(elem.Exhibitor_Name.toLowerCase().includes(txt)){
      list.push(elem)
    }
  })
  maped(list)
}
  

