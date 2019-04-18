<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoutesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('routes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 512)->default('No name');
            $table->text('description')->nullable();
            $table->tinyInteger('status')->default(0);
            $table->integer('duration')->default(0);
            $table->integer('length')->default(0);
            $table->unsignedBigInteger('type_id')->nullable();
            $table->timestamps();
        });

        Schema::table('routes', function(Blueprint $table) {
            $table->foreign('type_id')->references('id')->on('route_types')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('routes');
    }
}
