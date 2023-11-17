<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Article::class;

     
    public function definition(): array
    {
        return [
            'title' => fake()->text(6),
            'image' => fake()->image(),
            // 'user_id' => User::factory(),
            'category_id' => Category::factory(),
        ];
    }
}
