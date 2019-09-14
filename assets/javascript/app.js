$(document).ready(function () {

    var topics = ['Cat', 'Dog', 'Giraffe', 'Alpaca', 'Zebra', 'Lion', 'Bear', 'Squirrel', 'Bird'];

    function displayGIF() {
        var animal = $(this).attr('data-animal');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;
            for (var i = 0; i < results.length; i++) {

            var animalDiv = $("<div class='animal'>");
            var rating = response.Rated;
            var p = $('<p>').text('Rating: ' + rating);


            var animalImage = $('<img>')
            animalImage.attr('src', results[i].images.fixed_height.url);
            animalDiv.append(animalImage);
            animalDiv.append(p);
            $('#gifs-here').prepend(animalDiv);
            }
        });

    }





    function renderButton() {
        $('#buttons-view').empty();

        for (var i = 0; i < topics.length; i++) {
            var a = $('<button>');
            a.addClass('animal-btn btn-primary');
            a.attr('data-animal', topics[i]);
            a.text(topics[i]);
            $('#buttons-view').append(a);
        }
    }

    $('#add-animal').on('click', function (event) {
        event.preventDefault();
        var animal = $('#animal-input').val().trim();
        topics.push(animal)
        renderButton();
    })

    $(document).on("click", ".animal-btn", displayGIF);

    renderButton();


























});