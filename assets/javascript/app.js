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
                var rating = results[i].rating;
                var p = $('<p>').text('Rating: ' + rating);


                var animalImage = $('<img>')
                animalImage.attr('src', results[i].images.fixed_height.url);
                animalImage.attr('data-still', results[i].images.fixed_height_still.url);
                animalImage.attr('data-animate', results[i].images.fixed_height.url);
                animalImage.attr('data-state', 'animate');
                animalImage.addClass('gif');
                animalDiv.append(animalImage);
                animalDiv.append(p);
                $('#gifs-here').prepend(animalDiv);

                console.log(response.data);
            }

            $('img').on('click', function () {
                console.log(this);
                var state = $(this).attr('data-state');
        
                if (state === 'animate') {
                    $(this).attr('src', $(this).attr('data-still'));
                    $(this).attr("data-state", "still");
                }
                else {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                }
        
            });

        });

    }

    function renderButton() {
        $('#buttons-view').empty();

        for (var i = 0; i < topics.length; i++) {
            var a = $('<button>');
            a.addClass('animal-btn btn btn-primary');
            a.attr('data-animal', topics[i]);
            a.text(topics[i]);
            $('#buttons-view').append(a);
        }
    }

    $('#add-animal').on('click', function (event) {
        event.preventDefault();
        if (animal.val() != '') {
        var animal = $('#animal-input').val().trim();
        topics.push(animal)
        renderButton();
        }
        else {}
    });

    $(document).on("click", ".animal-btn", displayGIF);

    renderButton();


























});