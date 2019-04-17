<?php

namespace App\Http\Controllers\Admin;

use App\PointInRoute;
use App\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RouteController extends Controller
{
    /**
     * @param Route $route
     * @param Request $request
     * @return Route|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function store(Route $route, Request $request)
    {
        if ($route === null) return response('Route was not found',404);
        $route->fill($request->post());
        $route->save();
        return $route;
    }

    /**
     * @param Request $request
     * @return string
     */
    public function create(Request $request)
    {
        $route = $this->store(new Route(), $request);
        $points = $request->post('points');
        foreach ($points as $point) {
            $connect = new PointInRoute();
            $connect->route_id = $route->id;
            $connect->point_id = $point['id'];
            $connect->point_number = $point['number'];
            $connect->save();
        }
        return $route->toJson();
    }

    /**
     * @param Request $request
     * @param $id
     * @return Route
     */
    public function update(Request $request, $id)
    {
        /**
         * @var $route Route
         */
        $route = $this->store($this->findModel($id), $request);
        $this->changePointsOnUpdate($route, $request);
        return $route;
    }

    /**
     * @param $id
     * @return array|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function delete($id)
    {
        $route = $this->findModel($id);
        try {
            $route->delete();
        } catch (\Exception $exception) {
            return [
                'message' => 'Impossible to delete the route',
                'error' => $exception->getMessage(),
                'trace' => $exception->getTraceAsString()
            ];
        }
        return response('OK', 200);
    }

    /**
     * @param Request $request
     * @param Route $route
     * @return array|null
     */
    private function changePointsOnUpdate(Route $route, Request $request)
    {
        $connects = $route->getPointConnects();
        foreach ($request->post('points') as $postPoint) {
            $postIDs[] = [
                'id' => $postPoint['id'],
                'number' => $postPoint['number']
            ];
        }
        foreach ($connects as $connect) {
            $DBIDs[] = [
                'id' => $connect->point_id,
                'number' => $connect->point_number
            ];
        }
        if (isset($postIDs) && isset($DBIDs)) {
            foreach ($DBIDs as $DBID) {
                if (!in_array($DBID, $postIDs)) {
                    try {
                        PointInRoute::where('route_id', $route->id)
                            ->where('point_id', $DBID['id'])
                            ->where('point_number', $DBID['number'])
                            ->delete();
                    } catch (\Exception $exception) {
                        $resultArray['errors'][] = [
                            'route_id' => $route->id,
                            'point' => $DBID,
                            'message' => 'Impossible to delete',
                            'error' => $exception->getMessage(),
                            'trace' => $exception->getTraceAsString()
                        ];
                    }
                };
            }
            foreach ($postIDs as $postID) {
                if (!in_array($postID, $DBIDs)) {
                    $connect = new PointInRoute();
                    $connect->route_id = $route->id;
                    $connect->point_id = $postID['id'];
                    $connect->point_number = $postID['number'];
                    $connect->save();
                }
            }
        } else if (!isset($DBIDs)) {
            foreach ($postIDs as $postID) {
                $connect = new PointInRoute();
                $connect->route_id = $route->id;
                $connect->point_id = $postID['id'];
                $connect->point_number = $postID['number'];
                $connect->save();
            }
        } else if (!isset($postIDs)) {
            foreach ($DBIDs as $DBID) {
                try {
                    PointInRoute::where('route_id', $route->id)
                        ->where('point_id', $DBID['id'])
                        ->where('point_number', $DBID['number'])
                        ->delete();
                } catch (\Exception $exception) {
                    $resultArray['errors'][] = [
                        'route_id' => $route->id,
                        'point' => $DBID,
                        'message' => 'Impossible to delete',
                        'error' => $exception->getMessage(),
                        'trace' => $exception->getTraceAsString()
                    ];
                }
            }
        } else {
            return null;
        }
        return isset($resultArray) ? $resultArray : null;
    }

    /**
     * @param $id
     * @return Route|null
     */
    private function findModel($id)
    {
        return Route::find($id);
    }


}
