<?php

namespace App\Http\Controllers\Admin;

use App\Point;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PointController extends Controller
{
    /**
     * @param Request $request
     * @return string
     */
    public function create(Request $request)
    {
        $point = new Point();
        $point->fill($request->post());
        $point->save();
        return $point->toJson();
    }
}
