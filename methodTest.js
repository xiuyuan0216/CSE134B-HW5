export {xmlget, xmlpost, xmlput, xmldelete, fetchget, fetchpost, fetchput, fetchdelete, jsonToTable}

function jsonToTable(json){
    let htmlTable = "<table>";
    
    for(let key in json){
        if(json[key]!= null && typeof json[key] === "object" && !Array.isArray(json[key])){
            htmlTable+="<tr>";
            htmlTable+="<th>"+key+"</th>";
            htmlTable+="<td>";
            htmlTable+=jsonToTable(json[key]);
            htmlTable+="</td></tr>";
        }else{
            htmlTable+="<tr>";
            htmlTable+="<th>"+key+"</th>";
            htmlTable+="<td>";
            htmlTable+=json[key];
            htmlTable+="</td></tr>";
        }
    }
    htmlTable+="</table>";
    return htmlTable;
}

function xmlpost(){
    let id = document.getElementById("id").value;
    let article_name = document.getElementById("article_name").value
    let article_body = document.getElementById("article_body").value;
    let date = document.getElementById("date").value;
    let xhr = new XMLHttpRequest();
    xhr.open("post", "https://httpbin.org/post");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let toSend = {id:id, article_name:article_name, article_body:article_body, date:date};
    xhr.send(JSON.stringify(toSend));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let result = jsonToTable(JSON.parse(xhr.responseText));
            let output = document.getElementById("result");
            output.innerHTML = result;
        }
    }
}

function xmlget(){
    let id = document.getElementById("id").value;
    let article_name = document.getElementById("article_name").value
    let article_body = document.getElementById("article_body").value;
    let date = document.getElementById("date").value;
    let xhr = new XMLHttpRequest();
    xhr.open("get", "https://httpbin.org/get?id="+id+"&article_name="+article_name+"&article_body="+article_body+"&date="+date);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let result = jsonToTable(JSON.parse(xhr.responseText));
            let output = document.getElementById("result");
            output.innerHTML = result;
        }
    }
}

function xmlput(){
    let id = document.getElementById("id").value;
    let article_name = document.getElementById("article_name").value
    let article_body = document.getElementById("article_body").value;
    let date = document.getElementById("date").value;
    let xhr = new XMLHttpRequest();
    xhr.open("put", "https://httpbin.org/put");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let toSend = {id:id, article_name:article_name, article_body:article_body, date:date};
    xhr.send(JSON.stringify(toSend));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let result = jsonToTable(JSON.parse(xhr.responseText));
            let output = document.getElementById("result");
            output.innerHTML = result;
        }
    }

}

function xmldelete(){
    let id = document.getElementById("id").value;
    let article_name = document.getElementById("article_name").value
    let article_body = document.getElementById("article_body").value;
    let date = document.getElementById("date").value;
    let xhr = new XMLHttpRequest();
    xhr.open("delete", "https://httpbin.org/delete?id="+id+"&article_name="+article_name+"&article_body="+article_body+"&date="+date);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let result = jsonToTable(JSON.parse(xhr.responseText));
            let output = document.getElementById("result");
            output.innerHTML = result;
        }
    }
}

function fetchpost(){
    let id = document.getElementById("id").value;
    let article_name = document.getElementById("article_name").value
    let article_body = document.getElementById("article_body").value;
    let date = document.getElementById("date").value;
    let toSend = {id:id, article_name:article_name, article_body:article_body, date:date};
    fetch("https://httpbin.org/post", {
        method: "post",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(toSend)
    }).then(response => response.json())
    .then(data => {
        let result = jsonToTable(data);
        let output = document.getElementById("result");
        output.innerHTML = result;
    })

}

function fetchget(){
    let id = document.getElementById("id").value;
    let article_name = document.getElementById("article_name").value
    let article_body = document.getElementById("article_body").value;
    let date = document.getElementById("date").value;
    fetch("https://httpbin.org/get?id="+id+"&article_name="+article_name+"&article_body="+article_body+"&date="+date)
    .then(response => response.json())
    .then(data => {
        let result = jsonToTable(data);
        let output = document.getElementById("result");
        output.innerHTML = result;
        });
}

function fetchput(){
    let id = document.getElementById("id").value;
    let article_name = document.getElementById("article_name").value
    let article_body = document.getElementById("article_body").value;
    let date = document.getElementById("date").value;
    let toSend = {id:id, article_name:article_name, article_body:article_body, date:date};
    fetch("https://httpbin.org/put", {
        method: "put",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(toSend)
    }).then(response => response.json())
    .then(data => {
        let result = jsonToTable(data);
        let output = document.getElementById("result");
        output.innerHTML = result;
    })
}

function fetchdelete(){
    let id = document.getElementById("id").value;
    let article_name = document.getElementById("article_name").value
    let article_body = document.getElementById("article_body").value;
    let date = document.getElementById("date").value;
    fetch("https://httpbin.org/delete?id="+id+"&article_name="+article_name+"&article_body="+article_body+"&date="+date, 
    {method: "delete"})
    .then(response => response.json())
    .then(data => {
        let result = jsonToTable(data);
        let output = document.getElementById("result");
        output.innerHTML = result;
        });
}

