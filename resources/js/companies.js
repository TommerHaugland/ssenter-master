

// Leietakere
$.ajax({
  url: 'https://admin.aasane-byggsenter.no/api/locations',
  type: "get",
  success: function(data, textStatus, jqXHR) {
    drawCompanyTable(data);
  }
});

function drawCompanyTable(data) {
  for (var i = 0; i < data.length; i++) {
    drawRow(data[i]);
  }
}

function drawRow(rowData) {
  var row = $("companyTable")


row.append($('<table class="table" id="companyTable">'));
    row.append($('<thead>'));
      row.append($('<tr>'));
        row.append($('<th scope="col" onclick="sortTable(0)">Firma</th>'));
        row.append($('<th scope="col" onclick="sortTable(1)">Bygg nr</th>'));
      row.append($('<th scope="col">Nettsted</th>'));
    row.append($('</tr>'));
  row.append($('</thead>'));
    row.append($('<tbody>'));
      row.append($('<tr>'));
      row.append($('<td scope="row">H. Konglevoll Transport AS</td>'));
        row.append($('<td>1</td>'));
        row.append($('<td><a href="www.hkonglevoll.no">www.hkonglevoll.no</a></td>'));
      row.append($('</tr>'));
    row.append($('</tbody>'));
  row.append($('</table>'));

 $("#companyRender").append(row);


 }
