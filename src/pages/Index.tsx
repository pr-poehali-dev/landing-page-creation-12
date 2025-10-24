import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const advantages = [
    {
      icon: "Target",
      title: "Высокое качество",
      description: "Мы гарантируем высочайший уровень качества наших услуг и продукции"
    },
    {
      icon: "Users",
      title: "Профессиональная команда",
      description: "Опытные специалисты с многолетним стажем работы в отрасли"
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Проверенная репутация и долгосрочные партнерские отношения"
    },
    {
      icon: "Clock",
      title: "Своевременность",
      description: "Соблюдаем все сроки и договоренности с нашими клиентами"
    },
    {
      icon: "TrendingUp",
      title: "Инновационный подход",
      description: "Используем современные технологии и методы работы"
    },
    {
      icon: "Award",
      title: "Экспертность",
      description: "Признанные эксперты в своей области с множеством наград"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">ООО «Удача»</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:inline-flex">Связаться с нами</Button>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 animate-fade-in">
            ООО «Удача»
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Надежный партнер для вашего бизнеса. Профессиональные решения и качественный сервис
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
            <Button size="lg" className="text-lg px-8">
              Узнать больше
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-4">
            Наши преимущества
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы выделяемся среди конкурентов благодаря нашему профессионализму и ответственному подходу к работе
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и узнайте, как мы можем помочь вашему бизнесу
          </p>
          <Button size="lg" className="text-lg px-12">
            Связаться с нами
            <Icon name="Mail" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ООО «Удача»</h3>
              <p className="text-gray-300">
                Профессиональные решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#advantages" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@udacha.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ООО «Удача». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
