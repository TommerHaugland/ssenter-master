// Dette er det første som skjer. Den gjør GET kall mot api, og kaller drawTable når dataen har kommet frem
$.ajax({
    url: 'http://tommerhaugland.com/ssenter-admin/api/locations',
    type: "get",
    success: function(data, textStatus, jqXHR) {
        // Responsen (data) kommer inn automatisk som javascript objekt, og sendes bare videre
        drawListingContainer(JSON.parse(data));
    }
});

// data i dette tilfellet er listen med alle lokalene
function drawListingContainer(data) {
		// Her looper vi gjennom hvert lokale
    for (var i = 0; i < data.length; i++) {
    		// For hvert lokale blir en html tabell rad rendret
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
  var row = $("listingAd")

  row.append($('<div class="row listingAd">'));
  //The whole ad
    row.append($('<div class="listingPhoto"><img alt="Lokaler" class="pull-left lokalerimg" src="' +    rowData.adImage + '"></div>'));
    row.append($('<div class="listingDescription">'));
      row.append($('<a href="#" title="Salhusveien 55, Nyborg"><span class="listingTitle">'+ rowData.title +'</span></a><br>'));
      row.append($('<span class="propertyDescription">'+ rowData.description +'</span>'));
    row.append($('</div>'));
    //listingAttributes
    row.append($('<table class="listingAttributes">'));
      row.append($('<tbody>'));
        row.append($('<tr>'));
          row.append($('<td>Status:</td>'));
          row.append($('<td>Ledig</td>'));
        row.append($('</tr>'));
        row.append($('<tr>'));
          row.append($('<td>Pris:</td>'));
          row.append($('<td>2127,- - /Kvm/Måned totalt leiekostnader per år 500000, felleskostnader tjohei</td>'));
        row.append($('</tr>'));
        row.append($('<tr>'));
          row.append($('<td>Type:</td>'));
          row.append($('<td>Kontor</td>'));
        row.append($('</tr>'));
        row.append($('<tr>'));
          row.append($('<td>Ledig fra:</td>'));
          row.append($('<td>01.05.2018</td>'));
        row.append($('</tr>'));
        row.append($('<tr>'));
          row.append($('<td>Areal:</td>'));
          row.append($('<td>14000 Kvadratmeter</td>'));
        row.append($('</tr>'));
      row.append($('</tbody>'));
    row.append($('</table>'));
  row.append($('</div>'));

 $("#listingRender").append(row);


 }
