<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::with('tags', 'category')->take(5)->latest()->get();

        return Inertia::render('Home', [
            'articles' => $articles
        ]);
    }
}
