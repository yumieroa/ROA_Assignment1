var token = '596608065.5c08428.935d4cbe7dbf4125a6b6227a3dd03f1e',
     num_photos = 10,
    container = document.getElementById( 'rudr_instafeed' ),
    scrElement = document.createElement( 'script' );

window.mishaProcessResult = function( data ) {
    for( x in data.data ){
        container.innerHTML += '<li><img src="' + data.data[x].images.low_resolution.url + '"></li>';
    }
}

scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );