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
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    let html = '<div class="row listingAd">' +
        '<div class="listingPhoto">' +
        '<img alt="Lokaler" class="pull-left lokalerimg" src="./resources/images/header_image2.jpg">' +
        '</div>' +
        '<div class="listingDescription">' +
        '<a href="#" title="Salhusveien 55, Nyborg"><span class="listingTitle">' + rowData.title + '</span></a>' +
        '<br>' +
        '<b>Nyborg, Åsane</b><br>' +
        '<span class="propertyDescription">Beste lokasjon, beste folk og en annen placeholder som passer utmerket til lokaler i Åsane.</span>' +
        '</div>' +
        '<table class="listingAttributes">' +
        '<tbody>' +
        '<tr>' +
        '<td>Status:</td>' +
        '<td>Ledig</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Pris:</td>' +
        '<td>2127,- - /Kvm/Måned</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Type:</td>' +
        '<td>Kontor</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Sub-Type:</td>' +
        '<td>Kontor, Detaljehandel</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Plasser:</td>' +
        '<td>2 Plasser</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Ledig fra:</td>' +
        '<td>01.05.2018</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Bygg str:</td>' +
        '<td>14000 Kvadratmeter</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>';
    $("#listingRender").append($.parseHTML(html));
}
