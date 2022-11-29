let elUl = document.querySelector('.to__list')
let elFooter = document.querySelector('.ullar')
let elFoot = document.querySelector('.footer')
let elLoader = document.querySelector('.loader')

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
    setTimeout(()=>{
        mapper(json)
        console.log(json);
        elLoader.style.display = 'none'
        
    }, 2000)
    elFoot.style.display = 'none'
})
setTimeout(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        mapp2(data)
    })
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(dataBase => aylan(dataBase))
}, 2100)


function mapper(care) {
    care.map((e)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://i.ytimg.com/vi/s51nMJr03Ps/hqdefault.jpg?s…RhlIFwoTzAP&rs=AOn4CLANri6UMJ-TjU_U679W_N4rPNE1ng" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${e.name}</h5>
          <p class="card-text">${e.username}</p>
          <button class="btn btn-primary butt" id="${e.id}">About me</button>
          <button class="btn btn-primary buttt" id="${e.id}">Back</button>
        </div>
      </div>`
        newLi.setAttribute("id", `${e.id}`)
        newLi.setAttribute("class", 'cals')
        elUl.appendChild(newLi)
    })
}

function mapp2(mapper) {
    let elBtnn = document.querySelectorAll('.buttt')
    elBtnn.forEach(e=>e.classList.add('none'))
    let elBtn = document.querySelectorAll('.butt')
    let elCals = document.querySelectorAll('.cals')
    elBtn.forEach(e=>{
        e.addEventListener('click',i=>{
            elFoot.style.display = 'block'
            elCals.forEach(r=>{
                if(r.id != e.id){
                    r.classList.add('none')
                }
            })
            elBtn.forEach(y=>y.classList.add('none'))
            elBtnn.forEach(e=>e.classList.add('block'))
            mapper.forEach(o=>{
                if(e.id == o.userId){
                    let newLi = document.createElement('li')
                    newLi.innerHTML = `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="https://i.ytimg.com/vi/dC92CXw1i30/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLC8tRFcYco857GfxjiPB8AvMVvTCw" alt="Card image cap">
                    <div class="card-body">
                    <h3 class="card-title">${o.title}</h3>
                    <p class="card-text">${o.body}</p>
                    
                    </div>
                    </div>`
                    elBtnn.forEach(e=>e.classList.add('none'))
                    newLi.setAttribute('class', 'cle')
                    elUl.appendChild(newLi)
                }
            })
            let elClass = document.querySelectorAll('.cle')
            elBtnn.forEach(e=> {
                e.addEventListener('click', ()=>{
                    elBtnn.forEach(e=>e.classList.remove('block'))
                    elBtn.forEach(y=>y.classList.remove('none'))
                    elCals.forEach(r=>{
                        if(r.id != e.id){
                            r.classList.remove('none')
                        }
                    })
                    elClass.forEach(p => {
                        p.classList.add('none')
                    })
                })
            })
        })   
    })
}

function aylan(perem) {
    elFoot.classList.add('none')
    let elBtn = document.querySelectorAll('.butt')
    let elBtnn = document.querySelectorAll('.buttt')
    let param = perem.splice(0,50)   
    elBtn.forEach(t => {
        t.addEventListener('click', ()=>{
            param.forEach(e => {
                if(e.postId == t.id){
                    console.log('iwladi');
                    let newDiv = document.createElement('li')
                    newDiv.innerHTML = `
                        <h4>${e.name}</h4>
                        <h5>${e.email}</h5>
                        <h6>${e.body}</h6>
                        <hr>`
                    newDiv.setAttribute('class', 'fc')
                    elFooter.appendChild(newDiv)
                    elFoot.classList.remove('none')
                }
            })
            let elFc = document.querySelectorAll('.fc')
            elBtnn.forEach(e=> {
                e.addEventListener('click', ()=>{
                    elFc.forEach(z => {
                        console.log(z);
                        z.classList.add('none')
                        elFoot.classList.add('none')                        
                    })
                })
            })
        })
    })
}

