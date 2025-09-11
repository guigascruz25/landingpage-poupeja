import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app";

const FinalCTA = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-75"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Pronto para transformar 
          <span className="block">suas finanças?</span>
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Junte-se a milhares de pessoas que já descobriram o segredo da 
          organização financeira. Comece hoje mesmo!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            variant="hero-primary" 
            size="lg"
            className="w-full sm:w-auto text-lg px-12 py-6 h-auto"
            onClick={scrollToPlans}
          >
            Começar agora
          </Button>
          <Button 
            variant="hero-secondary" 
            size="lg"
            className="w-full sm:w-auto text-lg px-12 py-6 h-auto"
            onClick={() => window.open(`${appConfig.app_url}/login`, '_blank')}
          >
            Já tenho conta
          </Button>
        </div>

        {/* Additional benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-white/80">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">7 dias</div>
            <p className="text-sm">Teste grátis</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <p className="text-sm">Suporte disponível</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <p className="text-sm">Satisfação garantida</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;