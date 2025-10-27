import DynamicHead from "@/components/DynamicHead";
import Footer from "@/components/Footer";
import { getTheme } from "@/config/themes";
import { appConfig } from "@/config/app";
import { Sparkles, MessageCircle, Zap, Shield, Cpu, Check, TrendingUp, Star, Quote } from "lucide-react";

// Template2 - Verde Moderno COMPLETO E INDEPENDENTE COM EFEITOS
const Template2 = () => {
  const theme = getTheme("template2");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900" style={{ 
      '--primary': theme.primary,
      '--secondary': theme.secondary,
      '--accent': theme.accent,
      '--background': theme.background,
      '--foreground': theme.foreground,
      '--muted': theme.muted
    } as React.CSSProperties}>
      <DynamicHead />
      
      {/* Hero Section - Emerald Luxury */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 overflow-hidden animate-gradient-shift">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-element absolute top-20 left-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl animate-float-gentle"></div>
          <div className="floating-element absolute bottom-20 right-20 w-96 h-96 bg-teal-400/25 rounded-full blur-3xl animate-float-gentle"></div>
          <Sparkles className="absolute top-40 right-1/4 w-8 h-8 text-emerald-200/40 animate-pulse" />
          <Sparkles className="absolute bottom-40 left-1/3 w-6 h-6 text-emerald-300/30 animate-pulse" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content COM ANIMAÇÕES */}
            <div className="text-left animate-slide-in-left">
              <div className="mb-8">
                <img 
                  src={appConfig.logo_url} 
                  alt={appConfig.company_name}
                  className="h-12 md:h-16 mb-6 object-contain animate-fade-in-up"
                />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up tracking-tight">
                Controle suas finanças com
                <span className="block mt-3 bg-gradient-to-r from-emerald-200 via-emerald-100 to-teal-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.5)] text-[1.1em] tracking-tighter">
                  inteligência e simplicidade
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-emerald-50/90 mb-8 leading-relaxed max-w-2xl animate-fade-in-up font-light">
                A plataforma mais sofisticada e intuitiva para gerenciar suas finanças.
                Controle total, insights avançados e liberdade financeira garantida.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
                <button 
                  className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-emerald-lg hover:shadow-emerald-xl"
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar Agora
                </button>
                <button 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Planos
                </button>
              </div>

              {/* Trust Indicators COM ANIMAÇÃO */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-emerald-200 animate-fade-in-up">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>+50.000 usuários ativos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>99.9% uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Seguro e confiável</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual/Demo COM EFEITOS 3D */}
            <div className="relative animate-slide-in-right">
              <img 
                src="/imagens/app-dashboard.png" 
                alt="Dashboard do App Poupe Já"
                className="w-[500px] h-auto mx-auto drop-shadow-2xl"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full opacity-30 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Perguntas Financeiras COM MOVIMENTO */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pergunte o que quiser sobre suas finanças
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Veja alguns exemplos abaixo.
            </p>
          </div>

          {/* Linha 1 - Movimento para a esquerda */}
          <div className="scroll-container mb-8">
            <div className="scroll-left flex">
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais contas vencem hoje?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está meu investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu fluxo de caixa?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu limite de gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso economizar?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais despesas fixas tenho?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está meu score de crédito?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu orçamento mensal?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha meta de economia?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto tenho investido?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais contas vencem hoje?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está meu investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu fluxo de caixa?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu limite de gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso economizar?</button>
            </div>
          </div>

          {/* Linha 2 - Movimento para a direita */}
          <div className="scroll-container mb-8">
            <div className="scroll-right flex">
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Recebi 5000 reais de salário</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 800 reais de aluguel</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Investi 1000 reais na poupança</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Gastei 200 reais com combustível</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 150 reais no supermercado</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Recebi 300 reais de dividendos</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 500 reais de cartão de crédito</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Investi 2000 reais em ações</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Gastei 100 reais com lazer</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 400 reais de energia</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Recebi 5000 reais de salário</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 800 reais de aluguel</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Investi 1000 reais na poupança</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Gastei 200 reais com combustível</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 150 reais no supermercado</button>
            </div>
          </div>

          {/* Linha 3 - Movimento para a esquerda */}
          <div className="scroll-container mb-8">
            <div className="scroll-left flex">
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha renda passiva?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais impostos preciso pagar?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está minha reserva de emergência?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu patrimônio líquido?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto devo no cartão de crédito?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha taxa de poupança?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está minha aposentadoria?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais investimentos tenho?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu perfil de risco?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como diversificar meus investimentos?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha renda passiva?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais impostos preciso pagar?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está minha reserva de emergência?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu patrimônio líquido?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto devo no cartão de crédito?</button>
            </div>
          </div>

          {/* Linha 4 - Movimento para a direita */}
          <div className="scroll-container">
            <div className="scroll-right flex">
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso investir este mês?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual a melhor estratégia de investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como reduzir meus gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha capacidade de pagamento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como planejar minha aposentadoria?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais são meus gastos desnecessários?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como aumentar minha renda?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual o melhor momento para investir?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como controlar meus impulsos de compra?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha meta financeira para este ano?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso investir este mês?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual a melhor estratégia de investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como reduzir meus gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha capacidade de pagamento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200/50 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como planejar minha aposentadoria?</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Emerald Luxury */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Por que escolher nossa plataforma?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">Tecnologia avançada, segurança máxima e resultados comprovados</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group bg-white rounded-2xl p-8 shadow-emerald-sm hover:shadow-emerald-lg transition-all duration-500 animate-fade-in-up border-2 border-emerald-100 hover:border-emerald-300 hover:scale-105">
              <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Destaque</div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 animate-float-gentle group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Dashboard Inteligente</h4>
              <p className="text-gray-600 leading-relaxed">Visualize todas as suas finanças em um só lugar com insights personalizados e análises em tempo real.</p>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-emerald-sm hover:shadow-emerald-lg transition-all duration-500 animate-fade-in-up border-2 border-emerald-100 hover:border-emerald-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 animate-float-gentle group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Segurança Máxima</h4>
              <p className="text-gray-600 leading-relaxed">Criptografia de nível bancário e proteção total dos seus dados com tecnologia de ponta.</p>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-emerald-sm hover:shadow-emerald-lg transition-all duration-500 animate-fade-in-up border-2 border-emerald-100 hover:border-emerald-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 animate-float-gentle group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Automação Total</h4>
              <p className="text-gray-600 leading-relaxed">Configure uma vez e deixe a plataforma trabalhar por você com inteligência artificial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Demo Section - Verde Moderno COM EFEITOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Controle suas finanças de onde estiver
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Acesse sua conta pelo app ou WhatsApp. Dashboard completo, metas financeiras e relatórios detalhados.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600 font-medium">Movimentos ilimitados</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600 font-medium">Dashboard completo</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600 font-medium">Todos os relatórios</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600 font-medium">Metas ilimitadas</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="/imagens/app-macbook-poupeja.png"
                alt="Dashboard do app de finanças mostrando gráficos e controle financeiro"
                className="w-[800px] h-auto mx-auto drop-shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 p-6 rounded-2xl shadow-emerald-lg hover:scale-110 transition-transform animate-glow-pulse">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                  <div className="text-left">
                    <p className="text-3xl font-bold text-white">+32%</p>
                    <p className="text-sm text-emerald-100">Economia este mês</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Emerald Luxury */}
      <section id="plans" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Escolha seu plano</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">Planos flexíveis para todos os perfis</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Mensal */}
            <div className="bg-white rounded-2xl p-8 shadow-emerald-sm hover:shadow-emerald-lg transition-all duration-500 border-2 border-emerald-200 hover:border-emerald-300 hover:scale-105 animate-scale-in">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Plano Mensal</h4>
                <div className="text-5xl font-bold text-emerald-600 mb-2">
                  R$ {appConfig.plan_price_monthly}
                </div>
                <p className="text-gray-600">por mês</p>
              </div>
              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_monthly.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in-up">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-emerald-md hover:shadow-emerald-lg"
                onClick={() => window.location.href = `${appConfig.app_url}/auth?mode=register&planType=monthly`}
              >
                Começar Agora
              </button>
            </div>

            {/* Plano Anual */}
            <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 shadow-emerald-lg hover:shadow-emerald-xl transition-all duration-500 border-2 border-emerald-400 hover:scale-105 animate-scale-in">
              <div className="absolute -top-4 right-8 bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Mais vantajoso
              </div>
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">Plano Anual</h4>
                <div className="text-5xl font-bold text-white mb-2">
                  R$ {appConfig.plan_price_annual}
                </div>
                <p className="text-emerald-100">por ano</p>
              </div>
              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_annual.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in-up">
                    <Check className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full px-6 py-4 bg-white text-emerald-600 hover:bg-emerald-50 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = `${appConfig.app_url}/auth?mode=register&planType=annual`}
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Emerald Luxury */}
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">O que nossos usuários dizem</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">Depoimentos reais de quem já usa nossa plataforma</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-white rounded-2xl p-8 shadow-emerald-sm hover:shadow-emerald-lg transition-all duration-500 border border-emerald-100 hover:border-emerald-300 animate-fade-in-up">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-200" />
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"Revolucionou minha gestão financeira. Interface intuitiva e funcionalidades incríveis!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold">Maria Silva</h5>
                  <p className="text-gray-500 text-sm">Empresária</p>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl p-8 shadow-emerald-sm hover:shadow-emerald-lg transition-all duration-500 border border-emerald-100 hover:border-emerald-300 animate-fade-in-up">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-200" />
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"Controle total dos investimentos. Relatórios detalhados e insights valiosos."</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold">João Santos</h5>
                  <p className="text-gray-500 text-sm">Investidor</p>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl p-8 shadow-emerald-sm hover:shadow-emerald-lg transition-all duration-500 border border-emerald-100 hover:border-emerald-300 animate-fade-in-up">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-200" />
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"Perfeito para freelancers. Organização financeira nunca foi tão fácil!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold">Ana Costa</h5>
                  <p className="text-gray-500 text-sm">Freelancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Verde Moderno COM EFEITOS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Pronto para transformar suas finanças?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Junte-se a milhares de usuários que já controlam suas finanças com nossa plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <button 
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover-glow"
              onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Agora
            </button>
            <button 
              className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover-lift"
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

export default Template2;
