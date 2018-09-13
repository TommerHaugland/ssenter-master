// Leietakere
$.ajax({
  url: 'http://admin.aasane-byggsenter.no/api/companies?displayOnFront=true',
  type: "get",
  success: function(data, textStatus, jqXHR) {
    drawLogo(JSON.parse(data));
  }
});

function drawLogo(data) {
  for (var i = 0; i < data.length; i++) {
    drawRow(data[i]);
  }
}

function drawRow(rowData) {
  let html=

  '<div class="flex-item-asset">' +
  '<img alt="1" class="img-responsive" src="'+ rowData.logo + '">' + '</div>';

  $("#logoRender").append($.parseHTML(html));
}
