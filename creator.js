export function createCard(list) {
    let txt = "";
    txt += `<div class = "container">`;
    for (let index = 0; index < list.length; index++) {
      for (const key in list) {
        list[key];
      }
      for (const kutya of list) {
      }
      txt += `<div class= "kartya">`;
      txt += `<h3>Kutya adatai</h3>`;
      for (const kulcs in list[index]) {
        txt += `<p>${kulcs}: ${list[index][kulcs]}</p>`;
      }
      txt += `</div>`;
    }
    txt += `</div>`;
    cards.innerHTML = txt;
  }
  
  export function createTable(list) {
    let txt2 = "";
    txt2 += `<div class = "container">`;
    txt2 += `<table>`;
    for (let index = 0; index < list.length; index++) {
      /* for (const key in list) {
                list[key]
            }
            for (const kutya of list) {
                
            } */
      txt2 += `<tr>`;
      for (const kulcs in list[index]) {
        txt2 += `<td>${kulcs}: ${list[index][kulcs]}</td>`;
      }
      txt2 += `</tr>`;
    }
    txt2 += `</table>`;
    txt2 += `</div>`;
    itemTable.innerHTML = txt2;
  }