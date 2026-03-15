let editIndex = -1

function getData(){

let data = localStorage.getItem("myDB")

return data ? JSON.parse(data) : []

}

function saveData(data){

localStorage.setItem("myDB", JSON.stringify(data))

}

function addData(){

let name = document.getElementById("name").value

let db = getData()

if(editIndex === -1){

db.push(name)

}else{

db[editIndex] = name
editIndex = -1

}

saveData(db)

document.getElementById("name").value = ""

showData()

}

function showData(){

let db = getData()

let html = ""

db.forEach(function(item,index){

html += `
<li class="list-group-item d-flex justify-content-between">
${item}

<div>
<button class="btn btn-warning btn-sm" onclick="editData(${index})">แก้ไข</button>
<button class="btn btn-danger btn-sm" onclick="deleteData(${index})">ลบ</button>
</div>

</li>
`

})

document.getElementById("list").innerHTML = html

}

function deleteData(index){

let db = getData()

db.splice(index,1)

saveData(db)

showData()

}

function editData(index){

let db = getData()

document.getElementById("name").value = db[index]

editIndex = index

}

showData()