import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Estendendo a interface Window para incluir a função do Facebook Pixel
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

// Mapeamento dos caminhos das páginas para seus respectivos IDs de Pixel do Facebook
const PIXEL_IDS: { [path: string]: string } = {
  '/natal01': '1422521156061159',
  '/receitas-natural-pets': '1364692138479827',
  '/sem-dores-corredor': '836936292385216',
};

const FacebookPixel = () => {
  const location = useLocation();

  // Efeito para carregar o script base do Facebook Pixel apenas uma vez
  useEffect(() => {
    if (window.fbq) {
      return; // O script já foi carregado
    }
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) (f as any)._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode?.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  }, []);

  // Efeito para inicializar o pixel e rastrear PageViews a cada mudança de rota
  useEffect(() => {
    const pixelId = PIXEL_IDS[location.pathname];
    
    if (pixelId && typeof window.fbq === 'function') {
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }

    // Gerencia dinamicamente a tag <noscript>
    const existingNoscript = document.getElementById('fb-pixel-noscript');
    if (existingNoscript) {
      existingNoscript.remove();
    }

    if (pixelId) {
      const noscript = document.createElement('noscript');
      noscript.id = 'fb-pixel-noscript';
      const img = document.createElement('img');
      img.height = 1;
      img.width = 1;
      img.style.display = 'none';
      img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
      noscript.appendChild(img);
      document.head.appendChild(noscript);
    }
  }, [location.pathname]);

  return null; // Este componente não renderiza nenhuma UI
};

export default FacebookPixel;