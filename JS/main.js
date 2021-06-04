function getJson(file, callback){
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open("GET",file,true);
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            callback(request.responseText);
        }
    }
    request.send();
}

getJson("JS/info.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    pInfo(data.personalInfo);
    proInfo(data.education);
});


var body = document.querySelector("body");
body.classList.add("body");
var maindiv = document.createElement("div");
body.appendChild(maindiv);
maindiv.classList.add("mainDiv");


function pInfo(data){
    var pinfo = document.createElement("div");
    maindiv.append(pinfo);
    pinfo.classList.add("InfoDiv");
    var img = document.createElement("img");
    img.classList.add("dp_img");
    pinfo.appendChild(img);
    img.src = data.pic;
    
    var name = document.createElement("h3");
    pinfo.appendChild(name);
    name.textContent = "Name : "+data.name;

    var age = document.createElement("p");
    pinfo.appendChild(age);
    age.textContent = "Age : "+data.age;

    var add = document.createElement("p");
    pinfo.appendChild(add);
    add.textContent = "Address : "+data.address;

    var status = document.createElement("p");
    pinfo.appendChild(status);
    status.textContent = "Current Status: "+data.currentStatus;


}
function proInfo(data){
    var proinfo = document.createElement("div");
    proinfo.classList.add("proInfo");
    maindiv.appendChild(proinfo);

    var education = document.createElement("div");
    education.classList.add("education");
    proinfo.appendChild(education);

    
    var table = document.createElement("table");
    table.classList.add("eduTable");
    education.appendChild(table);

    var headRow = document.createElement("tr");
    table.appendChild(headRow);
    for (i in data[0].heading) {
        var th = document.createElement("th");
        headRow.appendChild(th);
        th.textContent = data[0].heading[i];
    }

    for(i in data){
        
        if(i == 0){
            continue;
        }else{
            var dataRow = document.createElement("tr");
            table.appendChild(dataRow);
            for(j in data[i].ten){
                var th = document.createElement("td");
                dataRow.appendChild(th);
                th.textContent = data[i].ten[j];
            }
            for(j in data[i].inter){
                var th = document.createElement("td");
                dataRow.appendChild(th);
                th.textContent = data[i].inter[j];
            }
            for(j in data[i].btech){
                var th = document.createElement("td");
                dataRow.appendChild(th);
                th.textContent = data[i].btech[j];
            }
            
        }
    }

   
}


/* var career = document.createElement("div");
proinfo.appendChild(career);
career.classList.add("career");

var education = document.createElement("div");
education.classList.add("education");
proinfo.appendChild(education);

var skill = document.createElement("div");
skill.classList.add("skill");
proinfo.appendChild(skill);*/