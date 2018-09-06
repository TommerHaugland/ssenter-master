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

let html = '<table class="table" id="companyTable">' +
    
      '<tbody>' +
      '<tr>' +
      '<td scope="row">' + rowData.name + '</td>' +
      '<td>' + rowData.buildingNumber + '</td>' +
      '<td><a href="">' + rowData.webpage + '</a></td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' + '</div>' + '</div>';

    $("#companyRender").append($.parseHTML(html));


 }
