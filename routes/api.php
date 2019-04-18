<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::get('/user', function() {
    return Auth::user()->toJson();
});


Route::get('/route/{id}', function($id) {
    return \App\Route::find($id)->getWithPoints();
});

Route::get('/routes', function(\Illuminate\Http\Request $request) {
    return \App\Route::getAllRoutesWithPoints();
});


Route::group(['middleware' => ['auth:api']], function () {

    Route::get('points', function() {
        return \App\Point::all()->toJson();
    });

    Route::get('point/{id}', function($id) {
        return \App\Point::find($id)->toJson();
    });




    Route::post('point/create', 'Admin\PointController@create');
    Route::post('point/update/{id}', 'Admin\PointController@update');
    Route::delete('point/delete/{id}', 'Admin\PointController@delete');

    /**
     * For Routes post-requests should always be like:
     *              {
     *                  name: 'some name',
     *                  description: 'some description',
     *                  status: 'some status', (integer)
     *                  duration: 'some duration', (integer)
     *                  length: 'some length', (integer)
     *                  points: {
     *                      {id: 1, number: 1},
     *                      {id: 2, number: 2}
     *                  }
     *              }
     */
    Route::post('route/create', 'Admin\RouteController@create');
    Route::post('route/update/{id}', 'Admin\RouteController@update');
    Route::delete('route/delete/{id}', 'Admin\RouteController@delete');
});




