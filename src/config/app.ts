// Dynamic configuration for the finance app landing page
// This replaces .env functionality and makes the page fully configurable

export interface AppConfig {
  company_name: string;
  plan_price_monthly: string;
  plan_price_annual: string;
  stripe_price_id_annual: string;
  stripe_price_id_monthly: string;
  plan_features_monthly: string[];
  plan_features_annual: string[];
  app_url: string;
  terms_url?: string;
  privacy_url?: string;
}

export const appConfig: AppConfig = {
  company_name: "Poupe Já AI",
  plan_price_monthly: "19,90",
  plan_price_annual: "177,00",
  stripe_price_id_annual: "price_1q2w3e4r",
  stripe_price_id_monthly: "price_eq23e1e2",
  plan_features_monthly: [
    "Movimentos ilimitados",
    "Dashboard completo",
    "Todos os relatórios",
    "Metas ilimitadas",
    "Agendamentos"
  ],
  plan_features_annual: [
    "Movimentos ilimitados",
    "Dashboard completo",
    "Todos os relatórios",
    "Metas ilimitadas",
    "Agendamentos",
    "Suporte prioritário"
  ],
  app_url: "https://app.dominiodoapp.com.br",
  terms_url: "#",
  privacy_url: "#"
};