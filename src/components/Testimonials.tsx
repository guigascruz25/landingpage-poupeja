import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empreendedora",
    content: "O Poupe Já AI mudou completamente como eu vejo minhas finanças. Consegui economizar 40% mais em apenas 3 meses!",
    avatar: "MS",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Desenvolvedor",
    content: "A integração com WhatsApp é fantástica. Registro meus gastos na hora, sem complicação. Recomendo muito!",
    avatar: "JS", 
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Professora",
    content: "Finalmente consigo acompanhar minhas metas financeiras. O dashboard é muito intuitivo e os relatórios são incríveis.",
    avatar: "AC",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas financeiras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;