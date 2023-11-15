<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::all();

        return Inertia::render('Home', [
            'articles' => $articles
        ]);
    }
}
