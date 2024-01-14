/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = rows;
  }

  set elem(rows) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    table.prepend(thead);
    
    let tr = document.createElement("tr");
    thead.append(tr);

    for (let obj of this.rows) {
      let keys = Object.keys(obj);
      keys.map((key) => {
        let th = document.createElement("th");
        th.textContent = key;
        tr.append(th);
      })
    }

    let tbody = document.createElement("tbody");
    table.append(tbody);

    for (let obj of this.rows) {
      let tr = document.createElement("tr");
      tbody.append(tr)
      let values = Object.values(obj)
      values.map((value) => {
        let td = document.createElement("td");
        td.textContent = value;
        tr.append(td);
      });
      tr.insertAdjacentHTML("beforeend", "<td><button>X</button></td>");
    };

    table.onclick = function(event) {
      if(event.target.tagName != "BUTTON") return;

      let tr = event.target.closest("tr");
      if (tr) { tr.remove(); }
    }

    this.table = table;
    document.body.append(table)
    return table;
  }

  get elem() {
    return this.table;
  };
}
