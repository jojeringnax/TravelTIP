<?php

namespace App\Http\Controllers\Admin;

use App\Point;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PointController extends Controller
{

    /**
     * @param Point $point
     * @param Request $request
     * @return string
     */
    public function store(Point $point, Request $request)
    {
        if ($point === null) return response('Point was not found',404);
        $point->fill($request->post());
        $point->save();
        return $point->toJson();
    }


    /**
     * @param Request $request
     * @return string
     */
    public function create(Request $request)
    {
        return $this->store(new Point(), $request);
    }

    /**
     * @param Request $request
     * @param $id integer
     * @return string
     */
    public function update(Request $request, $id)
    {
        /**
         * @var $point Point
         */
        $point = Point::find($id);
        return $this->store($point, $request);
    }

    /**
     * @param $id integer
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response|string
     */
    public function delete($id)
    {
        /**
         * @var $point Point
         */
        $point = Point::find($id);
        try {
            $point->delete();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
        return response('Successfully deleted', 200);
    }
}
