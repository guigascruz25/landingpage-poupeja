import { useEffect } from "react";
import { appConfig } from "@/config/app";

const DynamicHead = () => {
  useEffect(() => {
    // Atualizar título da página
    document.title = appConfig.page_title;
    
    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", appConfig.page_description);
    }
    
    // Atualizar Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", appConfig.page_title);
    }
    
    // Atualizar Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", appConfig.page_description);
    }
    
    // Atualizar Open Graph image (usar logo como fallback)
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", appConfig.logo_url);
    }
    
    // Atualizar Twitter image
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", appConfig.logo_url);
    }
    
    // Atualizar favicon
    const updateFavicon = (url: string) => {
      // Remover favicons existentes
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      existingFavicons.forEach(favicon => favicon.remove());
      
      // Adicionar novo favicon
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/x-icon";
      link.href = url;
      document.head.appendChild(link);
      
      // Adicionar favicon para diferentes tamanhos
      const sizes = [16, 32, 48, 64, 96, 128, 192, 256];
      sizes.forEach(size => {
        const linkSize = document.createElement("link");
        linkSize.rel = "icon";
        linkSize.type = "image/x-icon";
        linkSize.sizes = `${size}x${size}`;
        linkSize.href = url;
        document.head.appendChild(linkSize);
      });
      
      // Adicionar apple-touch-icon
      const appleTouchIcon = document.createElement("link");
      appleTouchIcon.rel = "apple-touch-icon";
      appleTouchIcon.href = url;
      document.head.appendChild(appleTouchIcon);
      
      // Adicionar manifest icon
      const manifestIcon = document.createElement("link");
      manifestIcon.rel = "manifest";
      manifestIcon.href = url;
      document.head.appendChild(manifestIcon);
    };
    
    updateFavicon(appConfig.favicon_url);
    
  }, []);

  return null; // Este componente não renderiza nada
};

export default DynamicHead;
