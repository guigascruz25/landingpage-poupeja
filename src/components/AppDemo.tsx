import { Smartphone, Monitor } from "lucide-react";

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
                  <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp Integration</h3>
                  <p className="text-muted-foreground">
                    Adicione receitas e despesas via mensagem. Simples e prático para o dia a dia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Imagem SEM fundo colorido e MAIOR */}
              <img 
                src="/imagens/app-macbook-poupeja.png"
                alt="Dashboard do app de finanças mostrando gráficos e controle financeiro"
                className="w-[800px] h-auto mx-auto drop-shadow-2xl"
              />
              
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