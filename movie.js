function getMovie() {
    var apiKey = 'bf238fdd';
    var movieTitle = $('#movie').val();

    $.ajax({
        url: `http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`,
        method: 'GET',
        success: function (data) {
            if (data.Response === "True") {
                var movieInfo = `
                <div class="container">
                    <div class="box">
                <img src="${data.Poster}" alt="${data.Title} Poster">
                        </div>
                <div class="info">
                    <h2>Informasi Film ${data.Title}</h2>
                    <p>Judul: ${data.Title}</p>
                    <p>Tahun Rilis: ${data.Year}</p>
                    <p>Genre: ${data.Genre}</p>
                    <p>Director: ${data.Director}</p>
                    <p>Sinopsis: ${data.Plot}</p>
                    <p>Actor: ${data.Actors}</p>
                    <p>Rated: ${data.Rated}</p>
                    <p>Language: ${data.Language}</p>
                    <p>Country: ${data.Country}</p>
                    <p>Released: ${data.Released}</p>
                    <p>Rating: ${data.imdbRating}</p>
                    <p>Awards: ${data.Awards}</p>
                </div>
                </div>
                `;
                $('#movie-info').html(movieInfo);
            } else {
                $('#movie-info').html('<p>Masukin judulnya dulu lah</p>');
            }
        },
        error: function () {
            $('#movie-info').html('<p>Gagal mengambil data film.</p>');
        }
    });
}