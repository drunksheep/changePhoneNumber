const changePhoneNumber=(e,o,n,r)=>{let t=new Date,m=(t.getDay(),t.getHours());if("number"!=typeof o||"number"!=typeof r)return console.error("newNumber e / ou timeToChange precisam ser um número inteiro"),!1;"object"!=typeof e&&(e=document.querySelectorAll(e)),r>m&&e.forEach(e=>{e.innerText=n,"A"===e.nodeName&&(e.href=`tel:${o}`)})};window.onload=()=>{changePhoneNumber("a",1122012936,"11 22012936",18)};