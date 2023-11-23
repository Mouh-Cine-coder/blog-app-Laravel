<?php


use App\Models\Article;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function() {
    $articles = Article::with('tags', 'category')->take(5)->latest()->get();
    
    return Inertia::render('Home', [
        'articles' => $articles
    ]);
});

Route::get('/welcome', function() {
    return Inertia::render('Welcome');
});



// admin and user has access to articles
Route::prefix('/dashboard')->middleware(['auth'])->group(function () {
    
    Route::resource('articles', ArticleController::class);
    Route::name('admin.')->middleware(['isAdmin'])->group(function () {
        Route::resource('users', UserController::class);
    });

});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
