<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('name', length: 255);
            $table->foreignId('genre_id')->constrained(table: 'genres')->onDelete('cascade');  // Ссылка на жанр
            $table->foreignId('author_id')->constrained(table: 'authors')->onDelete('cascade');  // Ссылка на автора
            $table->foreignId('comment_id')->constrained(table: 'comments')->onDelete('cascade');
            $table->text('description');
            $table->year('publication_year');  // Год издания
            $table->integer('page_count');  // Количество страниц
            $table->string('publisher');  // Издательство
            $table->string('cover_type');  // Тип обложки
            $table->string('age_limit');  // Возрастные ограничения
            $table->string('language');
            $table->string('country');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
