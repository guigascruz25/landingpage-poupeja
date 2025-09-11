import { Smartphone, Monitor } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const AppDemo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Controle suas finanças de 
              <span className="text-primary block">onde estiver</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Simples, rápido e inteligente. Acesse seu dashboard completo pelo computador 
              ou gerencie tudo pelo WhatsApp quando estiver em movimento.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Dashboard Web Completo</h3>
                  <p className="text-muted-foreground">
                    Interface intuitiva com gráficos, relatórios e controle total das suas finanças
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Controle via WhatsApp</h3>
                  <p className="text-muted-foreground">
                    Registre gastos e receitas instantaneamente pelo WhatsApp, onde quer que você esteja
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-hero rounded-3xl p-4 shadow-xl">
                <img 
                  src={heroDashboard}
                  alt="Dashboard do app de finanças mostrando gráficos e controle financeiro"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">+32%</p>
                  <p className="text-sm text-muted-foreground">Economia este mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;