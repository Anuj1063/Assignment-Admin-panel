// var url =
//  ;

fetch(
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
)
  .then((data) => {
    return data.json();
  })
  .then((ObjectData) => {
    let tableData = "";
    ObjectData.map((values) => {
      tableData += `<tr class="data-row  ">
          <td class="column6">${values.id}</td>
          <td class="column7">${values.firstName}</td>
          <td class="column8">${values.lastName}</td>
          <td class="column9">${values.email}</td>
          <td class="column10">${values.phone}</td>
          <td class="column11">${values.description}</td>
          <td class="column12">${values.address.streetAddress}</td>
          <td class="column13">${values.address.city}</td>
          <td class="column14">${values.address.state}</td>
          <td class="column15">${values.address.zip}</td>
          </tr>`;
    });

    document.getElementById("table-body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(err);
  });

var tbody = document.getElementById("table-body");
let descriptionFeild = document.getElementById("description-feild");
let addressFeild = document.getElementById("address-feild");
let cityFeild = document.getElementById("city-feild");
let stateFeild = document.getElementById("state-feild");

let zipFeild = document.getElementById("zip-feild");

var userName = document.getElementById("user-name");
tbody.addEventListener("click", function (event) {
  var clickedRow = event.target.parentNode;
  var rowData = clickedRow.getElementsByTagName("td");
  var firstName = rowData[1].innerHTML;
  var lastName = rowData[2].innerHTML;
  var description = rowData[5].innerHTML;
  var address = rowData[6].innerHTML;
  var city = rowData[7].innerHTML;
  var state = rowData[8].innerHTML;
  var zpin = rowData[9].innerHTML;

  userName.innerHTML = firstName + " " + lastName;
  descriptionFeild.innerHTML = description;
  addressFeild.innerHTML = address;
  stateFeild.innerHTML = state;
  cityFeild.innerHTML = city;
  zipFeild.innerHTML = zpin;
});

function filterTable() {
  var input, filter, table, tr, td, txtvalue, pattern;

  input = document.getElementById("search-box");
  filter = input.value.toUpperCase();
  table = document.getElementById("data-in-table");
  tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtvalue = td.textContent || td.innerHTML;
      pattern = new RegExp(filter, "gi");
      if (txtvalue.toUpperCase().indexOf(filter) > -1) {
        td.innerHTML = txtvalue.replace(pattern, function (match) {
          return "<span class='highlight'>" + match + "</span>";
        });
        tr[i].style.display = "";
      } else {
        td.innerHTML = txtvalue;
        tr[i].style.display = "none";
      }
    }
  }
}
