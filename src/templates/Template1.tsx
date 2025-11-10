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
      '--primary': '#e85b0b',
      '--secondary': '#f97316',
      '--accent': '#fb923c',
      '--background': '#ffffff',
      '--foreground': '#1f2937',
      '--muted': '#f3f4f6'
    } as React.CSSProperties}>
      <DynamicHead />
      
      {/* Hero Section - Orange Luxury */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 overflow-hidden animate-gradient-shift">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-element absolute top-20 left-20 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-float-gentle"></div>
          <div className="floating-element absolute bottom-20 right-20 w-96 h-96 bg-red-400/25 rounded-full blur-3xl animate-float-gentle"></div>
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
                <span className="block mt-3 text-cyan-300 text-[1.15em] tracking-tighter font-extrabold">
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
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual o melhor momento para investir?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como otimizar meus impostos?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual minha capacidade de endividamento?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Como aumentar minha renda?</button>
              <button className="question-button bg-white/80 backdrop-blur-sm text-orange-700 border-2 border-orange-200/50 hover:bg-orange-50 hover:border-orange-400 flex items-center gap-2"><MessageCircle className="w-4 h-4" />Qual meu perfil de investidor?</button>
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

      {/* Seção de Benefícios - Estrutura padronizada do Template3 (variação só de cor) */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
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
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Controle Instantâneo</h4>
              <p className="text-gray-600 leading-relaxed">
                Gerencie todas suas finanças em tempo real com nossa interface intuitiva e poderosa.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Segurança Total</h4>
              <p className="text-gray-600 leading-relaxed">
                Seus dados protegidos com criptografia de nível bancário e autenticação avançada.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">IA Avançada</h4>
              <p className="text-gray-600 leading-relaxed">
                Insights inteligentes e recomendações personalizadas para otimizar suas finanças.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Crescimento Garantido</h4>
              <p className="text-gray-600 leading-relaxed">
                Estratégias comprovadas para aumentar sua renda e patrimônio de forma consistente.
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Suporte 24/7</h4>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe especializada está sempre disponível para ajudar você a prosperar.
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-orange-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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

      {/* Seção "Controle suas finanças de onde estiver" */}
      <section className="py-20 bg-white relative overflow-hidden">
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
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400/15 rounded-full blur-2xl animate-float-slow"></div>
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
                Acesse sua conta de qualquer dispositivo e tenha controle total das suas finanças. 
                Sincronização em tempo real entre todos os seus dispositivos.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Acesso via web, mobile e desktop",
                  "Sincronização automática em tempo real",
                  "Interface responsiva e intuitiva",
                  "Dados sempre atualizados"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos COM EFEITOS */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-50 opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que nossos clientes dizem
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de pessoas que transformaram suas vidas financeiras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Empresária",
                content: "Revolucionou completamente como gerencio minhas finanças. A IA me ajuda a tomar decisões mais inteligentes todos os dias.",
                rating: 5
              },
              {
                name: "João Santos",
                role: "Investidor",
                content: "Os insights são incríveis! Consegui aumentar meus rendimentos em 40% no primeiro ano usando a plataforma.",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Freelancer",
                content: "Finalmente tenho controle total das minhas finanças. A interface é intuitiva e os relatórios são muito detalhados.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100/50 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-orange-400 mb-4" />
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-orange-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Planos COM EFEITOS */}
      <section id="plans" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Escolha seu plano</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">Planos flexíveis para todos os perfis</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Mensal */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-orange-200 hover:border-orange-300 hover:scale-105 animate-scale-in">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Plano Mensal</h4>
                <div className="text-5xl font-bold text-orange-600 mb-2">
                  R$ {appConfig.plan_price_monthly}
                </div>
                <p className="text-gray-600">por mês</p>
              </div>
              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_monthly.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in-up">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full px-6 py-3 bg-orange-100 text-orange-600 rounded-xl font-semibold hover:bg-orange-200 transition-colors duration-300"
                onClick={() => window.location.href = `${appConfig.app_url}/auth?mode=register&planType=month`}
              >
                Começar Agora
              </button>
            </div>

            {/* Plano Anual - Destacado */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 transform scale-105 relative animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                <Star className="w-4 h-4" fill="currentColor" />
                Mais vantajoso
              </div>
              
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">Plano Anual</h4>
                <div className="text-5xl font-bold text-white mb-2">
                  R$ {appConfig.plan_price_annual}
                </div>
                <p className="text-orange-100">por ano</p>
                <p className="text-orange-200 font-semibold text-sm mt-2">
                  Apenas R$ {(parseFloat(appConfig.plan_price_annual.replace(',', '.')) / 12).toFixed(2).replace('.', ',')} por mês
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_annual.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in-up">
                    <Check className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className="w-full px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-300"
                onClick={() => window.location.href = `${appConfig.app_url}/auth?mode=register&planType=year`}
              >
                Começar Plano Anual
              </button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Mais de 10.000 pessoas já transformaram suas finanças
            </p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
              <span>✅ Sem fidelidade</span>
              <span>✅ Cancele quando quiser</span>
              <span>✅ Suporte incluído</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Template1;
