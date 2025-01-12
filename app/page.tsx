import { getRestaurants } from '@/lib/google-sheets';
import { Utensils } from 'lucide-react';
import RestaurantList from './components/restaurant-list';
import RoulettePage from './components/roulette-page';

export default async function Home() {
  const restaurants = await getRestaurants();

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Utensils className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">뭐먹지</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            오늘의 점심 메뉴를 랜덤으로 추천해드립니다!
          </p>
        </div>

        <RoulettePage initialRestaurants={restaurants} />
      </div>
    </main>
  );
}