import { CheckCircle, TrendingUp, Target, BarChart3, MessageCircle } from "lucide-react";
import { appConfig } from "@/config/app";

const benefits = [
  {
    icon: CheckCircle,
    title: "Movimentos ilimitados",
    description: "Registre quantas receitas e despesas precisar, sem limite de transações."
  },
  {
    icon: BarChart3,
    title: "Dashboard completo",
    description: "Visualize seus dados financeiros em gráficos intuitivos e relatórios detalhados."
  },
  {
    icon: Target,
    title: "Metas financeiras",
    description: "Defina objetivos e acompanhe seu progresso rumo à independência financeira."
  },
  {
    icon: TrendingUp,
    title: "Relatórios detalhados",
    description: "Análises profundas dos seus hábitos financeiros com insights valiosos."
  },
  {
    icon: MessageCircle,
    title: "Integração WhatsApp",
    description: "Registre gastos e receitas diretamente pelo WhatsApp de forma prática."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher o <span className="text-primary">{appConfig.company_name}</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra como nossa plataforma pode revolucionar o modo como você gerencia suas finanças
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;