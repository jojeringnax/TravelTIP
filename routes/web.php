<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/verifyemail/{token}', 'Auth\RegisterController@verify');

Route::get('isAdmin', 'Admin\MainController@isAdmin');


Route::get('/redirect', function () {
    $query = http_build_query([
        'client_id' => '4',
        'redirect_uri' => 'http://traveltip.xxx/callback',
        'response_type' => 'code',
        'scope' => '',
    ]);

    return redirect('http://traveltip.xxx/oauth/authorize?'.$query);
});

Route::get('/callback', function (\Illuminate\Http\Request $request) {
    $http = new GuzzleHttp\Client;
    $response = $http->post('http://traveltip.xxx/oauth/token', [
        'form_params' => [
            'grant_type' => 'authorization_code',
            'client_id' => '4',
            'client_secret' => 'iXVWjB0VZhYcrd5e0rUFEU1v36iArTAQsxula3la',
            'redirect_uri' => 'http://traveltip.xxx/callback',
            'code' => $request->code,
        ],
    ]);

    return json_decode((string) $response->getBody(), true);
});




Route::get('/{path?}', function() {
    return view('welcome');
})->where('path', '.*');

