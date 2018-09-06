

// Leietakere
$.ajax({
  url: 'https://admin.aasane-byggsenter.no/api/companies',
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
let html = '<table class="table" id="companyTable">' +
      '<thead>' +
      '<tr>' +
      '<th scope="col" onclick="sortTable(0)">Firma</th>' +
      '<th scope="col" onclick="sortTable(1)">Bygg nr</th>' +
      '<th scope="col">Nettsted</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr>' +
      '<td scope="row">' + rowData.name + '</td>' +
      '<td>' + rowData.buildingNumber + '</td>' +
      '<td><a href="www.hkonglevoll.no">' + rowData.webpage + 'www.hkonglevoll.no</a></td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' + '</div>' + '</div>';

    $("#companyRender").append($.parseHTML(html));


 }
