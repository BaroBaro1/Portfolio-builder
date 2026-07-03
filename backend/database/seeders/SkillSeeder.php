<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Skill;
use Illuminate\Support\Str;  

class SkillSeeder extends Seeder
{
    public function run(): void
    {
        $skills = [

            // Backend
            'PHP',
            'Laravel',
            'Symfony',
            'Node.js',
            'Express.js',
            'Java',
            'Spring Boot',
            'Python',
            'Django',
            'Flask',
            '.NET',
            'C#',

            // Frontend
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React',
            'Vue.js',
            'Angular',
            'Bootstrap',
            'Tailwind CSS',

            // Mobile
            'Flutter',
            'React Native',
            'Android',
            'Kotlin',
            'Swift',

            // Databases
            'MySQL',
            'PostgreSQL',
            'SQLite',
            'MongoDB',
            'Redis',

            // DevOps
            'Git',
            'GitHub',
            'Docker',
            'Kubernetes',
            'Nginx',
            'Apache',

            // Cloud
            'AWS',
            'Azure',
            'Google Cloud',

            // Security & Networks
            'Linux',
            'Networking',
            'Cybersecurity',
            'Penetration Testing',

            // Others
            'REST API',
            'GraphQL',
            'CI/CD',
            'Testing',
            'JWT',
            'OAuth2',
        ];

        foreach ($skills as $skill) {
            Skill::firstOrCreate( [
        'slug' => Str::slug($skill),
    ],
    [
        'name' => $skill,
    ]);
        }
    }
}