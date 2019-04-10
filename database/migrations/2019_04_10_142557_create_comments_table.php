<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('point_id')->nullable();
            $table->unsignedBigInteger('route_id')->nullable();
            $table->text('content');
            $table->timestamps();
        });

        Schema::table('comments', function(Blueprint $table) {
            $table->foreign('route_id')->references('id')->on('routes')->onDelete('SET NULL');
            $table->foreign('point_id')->references('id')->on('points')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
