let form = {
  client: null,
  clientType: "M",
  callType: null,
  patientFirstName: "M",
  patientLastName: "M",
  DOB: null,
  PhNumber: null,
  address: "M",
  site: null,
}
// 改指定assign的key DOB
let obj = Object.assign({},{
    ...form,
    DOB:'12/11/1988',
    address:'10 bond street'
})

form = {...obj}

let keys = Object.keys(form)
console.log(keys)
let undoneFields = keys.filter((key)=>{
 return form[key]==='M'
})

console.log(undoneFields)
