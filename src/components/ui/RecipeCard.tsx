import Link from 'next/link';
import { Clock, ChefHat } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
    id: string;
    title: string;
    image: string;
    time: string;
    category: string;
    difficulty: string;
    className?: string;
}

export default function RecipeCard({ id, title, image, time, category, difficulty, className }: RecipeCardProps) {
    return (
        <Link
            href={`/recipes/${id}`}
            className={cn(
                "group block bg-surface rounded-2xl overflow-hidden recipe-card-shadow transition-all duration-300",
                className
            )}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                        {category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    {title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            <span>{time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <ChefHat className="h-4 w-4" />
                            <span>{difficulty}</span>
                        </div>
                    </div>
                    <span className="text-primary font-bold text-sm bg-primary/5 px-3 py-1 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        View Recipe
                    </span>
                </div>
            </div>
        </Link>
    );
}

