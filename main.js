let box = document.querySelector(".box");
let inp = document.getElementById("input1");
let inp2 = document.getElementById("input2");
let btn = document.querySelector(".btn");
let box2 = document.querySelector(".box2");

let data = [232004];
let data1 = [232004];

alert(`sizningi Login ${data} 
pasword ${data1}`);

btn.addEventListener("click", () => {
  if (inp.value == data && inp2.value == data1) {
    let p = document.createElement("p");

    p.innerHTML = `<p>Xush kelibsiz</p>`;
    p.style.color = "pink";
    p.style.backgroundColor = "gray";
    p.style.color = "pink";
    p.style.padding = "10px";
    p.style.borderRadius = "20px";

    box2.append(p);
    let block = document.querySelector(".block");
    let h2 = document.querySelector(".h2");
    h2.style.color = "white";
    block.style.display = "block";
    box2.append(block);
    box2.append(h2);
    inp2.value = "";
    inp.value = "";
  } else {
    let p = document.createElement("p");
    let block = document.querySelector(".block");
    block.style.display = "block";
    box2.append(block);
    p.innerHTML = `<p style="color:white;">sizninig ID yoki Password tog'ri emas</p>`;
    box2.append(p);
    box2.style.backgroundColor = "gray";
    p.style.color = "white";
    box2.style.padding = "20px";
    box2.style.borderRadius = "4px";

    inp2.value = "";
    inp.value = "";
  }
});


let btn2 = document.querySelector(".btn2"); 

      btn2.addEventListener("click", () => {
          let question = prompt("Qanday savollingiz bor?");
          if (question) {
              let text = document.createElement("p");
              text.innerHTML = "Ваш вопрос отправлен";
              btn2.append(text);
          }
        })