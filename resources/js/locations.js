// Dette er det første som skjer. Den gjør GET kall mot api, og kaller drawTable når dataen har kommet frem
$.ajax({
    url: 'https://admin.aasane-byggsenter.no/api/locations',
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
        if (data[i].available) {
          drawRow(data[i]);
        }
    }
}

function drawRow(rowData) {
    let html = '<div class="row listingAd">' +
        '<div class="listingPhoto col-md-3 sx-12">' +
        '<img alt="Lokaler" class="pull-left lokalerimg" src="'+ rowData.image + '">' +
        '</div>' + '<div class="col-md-4 sx-12">' +
        '<div class="listingDescription">' +
        '<span class="listingTitle">' + rowData.title + '</span>' +
        '<br>' +
      //  '<b>Nyborg, Åsane</b><br>' +
        '<span class="propertyDescription">' + rowData.description + '</span>' + '</div>' +'</div>'+
        '<div class="col-md-4 sx-12">' +
        '<table class="listingAttributes">' +
        '<tbody>' +
        '<tr>' +
        '<td>Status:</td>' +
        '<td>Ledig</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Pris:</td>' +
        '<td>' + rowData.price + '/Kvm/Måned</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Type:</td>' +
        '<td>Kontor</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Ledig fra:</td>' +
        '<td>01.05.2018</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Totalt kvadratmeter:</td>' +
        '<td>' + rowData.squareMeters + '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>' + '</div>';
    $("#listingRender").append($.parseHTML(html));
}
