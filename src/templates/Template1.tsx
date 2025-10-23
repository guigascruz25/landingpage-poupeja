// Atualização do Template1.tsx com efeitos visuais
import DynamicHead from "@/components/DynamicHead";
import Footer from "@/components/Footer";
import { getTheme } from "@/config/themes";
import { appConfig } from "@/config/app";

// Template1 - Azul Profissional COMPLETO E INDEPENDENTE COM EFEITOS
const Template1 = () => {
  const theme = getTheme("template1");

  return (
    <div className="min-h-screen text-white" style={{ 
      backgroundColor: '#151a21',
      '--primary': theme.primary,
      '--secondary': theme.secondary,
      '--accent': theme.accent,
      '--background': theme.background,
      '--foreground': theme.foreground,
      '--muted': theme.muted
    } as React.CSSProperties}>
      <DynamicHead />
      
      {/* Hero Section - Dark Theme COM EFEITOS */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#151a21' }}>
        {/* Background Elements COM ANIMAÇÃO */}
        <div className="absolute inset-0 opacity-20">
          <div className="floating-element absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="floating-element absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left Column - Content COM ANIMAÇÕES */}
            <div className="text-left animate-slide-in-left">
              <div className="mb-8">
                <img 
                  src={appConfig.logo_url} 
                  alt={`${appConfig.company_name} Logo`}
                  width={appConfig.logo_width}
                  height={appConfig.logo_height}
                  className="logo-image"
                  onError={(e) => {
                    e.currentTarget.src = appConfig.logo_url_fallback;
                  }}
                />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up">
                A plataforma financeira
                <span className="block text-primary mt-3">
                  mais completa do Brasil
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up">
                Gerencie suas finanças de forma inteligente com nossa plataforma completa. 
                Controle total, insights avançados e liberdade financeira garantida.
              </p>
              {/* CTA Buttons COM EFEITOS */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-12 animate-scale-in">
                <button 
                  className="px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-base transition-all duration-300 ease-out transform hover:scale-[1.02] shadow-xl hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#151a21]"
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar Agora
                </button>
                <button 
                  className="px-10 py-4 bg-white/10 text-white border-2 border-primary hover:bg-primary/20 rounded-xl font-semibold text-base transition-all duration-300 ease-out transform hover:scale-[1.02] shadow-lg hover:shadow-xl backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#151a21]"
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Planos
                </button>
              </div>
              
               {/* Trust Indicators COM ANIMAÇÃO */}
               <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 animate-fade-in-up">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                   <span>+50.000 usuários ativos</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                   <span>99.9% uptime</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                   <span>Seguro e confiável</span>
                 </div>
               </div>
             </div>

             {/* Right Column - Visual/Demo COM EFEITOS 3D */}
             <div className="relative animate-slide-in-right">
               <img 
                 src="/imagens/app-dashboard.png" 
                 alt="Dashboard do App Poupe Já"
                 className="w-[500px] h-auto mx-auto drop-shadow-2xl rounded-xl"
               />
               {/* Floating Elements */}
               <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-20 animate-float"></div>
               <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-30 animate-float-slow"></div>
             </div>
                    </div>
                  </div>
      </section>

      {/* Seção de Perguntas Financeiras COM MOVIMENTO - TELA COMPLETA */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: '#1a2028' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
              Pergunte o que quiser sobre suas finanças
            </h3>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Veja alguns exemplos abaixo.
            </p>
                    </div>

          {/* Linha 1 - Movimento para a esquerda */}
          <div className="scroll-container mb-8">
            <div className="scroll-left flex">
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quais contas vencem hoje?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como está meu investimento?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual meu fluxo de caixa?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual meu limite de gastos?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quanto posso economizar?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quais despesas fixas tenho?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como está meu score de crédito?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual meu orçamento mensal?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual minha meta de economia?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quanto tenho investido?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quais contas vencem hoje?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como está meu investimento?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual meu fluxo de caixa?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual meu limite de gastos?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quanto posso economizar?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quais despesas fixas tenho?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como está meu score de crédito?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual meu orçamento mensal?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual minha meta de economia?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quanto tenho investido?</button>
                    </div>
                  </div>
                  
          {/* Linha 2 - Movimento para a direita */}
          <div className="scroll-container mb-8">
            <div className="scroll-right flex">
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Recebi 5000 reais de salário</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Paguei 800 reais de aluguel</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Investi 1000 reais na poupança</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Gastei 200 reais com combustível</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Paguei 150 reais no supermercado</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Recebi 300 reais de dividendos</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Paguei 500 reais de cartão de crédito</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Investi 2000 reais em ações</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Gastei 100 reais com lazer</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Paguei 400 reais de energia</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Recebi 5000 reais de salário</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Paguei 800 reais de aluguel</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Investi 1000 reais na poupança</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Gastei 200 reais com combustível</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Paguei 150 reais no supermercado</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Recebi 300 reais de dividendos</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Paguei 500 reais de cartão de crédito</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Investi 2000 reais em ações</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Gastei 100 reais com lazer</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Paguei 400 reais de energia</button>
                </div>
              </div>
              
          {/* Linha 3 - Movimento para a esquerda */}
          <div className="scroll-container mb-8">
            <div className="scroll-left flex">
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual minha renda passiva?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quais impostos preciso pagar?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como está minha reserva de emergência?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual meu patrimônio líquido?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quanto devo no cartão de crédito?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual minha taxa de poupança?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como está minha aposentadoria?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quais investimentos tenho?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual meu perfil de risco?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como diversificar meus investimentos?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual minha renda passiva?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quais impostos preciso pagar?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como está minha reserva de emergência?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual meu patrimônio líquido?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quanto devo no cartão de crédito?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual minha taxa de poupança?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como está minha aposentadoria?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quais investimentos tenho?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual meu perfil de risco?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como diversificar meus investimentos?</button>
            </div>
          </div>

          {/* Linha 4 - Movimento para a direita */}
          <div className="scroll-container">
            <div className="scroll-right flex">
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quanto posso investir este mês?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual a melhor estratégia de investimento?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como reduzir meus gastos?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual minha capacidade de pagamento?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como planejar minha aposentadoria?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quais são meus gastos desnecessários?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como aumentar minha renda?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual o melhor momento para investir?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como controlar meus impulsos de compra?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual minha meta financeira para este ano?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quanto posso investir este mês?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual a melhor estratégia de investimento?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como reduzir meus gastos?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual minha capacidade de pagamento?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como planejar minha aposentadoria?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Quais são meus gastos desnecessários?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como aumentar minha renda?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual o melhor momento para investir?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Como controlar meus impulsos de compra?</button>
              <button className="question-button bg-white/5 text-gray-300 border border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary">Qual minha meta financeira para este ano?</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Dark Theme COM EFEITOS */}
      <section className="py-24" style={{ backgroundColor: '#151a21' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">Por que escolher nossa plataforma?</h3>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">Tecnologia avançada, segurança máxima e resultados comprovados</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-3d bg-white/5 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up border border-primary/20 hover:border-primary/40 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-8 animate-float shadow-md">
                <div className="text-2xl">⚡</div>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4 tracking-tight">Dashboard Inteligente</h4>
              <p className="text-gray-400 leading-relaxed text-[15px]">Visualize todas as suas finanças em um só lugar com insights personalizados.</p>
            </div>
            <div className="card-3d bg-white/5 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up border border-primary/20 hover:border-primary/40 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-8 animate-float shadow-md">
                <div className="text-2xl">🔒</div>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4 tracking-tight">Segurança Máxima</h4>
              <p className="text-gray-400 leading-relaxed text-[15px]">Criptografia de nível bancário e proteção total dos seus dados.</p>
            </div>
            <div className="card-3d bg-white/5 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up border border-primary/20 hover:border-primary/40 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-8 animate-float shadow-md">
                <div className="text-2xl">⚡</div>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4 tracking-tight">Automação Total</h4>
              <p className="text-gray-400 leading-relaxed text-[15px]">Configure uma vez e deixe a plataforma trabalhar por você.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Demo Section - Dark Theme COM EFEITOS */}
      <section className="py-24" style={{ backgroundColor: '#1a2028' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Controle suas finanças de <span className="text-primary">onde estiver</span>
              </h3>
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                Acesse sua conta pelo app ou WhatsApp. Dashboard completo, metas financeiras e relatórios detalhados.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-gray-300 leading-relaxed">Movimentos ilimitados</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-gray-300 leading-relaxed">Dashboard completo</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-gray-300 leading-relaxed">Todos os relatórios</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-gray-300 leading-relaxed">Metas ilimitadas</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="/imagens/app-macbook-poupeja.png"
                alt="Dashboard do app de finanças mostrando gráficos e controle financeiro"
                className="w-[800px] h-auto mx-auto drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500 rounded-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-2xl border border-primary/30 hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary tracking-tight">+32%</p>
                  <p className="text-sm text-gray-400 mt-1">Economia este mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Dark Theme COM EFEITOS */}
      <section id="plans" className="py-24" style={{ backgroundColor: '#151a21' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">Escolha seu plano</h3>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">Planos flexíveis para todos os perfis</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Mensal */}
            <div className="card-3d bg-white/5 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in border border-white/10 hover:border-primary/40 backdrop-blur-sm">
              <div className="text-center mb-10">
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">Plano Mensal</h4>
                <div className="text-5xl font-bold text-primary mb-2 tracking-tight">
                  R$ {appConfig.plan_price_monthly}
                </div>
                <p className="text-gray-400 text-lg">por mês</p>
              </div>
              <ul className="space-y-4 mb-10">
                {appConfig.plan_features_monthly.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in-up">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = `${appConfig.app_url}/auth?mode=register&planType=monthly`}
              >
                Começar Agora
              </button>
      </div>

            {/* Plano Anual */}
            <div className="card-3d bg-white/5 rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-primary animate-scale-in backdrop-blur-sm">
              <div className="text-center mb-10">
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                  Mais vantajoso
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">Plano Anual</h4>
                <div className="text-5xl font-bold text-primary mb-2 tracking-tight">
                  R$ {appConfig.plan_price_annual}
                </div>
                <p className="text-gray-400 text-lg">por ano</p>
              </div>
              <ul className="space-y-4 mb-10">
                {appConfig.plan_features_annual.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in-up">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-gray-300 font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = `${appConfig.app_url}/auth?mode=register&planType=annual`}
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Dark Theme COM EFEITOS */}
      <section className="py-24" style={{ backgroundColor: '#1a2028' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">O que nossos usuários dizem</h3>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">Depoimentos reais de quem já usa nossa plataforma</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-3d bg-white/5 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-white/10 hover:border-primary/40 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mr-4 animate-float shadow-lg">
                  <span className="text-white font-bold text-base">M</span>
                </div>
                <div>
                  <h5 className="text-white font-semibold tracking-tight">Maria Silva</h5>
                  <p className="text-gray-400 text-sm mt-0.5">Empresária</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">"Revolucionou minha gestão financeira. Interface intuitiva e funcionalidades incríveis!"</p>
            </div>
            <div className="card-3d bg-white/5 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-white/10 hover:border-primary/40 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mr-4 animate-float shadow-lg">
                  <span className="text-white font-bold text-base">J</span>
                </div>
                <div>
                  <h5 className="text-white font-semibold tracking-tight">João Santos</h5>
                  <p className="text-gray-400 text-sm mt-0.5">Investidor</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">"Controle total dos investimentos. Relatórios detalhados e insights valiosos."</p>
            </div>
            <div className="card-3d bg-white/5 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-white/10 hover:border-primary/40 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mr-4 animate-float shadow-lg">
                  <span className="text-white font-bold text-base">A</span>
                </div>
                <div>
                  <h5 className="text-white font-semibold tracking-tight">Ana Costa</h5>
                  <p className="text-gray-400 text-sm mt-0.5">Freelancer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">"Perfeito para freelancers. Organização financeira nunca foi tão fácil!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Dark Theme COM EFEITOS */}
      <section className="py-24" style={{ backgroundColor: '#151a21' }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight animate-fade-in-up">
            Pronto para transformar suas <span className="text-primary">finanças</span>?
          </h3>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Junte-se a milhares de usuários que já controlam suas finanças com nossa plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-scale-in">
            <button 
              className="px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl"
              onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Agora
            </button>
            <button 
              className="px-10 py-4 bg-white/10 text-white border-2 border-primary hover:bg-primary/20 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl backdrop-blur-sm"
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

export default Template1;
