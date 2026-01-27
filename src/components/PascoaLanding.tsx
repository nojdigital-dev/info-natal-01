import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Gift, Star, Clock, ShieldCheck, 
  Heart, Zap, Lock, ChevronRight, Rabbit, Egg, Utensils, Smile, Crown, Scissors, Printer
} from "lucide-react";
import PascoaUpsellModal from './PascoaUpsellModal';
import UtmifyScript from './UtmifyScript';

// Placeholder images for bonus cards (you can replace these later)
const bonusCacaOvos = "https://cdn-icons-png.flaticon.com/512/3076/3076136.png"; 
const bonusReceitasChoc = "https://cdn-icons-png.flaticon.com/512/1858/1858032.png";
const bonusOrelhinhas = "https://cdn-icons-png.flaticon.com/512/2663/2663067.png";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const PascoaLanding = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 10, seconds: 0 });
  const [todayDate, setTodayDate] = useState("");

  // Helper para UTMs
  const applyUtms = (url: string) => {
    try {
        const currentSearchParams = new URLSearchParams(window.location.search);
        const paramsString = currentSearchParams.toString();
        
        if (!paramsString) return url;

        const separator = url.indexOf("?") === -1 ? "?" : "&";
        // Mantendo a lógica de SCK se necessário, ou simplificando
        return `${url}${separator}${paramsString}`;
    } catch (e) {
        console.error("Erro ao aplicar UTMs:", e);
        return url;
    }
  };

  // Scripts de Rastreamento (Pixel Facebook + UTMs)
  useEffect(() => {
    // 1. Facebook Pixel (Mantendo o ID do Natal ou substitua pelo da Páscoa se tiver)
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
      fbq('init', '1422521156061159'); // Substitua pelo Pixel de Páscoa se houver
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1422521156061159&ev=PageView&noscript=1" />`;
    document.head.appendChild(noscript);

    // 2. UTM Tracking Script para links
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
        <title>Páscoa Criativa - Lembrancinhas e Caça aos Ovos</title>
        <meta name="description" content="Economize nos Ovos de Páscoa! Imprima caixinhas, faça uma caça aos ovos inesquecível e divirta as crianças sem gastar muito." />
      </Helmet>
      <UtmifyScript />
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        
        {/* Top Notification Bar */}
        <div className="bg-orange-500 text-white text-center py-2 px-4 font-bold text-xs md:text-sm animate-pulse sticky top-0 z-50 shadow-md flex justify-center items-center gap-2">
           🐰 OFERTA DE PÁSCOA VÁLIDA HOJE: {todayDate.toUpperCase()}
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-400 via-orange-400 to-orange-500 text-white py-12 md:py-28 px-4 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Rabbit className="absolute top-10 left-[10%] animate-bounce text-white opacity-30" size={50} />
            <Egg className="absolute top-40 right-[15%] animate-pulse text-yellow-100 opacity-40" size={40} />
            <Star className="absolute top-20 left-[20%] text-yellow-200 animate-pulse opacity-50" size={30} /> 
            
            {[...Array(20)].map((_, i) => (
                <div 
                    key={`p-${i}`}
                    className="absolute bg-white/20 rounded-full blur-sm animate-pulse" 
                    style={{
                        width: `${Math.random() * 20 + 10}px`,
                        height: `${Math.random() * 20 + 10}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                    }}
                />
            ))}
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <Badge className="bg-white text-orange-600 hover:bg-slate-100 mb-4 px-6 py-2 text-base md:text-lg font-bold shadow-lg transform -rotate-2 border-2 border-orange-200">
                  🍫 Páscoa Doce & Econômica
                </Badge>
                <h1 className="text-4xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-lg">
                  Não Gaste Uma Fortuna <br/>
                  <span className="text-amber-100">Em Ovos de Páscoa!</span> <br className="md:hidden" />
                </h1>
                <p className="text-lg md:text-2xl mb-6 md:mb-8 text-orange-50 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
                  Crie uma Páscoa mágica com lembrancinhas impressas em casa e uma Caça aos Ovos inesquecível. <span className="bg-orange-600/30 px-1 rounded">As crianças amam mais que o chocolate!</span>
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <Button 
                        onClick={scrollToPricing}
                        className="bg-green-600 hover:bg-green-500 text-white border-b-4 border-green-800 font-black text-xl py-8 px-10 rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        QUERO ECONOMIZAR AGORA <ChevronRight size={28} />
                    </Button>
                </div>
              </div>

              <div className="flex flex-col items-center relative">
                <div className="relative w-full max-w-[300px] md:max-w-[380px] mx-auto aspect-square bg-white/20 backdrop-blur-sm rounded-3xl border-4 border-white/60 shadow-2xl flex items-center justify-center mb-4 p-4 transform rotate-2 hover:rotate-0 transition-all duration-500">
                    <img 
                        src="https://images.unsplash.com/photo-1585848827014-633e7289d81d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Crianças felizes na páscoa" 
                        className="rounded-2xl object-cover w-full h-full shadow-inner"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-orange-900 font-bold px-6 py-4 rounded-full shadow-xl text-xl animate-bounce border-4 border-white">
                        +50 Moldes!
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-3 text-sm md:text-base text-white font-bold opacity-90 bg-black/10 px-4 py-2 rounded-full">
                  <ShieldCheck size={18} /> Entrega Imediata no E-mail
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="py-8 bg-white border-b-4 border-orange-100 shadow-sm relative z-20 -mt-2">
          <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-slate-600">
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100 w-full md:w-auto shadow-sm">
                      <div className="bg-orange-100 p-2 rounded-full text-orange-600"><Scissors size={24} /></div>
                      <div>
                          <p className="font-bold text-slate-900 leading-tight">Imprima e Monte</p>
                          <p className="text-xs">Atividade divertida em família</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100 w-full md:w-auto shadow-sm">
                      <div className="bg-green-100 p-2 rounded-full text-green-600"><Smile size={24} /></div>
                      <div>
                          <p className="font-bold text-slate-900 leading-tight">Magia do Coelho</p>
                          <p className="text-xs">Pegadinhas e pistas inclusas</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100 w-full md:w-auto shadow-sm">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Printer size={24} /></div>
                      <div>
                          <p className="font-bold text-slate-900 leading-tight">PDF Alta Qualidade</p>
                          <p className="text-xs">Arquivos prontos para uso</p>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* Pain Points / Solution */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900 mb-6">
                  Ovos de Páscoa a <span className="text-red-600 line-through">R$ 80,00</span>? <br/>
                  <span className="text-green-600">Nem pensar!</span>
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Todo ano é a mesma coisa: os preços dos ovos de chocolate sobem absurdamente. Com o nosso kit, você compra barras de chocolate ou bombons no mercado (muito mais barato) e monta presentes <strong>incrivelmente lindos e personalizados</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors bg-white">
                      <CardHeader>
                          <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 text-orange-600">
                              <Gift size={28} />
                          </div>
                          <CardTitle className="text-lg text-orange-800">Lembrancinhas Lindas</CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600 text-sm">
                          Caixinhas para Bis, Batom, Trufas e Barras de Chocolate. Transforme um chocolate simples em um presente de luxo.
                      </CardContent>
                  </Card>
                  <Card className="border-2 border-green-200 hover:border-green-400 transition-colors bg-white">
                      <CardHeader>
                          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 text-green-600">
                              <Rabbit size={28} />
                          </div>
                          <CardTitle className="text-lg text-green-800">Caça aos Ovos</CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600 text-sm">
                          Pistas prontas, patinhas de coelho e setas indicativas. Crie uma aventura inesquecível pela casa na manhã de Páscoa.
                      </CardContent>
                  </Card>
                  <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors bg-white">
                      <CardHeader>
                          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600">
                              <Crown size={28} />
                          </div>
                          <CardTitle className="text-lg text-blue-800">Para a Família Toda</CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600 text-sm">
                          Opções para crianças, namorados, professores e amigos. Ninguém vai ficar sem um mimo especial este ano.
                      </CardContent>
                  </Card>
              </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 px-4 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                <Rabbit size={400} />
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wider">Conteúdo do Kit</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-800 mt-4">O Que Você Vai Receber?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">Porta-Bombom Temático</h3>
                                <p className="text-slate-600 text-sm">Coelhinhos e Cenouras que abraçam o bombom. Perfeito para escolas e lembrancinhas em massa.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">Caixinhas Personalizadas</h3>
                                <p className="text-slate-600 text-sm">Moldes exatos para caixa de Bis, caixa de 4 docinhos e caixa para barra de chocolate.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center shrink-0 font-bold text-xl">3</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">Kit Caça aos Ovos</h3>
                                <p className="text-slate-600 text-sm">Pistas (com rimas!), sinalização de "O Coelho Passou Por Aqui" e moldes de patinhas.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center shrink-0 font-bold text-xl">4</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">Cartões e Tags</h3>
                                <p className="text-slate-600 text-sm">Etiquetas "De/Para" temáticas para deixar qualquer presente mais bonito.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-8 rounded-3xl border-4 border-white shadow-2xl relative">
                        <div className="absolute -top-6 -right-6 bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg rotate-12 shadow-lg animate-pulse">
                            100%<br/>Digital
                        </div>
                        <h3 className="font-bold text-2xl text-amber-900 mb-6 flex items-center gap-2">
                            <Check className="bg-green-500 text-white rounded-full p-1" /> Lista de Arquivos:
                        </h3>
                        <ul className="space-y-3 text-slate-700 font-medium">
                            <li className="flex items-center gap-2"><Check size={18} className="text-green-600"/> 15 Modelos de Caixinhas</li>
                            <li className="flex items-center gap-2"><Check size={18} className="text-green-600"/> 20 Tags Diferentes</li>
                            <li className="flex items-center gap-2"><Check size={18} className="text-green-600"/> Jogo de Pistas Completo</li>
                            <li className="flex items-center gap-2"><Check size={18} className="text-green-600"/> Arquivos em PDF e PNG</li>
                            <li className="flex items-center gap-2"><Check size={18} className="text-green-600"/> Instruções de Impressão</li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-amber-200">
                             <p className="text-center text-sm text-amber-800 mb-4">Acesso imediato e vitalício!</p>
                             <Button onClick={scrollToPricing} className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-6 text-lg rounded-xl shadow-lg">
                                 QUERO MEU KIT AGORA
                             </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* BONUS SECTION */}
        <section className="py-16 px-4 bg-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-10">
                  <span className="bg-yellow-400 text-purple-900 font-bold px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-wider shadow-lg">Apenas no Plano Completo</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold mt-6 mb-4 leading-tight">3 BÔNUS EXCLUSIVOS <br/> <span className="text-yellow-400">PARA TURBINAR SUA PÁSCOA</span></h2>
                  <p className="text-purple-200 text-base md:text-lg">Atividades que vão manter as crianças entretidas o dia todo!</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  {/* Bonus 1 */}
                  <div className="bg-purple-800/50 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 text-center hover:bg-purple-800 transition-colors flex flex-col">
                      <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center p-2">
                        <img src={bonusReceitasChoc} alt="Receitas" className="w-12 h-12" />
                      </div>
                      <h3 className="font-bold text-lg leading-tight text-white mb-1">OVOS DE COLHER</h3>
                      <h4 className="font-bold text-sm text-yellow-300 mb-3 uppercase tracking-wide">Faça e Venda</h4>
                      <p className="text-sm text-purple-100 mb-4 h-16 leading-snug">Aprenda 3 recheios gourmet fáceis para fazer seus próprios ovos de colher e economizar ainda mais.</p>
                      <div className="mt-auto pt-4 border-t border-purple-600">
                         <span className="text-purple-300 line-through text-xs block">Vendido por R$ 39,90</span>
                         <span className="text-white font-bold bg-green-600 px-2 py-1 rounded text-sm inline-block mt-1">HOJE: GRÁTIS</span>
                      </div>
                  </div>

                  {/* Bonus 2 */}
                  <div className="bg-purple-800/50 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 text-center hover:bg-purple-800 transition-colors flex flex-col transform md:-translate-y-4 shadow-xl z-10 bg-purple-900">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">O favorito</div>
                      <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center p-2">
                        <img src={bonusOrelhinhas} alt="Orelhinhas" className="w-12 h-12" />
                      </div>
                      <h3 className="font-bold text-lg leading-tight text-white mb-1">KIT FOTOGRAFIA</h3>
                      <h4 className="font-bold text-sm text-yellow-300 mb-3 uppercase tracking-wide">Plaquinhas Divertidas</h4>
                      <p className="text-sm text-purple-100 mb-4 h-16 leading-snug">Plaquinhas com frases engraçadas e acessórios (bigode de coelho, orelhas) para tirar fotos incríveis.</p>
                      <div className="mt-auto pt-4 border-t border-purple-600">
                         <span className="text-purple-300 line-through text-xs block">Vendido por R$ 29,90</span>
                         <span className="text-white font-bold bg-green-600 px-2 py-1 rounded text-sm inline-block mt-1">HOJE: GRÁTIS</span>
                      </div>
                  </div>

                  {/* Bonus 3 */}
                  <div className="bg-purple-800/50 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 text-center hover:bg-purple-800 transition-colors flex flex-col">
                      <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center p-2">
                        <img src={bonusCacaOvos} alt="Jogos" className="w-12 h-12" />
                      </div>
                      <h3 className="font-bold text-lg leading-tight text-white mb-1">LIVRO DE COLORIR</h3>
                      <h4 className="font-bold text-sm text-yellow-300 mb-3 uppercase tracking-wide">Páscoa Colorida</h4>
                      <p className="text-sm text-purple-100 mb-4 h-16 leading-snug">20 desenhos temáticos de Páscoa para imprimir e manter as crianças ocupadas pintando.</p>
                      <div className="mt-auto pt-4 border-t border-purple-600">
                         <span className="text-purple-300 line-through text-xs block">Vendido por R$ 19,90</span>
                         <span className="text-white font-bold bg-green-600 px-2 py-1 rounded text-sm inline-block mt-1">HOJE: GRÁTIS</span>
                      </div>
                  </div>
              </div>
              
              <div className="mt-12 text-center">
                  <Button 
                  onClick={scrollToPricing} 
                  className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-black text-xl py-8 px-12 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] transform transition animate-scale-pulse hover:scale-110"
                  >
                      QUERO GARANTIR MEUS BÔNUS! 🎁
                  </Button>
              </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-slate-50 relative">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-12">
              <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl shadow-xl mb-6 animate-pulse">
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-1 text-red-100">🔥 O PREÇO VAI SUBIR EM:</div>
                  <div className="text-3xl md:text-5xl font-mono font-black tracking-widest text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight">
                  Sua Páscoa Inesquecível <br/><span className="text-orange-600">Por Menos de um Ovo de 100g</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
              
              {/* Basic Plan */}
              <div className="order-1 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col relative opacity-90 hover:opacity-100">
                <h3 className="text-xl font-bold text-slate-600 text-center mb-1">Kit Básico</h3>
                <p className="text-xs text-center text-slate-400 mb-6">Apenas lembrancinhas simples</p>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-extrabold text-slate-700">R$ 10,00</span>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><Check size={16}/> Moldes de Porta-Bombom</li>
                    <li className="flex items-center gap-2"><Check size={16}/> Tags simples</li>
                    <li className="flex items-center gap-2"><Check size={16}/> Arquivos em PDF</li>
                </ul>
                
                <Button 
                    onClick={() => setIsUpsellModalOpen(true)}
                    className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-4 rounded-xl"
                >
                    QUERO O BÁSICO
                </Button>
              </div>

              {/* Premium Plan */}
              <div className="order-2 bg-white rounded-3xl p-8 border-4 border-orange-400 shadow-2xl relative transform md:-translate-y-4 z-10">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-md whitespace-nowrap">
                  🐰 Melhor Escolha
                </div>

                <h3 className="text-2xl font-black text-orange-600 text-center mb-1 uppercase">Pacote Páscoa Mágica</h3>
                <p className="text-sm text-center text-orange-800/70 font-bold mb-6">Lembrancinhas + Caça aos Ovos + Bônus</p>
                
                <div className="text-center mb-6 bg-orange-50 py-4 rounded-2xl border border-orange-100">
                  <p className="text-xs text-slate-400 line-through mb-1">De R$ 97,00 por</p>
                  <span className="text-6xl font-black text-green-600 tracking-tighter">R$ 19,90</span>
                  <p className="text-xs text-green-700 font-bold mt-2">Pagamento Único • Acesso Vitalício</p>
                </div>
                
                <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex items-start gap-3 font-bold text-slate-700"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>TODAS as Lembrancinhas e Caixas</span></li>
                    <li className="flex items-start gap-3 font-bold text-slate-700"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>Kit Completo Caça aos Ovos</span></li>
                    <li className="flex items-start gap-3 font-bold text-slate-700"><div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} strokeWidth={4}/></div> <span>Arquivos Editáveis (Canva)</span></li>
                    
                    <div className="border-t border-dashed border-orange-200 my-2"></div>
                    
                    <li className="flex items-start gap-3 font-bold text-purple-700 bg-purple-50 p-2 rounded"><Star size={16} fill="currentColor" className="text-yellow-400 shrink-0 mt-0.5"/> <span>BÔNUS: Receitas Ovos de Colher</span></li>
                    <li className="flex items-start gap-3 font-bold text-purple-700 bg-purple-50 p-2 rounded"><Star size={16} fill="currentColor" className="text-yellow-400 shrink-0 mt-0.5"/> <span>BÔNUS: Kit Fotografia</span></li>
                    <li className="flex items-start gap-3 font-bold text-purple-700 bg-purple-50 p-2 rounded"><Star size={16} fill="currentColor" className="text-yellow-400 shrink-0 mt-0.5"/> <span>BÔNUS: Livro de Colorir</span></li>
                </ul>
                
                <a href="https://pay.lowify.com.br/checkout?product_id=Gwyfeb" className="block w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-xl py-8 rounded-xl shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all">
                        QUERO O PACOTE COMPLETO
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
              question="Preciso de uma impressora profissional?" 
              answer="Não! Criamos os arquivos pensando justamente em impressoras domésticas comuns. Você pode imprimir em casa ou, se preferir um acabamento brilhante, levar em qualquer gráfica rápida (custa centavos por folha)." 
            />
            <FAQItem 
              question="Qual papel devo usar?" 
              answer="Para as caixinhas, recomendamos papel fotográfico ou offset 180g (mais durinho). Para a Caça aos Ovos e desenhos de colorir, papel sulfite comum funciona perfeitamente." 
            />
            <FAQItem 
              question="O acesso é imediato?" 
              answer="Sim! Assim que o pagamento (PIX ou Cartão) é aprovado, você recebe um e-mail com o link para baixar tudo. Pode começar a montar hoje mesmo." 
            />
            <FAQItem 
              question="Serve para qualquer idade?" 
              answer="Sim! Temos modelos mais infantis (coelhinhos fofos) e modelos mais elegantes para presentear adultos. A Caça aos Ovos encanta crianças de 2 a 10 anos." 
            />
          </Accordion>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t-8 border-orange-500">
          <div className="container mx-auto px-4">
            <p className="mb-4 font-bold text-white text-lg">🐰 Páscoa Criativa</p>
            <p className="mb-4">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            <p className="text-xs text-slate-600 max-w-2xl mx-auto">
                Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
                Os resultados podem variar. As imagens são meramente ilustrativas.
            </p>
          </div>
        </footer>

        <PascoaUpsellModal 
          isOpen={isUpsellModalOpen}
          onClose={() => setIsUpsellModalOpen(false)}
          onConfirm={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/go.php?offer=b0ol57g'); // Link Upsell
          }}
          onReject={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=JGEKFU'); // Link Checkout Basic
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

export default PascoaLanding;