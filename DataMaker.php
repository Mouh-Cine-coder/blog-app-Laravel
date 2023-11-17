use App\Models\Article;
use App\Models\User;
use App\Models\Tag;

$user = User::factory()->has(Article::factory()->count(5)->has(Tag::factory()->create())->create())->create();
