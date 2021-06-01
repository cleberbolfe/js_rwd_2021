function evento(){
    document.getElementsByTagName("div")[0].style.backgroundColor = "red";
}

function soma() {
    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;
    let r = parseInt(v1) + parseInt(v2);
    alert("A a soma dos valores é " + r);
}

function imprime(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
}

function imprimeElemtos(){
    let elementos = "";
    for(let i = 0; i < 10; i++){
        elementos += "<p>teste</p>";
    }
    document.getElementById("elementos").innerHTML = elementos;
}
