<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePointsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('points', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 512)->default('No name');
            $table->text('description')->nullable();
            $table->string('address', 512)->default('No address');
            $table->tinyInteger('status')->default(0);
            $table->tinyInteger('type')->default(0);
            $table->float('x_pos')->nullable();
            $table->float('y_pos')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_points');
    }
}
