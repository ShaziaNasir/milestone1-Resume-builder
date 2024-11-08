let ref_section=document.getElementById(`ref`)
let ref_btn=document.getElementById(`ref_btn`)

let exp_section=document.getElementById(`experience`)
let exp_btn=document.getElementById(`exp_btn`)


exp_btn?.addEventListener(`click`,()=>{
    console.log("in listener")
    exp_section!.classList.toggle(`hide`)
})