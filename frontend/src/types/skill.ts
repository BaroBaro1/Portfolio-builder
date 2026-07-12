export interface Skill {
    id: number;
    name: string;
    category: string | null;
    icon: string | null;
}

export interface ProfileSkill {
    id: number;

    skill: {
        id: number;
        name: string;
    };

    level: number;
}