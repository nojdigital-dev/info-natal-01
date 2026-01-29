import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Gift, Star, Clock, ShieldCheck, 
  Heart, Zap, Snowflake, Lock, ChevronRight, PartyPopper, Printer, Scissors, Users
} from "lucide-react";
import USUpsellModal from './USUpsellModal';
import UtmifyScript from './UtmifyScript';

// Importing images directly
import bonusReceitas from '@/assets/images/bonus-receitas.png';
import bonusJogos from '@/assets/images/bonus-jogos.png';
import bonusDecoracao from '@/assets/images/bonus-decoracao.png';

const USChristmasLanding = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 10, seconds: 0 });
  const [todayDate, setTodayDate] = useState("");

  // Helper for UTMs
  const applyUtms = (url: string) => {
    try {
        const currentSearchParams = new URLSearchParams(window.location.search);
        const paramsString = currentSearchParams.toString();
        if (!paramsString) return url;
        const separator = url.indexOf("?") === -1 ? "?" : "&";
        return `${url}${separator}${paramsString}`;
    } catch (e) {
        return url;
    }
  };

  // Timer logic
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
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    setTodayDate(date.toLocaleDateString('en-US', options)); // Changed to en-US format

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Creative Christmas - DIY Printable Gifts</title>
        <meta name="description" content="Surprise everyone this Christmas without breaking the bank. Download, print, and assemble beautiful gifts in minutes! Perfect for Stocking Stuffers." />
      </Helmet>
      <UtmifyScript />
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        
        {/* Top Notification Bar */}
        <div className="bg-yellow-400 text-red-900 text-center py-2 px-4 font-bold text-xs md:text-sm animate-pulse sticky top-0 z-50 shadow-md">
          🎅 OFFER VALID TODAY ONLY: {todayDate.toUpperCase()}
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white py-8 md:py-24 px-4 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Snowflake className="absolute top-10 left-[10%] animate-bounce text-white opacity-40" size={40} />
            <Snowflake className="absolute top-40 right-[15%] animate-pulse text-blue-100 opacity-40" size={30} />
            <Star className="absolute top-20 left-[20%] text-yellow-300 animate-pulse opacity-50" size={25} /> 
            
            {[...Array(20)].map((_, i) => (
                <Snowflake 
                    key={`s-${i}`}
                    className="absolute text-white/20 animate-pulse" 
                    size={Math.random() * 20 + 10}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 4 + 2}s`,
                        opacity: Math.random() * 0.3 + 0.1,
                    }}
                />
            ))}
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <Badge className="bg-white text-red-700 hover:bg-slate-100 mb-4 px-6 py-2 text-base md:text-lg font-bold shadow-lg transform -rotate-2">
                  🎄 Santa is coming!
                </Badge>
                <h1 className="text-3xl md:text-6xl font-extrabold mb-2 md:mb-6 leading-tight drop-shadow-lg">
                  The Perfect DIY Gift <br/>
                  <span className="text-yellow-300">Ready to Print</span> <br className="md:hidden" />
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-lg transform -rotate-3 border-2 border-yellow-400 text-2xl md:text-5xl ml-2 shadow-xl mt-2 md:mt-0">
                    (+ BONUSES)
                  </span>
                </h1>
                <p className="text-lg md:text-2xl mb-4 md:mb-8 text-red-100 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
                  Surprise everyone this Christmas without breaking the bank. <br className="hidden md:block"/>
                  Download, print, and assemble beautiful gifts in minutes! Perfect for <strong>Stocking Stuffers</strong> and <strong>Secret Santa</strong>.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-[280px] md:max-w-[320px] mx-auto aspect-square bg-slate-900/50 rounded-2xl border-4 border-white/50 shadow-2xl flex items-center justify-center mb-4 group hover:border-yellow-400 transition-colors">
                    <img 
                        src="https://i.imgur.com/CkzUmzk.jpeg" 
                        alt="Christmas DIY Gifts Sample" 
                        className="rounded-xl object-cover w-full h-full"
                    />
                </div>

                <div className="flex flex-col w-full md:w-auto px-4">
                  <Button 
                    onClick={scrollToPricing}
                    className="bg-green-500 hover:bg-green-400 text-white border-b-4 border-green-700 font-black text-lg md:text-xl py-8 w-full md:w-auto md:px-12 rounded-full shadow-2xl transform transition flex items-center justify-center gap-2 animate-scale-pulse hover:scale-110 active:scale-95 whitespace-normal h-auto leading-tight"
                  >
                    GET INSTANT ACCESS <ChevronRight size={24} className="shrink-0" />
                  </Button>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs md:text-base text-yellow-200 opacity-90 font-medium">
                  <ShieldCheck size={16} /> LIMITED OFFER • <Zap size={16} /> Instant Download
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="py-8 md:py-12 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 text-left text-slate-600">
                  <div className="flex items-center gap-3 w-full md:w-auto">
                      <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0"><Scissors size={24} /></div>
                      <div>
                          <p className="font-bold text-slate-900 leading-tight">Easy to Assemble</p>
                          <p className="text-sm">Just print, cut, and glue</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 w-full md:w-auto">
                      <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><Heart size={24} /></div>
                      <div>
                          <p className="font-bold text-slate-900 leading-tight">Budget Friendly</p>
                          <p className="text-sm">Save money, spread joy</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 w-full md:w-auto">
                      <div className="bg-yellow-100 p-3 rounded-full text-yellow-600 shrink-0"><Printer size={24} /></div>
                      <div>
                          <p className="font-bold text-slate-900 leading-tight">Print at Home</p>
                          <p className="text-sm">Or at your local print shop</p>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-4 bg-green-900 text-white">
          <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-yellow-400">
                  Why Choose Our DIY Printables?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-green-800 p-8 rounded-2xl border border-green-700 hover:border-yellow-400/50 transition-colors text-center">
                      <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-300">
                          <Users size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">Real Savings</h3>
                      <p className="text-green-100 leading-relaxed">
                          Gift all your friends, neighbors, and coworkers without blowing your budget. Our favors cost pennies to print!
                      </p>
                  </div>
                  <div className="bg-green-800 p-8 rounded-2xl border border-green-700 hover:border-yellow-400/50 transition-colors text-center">
                      <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-red-400">
                          <Heart size={32} fill="currentColor" />
                      </div>
                      <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">Made with Love</h3>
                      <p className="text-green-100 leading-relaxed">
                          Nothing says "I care" more than a handmade gift. Show your love by dedicating a few minutes to assemble each treat.
                      </p>
                  </div>
                  <div className="bg-green-800 p-8 rounded-2xl border border-green-700 hover:border-yellow-400/50 transition-colors text-center">
                      <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-300">
                          <Star size={32} fill="currentColor" />
                      </div>
                      <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">Total Convenience</h3>
                      <p className="text-green-100 leading-relaxed">
                          Everything is ready for you. No need to spend hours designing. Just download, print, and enjoy the magic!
                      </p>
                  </div>
              </div>
              
              <div className="mt-12 text-center">
                  <Button 
                  onClick={scrollToPricing} 
                  className="bg-red-600 hover:bg-red-500 text-white font-bold text-base md:text-lg px-6 md:px-8 py-6 rounded-full shadow-lg animate-scale-pulse hover:scale-110 whitespace-normal h-auto leading-tight"
                  >
                      I WANT A MAGICAL CHRISTMAS! 🎄
                  </Button>
              </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-12 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-red-800 mb-2">What's Inside the Bundle?</h2>
            <p className="text-center text-slate-600 mb-8">Ready-to-print templates for everyone on your list</p>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <Gift className="text-red-500 min-w-8 min-h-8 shrink-0" />
                  <div>
                      <h3 className="font-bold text-lg text-slate-800">Chocolate Holders</h3>
                      <p className="text-slate-600 text-sm leading-snug mt-1">Perfect templates to hold candy bars, Hershey's Kisses, or Ferrero Rocher. The sweetest inexpensive gift!</p>
                  </div>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <PartyPopper className="text-green-500 min-w-8 min-h-8 shrink-0" />
                  <div>
                      <h3 className="font-bold text-lg text-slate-800">Holiday Wreaths</h3>
                      <p className="text-slate-600 text-sm leading-snug mt-1">Decorative paper wreaths to hang on doors or Christmas trees.</p>
                  </div>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <Clock className="text-blue-500 min-w-8 min-h-8 shrink-0" />
                  <div>
                      <h3 className="font-bold text-lg text-slate-800">2025 Calendars</h3>
                      <p className="text-slate-600 text-sm leading-snug mt-1">Themed mini-calendars. A useful gift that keeps on giving all year round.</p>
                  </div>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-yellow-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <Star className="text-yellow-500 min-w-8 min-h-8 shrink-0" />
                  <div>
                      <h3 className="font-bold text-lg text-slate-800">Door Hangers</h3>
                      <p className="text-slate-600 text-sm leading-snug mt-1">Festive tags for door knobs. A simple detail that transforms any room.</p>
                  </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Check className="text-green-600" /> Bundle Summary:
              </h3>
              <div className="grid md:grid-cols-2 gap-y-3 gap-x-8">
                  <ChecklistItem text="50+ Unique Printable Templates" />
                  <ChecklistItem text="Options for kids and adults" />
                  <ChecklistItem text="Uses only paper, scissors, and glue" />
                  <ChecklistItem text="Digital format: print as many as you need" />
                  <ChecklistItem text="Perfect for bulk gifting (Teachers, Neighbors)" />
                  <ChecklistItem text="Simple assembly instructions included" />
                  <ChecklistItem text="Organized by categories (Boxes, Cards, Tags)" />
                  <ChecklistItem text="Instant access after purchase" />
                  <ChecklistItem text="7-Day Money-Back Guarantee" />
                  <li className="flex items-start gap-2 text-slate-700 bg-yellow-50 p-2 rounded-lg -ml-2">
                      <div className="mt-1 min-w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 text-red-900 shadow-sm">
                          <Gift size={12} strokeWidth={3} />
                      </div>
                      <span className="font-bold text-red-800">+3 EXCLUSIVE BONUSES (Games, Recipes & Decor)</span>
                  </li>
              </div>
            </div>

          </div>
        </section>

        {/* BONUS SECTION */}
        <section className="py-16 px-4 bg-red-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-10">
                  <span className="bg-yellow-400 text-red-900 font-bold px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-wider shadow-lg">Premium Plan Only</span>
                  <h2 className="text-2xl md:text-5xl font-extrabold mt-6 mb-4 leading-tight">PLUS 3 EXCLUSIVE BONUSES <br/>TO MAKE YOUR HOLIDAY MERRIER</h2>
                  <p className="text-red-200 text-base md:text-lg">Fun activities for the whole family</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  <BonusCard 
                      imageSrc={bonusReceitas}
                      title="FUN CHRISTMAS RECIPES"
                      subtitle="FOR KIDS"
                      desc="Easy recipes to make with children: Reindeer Cookies, Hot Cocoa Bombs, and Cupcakes!"
                      price="15.00"
                  />
                  <BonusCard 
                      imageSrc={bonusJogos}
                      title="CHRISTMAS GAMES"
                      subtitle="PRINTABLE PACK"
                      desc="Scavenger Hunt, Christmas Bingo, Memory Game. Print and play on Christmas Eve!"
                      price="12.00"
                  />
                  <BonusCard 
                      imageSrc={bonusDecoracao}
                      title="EXTRA DECOR PACK"
                      subtitle="DIY HOME"
                      desc="More DIY templates, customizable cards, and premium gift tags!"
                      price="10.00"
                  />
              </div>
              
              <div className="mt-12 text-center flex flex-col items-center w-full">
                  <p className="text-lg md:text-2xl font-bold text-yellow-300 animate-pulse mb-6 px-4">
                      TOTAL BONUS VALUE: $37.00 — TODAY IT'S FREE! 🎁
                  </p>
                  <div className="w-full px-4 md:w-auto">
                      <Button 
                      onClick={scrollToPricing} 
                      className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black text-lg md:text-xl py-6 md:py-8 w-full md:px-12 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.6)] transform transition animate-scale-pulse hover:scale-110 whitespace-normal h-auto leading-tight"
                      >
                          I WANT THE BONUSES! 🎁
                      </Button>
                  </div>
              </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-12 md:py-16 px-4 bg-slate-100">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-10">
              <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl shadow-xl mb-8 transform hover:scale-105 transition-transform">
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-1 text-red-100">⏰ OFFER EXPIRES IN:</div>
                  <div className="text-3xl md:text-5xl font-mono font-black tracking-widest text-white drop-shadow-md">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                  Choose Your Plan & <br/><span className="text-red-600">Start Crafting Today</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
              
              {/* Basic Plan ($9.90) */}
              <Card className="order-1 border border-slate-200 shadow-sm bg-white hover:border-slate-300 transition-all flex flex-col relative overflow-hidden group">
                <CardHeader className="text-center pb-4 border-b border-slate-100 bg-slate-50">
                  <CardTitle className="text-lg md:text-xl font-bold text-slate-600">Basic Starter Kit</CardTitle>
                  <CardDescription className="text-xs md:text-sm">Essentials only</CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-6 flex flex-col">
                  <div className="text-3xl md:text-4xl font-extrabold text-slate-700 mb-2">$ 9<span className="text-lg">.90</span></div>
                  
                  <ul className="text-left space-y-3 mb-6 mt-4">
                    <Feature text="Candy Holder Templates" />
                    <Feature text="Ready-to-print PDF files" />
                    <Feature text="Instant Access" />
                  </ul>
                  
                  <Button 
                    onClick={() => setIsUpsellModalOpen(true)}
                    className="w-full bg-green-800 hover:bg-green-900 text-white font-bold text-base md:text-lg py-6 shadow-sm animate-scale-pulse hover:scale-110 whitespace-normal h-auto leading-tight" size="lg">
                    BUY BASIC KIT
                  </Button>
                  <div className="mt-4 flex justify-center opacity-70"><PagamentoSeguro /></div>
                </CardContent>
              </Card>

              {/* Premium Plan ($19.90) */}
              <Card className="order-2 border-4 border-yellow-400 shadow-2xl relative bg-white flex flex-col z-10 overflow-visible">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 rounded-t-lg"></div>
                
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-full text-center z-20">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-8 py-2 text-xs md:text-sm font-bold uppercase tracking-wide shadow-lg border-2 border-white whitespace-nowrap">
                    🎅 Recommended • Best Value
                  </Badge>
                </div>

                <CardHeader className="text-center pb-4 pt-12 border-b border-red-50 bg-red-50/50 rounded-t-lg">
                  <CardTitle className="text-xl md:text-2xl font-black text-red-600 uppercase tracking-tight">Ultimate Christmas Pack</CardTitle>
                  <CardDescription className="text-red-800 font-medium text-sm">Favors + Games + Bonuses</CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-6 flex flex-col">
                  <div className="text-xs md:text-sm text-slate-500 font-medium mb-1">From <span className="line-through text-red-400">$ 49.00</span> for just:</div>
                  <div className="text-5xl md:text-6xl font-black text-green-600 mb-2 tracking-tight drop-shadow-sm">$ 19<span className="text-2xl font-bold text-green-700">.90</span></div>
                  <div className="text-xs text-green-700 font-medium bg-green-100 inline-block px-3 py-1 rounded-full mb-6 mx-auto">One-time payment • Lifetime Access</div>
                  
                  <ul className="text-left space-y-3 mb-8 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <Feature text="ALL Gift Templates" highlighted />
                    <Feature text="Editable Files (Canva/PDF)" highlighted />
                    <Feature text="Printing Instructions included" highlighted />
                    <Feature text="7-Day Guarantee" highlighted />
                    
                    <div className="my-3 border-t border-slate-200"></div>
                    
                    <Feature text="BONUS 1: Fun Recipes" yellow />
                    <Feature text="BONUS 2: Family Christmas Games" yellow />
                    <Feature text="BONUS 3: Extra Decor Pack" yellow />
                  </ul>
                  
                  {/* PLEASE UPDATE THE LINK BELOW WITH YOUR US PAYMENT LINK */}
                  <a href="#" onClick={(e) => { e.preventDefault(); alert("Please replace this link with your US Payment Gateway URL"); }} className="w-full no-underline">
                    <Button className="w-full bg-green-500 hover:bg-green-400 text-white border-b-4 border-green-700 font-black text-lg md:text-xl py-8 shadow-xl rounded-lg animate-scale-pulse hover:scale-110 transform transition active:border-b-0 active:translate-y-1 whitespace-normal h-auto leading-tight">
                      GET THE ULTIMATE PACK
                    </Button>
                  </a>
                  <p className="text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                    <ShieldCheck size={14} className="text-green-600" /> Secure Checkout • 7-Day Guarantee
                  </p>
                  <div className="mt-4 flex justify-center"><PagamentoSeguro /></div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-lg md:text-xl shadow-lg mb-10 transform -rotate-1">
                  Families loved it! ⭐⭐⭐⭐⭐
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                  <EnhancedTestimonial 
                      name="Sarah M."
                      role="Mom & Entrepreneur"
                      text="I thought these were just simple favors, but the pack is SO complete. The quality of the files is impeccable. It made my holiday prep so much easier!"
                      observation="The box templates alone are worth it, and there are designs I can use for next year too. Amazing!"
                      initials="SM"
                      color="bg-red-100 text-red-600"
                  />
                  <EnhancedTestimonial 
                      name="Emily J."
                      role="Teacher"
                      text="I bought the full pack for my classroom and it was worth every penny. The games were a hit! My students loved the little treats."
                      initials="EJ"
                      color="bg-blue-100 text-blue-600"
                  />
                  <EnhancedTestimonial 
                      name="Carol Davis"
                      role="Grandmother"
                      text="The files are perfectly sized. I just printed them at the local shop and cut them at home. Saved so much on grandkids' gifts."
                      initials="CD"
                      color="bg-green-100 text-green-600"
                  />
                  <EnhancedTestimonial 
                      name="Patricia Lee"
                      role="Mom of 3"
                      text="Made the candy holders for the whole extended family. Everyone complimented the creativity. Beautiful designs!"
                      initials="PL"
                      color="bg-yellow-100 text-yellow-600"
                  />
              </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800 flex items-center justify-center gap-2">
              <span className="text-red-600">?</span> Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            <FAQItem 
              question="How do I access the files after purchase?" 
              answer="As soon as your payment is confirmed, you will receive an automated email with the download link. It's instant!" 
            />
            <FAQItem 
              question="What payment methods are accepted?" 
              answer="We accept all major credit cards and PayPal. Access is granted immediately." 
            />
            <FAQItem 
              question="How does the 7-day guarantee work?" 
              answer="It's simple: if for any reason you don't love the material, just email us within 7 days and we will refund 100% of your money. No questions asked." 
            />
            <FAQItem 
              question="Will I receive physical products?" 
              answer="No. This product is 100% digital. You receive high-quality PDF files via email to download and print as many times as you want." 
            />
            <FAQItem 
              question="What paper should I use for printing?" 
              answer="For the boxes and cards, we recommend cardstock or thicker paper (65lb/180g or heavier) for durability. for games and coloring pages, standard printer paper works perfectly." 
            />
          </Accordion>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Enhanced Card Background */}
            <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border-2 border-yellow-200 shadow-xl flex flex-col md:flex-row items-center gap-10">
                <div className="relative shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-green-800 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-lg relative z-10">
                      <div className="text-center text-white">
                          <span className="block text-5xl md:text-6xl font-black">7</span>
                          <span className="block text-xs md:text-sm font-bold tracking-widest uppercase">Days</span>
                      </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-green-200 rounded-full transform scale-110 -z-0 blur-sm"></div>
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">7-Day Unconditional Guarantee</h2>
                  <h3 className="text-lg md:text-xl font-bold text-green-600 mb-6">Your Investment is 100% Protected!</h3>
                  
                  <div className="space-y-3">
                      <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-yellow-100">
                        <div className="mt-1 w-5 h-5 bg-green-500 rounded text-white flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4}/></div>
                        <p className="text-sm text-slate-600 text-left"><span className="font-bold text-slate-800">Risk-Free Trial:</span> Download, view, and use the material for a full 7 days.</p>
                      </div>
                      <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-yellow-100">
                        <div className="mt-1 w-5 h-5 bg-green-500 rounded text-white flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4}/></div>
                        <p className="text-sm text-slate-600 text-left"><span className="font-bold text-slate-800">Full Refund:</span> If you don't love it, we refund 100% of your money.</p>
                      </div>
                  </div>
                </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                  onClick={scrollToPricing}
                  className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-8 py-6 rounded-full text-lg shadow-md whitespace-normal h-auto leading-tight"
              >
                  GET IT RISK-FREE NOW
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t-4 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center gap-2 mb-6 text-slate-300">
              <ShieldCheck /> Secure Site
            </div>
            <p className="mb-4">&copy; {new Date().getFullYear()} Creative Christmas. All rights reserved.</p>
            <p className="text-xs text-slate-600 max-w-2xl mx-auto">This site is not part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
          </div>
        </footer>

        <USUpsellModal 
          isOpen={isUpsellModalOpen}
          onClose={() => setIsUpsellModalOpen(false)}
          onConfirm={() => {
              // Replace with your US Payment Link for Upsell
              alert("Redirecting to US Upsell Checkout...");
          }}
          onReject={() => {
             // Replace with your US Payment Link for Basic
             alert("Redirecting to US Basic Checkout...");
          }}
        />
      </div>
    </>
  );
};

// --- Subcomponents ---

const ChecklistItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-2 text-slate-700">
        <div className="mt-1 min-w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
            <Check size={12} strokeWidth={3} />
        </div>
        <span>{text}</span>
    </li>
);

const Feature = ({ text, highlighted = false, yellow = false }: { text: string, highlighted?: boolean, yellow?: boolean }) => {
  let bgClass = 'bg-slate-200 text-slate-500';
  let textClass = 'text-slate-600';

  if (highlighted) {
    bgClass = 'bg-green-100 text-green-600';
    textClass = 'font-semibold text-slate-800';
  }
  
  if (yellow) {
    bgClass = 'bg-yellow-400 text-red-900 shadow-sm';
    textClass = 'font-bold text-red-900 bg-yellow-100 px-2 py-0.5 rounded w-full';
  }

  return (
    <li className={`flex items-start md:items-center gap-3 text-sm ${yellow ? 'mb-2' : ''}`}>
      <div className={`mt-0.5 md:mt-0 min-w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${bgClass}`}>
          <Check size={12} strokeWidth={4} />
      </div>
      <span className={`${textClass} leading-snug`}>{text}</span>
    </li>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
    <AccordionItem value={question} className="border border-slate-200 rounded-lg px-4 bg-white shadow-sm">
        <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-red-600 hover:no-underline py-4 leading-snug">
            {question}
        </AccordionTrigger>
        <AccordionContent className="text-slate-600 pb-4">
            {answer}
        </AccordionContent>
    </AccordionItem>
);

const EnhancedTestimonial = ({ name, role, text, initials, color, observation }: any) => (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:shadow-md transition-shadow">
        <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center font-bold text-lg shrink-0`}>
            {initials}
        </div>
        <div>
            <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-slate-900">{name}</h4>
                <span className="text-xs text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">{role}</span>
            </div>
            <div className="flex text-yellow-400 gap-0.5 mb-3">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
            </div>
            <p className="text-slate-600 text-sm italic leading-relaxed">"{text}"</p>
            {observation && (
                <div className="mt-3 bg-green-50 border-l-4 border-green-400 text-green-800 p-3 rounded-r-lg text-xs">
                    <p className="font-bold">Note:</p>
                    <p className="italic">"{observation}"</p>
                </div>
            )}
        </div>
    </div>
);

const BonusCard = ({ imageSrc, title, subtitle, desc, price }: any) => (
    <div className="bg-red-900/80 backdrop-blur-sm border-2 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)] rounded-xl p-4 text-center hover:bg-red-900 transition-colors transform hover:-translate-y-1 flex flex-col">
        <img src={imageSrc} alt={title} className="rounded-lg mb-4 w-full aspect-square object-cover border-2 border-yellow-400/50" />
        <div className="flex-grow">
            <h3 className="font-bold text-lg leading-tight text-white">{title}</h3>
            <h4 className="font-bold text-lg leading-tight text-yellow-300 mb-3">{subtitle}</h4>
            <p className="text-sm text-red-100 mb-4 h-16 leading-snug">{desc}</p>
        </div>
        <div className="border-t border-red-500/50 pt-4 mt-auto">
            <span className="text-red-300 line-through text-sm block">$ {price}</span>
            <span className="text-white font-bold text-lg bg-red-600 px-3 py-1 rounded-lg inline-block mt-1 shadow-sm">FREE TODAY!</span>
        </div>
    </div>
);

const PagamentoSeguro = () => (
    <div className="flex items-center gap-2 opacity-80 scale-90">
        <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
        <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
        <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="h-6" />
        <div className="flex flex-col text-[10px] leading-tight text-slate-500 text-left ml-1">
            <span className="font-bold flex items-center gap-1"><Lock size={8} /> Payment</span>
            <span>100% Secure</span>
        </div>
    </div>
);

export default USChristmasLanding;