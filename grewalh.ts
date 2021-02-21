import { atomNames } from "./mydata"
import { atomObjects, Atom } from "./mydata";

/**************************** Part 1 ****************************/
// Find the placeholder node in the HTML document
const part1dev0 = document.getElementById("part1");

const orderList0 = document.createElement("ol");
atomNames.forEach(ele => {
    const liElement = document.createElement("li");
    const text1: Text = document.createTextNode(ele);
    liElement.append(text1);
    orderList0.appendChild(liElement);
});
part1dev0.appendChild(orderList0);



/**************************** Part 2 ****************************/

// Find the placeholder node in the HTML document
const part2dev0 = document.getElementById("part2");

const orderList1 = document.createElement("ol");
atomObjects.forEach(ele => {
    const liElement = document.createElement("li");
    if (ele.weight > 150) {
        liElement.className = "heavy";
    } else {
        liElement.className = "light"
    }
    const text1: Text = document.createTextNode("(name:"+ele.name+" (weight :"+ele.weight+")");
    liElement.append(text1);
    orderList1.appendChild(liElement);
});
part2dev0.appendChild(orderList1);




/**************************** Part 3 ****************************/

// Find the placeholder node in the HTML document
const part3dev0 = document.getElementById("part3");

const table0= document.createElement("table");
table0.style="border:1px solid black;margin:0;padding:0";
//Create header
const thead0= document.createElement("thead");
const tr0= document.createElement("tr");
const th0=document.createElement("th");
th0.appendChild(document.createTextNode("Atom"));
tr0.appendChild(th0);

const th1=document.createElement("th");
th1.appendChild(document.createTextNode("Weight"));
tr0.appendChild(th1);
thead0.appendChild(tr0);
table0.appendChild(thead0);

const tbody0= document.createElement("tbody");
table0.appendChild(tbody0);
atomObjects.forEach(ele => {
   
    const tr = document.createElement("tr");
    if (ele.weight > 150) {
        tr.className = "heavy";
    } else {
        tr.className = "light"
    }
    const td0 = document.createElement("td");
    td0.style="border:1px solid black;margin:0;padding:0";
    td0.append(document.createTextNode(ele.name));

    const td1 = document.createElement("td");
    td1.style="border:1px solid black";
    td1.append(document.createTextNode(ele.weight+""));

    tr.appendChild(td0);
    tr.appendChild(td1);

    tbody0.appendChild(tr);
});

part3dev0.appendChild(table0);

