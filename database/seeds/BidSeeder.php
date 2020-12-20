<?php

use Illuminate\Database\Seeder;

class BidSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 25)->create()->each(function ($user) {
            $bids = factory(App\Bid::class, 10)->make();
            $user->bids()->saveMany($bids);
        });
    }
}
