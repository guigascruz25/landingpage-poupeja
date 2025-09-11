# 📋 Configuração Dinâmica da Landing Page

## 🎯 Como Funciona

Esta landing page foi desenvolvida para ser **100% configurável** através do arquivo `/src/config/app.ts`, permitindo replicar para diferentes empresas apenas alterando as configurações.

## ⚙️ Arquivo de Configuração

Edite o arquivo `/src/config/app.ts` para customizar completamente a landing page:

```typescript
export const appConfig: AppConfig = {
  // Nome da empresa (aparece no logo, títulos e footer)
  company_name: "Poupe Já AI",
  
  // Preços dos planos
  plan_price_monthly: "19,90",
  plan_price_annual: "177,00",
  
  // IDs do Stripe para integração de pagamento
  stripe_price_id_annual: "price_1q2w3e4r",
  stripe_price_id_monthly: "price_eq23e1e2",
  
  // Features do plano mensal (array de strings)
  plan_features_monthly: [
    "Movimentos ilimitados",
    "Dashboard completo", 
    "Todos os relatórios",
    "Metas ilimitadas",
    "Agendamentos"
  ],
  
  // Features do plano anual (array de strings) 
  plan_features_annual: [
    "Movimentos ilimitados",
    "Dashboard completo",
    "Todos os relatórios", 
    "Metas ilimitadas",
    "Agendamentos",
    "Suporte prioritário"
  ],
  
  // URL do aplicativo principal
  app_url: "https://app.dominiodoapp.com.br",
  
  // URLs opcionais para links legais
  terms_url: "#",
  privacy_url: "#"
};
```

## 🔗 Como os Links São Gerados

### Botões de Registro
Os botões dos planos geram automaticamente URLs com os parâmetros corretos:

- **Plano Mensal**: `${app_url}/register?priceId=${stripe_price_id_monthly}&planType=monthly`
- **Plano Anual**: `${app_url}/register?priceId=${stripe_price_id_annual}&planType=annual`

### Botões de Login
Todos os botões "Acessar App" e "Já tenho conta" direcionam para:
- `${app_url}/login`

## 🎨 Estrutura da Landing Page

### 1. **Hero Section**
- Logo/nome da empresa
- Headlines fixos + nome da empresa
- Botões de CTA configuráveis

### 2. **Benefits Section** 
- 5 benefícios com ícones
- Título inclui nome da empresa

### 3. **App Demo**
- Mockup do dashboard
- Explicação das funcionalidades

### 4. **Pricing Section**
- Cards de plano mensal e anual
- Preços e features dinâmicos
- Links automáticos para registro

### 5. **Testimonials**
- 3 depoimentos fixos de exemplo
- Pode ser customizado diretamente no código

### 6. **Final CTA**
- Call-to-action final
- Botões para planos e login

### 7. **Footer**
- Informações da empresa
- Links úteis configuráveis
- Informações de contato

## 🚀 Para Replicar para Nova Empresa

1. **Clone o projeto**
2. **Edite apenas o arquivo `/src/config/app.ts`**:
   - Altere o `company_name`
   - Configure os preços
   - Atualize os `stripe_price_id`
   - Ajuste as features dos planos
   - Configure o `app_url`
   - Defina URLs de termos/privacidade

3. **Opcional - Customizar SEO**:
   - Edite `index.html` para atualizar title e meta description
   - Atualize as meta tags do Open Graph

4. **Deploy**

## 📱 Recursos Incluídos

✅ **Design Responsivo** - Funciona em mobile, tablet e desktop  
✅ **Animações Suaves** - Micro-interações e transições  
✅ **SEO Otimizado** - Meta tags e estrutura semântica  
✅ **Integração Stripe** - Links prontos para pagamento  
✅ **Performance** - Carregamento rápido e otimizado  
✅ **Acessibilidade** - Navegação por teclado e screen readers  

## 🎯 Exemplo de Uso

Para criar uma landing page para "MeuApp Finanças":

```typescript
export const appConfig: AppConfig = {
  company_name: "MeuApp Finanças",
  plan_price_monthly: "29,90", 
  plan_price_annual: "299,00",
  stripe_price_id_annual: "price_nova_empresa_anual",
  stripe_price_id_monthly: "price_nova_empresa_mensal",
  app_url: "https://app.meuappfinancas.com",
  // ... resto da config
};
```

Pronto! Sua nova landing page estará funcionando com todas as configurações da nova empresa.