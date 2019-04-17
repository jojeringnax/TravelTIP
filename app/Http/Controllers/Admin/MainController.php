<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class MainController extends Controller
{



    /**
     * @return false|string
     */
    public function isAdmin()
    {
        return json_encode(['authorized' => Auth::guard('web')->check()]);
    }
}
