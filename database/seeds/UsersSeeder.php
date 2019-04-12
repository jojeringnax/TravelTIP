<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'ilia',
            'email' => 'hollow718@gmail.com',
            'password' => '$2y$10$/NGVIP21YvhZ5c..XonU0O9xobuw.UT0GlFPtQ.bgjiy5PaWdiwUK',
            'verified' => 1,
            'email_token' => 'aG9sbG93NzE4QGdtYWlsLmNvbQ=='
        ]);
    }
}
