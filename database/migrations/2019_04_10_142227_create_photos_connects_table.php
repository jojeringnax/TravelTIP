<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhotosConnectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photos_connects', function (Blueprint $table) {
            $table->unsignedBigInteger('id');
            $table->unsignedBigInteger('connect_id');
            $table->tinyInteger('type');
            $table->timestamps();
        });

        Schema::table('photos_connects', function (Blueprint $table) {
            $table->foreign('id')->references('id')->on('photos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('photos_connects');
    }
}
