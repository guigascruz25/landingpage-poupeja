import DynamicHead from "@/components/DynamicHead";
import Footer from "@/components/Footer";
import { getTheme } from "@/config/themes";
import { appConfig } from "@/config/app";
import { Sparkles, MessageCircle, Zap, Shield, Cpu, TrendingUp } from "lucide-react";

// Template4 - Black Matte COMPLETO E INDEPENDENTE COM EFEITOS
const Template4 = () => {
  const theme = getTheme("template4");

  return (
    <div className="min-h-screen bg-black text-white" style={{ 
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
      
      {/* Hero Section - Black Matte COM EFEITOS */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden animate-gradient">
        {/* Background Elements COM ANIMAÇÃO */}
        <div className="absolute inset-0">
          <div className="floating-element absolute top-20 left-20 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
          <div className="floating-element absolute bottom-20 right-20 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"></div>
          <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-600/10 rounded-full blur-2xl"></div>
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

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                Controle suas finanças com
                <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                  elegância e precisão
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl animate-fade-in-up">
                A plataforma mais sofisticada e intuitiva para gerenciar suas finanças.
                Controle total, insights avançados e liberdade financeira garantida.
              </p>

              {/* CTA Buttons COM EFEITOS */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-600 hover:from-indigo-400 hover:via-purple-400 hover:to-fuchsia-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover-glow"
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar Agora
                </button>
                <button 
                  className="px-8 py-4 bg-transparent text-indigo-100 border-2 border-indigo-400 hover:bg-indigo-50/10 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover-lift"
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Planos
                </button>
              </div>

              {/* Trust Indicators COM ANIMAÇÃO */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 animate-fade-in-up">
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
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-600 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-500 rounded-full opacity-30 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Perguntas Financeiras COM MOVIMENTO - TELA COMPLETA */}
      <section className="py-16 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pergunte o que quiser sobre suas finanças
            </h3>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Veja alguns exemplos abaixo.
            </p>
          </div>

          {/* Linha 1 - Movimento para a esquerda */}
          <div className="scroll-container mb-8">
            <div className="scroll-left flex">
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quais contas vencem hoje?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como está meu investimento?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual meu fluxo de caixa?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual meu limite de gastos?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quanto posso economizar?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quais despesas fixas tenho?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como está meu score de crédito?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual meu orçamento mensal?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual minha meta de economia?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quanto tenho investido?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quais contas vencem hoje?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como está meu investimento?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual meu fluxo de caixa?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual meu limite de gastos?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quanto posso economizar?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quais despesas fixas tenho?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como está meu score de crédito?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual meu orçamento mensal?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual minha meta de economia?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quanto tenho investido?</button>
            </div>
          </div>

          {/* Linha 2 - Movimento para a direita */}
          <div className="scroll-container mb-8">
            <div className="scroll-right flex">
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Recebi 5000 reais de salário</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Paguei 800 reais de aluguel</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Investi 1000 reais na poupança</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Gastei 200 reais com combustível</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Paguei 150 reais no supermercado</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Recebi 300 reais de dividendos</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Paguei 500 reais de cartão de crédito</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Investi 2000 reais em ações</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Gastei 100 reais com lazer</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Paguei 400 reais de energia</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Recebi 5000 reais de salário</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Paguei 800 reais de aluguel</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Investi 1000 reais na poupança</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Gastei 200 reais com combustível</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Paguei 150 reais no supermercado</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Recebi 300 reais de dividendos</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Paguei 500 reais de cartão de crédito</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Investi 2000 reais em ações</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Gastei 100 reais com lazer</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Paguei 400 reais de energia</button>
            </div>
          </div>

          {/* Linha 3 - Movimento para a esquerda */}
          <div className="scroll-container mb-8">
            <div className="scroll-left flex">
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual minha renda passiva?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quais impostos preciso pagar?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como está minha reserva de emergência?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual meu patrimônio líquido?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quanto devo no cartão de crédito?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual minha taxa de poupança?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como está minha aposentadoria?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quais investimentos tenho?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual meu perfil de risco?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como diversificar meus investimentos?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual minha renda passiva?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quais impostos preciso pagar?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como está minha reserva de emergência?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual meu patrimônio líquido?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quanto devo no cartão de crédito?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual minha taxa de poupança?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como está minha aposentadoria?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quais investimentos tenho?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual meu perfil de risco?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como diversificar meus investimentos?</button>
            </div>
          </div>

          {/* Linha 4 - Movimento para a direita */}
          <div className="scroll-container">
            <div className="scroll-right flex">
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quanto posso investir este mês?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual a melhor estratégia de investimento?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como reduzir meus gastos?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual minha capacidade de pagamento?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como planejar minha aposentadoria?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quais são meus gastos desnecessários?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como aumentar minha renda?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual o melhor momento para investir?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como controlar meus impulsos de compra?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual minha meta financeira para este ano?</button>
              {/* Duplicar para movimento contínuo */}
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quanto posso investir este mês?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual a melhor estratégia de investimento?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como reduzir meus gastos?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual minha capacidade de pagamento?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como planejar minha aposentadoria?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Quais são meus gastos desnecessários?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como aumentar minha renda?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual o melhor momento para investir?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Como controlar meus impulsos de compra?</button>
              <button className="question-button bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white">Qual minha meta financeira para este ano?</button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios - Estrutura padronizada do Template3 (variação só de cor) */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por que escolher o {appConfig.company_name}?
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A solução mais completa e intuitiva para transformar sua vida financeira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefício 1 */}
            <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Controle Instantâneo</h4>
              <p className="text-gray-400 leading-relaxed">
                Gerencie todas suas finanças em tempo real com nossa interface intuitiva e poderosa.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Segurança Total</h4>
              <p className="text-gray-400 leading-relaxed">
                Seus dados protegidos com criptografia de nível bancário e autenticação avançada.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">IA Avançada</h4>
              <p className="text-gray-400 leading-relaxed">
                Insights inteligentes e recomendações personalizadas para otimizar suas finanças.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Crescimento Garantido</h4>
              <p className="text-gray-400 leading-relaxed">
                Estratégias comprovadas para aumentar sua renda e patrimônio de forma consistente.
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Suporte 24/7</h4>
              <p className="text-gray-400 leading-relaxed">
                Nossa equipe especializada está sempre disponível para ajudar você a prosperar.
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Experiência Premium</h4>
              <p className="text-gray-400 leading-relaxed">
                Interface elegante e funcionalidades exclusivas para uma experiência única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Demo Section - Black Matte COM EFEITOS */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Controle suas finanças de onde estiver
              </h3>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Acesse sua plataforma financeira de qualquer dispositivo. 
                Sincronização em tempo real e interface responsiva para máxima comodidade.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Movimentos ilimitados</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Dashboard completo</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Todos os relatórios</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in-up">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Metas ilimitadas</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="/imagens/app-macbook-poupeja.png"
                alt="Dashboard do app de finanças mostrando gráficos e controle financeiro"
                className="w-[800px] h-auto mx-auto drop-shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gray-900 p-4 rounded-xl shadow-lg hover-lift">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">+32%</p>
                  <p className="text-sm text-gray-400">Economia este mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Black Matte COM EFEITOS */}
      <section id="plans" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Escolha seu plano</h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Planos flexíveis para todos os perfis</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Mensal */}
            <div className="card-3d bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in border border-gray-700">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">Plano Mensal</h4>
                <div className="text-4xl font-bold text-white mb-2">
                  R$ {appConfig.plan_price_monthly}
                </div>
                <p className="text-gray-400">por mês</p>
              </div>
              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_monthly.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in-up">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-600 hover:from-indigo-400 hover:via-purple-400 hover:to-fuchsia-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover-glow"
                onClick={() => window.location.href = `${appConfig.app_url}/auth?mode=register&planType=month`}
              >
                Começar Agora
              </button>
            </div>

            {/* Plano Anual */}
            <div className="card-3d bg-gradient-to-br from-indigo-700 to-purple-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-indigo-500/60 ring-1 ring-indigo-500/30 hover:ring-2 hover:ring-indigo-500/50 animate-scale-in">
              <div className="text-center mb-8">
                <div className="inline-block bg-fuchsia-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 shadow-lg">
                  Mais vantajoso
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Plano Anual</h4>
                <div className="text-4xl font-bold text-white mb-2">
                  R$ {appConfig.plan_price_annual}
                </div>
                <p className="text-purple-100">por ano</p>
                <p className="text-purple-100 font-semibold text-sm mt-2">
                  Apenas R$ {(parseFloat(appConfig.plan_price_annual.replace(',', '.')) / 12).toFixed(2).replace('.', ',')} por mês
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_annual.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in-up">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-purple-100">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-600 hover:from-indigo-400 hover:via-purple-400 hover:to-fuchsia-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover-glow"
                onClick={() => window.location.href = `${appConfig.app_url}/auth?mode=register&planType=year`}
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Black Matte COM EFEITOS */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">O que nossos usuários dizem</h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Depoimentos reais de quem já usa nossa plataforma</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-3d bg-gray-900 rounded-2xl p-8 shadow-lg hover-lift animate-fade-in-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mr-4 animate-float ring-2 ring-purple-400/40">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h5 className="font-semibold text-white">Maria Silva</h5>
                  <p className="text-sm text-gray-400">Empresária</p>
                </div>
              </div>
              <p className="text-gray-400">"Revolucionou minha gestão financeira. Interface intuitiva e funcionalidades incríveis!"</p>
            </div>
            <div className="card-3d bg-gray-900 rounded-2xl p-8 shadow-lg hover-lift animate-fade-in-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mr-4 animate-float ring-2 ring-purple-400/40">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <h5 className="font-semibold text-white">João Santos</h5>
                  <p className="text-sm text-gray-400">Investidor</p>
                </div>
              </div>
              <p className="text-gray-400">"Controle total dos investimentos. Relatórios detalhados e insights valiosos."</p>
            </div>
            <div className="card-3d bg-gray-900 rounded-2xl p-8 shadow-lg hover-lift animate-fade-in-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mr-4 animate-float ring-2 ring-purple-400/40">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h5 className="font-semibold text-white">Ana Costa</h5>
                  <p className="text-sm text-gray-400">Freelancer</p>
                </div>
              </div>
              <p className="text-gray-400">"Perfeito para freelancers. Controle de receitas e despesas de forma simples e eficiente."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Black Matte COM EFEITOS */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Pronto para transformar suas finanças?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Junte-se a milhares de usuários que já controlam suas finanças com nossa plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <button 
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-600 hover:from-indigo-400 hover:via-purple-400 hover:to-fuchsia-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover-glow"
              onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Agora
            </button>
            <button 
              className="px-8 py-4 bg-transparent text-indigo-100 border-2 border-indigo-400 hover:bg-indigo-50/10 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover-lift"
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

export default Template4;
