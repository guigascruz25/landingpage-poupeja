import DynamicHead from "@/components/DynamicHead";
import Footer from "@/components/Footer";
import { getTheme } from "@/config/themes";
import { appConfig } from "@/config/app";
import { Sparkles, MessageCircle, Zap, Shield, Cpu, Check, TrendingUp, Star, Quote } from "lucide-react";

// Template1 - Laranja Moderno COMPLETO E INDEPENDENTE COM EFEITOS
const Template1 = () => {
  const theme = getTheme("template1");

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
      
      {/* Hero Section - Orange Luxury */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 overflow-hidden animate-gradient-shift">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-element absolute top-20 left-20 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-float-gentle"></div>
          <div className="floating-element absolute bottom-20 right-20 w-96 h-96 bg-amber-400/25 rounded-full blur-3xl animate-float-gentle"></div>
          <Sparkles className="absolute top-40 right-1/4 w-8 h-8 text-orange-200/40 animate-pulse" />
          <Sparkles className="absolute bottom-40 left-1/3 w-6 h-6 text-orange-300/30 animate-pulse" />
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
                <span className="block mt-3 bg-gradient-to-r from-orange-200 via-orange-100 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,145,0,0.5)] text-[1.1em] tracking-tighter">
                  inteligência e simplicidade
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-orange-50/90 mb-8 leading-relaxed max-w-2xl animate-fade-in-up font-light">
                A plataforma mais sofisticada e intuitiva para gerenciar suas finanças.
                Controle total, insights avançados e liberdade financeira garantida.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
                <button 
                  className="px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-orange-lg hover:shadow-orange-xl"
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
              <div className="flex flex-wrap items-center gap-6 text-sm text-orange-200 animate-fade-in-up">
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
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-30 animate-float-slow"></div>
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
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais contas vencem hoje?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está meu investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu fluxo de caixa?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu limite de gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso economizar?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais despesas fixas tenho?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está meu score de crédito?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu orçamento mensal?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha meta de economia?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto tenho investido?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais contas vencem hoje?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está meu investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu fluxo de caixa?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu limite de gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso economizar?</button>
            </div>
          </div>

          {/* Linha 2 - Movimento para a direita */}
          <div className="scroll-container mb-8">
            <div className="scroll-right flex">
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Recebi 5000 reais de salário</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 800 reais de aluguel</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Investi 1000 reais na poupança</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Gastei 200 reais com combustível</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 150 reais no supermercado</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Recebi 300 reais de dividendos</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 500 reais de cartão de crédito</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Investi 2000 reais em ações</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Gastei 100 reais com lazer</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 400 reais de energia</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Recebi 5000 reais de salário</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 800 reais de aluguel</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Investi 1000 reais na poupança</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Gastei 200 reais com combustível</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Paguei 150 reais no supermercado</button>
            </div>
          </div>

          {/* Linha 3 - Movimento para a esquerda */}
          <div className="scroll-container mb-8">
            <div className="scroll-left flex">
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha renda passiva?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais impostos preciso pagar?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está minha reserva de emergência?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu patrimônio líquido?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto devo no cartão de crédito?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha taxa de poupança?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está minha aposentadoria?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais investimentos tenho?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu perfil de risco?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como diversificar meus investimentos?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha renda passiva?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quais impostos preciso pagar?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como está minha reserva de emergência?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu patrimônio líquido?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto devo no cartão de crédito?</button>
            </div>
          </div>

          {/* Linha 4 - Movimento para a direita */}
          <div className="scroll-container">
            <div className="scroll-right flex">
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso investir este mês?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual a melhor estratégia de investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como reduzir meus gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha margem de segurança?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como planejar minha aposentadoria?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu custo de vida?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como aumentar minha renda?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha capacidade de investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como otimizar meus impostos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu perfil financeiro?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Quanto posso investir este mês?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual a melhor estratégia de investimento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como reduzir meus gastos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha margem de segurança?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como planejar minha aposentadoria?</button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios COM EFEITOS */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por que escolher o {appConfig.company_name}?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra os benefícios que fazem a diferença na sua vida financeira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefício 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Controle Inteligente</h4>
              <p className="text-gray-600 leading-relaxed">
                Gerencie todas suas finanças em um só lugar com inteligência artificial avançada
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Segurança Total</h4>
              <p className="text-gray-600 leading-relaxed">
                Seus dados protegidos com criptografia de nível bancário e autenticação avançada
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">IA Avançada</h4>
              <p className="text-gray-600 leading-relaxed">
                Insights personalizados e recomendações inteligentes para otimizar suas finanças
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Crescimento Garantido</h4>
              <p className="text-gray-600 leading-relaxed">
                Estratégias comprovadas para fazer seu dinheiro render mais e alcançar seus objetivos
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Suporte 24/7</h4>
              <p className="text-gray-600 leading-relaxed">
                Atendimento especializado sempre disponível para tirar suas dúvidas
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Interface Intuitiva</h4>
              <p className="text-gray-600 leading-relaxed">
                Design moderno e fácil de usar, pensado para simplificar sua experiência
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção "Controle suas finanças de onde estiver" */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative animate-slide-in-left">
              <img 
                src="/imagens/app-macbook-poupeja.png" 
                alt="App Poupe Já no MacBook"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-30 animate-float-slow"></div>
            </div>

            {/* Right Column - Content */}
            <div className="animate-slide-in-right">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Controle suas finanças
                <span className="block text-orange-600 mt-2">
                  de onde estiver
                </span>
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Acesse sua conta de qualquer dispositivo e tenha controle total das suas finanças 
                na palma da sua mão. Sincronização em tempo real e interface responsiva.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Acesso multiplataforma</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Sincronização em tempo real</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Interface responsiva</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Backup automático na nuvem</span>
                </div>
              </div>

              <button 
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que nossos clientes dizem
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de pessoas que transformaram suas vidas financeiras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Consegui organizar minhas finanças e economizar 30% do meu salário em apenas 3 meses. 
                A plataforma é incrível!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Maria Silva</h5>
                  <p className="text-gray-600 text-sm">Empresária</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "A IA me ajudou a identificar gastos desnecessários que eu nem percebia. 
                Agora tenho controle total!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">João Santos</h5>
                  <p className="text-gray-600 text-sm">Desenvolvedor</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Interface super intuitiva e funcionalidades incríveis. 
                Recomendo para todos que querem organizar a vida financeira."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Ana Costa</h5>
                  <p className="text-gray-600 text-sm">Professora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <section id="plans" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Escolha seu plano ideal
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planos flexíveis para cada necessidade e orçamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-gray-200">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Básico</h4>
                <div className="text-4xl font-bold text-orange-600 mb-2">Grátis</div>
                <p className="text-gray-600">Para começar</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Controle básico de gastos</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Relatórios mensais</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Suporte por email</span>
                </li>
              </ul>
              
              <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-200">
                Começar Grátis
              </button>
            </div>

            {/* Plano Pro - Destaque */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-bold">
                  Mais Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">Pro</h4>
                <div className="text-4xl font-bold text-white mb-2">R$ 29,90</div>
                <p className="text-orange-100">por mês</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Tudo do plano Básico</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">IA para análise financeira</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Relatórios avançados</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Suporte prioritário</span>
                </li>
              </ul>
              
              <button className="w-full px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold transition-all duration-300 hover:bg-orange-50">
                Escolher Pro
              </button>
            </div>

            {/* Plano Premium */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-gray-200">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Premium</h4>
                <div className="text-4xl font-bold text-orange-600 mb-2">R$ 59,90</div>
                <p className="text-gray-600">por mês</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Tudo do plano Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Consultoria financeira</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Acesso a investimentos</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Suporte 24/7</span>
                </li>
              </ul>
              
              <button className="w-full px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-orange-700">
                Escolher Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Template1;
