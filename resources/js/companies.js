// Leietakere
$.ajax({
  url: 'https://admin.aasane-byggsenter.no/api/companies',
  type: "get",
  success: function(data, textStatus, jqXHR) {
    drawCompanyTable(JSON.parse(data));
  }
});

function drawCompanyTable(data) {
  for (var i = 0; i < data.length; i++) {
    drawRow(data[i]);
  }
}

function drawRow(rowData) {

let html =
    
      '<tr>' +
      '<td>' + rowData.name + '</td>' +
      '<td>' + rowData.buildingNumber + '</td>' +
      '<td><a href="">' + rowData.webpage + '</a></td>' + '</tr>';

    $("#companyRender").append($.parseHTML(html));




 }
