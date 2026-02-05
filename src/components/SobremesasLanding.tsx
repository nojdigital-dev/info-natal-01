import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Star, Clock, ShieldCheck, 
  Heart, Zap, ChevronRight, ChefHat, Scale, HeartPulse, Droplet, Candy, Lock
} from "lucide-react";
import SobremesasUpsellModal from './SobremesasUpsellModal';
import UtmifyScript from './UtmifyScript';

// Placeholder Images (Unsplash)
const heroImg = "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop"; // Brownie
const imgBrownie = "https://images.unsplash.com/photo-1606313564200-e75d5e304abd?q=80&w=500&auto=format&fit=crop";
const imgPudim = "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?q=80&w=500&auto=format&fit=crop"; // Flan like
const imgPave = "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=500&auto=format&fit=crop"; // Tiramisu/Pave
const imgDoceLeite = "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500&auto=format&fit=crop";

const SobremesasLanding = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 35 });
  const [todayDate, setTodayDate] = useState("");

  // UTM Helper
  const applyUtms = (url: string) => {
    try {
        const currentSearchParams = new URLSearchParams(window.location.search);
        const paramsString = currentSearchParams.toString();
        if (!paramsString) return url;
        const separator = url.indexOf("?") === -1 ? "?" : "&";
        return `${url}${separator}${paramsString}`;
    } catch (e) { return url; }
  };

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
    setTodayDate(date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }));

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>300+ Sobremesas Zero - Coma Sem Culpa</title>
        <meta name="description" content="Descubra como comer suas sobremesas favoritas de domingo a domingo sem engordar. Receitas Zero Açúcar, Glúten e Lactose." />
      </Helmet>
      <UtmifyScript />
      
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        
        {/* Sticky Bar */}
        <div className="bg-pink-600 text-white text-center py-2 px-4 font-bold text-xs md:text-sm animate-pulse sticky top-0 z-50 shadow-md flex justify-center items-center gap-2">
           🧁 DESCONTO ESPECIAL SÓ HOJE: {todayDate.toUpperCase()}
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-white py-12 md:py-24 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              <div className="text-center md:text-left order-2 md:order-1">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-6 px-4 py-1 text-sm font-bold border border-purple-200 inline-flex items-center gap-2 shadow-sm">
                  <ChefHat size={16} /> Por Nutricionista Amanda Ballis
                </Badge>
                
                <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
                  Coma Sua Sobremesa Favorita <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">De Domingo a Domingo</span> <br/>
                  <span className="bg-pink-600 text-white px-2 transform -rotate-1 inline-block mt-2 text-2xl md:text-5xl">SEM CULPA!</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-8 text-slate-600 font-medium leading-relaxed">
                  + de 300 Sobremesas Deliciosas: <span className="font-bold text-red-500">Zero Açúcar</span>, <span className="font-bold text-red-500">Zero Glúten</span> e <span className="font-bold text-red-500">Zero Lactose</span>. <br/>
                  Emagreça sem abrir mão do prazer.
                </p>
                
                <div className="flex flex-col gap-4">
                    <Button 
                        onClick={scrollToPricing}
                        className="bg-green-600 hover:bg-green-500 text-white border-b-4 border-green-800 font-black text-xl py-8 px-10 rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full md:w-fit mx-auto md:mx-0"
                    >
                        QUERO BAIXAR AS RECEITAS <ChevronRight size={24} />
                    </Button>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500 font-semibold">
                        <div className="flex text-yellow-400"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                        <span>(2.137) Avaliações • 97% Aprovado</span>
                    </div>
                </div>
              </div>

              <div className="relative order-1 md:order-2 flex justify-center">
                 <div className="relative w-full max-w-[350px] aspect-square">
                    <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <img 
                        src={heroImg} 
                        alt="Brownie Zero Açúcar" 
                        className="relative rounded-3xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500 object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-pink-500 animate-bounce">
                        <p className="font-bold text-slate-800 text-sm">Brownie Cremoso</p>
                        <p className="text-xs text-green-600 font-bold flex items-center gap-1"><Check size={12}/> Zero Açúcar</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* The "Menu" Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">O Que Você Vai Poder Comer?</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                      Parece mentira, mas não é. Com ingredientes acessíveis e nossos segredos culinários, você fará essas delícias em casa:
                  </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <DessertCard img={imgBrownie} title="Brownie" badge="O Favorito" />
                  <DessertCard img={imgPudim} title="Pudim" />
                  <DessertCard img={imgDoceLeite} title="Doce de Leite" />
                  <DessertCard img={imgPave} title="Pavê" />
              </div>

              <div className="mt-12 bg-pink-50 border border-pink-200 rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-bold text-pink-700 mb-2 flex items-center justify-center gap-2">
                      <Candy className="animate-spin-slow" /> Sim! São mais de 300 receitas!
                  </h3>
                  <p className="text-slate-600">
                      Beijinho, Forrobodó, Geleias, Bolos, Tortas... Tudo <span className="font-bold">Zero Açúcar, Zero Glúten e Zero Lactose</span> com o sabor das tradicionais!
                  </p>
              </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-pink-400">
                  O Fim da "Dieta Chata"
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                  <BenefitItem 
                    icon={<Zap className="text-yellow-400" />}
                    title="Controle a Compulsão"
                    desc="Chega de atacar a geladeira de madrugada. Nossas receitas saciam a vontade de doce real."
                  />
                  <BenefitItem 
                    icon={<Droplet className="text-blue-400" />}
                    title="Controle a Glicemia"
                    desc="Perfeito para diabéticos e pré-diabéticos. Coma doces sem picos de insulina."
                  />
                  <BenefitItem 
                    icon={<HeartPulse className="text-red-400" />}
                    title="Digestão Leve"
                    desc="Sem glúten e sem lactose = sem inchaço, gases ou desconforto após comer."
                  />
                  <BenefitItem 
                    icon={<Scale className="text-green-400" />}
                    title="Emagreça Comendo"
                    desc="Substitua doces calóricos pelas nossas versões fit e veja a balança descer."
                  />
                  <BenefitItem 
                    icon={<ShieldCheck className="text-purple-400" />}
                    title="Saúde para os Filhos"
                    desc="Garanta que seu filho tenha uma alimentação equilibrada enquanto curte os sabores da infância."
                  />
                  <BenefitItem 
                    icon={<ChefHat className="text-pink-400" />}
                    title="Fácil de Fazer"
                    desc="Não tem experiência? Sem problemas. Receitas MUITO fáceis com ingredientes que você acha no mercado."
                  />
              </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <span className="bg-purple-600 text-white font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg">Presente Exclusivo</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-slate-900">GANHE 3 BÔNUS DE GRAÇA</h2>
                    <p className="text-slate-600">Levando o pacote hoje, você não paga nada por esses guias extras:</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <BonusCard 
                        title="TORTAS DOCES"
                        desc="Zero açúcar, zero glúten e zero lactose. Perfeitas para festas."
                        oldPrice="39,90"
                    />
                    <BonusCard 
                        title="LANCHE DA TARDE"
                        desc="Salgados e snacks saudáveis para nunca mais passar fome."
                        oldPrice="29,90"
                    />
                    <BonusCard 
                        title="GELEIAS CASEIRAS"
                        desc="Aprenda a fazer geleias 100% fruta e zero açúcar para acompanhar."
                        oldPrice="19,90"
                    />
                </div>
            </div>
        </section>

        {/* Pricing Section - Aggressive Split */}
        <section id="pricing" className="py-16 px-4 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-10">
              <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl shadow-xl mb-6 animate-pulse">
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-1 text-red-100">⏳ TEMPO RESTANTE:</div>
                  <div className="text-3xl md:text-5xl font-mono font-black tracking-widest text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                  Tudo o que você receberá, <br/><span className="text-pink-600">aproveitando a oferta de hoje:</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              
              {/* Anchor Plan (Decoy) */}
              <div className="order-2 md:order-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm opacity-70 hover:opacity-100 transition-opacity">
                 <h3 className="text-xl font-bold text-slate-500 mb-4">Apenas o Ebook Principal</h3>
                 <ul className="space-y-2 mb-6 text-sm text-slate-500">
                    <li className="flex items-center gap-2"><Check size={16}/> 300+ Receitas</li>
                    <li className="flex items-center gap-2 text-red-400 line-through"><Check size={16}/> Sem Bônus de Tortas</li>
                    <li className="flex items-center gap-2 text-red-400 line-through"><Check size={16}/> Sem Bônus de Lanches</li>
                    <li className="flex items-center gap-2 text-red-400 line-through"><Check size={16}/> Sem Bônus de Geleias</li>
                 </ul>
                 <div className="text-center border-t border-slate-100 pt-4">
                    <p className="text-sm text-slate-400">De R$ 97,00 por</p>
                    <p className="text-3xl font-bold text-slate-600">R$ 67,00</p>
                    <Button variant="outline" className="mt-4 w-full" disabled>Indisponível hoje</Button>
                 </div>
              </div>

              {/* Hero Plan */}
              <div className="order-1 md:order-2 bg-white p-8 rounded-3xl border-4 border-pink-500 shadow-2xl relative transform scale-105 z-10">
                 <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-md whitespace-nowrap">
                    👑 Oferta Completa
                 </div>
                 
                 <h3 className="text-2xl font-black text-pink-600 text-center mb-6 uppercase">Pacote Premium</h3>
                 
                 <ul className="space-y-3 mb-8 text-sm md:text-base font-medium text-slate-700">
                    <li className="flex items-center gap-2 bg-green-50 p-2 rounded"><Check size={20} className="text-green-600 shrink-0"/> 300+ Receitas Zero</li>
                    <li className="flex items-center gap-2 bg-green-50 p-2 rounded"><Check size={20} className="text-green-600 shrink-0"/> BÔNUS 1: Tortas Doces</li>
                    <li className="flex items-center gap-2 bg-green-50 p-2 rounded"><Check size={20} className="text-green-600 shrink-0"/> BÔNUS 2: Lanche da Tarde</li>
                    <li className="flex items-center gap-2 bg-green-50 p-2 rounded"><Check size={20} className="text-green-600 shrink-0"/> BÔNUS 3: Geleias Caseiras</li>
                    <li className="flex items-center gap-2 bg-green-50 p-2 rounded"><Check size={20} className="text-green-600 shrink-0"/> Acesso Vitalício</li>
                 </ul>

                 <div className="text-center bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                    <p className="text-sm text-slate-400 line-through">De R$ 97,00</p>
                    <p className="text-6xl font-black text-green-600 tracking-tighter">R$ 10<span className="text-2xl">,00</span></p>
                    <p className="text-xs text-slate-500 mt-2">Pagamento Único • Sem mensalidade</p>
                 </div>

                 <Button 
                    onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=sobremesas-10')}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-xl py-8 rounded-xl shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all whitespace-normal h-auto leading-tight"
                 >
                    QUERO O PACOTE COMPLETO POR R$ 10
                 </Button>
                 
                 <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                    <Lock size={12}/> Acesso Imediato no seu E-mail
                 </p>
              </div>

            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-12 px-4 bg-white">
             <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-pink-50 p-8 rounded-3xl border border-pink-100">
                 <div className="bg-white p-4 rounded-full shadow-md shrink-0 text-pink-500">
                     <ShieldCheck size={48} />
                 </div>
                 <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Garantia de 7 Dias</h3>
                     <p className="text-slate-600 text-sm">
                         Se você não gostar das receitas, ou achar difícil (o que duvido), eu devolvo 100% do seu dinheiro. O risco é todo meu.
                     </p>
                 </div>
             </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t-8 border-pink-500">
          <div className="container mx-auto px-4">
            <p className="mb-4 font-bold text-white text-lg">🧁 Sobremesas Zero</p>
            <p className="mb-4">&copy; {new Date().getFullYear()} Amanda Ballis. Todos os direitos reservados.</p>
            <p className="text-xs text-slate-600 max-w-2xl mx-auto">
                Os resultados podem variar de pessoa para pessoa. Consulte sempre seu médico ou nutricionista antes de mudar sua dieta.
            </p>
          </div>
        </footer>

        <SobremesasUpsellModal 
          isOpen={isUpsellModalOpen}
          onClose={() => setIsUpsellModalOpen(false)}
          onConfirm={() => {
              window.location.href = applyUtms('https://pay.lowify.com.br/go.php?offer=upsell-sobremesas'); 
          }}
          onReject={() => {
              setIsUpsellModalOpen(false);
          }}
        />
      </div>
    </>
  );
};

// Subcomponents
const DessertCard = ({ img, title, badge }: { img: string, title: string, badge?: string }) => (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div className="aspect-square overflow-hidden">
            <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div>
                {badge && <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded mb-1 inline-block">{badge}</span>}
                <h3 className="text-white font-bold text-lg">{title}</h3>
                <p className="text-white/80 text-xs">Zero Açúcar • Zero Glúten</p>
            </div>
        </div>
    </div>
);

const BenefitItem = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="flex gap-4 items-start">
        <div className="bg-slate-800 p-3 rounded-xl shrink-0">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-lg mb-1 text-slate-100">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const BonusCard = ({ title, desc, oldPrice }: { title: string, desc: string, oldPrice: string }) => (
    <Card className="bg-white border-2 border-pink-100 hover:border-pink-300 transition-colors text-center shadow-sm">
        <CardHeader>
            <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center text-pink-600 mb-2">
                <Gift size={32} />
            </div>
            <CardTitle className="text-lg font-bold text-slate-800">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-slate-600 mb-4 h-12">{desc}</p>
            <div className="border-t border-slate-100 pt-3">
                <span className="text-xs text-slate-400 line-through block">De R$ {oldPrice}</span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded inline-block mt-1">GRÁTIS HOJE</span>
            </div>
        </CardContent>
    </Card>
);

const Gift = ({ size }: { size: number }) => <Star size={size} />; // Fallback

export default SobremesasLanding;