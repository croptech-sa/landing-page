import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import Threads from './Threads';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden py-8" dir="rtl">
      {/* Background */}
      <div className="absolute inset-0">
        <Threads
          color={[0.216, 0.443, 0.216]}
          amplitude={0.6}
          distance={0.15}
          enableMouseInteraction={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-16">
          {/* Right Side: Logo, Description, Links */}
          <div className="text-right">
            <div className="mb-4 flex justify-end">
              <img
                src="/logo.svg"
                alt="شعار كروبتك"
                className="w-16 h-16"
              />
            </div>
            <p className="text-sm md:text-base text-white/90 mb-5">
              نحن هنا لنحوّل أهدافك البيئية إلى أثر ملموس… وموثّق بكل شفافية.
            </p>
            <h4 className="text-sm font-medium text-white/70 mb-3">روابط سريعة</h4>
            <nav className="flex flex-wrap justify-start gap-x-3 gap-y-2 text-sm">
              <a href="#" className="text-white/80 hover:text-[#377138]">الرئيسية</a>
              <span className="text-white/30">–</span>
              <a href="#" className="text-white/80 hover:text-[#377138]">قصتنا</a>
              <span className="text-white/30">–</span>
              <a href="#" className="text-white/80 hover:text-[#377138]">كيف نعمل</a>
              <span className="text-white/30">–</span>
              <a href="#" className="text-white/80 hover:text-[#377138]">ابدأ الآن</a>
              <span className="text-white/30">–</span>
              <a href="#" className="text-white/80 hover:text-[#377138]">تواصل معنا</a>
            </nav>
          </div>

          {/* Left Side: Contact Info */}
          <div className="text-right">
            <h4 className="text-sm font-medium text-white/70 mb-4">معلومات التواصل</h4>
            <p className="text-white/90 text-sm mb-1">الرياض – منشآت – حي الخالدية – مكتب رقم 2</p>
            <p className="text-white/90 text-sm mb-1">(+966) 500000000</p>
            <p className="text-white/90 text-sm mb-5">contact@croptech.com.sa</p>
            <h5 className="font-medium text-white/70 mb-2 text-sm">تابعنا على:</h5>
            <div className="flex gap-2">
              <a href="https://x.com/croptech_ksa" target="_blank" rel="noreferrer" className="w-7 h-7 bg-white/10 rounded-md flex items-center justify-center hover:bg-[#377138]">
                <Twitter className="w-3.5 h-3.5 text-white" />
              </a>
              <a href="https://www.linkedin.com/company/croptech-ksa/" target="_blank" rel="noreferrer" className="w-7 h-7 bg-white/10 rounded-md flex items-center justify-center hover:bg-[#377138]">
                <Linkedin className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/20 mt-6 pt-3 text-center">
          <p className="text-white/70 text-sm">© CropTech 2024 – جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
