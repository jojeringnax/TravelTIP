<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>TravelTIP</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            #map {
                height: 100%;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    TravelTIP
                </div>

                <div id="map"></div>
                <script>
                    var map;
                    function initMap() {
                        map = new google.maps.Map(document.getElementById('map'), {
                            center: {lat: -34.397, lng: 150.644},
                            zoom: 8
                        });
                    }
                </script>
            </div>
        </div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvVoT7eYE-TriltLJEbAPivTfjZ7O1S4w&callback=initMap"
                async defer></script>
    </body>
</html>
