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
      
      {/* Hero Section - Modern Dark Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#151a21' }}>
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-left space-y-8">
              {/* Logo */}
              <div className="mb-4">
                <img 
                  src={appConfig.logo_url} 
                  alt={`${appConfig.company_name} Logo`}
                  width={appConfig.logo_width}
                  height={appConfig.logo_height}
                  className="h-10 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = appConfig.logo_url_fallback;
                  }}
                />
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Controle suas finanças que{' '}
                <span className="bg-gradient-to-r from-primary via-primary to-emerald-400 bg-clip-text text-transparent">
                  convertem
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                Aprenda com mais de 100+ exemplos selecionados de empresas que criam 
                controles financeiros envolventes e compartilháveis que não apenas 
                aumentam a consciência, mas também convertem clientes.
              </p>

              {/* Email Capture Form */}
              <div className="space-y-4 max-w-xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    className="flex-1 px-6 py-4 bg-[#1a2028] text-white border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-gray-500"
                  />
                  <button 
                    className="px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 hover:from-emerald-500 hover:to-primary text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-primary/20"
                    onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Começar Grátis
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  Acesso gratuito • Sem cartão de crédito • 100+ recursos
                </p>
              </div>

              {/* Social Proof / Testimonial */}
              <div className="flex items-start gap-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm italic mb-2">
                    "Estou prestes a lançar um novo produto e precisava de inspiração para 
                    criar nosso vídeo de lançamento. Este site tem sido um recurso incrível para nós."
                  </p>
                  <p className="text-white text-sm font-medium">
                    Alex Silva, fundador da <span className="text-primary">FinTech Brasil</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative lg:block hidden">
              <div className="relative">
                <img 
                  src="/imagens/app-dashboard.png" 
                  alt="Dashboard do App Poupe Já"
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-primary/10"
                />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl"></div>
              </div>
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
