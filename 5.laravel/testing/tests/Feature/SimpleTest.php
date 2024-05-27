<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SimpleTest extends TestCase
{
    /**
     * @test
     * @dataProvider dataProvider
     */
    public function test_example(int $num1, int $num2, int $res): void
    {
        $this->assertEquals($res, $num1 + $num2);
    }

    public static function dataProvider(): array
    {
        return [
            [1, 1, 2],
            [2, 2, 4],
            [1, 2, 3],
        ];
    }
}
