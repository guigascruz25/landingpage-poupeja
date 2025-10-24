import DynamicHead from "@/components/DynamicHead";
import Footer from "@/components/Footer";
import { getTheme } from "@/config/themes";
import { appConfig } from "@/config/app";
import AnimatedBackground from "@/components/AnimatedBackground";

// Template3 - Design Moderno Azul Black
const Template3 = () => {
  const theme = getTheme("template3");

  return (
    <div className="min-h-screen bg-slate-900 text-white" style={{
      '--primary': theme.primary,
      '--secondary': theme.secondary,
      '--accent': theme.accent,
      '--background': theme.background,
      '--foreground': theme.foreground,
      '--muted': theme.muted,
      '--card-background': theme.cardBackground,
      '--border-color': theme.borderColor
    } as React.CSSProperties}>
      <DynamicHead />
      
      {/* Hero Section - Design Moderno */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fundo animado */}
        <AnimatedBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <div className="mb-8">
                <img 
                  src={appConfig.logo_url} 
                  alt={appConfig.company_name}
                  className="h-12 md:h-16 mb-8 object-contain animate-fade-in-up delay-100"
                />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="block">
                  Transforme suas finanças com
                </span>
                <span className="block mt-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-flow">
                  seu assistente moderno e elegante
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl animate-stagger-fade delay-900 hero-text">
                A plataforma mais sofisticada e intuitiva para gerenciar suas finanças.
                Controle total, insights avançados e liberdade financeira garantida.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-stagger-fade delay-1200">
                <a 
                  href="#plans" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl animate-pulse-glow"
                >
                  Conhecer planos
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  Ver demonstração
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 text-sm text-slate-400 animate-stagger-fade delay-1400">
                <div className="flex items-center gap-3 animate-stagger-fade delay-1500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow"></div>
                  <span>+50.000 usuários ativos</span>
                </div>
                <div className="flex items-center gap-3 animate-stagger-fade delay-1600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow"></div>
                  <span>99.9% uptime</span>
                </div>
                <div className="flex items-center gap-3 animate-stagger-fade delay-1700">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow"></div>
                  <span>Seguro e confiável</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual/Demo */}
            <div className="relative animate-fade-in-scale delay-800">
              <img 
                src="/imagens/app-dashboard.png" 
                alt="Dashboard do App Poupe Já"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Perguntas Financeiras */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pergunte o que quiser sobre suas finanças
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              Veja alguns exemplos abaixo.
            </p>
          </div>

          {/* Linha 1 - Movimento para a esquerda */}
          <div className="scroll-container mb-8">
            <div className="scroll-left flex">
              <button className="question-button">Quais contas vencem hoje?</button>
              <button className="question-button">Como está meu investimento?</button>
              <button className="question-button">Qual meu fluxo de caixa?</button>
              <button className="question-button">Qual meu limite de gastos?</button>
              <button className="question-button">Quanto posso economizar?</button>
              <button className="question-button">Quais despesas fixas tenho?</button>
              <button className="question-button">Como está meu score de crédito?</button>
              <button className="question-button">Qual meu orçamento mensal?</button>
              <button className="question-button">Qual minha meta de economia?</button>
              <button className="question-button">Quanto tenho investido?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button">Quais contas vencem hoje?</button>
              <button className="question-button">Como está meu investimento?</button>
              <button className="question-button">Qual meu fluxo de caixa?</button>
              <button className="question-button">Qual meu limite de gastos?</button>
              <button className="question-button">Quanto posso economizar?</button>
              <button className="question-button">Quais despesas fixas tenho?</button>
              <button className="question-button">Como está meu score de crédito?</button>
              <button className="question-button">Qual meu orçamento mensal?</button>
              <button className="question-button">Qual minha meta de economia?</button>
              <button className="question-button">Quanto tenho investido?</button>
            </div>
          </div>

          {/* Linha 2 - Movimento para a direita */}
          <div className="scroll-container mb-8">
            <div className="scroll-right flex">
              <button className="question-button">Recebi 5000 reais de salário</button>
              <button className="question-button">Paguei 800 reais de aluguel</button>
              <button className="question-button">Investi 1000 reais na poupança</button>
              <button className="question-button">Gastei 200 reais com combustível</button>
              <button className="question-button">Paguei 150 reais no supermercado</button>
              <button className="question-button">Recebi 300 reais de dividendos</button>
              <button className="question-button">Paguei 500 reais de cartão de crédito</button>
              <button className="question-button">Investi 2000 reais em ações</button>
              <button className="question-button">Gastei 100 reais com lazer</button>
              <button className="question-button">Paguei 400 reais de energia</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button">Recebi 5000 reais de salário</button>
              <button className="question-button">Paguei 800 reais de aluguel</button>
              <button className="question-button">Investi 1000 reais na poupança</button>
              <button className="question-button">Gastei 200 reais com combustível</button>
              <button className="question-button">Paguei 150 reais no supermercado</button>
              <button className="question-button">Recebi 300 reais de dividendos</button>
              <button className="question-button">Paguei 500 reais de cartão de crédito</button>
              <button className="question-button">Investi 2000 reais em ações</button>
              <button className="question-button">Gastei 100 reais com lazer</button>
              <button className="question-button">Paguei 400 reais de energia</button>
            </div>
          </div>

          {/* Linha 3 - Movimento para a esquerda */}
          <div className="scroll-container mb-8">
            <div className="scroll-left flex">
              <button className="question-button">Qual minha renda passiva?</button>
              <button className="question-button">Quais impostos preciso pagar?</button>
              <button className="question-button">Como está minha reserva de emergência?</button>
              <button className="question-button">Qual meu patrimônio líquido?</button>
              <button className="question-button">Quanto devo no cartão de crédito?</button>
              <button className="question-button">Qual minha taxa de poupança?</button>
              <button className="question-button">Como está minha aposentadoria?</button>
              <button className="question-button">Quais investimentos tenho?</button>
              <button className="question-button">Qual meu perfil de risco?</button>
              <button className="question-button">Como diversificar meus investimentos?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button">Qual minha renda passiva?</button>
              <button className="question-button">Quais impostos preciso pagar?</button>
              <button className="question-button">Como está minha reserva de emergência?</button>
              <button className="question-button">Qual meu patrimônio líquido?</button>
              <button className="question-button">Quanto devo no cartão de crédito?</button>
              <button className="question-button">Qual minha taxa de poupança?</button>
              <button className="question-button">Como está minha aposentadoria?</button>
              <button className="question-button">Quais investimentos tenho?</button>
              <button className="question-button">Qual meu perfil de risco?</button>
              <button className="question-button">Como diversificar meus investimentos?</button>
            </div>
          </div>

          {/* Linha 4 - Movimento para a direita */}
          <div className="scroll-container">
            <div className="scroll-right flex">
              <button className="question-button">Quanto posso investir este mês?</button>
              <button className="question-button">Qual a melhor estratégia de investimento?</button>
              <button className="question-button">Como reduzir meus gastos?</button>
              <button className="question-button">Qual minha capacidade de pagamento?</button>
              <button className="question-button">Como planejar minha aposentadoria?</button>
              <button className="question-button">Quais são meus gastos desnecessários?</button>
              <button className="question-button">Como aumentar minha renda?</button>
              <button className="question-button">Qual o melhor momento para investir?</button>
              <button className="question-button">Como controlar meus impulsos de compra?</button>
              <button className="question-button">Qual minha meta financeira para este ano?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button">Quanto posso investir este mês?</button>
              <button className="question-button">Qual a melhor estratégia de investimento?</button>
              <button className="question-button">Como reduzir meus gastos?</button>
              <button className="question-button">Qual minha capacidade de pagamento?</button>
              <button className="question-button">Como planejar minha aposentadoria?</button>
              <button className="question-button">Quais são meus gastos desnecessários?</button>
              <button className="question-button">Como aumentar minha renda?</button>
              <button className="question-button">Qual o melhor momento para investir?</button>
              <button className="question-button">Como controlar meus impulsos de compra?</button>
              <button className="question-button">Qual minha meta financeira para este ano?</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por que escolher nossa plataforma?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Tecnologia avançada, segurança máxima e resultados comprovados
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Alertas Inteligentes</h3>
              <p className="text-slate-400 leading-relaxed">Notificações sobre limites de gastos, metas, e contas vencendo.</p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <div className="text-2xl">🔗</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Conexões Bancárias</h3>
              <p className="text-slate-400 leading-relaxed">Integração com bancos e cartões para atualização em tempo real.</p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <div className="text-2xl">📊</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Relatórios Visuais</h3>
              <p className="text-slate-400 leading-relaxed">Gráficos e visuais claros para entender o cenário financeiro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Demo Section */}
      <section id="demo" className="py-24 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Demonstrativo do App
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Acesse sua plataforma financeira de qualquer dispositivo. 
                Sincronização em tempo real e interface responsiva para máxima comodidade.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300 text-lg">Movimentos ilimitados</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300 text-lg">Dashboard completo</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300 text-lg">Todos os relatórios</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300 text-lg">Metas ilimitadas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/imagens/app-macbook-poupeja.png"
                alt="Dashboard do app de finanças mostrando gráficos e controle financeiro"
                className="w-full mx-auto drop-shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-700 border border-slate-600 p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">4.8</div>
                  <p className="text-sm text-slate-400">Avaliações médias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Escolha seu plano
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Planos flexíveis para todos os perfis
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plano Mensal */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Plano Mensal</h3>
                <div className="text-5xl font-bold text-blue-400 mb-2">
                  R$ {appConfig.plan_price_monthly}
                </div>
                <p className="text-slate-400">por mês</p>
              </div>
              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_monthly.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
                onClick={() => window.location.href = `${appConfig.app_url}/auth?mode=register&planType=monthly`}
              >
                Começar agora
              </button>
            </div>

            {/* Plano Anual */}
            <div className="bg-slate-800 rounded-2xl p-8 border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  Mais vantajoso
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Plano Anual</h3>
                <div className="text-5xl font-bold text-blue-400 mb-2">
                  R$ {appConfig.plan_price_annual}
                </div>
                <p className="text-slate-400">por ano</p>
              </div>
              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_annual.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
                onClick={() => window.location.href = `${appConfig.app_url}/auth?mode=register&planType=annual`}
              >
                Escolher plano
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Depoimentos
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Depoimentos reais de quem já usa nossa plataforma
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <div className="text-white font-bold">A</div>
                </div>
                <div>
                  <p className="font-semibold text-white">Ana</p>
                  <p className="text-sm text-slate-400">Empreendedora</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">"O app se integrou aos meus bancos e cartões rapidinho."</p>
            </div>
            <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <div className="text-white font-bold">B</div>
                </div>
                <div>
                  <p className="font-semibold text-white">Bruno</p>
                  <p className="text-sm text-slate-400">Analista</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">"Os alertas me ajudam a não estourar os gastos do mês."</p>
            </div>
            <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <div className="text-white font-bold">C</div>
                </div>
                <div>
                  <p className="font-semibold text-white">Carla</p>
                  <p className="text-sm text-slate-400">Gestora</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">"Os gráficos são ótimos pra visualizar onde estou gastando."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Pronto para transformar suas finanças?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já controlam suas finanças com nossa plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#plans" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
            >
              Começar agora
            </a>
            <button 
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-lg font-semibold text-lg transition-all duration-200"
              onClick={() => window.open(`https://wa.me/${appConfig.support_whatsapp.replace(/\D/g, '')}`, '_blank')}
            >
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Template3;
