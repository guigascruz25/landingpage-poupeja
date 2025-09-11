import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), "");
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      // Explicitly define environment variables for client-side
      "import.meta.env.VITE_COMPANY_NAME": JSON.stringify(env.VITE_COMPANY_NAME),
      "import.meta.env.VITE_PAGE_TITLE": JSON.stringify(env.VITE_PAGE_TITLE),
      "import.meta.env.VITE_PAGE_DESCRIPTION": JSON.stringify(env.VITE_PAGE_DESCRIPTION),
      "import.meta.env.VITE_LOGO_URL": JSON.stringify(env.VITE_LOGO_URL),
      "import.meta.env.VITE_FAVICON_URL": JSON.stringify(env.VITE_FAVICON_URL),
      "import.meta.env.VITE_SUPPORT_PHONE": JSON.stringify(env.VITE_SUPPORT_PHONE),
      "import.meta.env.VITE_SUPPORT_EMAIL": JSON.stringify(env.VITE_SUPPORT_EMAIL),
      "import.meta.env.VITE_SUPPORT_WHATSAPP": JSON.stringify(env.VITE_SUPPORT_WHATSAPP),
      "import.meta.env.VITE_PLAN_PRICE_MONTHLY": JSON.stringify(env.VITE_PLAN_PRICE_MONTHLY),
      "import.meta.env.VITE_PLAN_PRICE_ANNUAL": JSON.stringify(env.VITE_PLAN_PRICE_ANNUAL),
      "import.meta.env.VITE_STRIPE_PRICE_ID_ANNUAL": JSON.stringify(env.VITE_STRIPE_PRICE_ID_ANNUAL),
      "import.meta.env.VITE_STRIPE_PRICE_ID_MONTHLY": JSON.stringify(env.VITE_STRIPE_PRICE_ID_MONTHLY),
      "import.meta.env.VITE_APP_URL": JSON.stringify(env.VITE_APP_URL),
      "import.meta.env.VITE_TERMS_URL": JSON.stringify(env.VITE_TERMS_URL),
      "import.meta.env.VITE_PRIVACY_URL": JSON.stringify(env.VITE_PRIVACY_URL),
      "import.meta.env.VITE_TEMPLATE_VARIANT": JSON.stringify(env.VITE_TEMPLATE_VARIANT),
    },
  };
});
