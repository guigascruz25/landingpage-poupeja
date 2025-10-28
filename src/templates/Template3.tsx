import DynamicHead from "@/components/DynamicHead";
import Footer from "@/components/Footer";
import { getTheme } from "@/config/themes";
import { appConfig } from "@/config/app";
import { Sparkles, MessageCircle, Zap, Shield, Cpu, Check, TrendingUp, Star, Quote } from "lucide-react";

// Template3 - Azul Moderno COMPLETO E INDEPENDENTE COM EFEITOS
const Template3 = () => {
  const theme = getTheme("template3");

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
      
      {/* Hero Section - Blue Luxury */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 overflow-hidden animate-gradient-shift">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-element absolute top-20 left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-float-gentle"></div>
          <div className="floating-element absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl animate-float-gentle"></div>
          <Sparkles className="absolute top-40 right-1/4 w-8 h-8 text-blue-200/40 animate-pulse" />
          <Sparkles className="absolute bottom-40 left-1/3 w-6 h-6 text-blue-300/30 animate-pulse" />
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
                <span className="block mt-3 bg-gradient-to-r from-blue-200 via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] text-[1.1em] tracking-tighter">
                  inteligência e simplicidade
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-blue-50/90 mb-8 leading-relaxed max-w-2xl animate-fade-in-up font-light">
                A plataforma mais sofisticada e intuitiva para gerenciar suas finanças.
                Controle total, insights avançados e liberdade financeira garantida.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
                <button 
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-blue-lg hover:shadow-blue-xl"
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
              <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200 animate-fade-in-up">
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
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-float-slow"></div>
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
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais contas vencem hoje?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está meu investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu fluxo de caixa?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu limite de gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso economizar?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais despesas fixas tenho?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está meu score de crédito?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu orçamento mensal?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha meta de economia?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto tenho investido?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais contas vencem hoje?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está meu investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu fluxo de caixa?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu limite de gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso economizar?</button>
            </div>
          </div>

          {/* Linha 2 - Movimento para a direita */}
          <div className="scroll-container mb-8">
            <div className="scroll-right flex">
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Recebi 5000 reais de salário</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 800 reais de aluguel</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Investi 1000 reais na poupança</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Gastei 200 reais com combustível</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 150 reais no supermercado</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Recebi 300 reais de dividendos</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 500 reais de cartão de crédito</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Investi 2000 reais em ações</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Gastei 100 reais com lazer</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 400 reais de energia</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Recebi 5000 reais de salário</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 800 reais de aluguel</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Investi 1000 reais na poupança</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Gastei 200 reais com combustível</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 150 reais no supermercado</button>
            </div>
          </div>

          {/* Linha 3 - Movimento para a esquerda */}
          <div className="scroll-container mb-8">
            <div className="scroll-left flex">
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha renda passiva?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais impostos preciso pagar?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está minha reserva de emergência?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu patrimônio líquido?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto devo no cartão de crédito?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha taxa de poupança?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está minha aposentadoria?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais investimentos tenho?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu perfil de risco?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como diversificar meus investimentos?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha renda passiva?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais impostos preciso pagar?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está minha reserva de emergência?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu patrimônio líquido?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto devo no cartão de crédito?</button>
            </div>
          </div>

          {/* Linha 4 - Movimento para a direita */}
          <div className="scroll-container">
            <div className="scroll-right flex">
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso investir este mês?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual a melhor estratégia de investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como reduzir meus gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu ROI dos investimentos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como planejar minha aposentadoria?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha situação financeira atual?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como aumentar minha renda?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais são meus maiores gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como organizar meu orçamento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual a melhor forma de economizar?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso investir este mês?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual a melhor estratégia de investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como reduzir meus gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu ROI dos investimentos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-blue-700 border-2 border-blue-200/50 hover:bg-blue-50 hover:border-blue-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como planejar minha aposentadoria?</button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios COM GRADIENTE AZUL */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por que escolher o {appConfig.company_name}?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A solução mais completa e intuitiva para transformar sua vida financeira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefício 1 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-blue-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Controle Instantâneo</h4>
              <p className="text-gray-600 leading-relaxed">
                Gerencie todas suas finanças em tempo real com nossa interface intuitiva e poderosa.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-blue-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Segurança Total</h4>
              <p className="text-gray-600 leading-relaxed">
                Seus dados protegidos com criptografia de nível bancário e autenticação avançada.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-blue-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">IA Avançada</h4>
              <p className="text-gray-600 leading-relaxed">
                Insights inteligentes e recomendações personalizadas para otimizar suas finanças.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-blue-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Crescimento Garantido</h4>
              <p className="text-gray-600 leading-relaxed">
                Estratégias comprovadas para aumentar sua renda e patrimônio de forma consistente.
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-blue-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Suporte 24/7</h4>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe especializada está sempre disponível para ajudar você a prosperar.
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-blue-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Experiência Premium</h4>
              <p className="text-gray-600 leading-relaxed">
                Interface elegante e funcionalidades exclusivas para uma experiência única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Controle suas finanças de onde estiver COM AZUL */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="animate-slide-in-left">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Controle suas finanças
                <span className="block mt-2 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  de onde estiver
                </span>
              </h3>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Acesse sua conta pelo computador, celular ou tablet. 
                Seus dados sempre sincronizados e atualizados em tempo real.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">Sincronização automática em todos os dispositivos</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">Acesso offline para consultas essenciais</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">Notificações inteligentes e personalizadas</span>
                </div>
              </div>

              <button 
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Experimentar Agora
              </button>
            </div>

            {/* Right Column - Visual */}
            <div className="relative animate-slide-in-right">
              <img 
                src="/imagens/app-macbook-poupeja.png" 
                alt="App em diferentes dispositivos"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-cyan-400 rounded-full opacity-30 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos COM AZUL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que nossos clientes dizem
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de transformação financeira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-blue-100">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Consegui organizar minhas finanças e aumentar minha poupança em 300% em apenas 6 meses. 
                O app é incrível!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Maria Silva</h5>
                  <p className="text-sm text-gray-600">Empresária</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-blue-100">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Finalmente encontrei uma ferramenta que me ajuda a controlar meus gastos e investimentos. 
                Recomendo para todos!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">João Santos</h5>
                  <p className="text-sm text-gray-600">Engenheiro</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-blue-100">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "A interface é linda e muito fácil de usar. Consegui quitar todas as minhas dívidas 
                seguindo as dicas do app."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Ana Costa</h5>
                  <p className="text-sm text-gray-600">Professora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Planos COM AZUL */}
      <section id="plans" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Escolha seu plano
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comece gratuitamente e evolua conforme suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {/* Plano Mensal */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-blue-100">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Plano Mensal</h4>
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  R$ {appConfig.plan_price_monthly}
                </div>
                <p className="text-gray-600">por mês</p>
              </div>

              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_monthly.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Começar Agora
              </button>
            </div>

            {/* Plano Anual - Destaque */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up text-white relative">
              {/* Badge de Destaque */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-50">
                Mais vantajoso
              </div>

              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold mb-4">Plano Anual</h4>
                <div className="text-5xl font-bold mb-2">
                  R$ {appConfig.plan_price_annual}
                </div>
                <p className="text-blue-100">por ano</p>
                <p className="text-sm text-blue-200 mt-2">
                  Apenas R$ {(parseFloat(appConfig.plan_price_annual.replace(',', '.')) / 12).toFixed(2).replace('.', ',')} por mês
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_annual.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-50">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Template3;
