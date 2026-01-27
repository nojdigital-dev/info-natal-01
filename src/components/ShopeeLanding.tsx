import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Star, ShieldCheck, Zap, Lock, ChevronRight, 
  Smartphone, DollarSign, ShoppingBag, TrendingUp, Users, 
  Rocket, Video, Gift
} from "lucide-react";
import ShopeeUpsellModal from './ShopeeUpsellModal';
import UtmifyScript from './UtmifyScript';

// Imagens placeholder (você pode alterar depois)
const imgHero = "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop";
const imgDinheiro = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const ShopeeLanding = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 15, seconds: 0 });
  const [todayDate, setTodayDate] = useState("");

  // Helper para UTMs
  const applyUtms = (url: string) => {
    try {
        const currentSearchParams = new URLSearchParams(window.location.search);
        const paramsString = currentSearchParams.toString();
        
        if (!paramsString) return url;

        const separator = url.indexOf("?") === -1 ? "?" : "&";
        return `${url}${separator}${paramsString}`;
    } catch (e) {
        console.error("Erro ao aplicar UTMs:", e);
        return url;
    }
  };

  // Scripts de Rastreamento
  useEffect(() => {
    // Pixel (Substitua pelo seu ID real de nicho de renda extra)
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1422521156061159'); 
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1422521156061159&ev=PageView&noscript=1" />`;
    document.head.appendChild(noscript);

    // UTM Tracking para links
    const prefix = ["https://pay.lowify.com.br"];
    const t = new URLSearchParams(window.location.search);
    if (t.toString()) {
        const links = document.querySelectorAll("a");
        links.forEach((e) => {
            for (let r = 0; r < prefix.length; r++) {
                if (e.href.indexOf(prefix[r]) !== -1) {
                    const separator = e.href.indexOf("?") === -1 ? "?" : "&";
                    e.href += separator + t.toString();
                }
            }
        });
    }

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(noscript);
    };
  }, []);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    setTodayDate(date.toLocaleDateString('pt-BR', options));

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Método Afiliado Shopee - Lucre sem Estoque</title>
        <meta name="description" content="Aprenda a transformar seu celular em uma máquina de vendas. Copie e cole meu método de achadinhos virais." />
      </Helmet>
      <UtmifyScript />
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        
        {/* Top Notification Bar */}
        <div className="bg-red-600 text-white text-center py-2 px-4 font-bold text-xs md:text-sm animate-pulse sticky top-0 z-50 shadow-md flex justify-center items-center gap-2">
           🔥 VAGAS PARA A NOVA TURMA LIBERADAS: {todayDate.toUpperCase()}
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white py-12 md:py-24 px-4 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <ShoppingBag className="absolute top-10 left-[10%] animate-bounce text-white opacity-20" size={60} />
            <DollarSign className="absolute top-40 right-[15%] animate-pulse text-yellow-300 opacity-30" size={80} />
            <Smartphone className="absolute bottom-20 left-[20%] text-white rotate-12 opacity-20" size={100} /> 
            
            {[...Array(15)].map((_, i) => (
                <div 
                    key={`p-${i}`}
                    className="absolute bg-white/10 rounded-full blur-xl" 
                    style={{
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 5 + 5}s`,
                    }}
                />
            ))}
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <Badge className="bg-white text-orange-600 hover:bg-slate-100 mb-6 px-4 py-1 text-sm md:text-base font-bold shadow-lg border-2 border-orange-200 inline-flex items-center gap-2">
                  <TrendingUp size={16} /> Método Validado 2024
                </Badge>
                <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                  Transforme Seu Celular em uma <br/>
                  <span className="text-yellow-300">Máquina de Vendas</span> <br className="md:hidden" />
                </h1>
                <p className="text-lg md:text-2xl mb-8 text-orange-50 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
                  Sem aparecer, sem estoque e sem investir em anúncios. <br/>
                  Descubra como faturar de <span className="font-bold bg-white/20 px-1 rounded">R$ 100 a R$ 300 por dia</span> apenas postando "Achadinhos".
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <Button 
                        onClick={scrollToPricing}
                        className="bg-green-600 hover:bg-green-500 text-white border-b-4 border-green-800 font-black text-xl py-8 px-10 rounded-xl shadow-2xl transform transition hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        QUERO APRENDER A VENDER <ChevronRight size={28} />
                    </Button>
                </div>
              </div>

              <div className="flex flex-col items-center relative">
                <div className="relative w-full max-w-[300px] md:max-w-[360px] mx-auto aspect-[9/16] md:aspect-square bg-slate-900 rounded-3xl border-4 border-white/20 shadow-2xl flex items-center justify-center mb-4 p-2 transform -rotate-2 hover:rotate-0 transition-all duration-500 overflow-hidden">
                    <img 
                        src={imgHero} 
                        alt="Celular com app de vendas" 
                        className="rounded-2xl object-cover w-full h-full opacity-90"
                    />
                    
                    {/* Floating Notifications */}
                    <div className="absolute top-10 right-4 bg-white text-slate-900 p-3 rounded-lg shadow-xl text-xs font-bold flex items-center gap-2 animate-in slide-in-from-right fade-in duration-1000">
                        <div className="bg-green-500 rounded-full p-1"><Check size={12} className="text-white"/></div> Venda Realizada: R$ 47,90
                    </div>
                    <div className="absolute top-24 right-8 bg-white text-slate-900 p-3 rounded-lg shadow-xl text-xs font-bold flex items-center gap-2 animate-in slide-in-from-right fade-in duration-1000 delay-300">
                        <div className="bg-green-500 rounded-full p-1"><Check size={12} className="text-white"/></div> Comissão: R$ 15,30
                    </div>
                    <div className="absolute bottom-10 left-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-xl font-bold text-lg animate-bounce">
                        Receba Notificações Assim! 👆
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="py-8 bg-white border-b-2 border-slate-100 shadow-sm relative z-20">
          <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-slate-600">
                  <div className="flex items-center gap-3 w-full md:w-auto p-2">
                      <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0"><Lock size={24} /></div>
                      <div>
                          <p className="font-bold text-slate-900 text-lg leading-tight">Sem Aparecer</p>
                          <p className="text-sm">Venda nos bastidores</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 w-full md:w-auto p-2">
                      <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0"><ShoppingBag size={24} /></div>
                      <div>
                          <p className="font-bold text-slate-900 text-lg leading-tight">Sem Estoque</p>
                          <p className="text-sm">A Shopee entrega tudo</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 w-full md:w-auto p-2">
                      <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0"><Smartphone size={24} /></div>
                      <div>
                          <p className="font-bold text-slate-900 text-lg leading-tight">100% Pelo Celular</p>
                          <p className="text-sm">Trabalhe de onde quiser</p>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* Pain Points / Solution */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                  Você usa a Shopee só para gastar... <br/>
                  <span className="text-orange-600">Enquanto eu uso para lucrar!</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Todo mundo ama comprar "Achadinhos" baratinhos. Você não precisa convencer ninguém a comprar. 
                  O segredo é saber <strong>ONDE</strong> e <strong>COMO</strong> postar os links certos para que as pessoas comprem de você.
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-orange-400 transition-colors">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                         <Users size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">O Método Tradicional (Errado)</h3>
                      <p className="text-slate-600 text-sm">Ficar mandando link em grupo de família, fazendo spam no Facebook e sendo o "chato" que ninguém aguenta. Resultado: Zero Vendas.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border-2 border-green-400 shadow-md">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                         <Rocket size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">O Meu Método (Automático)</h3>
                      <p className="text-slate-600 text-sm">Criar vídeos virais de achadinhos (que eu te entrego prontos) e usar uma estrutura simples que atrai milhares de compradores loucos para gastar.</p>
                  </div>
              </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 px-4 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <Badge className="bg-orange-500 text-white mb-4">Treinamento Completo</Badge>
                    <h2 className="text-3xl md:text-5xl font-black mt-2">O Que Você Vai Aprender?</h2>
                    <p className="text-slate-400 mt-4">Do zero à primeira venda em 24 horas.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-slate-800 border-slate-700 text-slate-200">
                        <CardHeader>
                            <ShoppingBag className="text-orange-500 w-10 h-10 mb-2" />
                            <CardTitle className="text-white">Cadastro & Links</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Como se cadastrar no programa oficial, configurar sua conta para receber comissões e gerar seus links de afiliado do jeito certo (sem perder vendas).
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-800 border-slate-700 text-slate-200">
                        <CardHeader>
                            <Video className="text-orange-500 w-10 h-10 mb-2" />
                            <CardTitle className="text-white">Achadinhos Virais</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Onde baixar os vídeos dos produtos (sem marca d'água), como editar em 1 minuto e quais músicas usar para viralizar no TikTok e Reels.
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-800 border-slate-700 text-slate-200">
                        <CardHeader>
                            <Users className="text-orange-500 w-10 h-10 mb-2" />
                            <CardTitle className="text-white">Grupos de Oferta</CardTitle>
                        </CardHeader>
                        <CardContent>
                            A estratégia secreta para encher grupos de WhatsApp e Telegram com pessoas que só querem receber links de promoção o dia todo.
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                    <div className="text-left">
                        <h3 className="text-2xl font-bold mb-2">🎁 Acesso Vitalício + Atualizações</h3>
                        <p className="text-orange-100">Você paga uma vez e tem acesso para sempre ao conteúdo e novas estratégias.</p>
                    </div>
                    <Button onClick={scrollToPricing} className="bg-white text-orange-600 hover:bg-slate-100 font-bold px-8 py-6 rounded-full text-lg shadow-lg">
                        QUERO COMEÇAR AGORA
                    </Button>
                </div>
            </div>
        </section>

        {/* BONUS SECTION */}
        <section className="py-16 px-4 bg-orange-50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-10">
                  <span className="bg-red-600 text-white font-bold px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-wider shadow-lg">Oferta Exclusiva</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold mt-6 mb-4 leading-tight text-slate-900">3 BÔNUS PARA ACELERAR <br/> <span className="text-orange-600">SEUS RESULTADOS</span></h2>
              </div>

              <div className="space-y-4">
                  {/* Bonus 1 */}
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
                      <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><Check size={24} /></div>
                      <div className="flex-1">
                          <h4 className="font-bold text-lg text-slate-800">BÔNUS 1: Script de Vendas (Copywriting)</h4>
                          <p className="text-sm text-slate-500">O texto exato para colocar na legenda e nos stories que faz a pessoa clicar no link.</p>
                      </div>
                      <div className="hidden md:block text-right">
                          <span className="block text-xs text-slate-400 line-through">R$ 47,00</span>
                          <span className="block font-bold text-green-600">GRÁTIS</span>
                      </div>
                  </div>
                  
                  {/* Bonus 2 */}
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
                      <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><Check size={24} /></div>
                      <div className="flex-1">
                          <h4 className="font-bold text-lg text-slate-800">BÔNUS 2: Pack Templates Canva</h4>
                          <p className="text-sm text-slate-500">Artes editáveis para stories e feed. Deixe seu perfil com cara profissional em minutos.</p>
                      </div>
                      <div className="hidden md:block text-right">
                          <span className="block text-xs text-slate-400 line-through">R$ 29,00</span>
                          <span className="block font-bold text-green-600">GRÁTIS</span>
                      </div>
                  </div>

                  {/* Bonus 3 */}
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
                      <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><Check size={24} /></div>
                      <div className="flex-1">
                          <h4 className="font-bold text-lg text-slate-800">BÔNUS 3: Lista de Produtos Vencedores</h4>
                          <p className="text-sm text-slate-500">Uma lista atualizada mensalmente com os 50 produtos que mais vendem na Shopee.</p>
                      </div>
                      <div className="hidden md:block text-right">
                          <span className="block text-xs text-slate-400 line-through">R$ 37,00</span>
                          <span className="block font-bold text-green-600">GRÁTIS</span>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-white relative">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-12">
              <div className="inline-block bg-orange-600 text-white px-6 py-2 rounded-xl shadow-xl mb-6 animate-pulse">
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-1 text-orange-100">🔥 O PREÇO VAI SUBIR EM:</div>
                  <div className="text-3xl md:text-5xl font-mono font-black tracking-widest text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight">
                  Comece Seu Negócio Online <br/><span className="text-orange-600">Pelo Preço de um Lanche</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
              
              {/* Basic Plan */}
              <div className="order-1 bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col relative opacity-90 hover:opacity-100">
                <h3 className="text-xl font-bold text-slate-600 text-center mb-1">Guia Básico PDF</h3>
                <p className="text-xs text-center text-slate-400 mb-6">Para quem quer ler</p>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-extrabold text-slate-700">R$ 10,00</span>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><Check size={16}/> E-book Passo a Passo</li>
                    <li className="flex items-center gap-2"><Check size={16}/> Lista de Links</li>
                    <li className="flex items-center gap-2"><Check size={16}/> Sem Bônus</li>
                </ul>
                
                <Button 
                    onClick={() => setIsUpsellModalOpen(true)}
                    className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-4 rounded-xl"
                >
                    QUERO O BÁSICO
                </Button>
              </div>

              {/* Premium Plan */}
              <div className="order-2 bg-white rounded-3xl p-8 border-4 border-orange-500 shadow-2xl relative transform md:-translate-y-4 z-10">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-md whitespace-nowrap">
                  🚀 Mais Vendido
                </div>

                <h3 className="text-2xl font-black text-orange-600 text-center mb-1 uppercase">Método Shopee Lucrativo</h3>
                <p className="text-sm text-center text-orange-800/70 font-bold mb-6">Vídeo Aulas + Estratégias + Bônus</p>
                
                <div className="text-center mb-6 bg-orange-50 py-4 rounded-2xl border border-orange-100">
                  <p className="text-xs text-slate-400 line-through mb-1">De R$ 97,00 por</p>
                  <span className="text-6xl font-black text-green-600 tracking-tighter">R$ 19,90</span>
                  <p className="text-xs text-green-700 font-bold mt-2">Pagamento Único • Acesso Vitalício</p>
                </div>
                
                <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex items-start gap-3 font-bold text-slate-700"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>Curso Completo em Vídeo</span></li>
                    <li className="flex items-start gap-3 font-bold text-slate-700"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>Técnica de Viralização no TikTok</span></li>
                    <li className="flex items-start gap-3 font-bold text-slate-700"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>Estratégia Grupos de Oferta</span></li>
                    
                    <div className="border-t border-dashed border-orange-200 my-2"></div>
                    
                    <li className="flex items-start gap-3 font-bold text-orange-700 bg-orange-50 p-2 rounded"><Gift size={16} className="text-red-500 shrink-0 mt-0.5"/> <span>BÔNUS 1: Scripts de Venda</span></li>
                    <li className="flex items-start gap-3 font-bold text-orange-700 bg-orange-50 p-2 rounded"><Gift size={16} className="text-red-500 shrink-0 mt-0.5"/> <span>BÔNUS 2: Pack Canva Editável</span></li>
                    <li className="flex items-start gap-3 font-bold text-orange-700 bg-orange-50 p-2 rounded"><Gift size={16} className="text-red-500 shrink-0 mt-0.5"/> <span>BÔNUS 3: Lista de Produtos Top 50</span></li>
                </ul>
                
                <a href="https://pay.lowify.com.br/checkout?product_id=shopee-premium" className="block w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-xl py-8 rounded-xl shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all">
                        QUERO LUCRO MÁXIMO
                    </Button>
                </a>
                
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400">
                    <Lock size={12} /> Compra 100% Segura e Garantida
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800">
              Dúvidas Frequentes
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-3">
            <FAQItem 
              question="Preciso aparecer nos vídeos?" 
              answer="Não! O método foca em 'Achadinhos', onde você mostra apenas o produto. Você pode pegar vídeos prontos da internet (ensinamos como) e repostar." 
            />
            <FAQItem 
              question="Preciso comprar os produtos para vender?" 
              answer="Não! Você é um afiliado. Você divulga o link, a pessoa compra direto da Shopee e você ganha a comissão. A Shopee cuida do estoque e entrega." 
            />
            <FAQItem 
              question="Quanto tempo demora para ter resultados?" 
              answer="Isso varia de aluno para aluno. Temos alunos que fizeram a primeira venda em 24h aplicando a técnica dos grupos. O acesso ao curso é vitalício, você faz no seu tempo." 
            />
            <FAQItem 
              question="Como recebo o dinheiro?" 
              answer="As comissões caem na sua conta da Shopee e você transfere direto para sua conta bancária (PIX). Ensinamos como cadastrar seus dados bancários no módulo 1." 
            />
          </Accordion>
        </section>

        {/* Guarantee */}
        <section className="py-12 px-4 bg-slate-50 border-t border-slate-200">
             <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-sm">
                 <div className="shrink-0">
                     <ShieldCheck size={80} className="text-green-500" />
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Garantia de 7 Dias</h3>
                     <p className="text-slate-600">
                         Você não corre risco nenhum. Entre, assista as aulas, baixe os materiais. Se achar que não é para você, devolvemos 100% do seu dinheiro. Sem letras miúdas.
                     </p>
                 </div>
             </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t-8 border-orange-500">
          <div className="container mx-auto px-4">
            <p className="mb-4 font-bold text-white text-lg">🧡 Método Shopee Lucrativo</p>
            <p className="mb-4">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            <p className="text-xs text-slate-600 max-w-2xl mx-auto">
                Este site não é afiliado à Shopee ou Facebook. Os resultados podem variar de pessoa para pessoa. 
                Não prometemos dinheiro fácil, ensinamos uma profissão digital.
            </p>
          </div>
        </footer>

        <ShopeeUpsellModal 
          isOpen={isUpsellModalOpen}
          onClose={() => setIsUpsellModalOpen(false)}
          onConfirm={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/go.php?offer=shopee-upsell'); 
          }}
          onReject={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=shopee-basic'); 
          }}
        />
      </div>
    </>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
    <AccordionItem value={question} className="border border-slate-200 rounded-xl px-4 bg-slate-50">
        <AccordionTrigger className="text-left font-bold text-slate-700 hover:text-orange-600 hover:no-underline py-4">
            {question}
        </AccordionTrigger>
        <AccordionContent className="text-slate-600 pb-4">
            {answer}
        </AccordionContent>
    </AccordionItem>
);

export default ShopeeLanding;