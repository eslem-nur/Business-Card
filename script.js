// ========== DİL AYARLARI & ÇEVİRİ SÖZLÜĞÜ ==========
const translations = {
    tr: {
        themeToggle: 'Temayı Değiştir',
        themeDark: 'Koyu Mod Aktif!',
        themeLight: 'Aydınlık Mod Aktif!',
        flipHint: 'Çevir',
        connections: 'Bağlantılarım',
        portfolio: 'Portfolyo',
        github: 'GitHub',
        linktree: 'Linktree',
        email: 'Email',
        saveContact: 'Kişiyi Kaydet',
        share: 'Paylaş',
        emailCopied: 'E-posta kopyalandı! ✓',
        contactSaved: 'Kişi dosyası indirildi!',
        linkCopied: 'Link kopyalandı! ✓',
        shareMenu: 'Paylaşım menüsü açıldı!',
        errorOccured: 'Hata oluştu, tekrar deneyin!',
        contactTitle: 'Theology Student & Web Developer',
        designPrefix: 'Tasarım '  
    },
    de: {
        themeToggle: 'Theme wechseln',
        themeDark: 'Dunkler Modus aktiv!',
        themeLight: 'Helles Modus aktiv!',
        flipHint: 'Drehen',
        connections: 'Meine Verbindungen',
        portfolio: 'Portfolio',
        github: 'GitHub',
        linktree: 'Linktree',
        email: 'E-Mail',
        saveContact: 'Kontakt speichern',
        share: 'Teilen',
        emailCopied: 'E-Mail kopiert! ✓',
        contactSaved: 'Kontaktdatei heruntergeladen!',
        linkCopied: 'Link kopiert! ✓',
        shareMenu: 'Freigabemenü geöffnet!',
        errorOccured: 'Fehler aufgetreten, bitte erneut versuchen!',
        contactTitle: 'Theologiestudentin & Webentwicklerin',
        designPrefix: 'Design '  
    },
    fr: {
        themeToggle: 'Changer le thème',
        themeDark: 'Mode sombre activé!',
        themeLight: 'Mode clair activé!',
        flipHint: 'Retourner',
        connections: 'Mes connexions',
        portfolio: 'Portfolio',
        github: 'GitHub',
        linktree: 'Linktree',
        email: 'E-mail',
        saveContact: 'Enregistrer le contact',
        share: 'Partager',
        emailCopied: 'E-mail copié! ✓',
        contactSaved: 'Fichier de contact téléchargé!',
        linkCopied: 'Lien copié! ✓',
        shareMenu: 'Menu de partage ouvert!',
        errorOccured: 'Erreur survenue, veuillez réessayer!',
        contactTitle: 'Étudiante en théologie & Développeuse web',
        designPrefix: 'Design '  
    },
    en: {
        themeToggle: 'Toggle Theme',
        themeDark: 'Dark Mode Active!',
        themeLight: 'Light Mode Active!',
        flipHint: 'Flip',
        connections: 'My Connections',
        portfolio: 'Portfolio',
        github: 'GitHub',
        linktree: 'Linktree',
        email: 'Email',
        saveContact: 'Save Contact',
        share: 'Share',
        emailCopied: 'Email copied! ✓',
        contactSaved: 'Contact file downloaded!',
        linkCopied: 'Link copied! ✓',
        shareMenu: 'Share menu opened!',
        errorOccured: 'An error occurred, please try again!',
        contactTitle: 'Theology Student & Web Developer',
        designPrefix: 'Design '  
    },
    ar: {
        themeToggle: 'تغيير المظهر',
        themeDark: 'تم تفعيل الوضع الداكن!',
        themeLight: 'تم تفعيل الوض الفاتح!',
        flipHint: 'اقلب',
        connections: 'روابطي',
        portfolio: 'المعرض',
        github: 'جيت هب',
        linktree: 'لينكتري',
        email: 'البريد الإلكتروني',
        saveContact: 'حفظ جهة الاتصال',
        share: 'مشاركة',
        emailCopied: 'تم نسخ البريد الإلكتروني! ✓',
        contactSaved: 'تم تحميل ملف جهة الاتصال!',
        linkCopied: 'تم نسخ الرابط! ✓',
        shareMenu: 'تم فتح قائمة المشاركة!',
        errorOccured: 'حدث خطأ، يرجى المحاولة مرة أخرى!',
        contactTitle: 'طالبة علم اللاهوت ومطورة ويب',
        designPrefix: 'التصميم '  
    }
};

// ========== DİL TESPİTİ ==========
function getCurrentLanguage() {
    const htmlLang = document.documentElement.lang || 'tr';
    const validLangs = ['tr', 'de', 'fr', 'en', 'ar'];
    return validLangs.includes(htmlLang) ? htmlLang : 'tr';
}

// ========== ÇEVİRİ YÜKLEME ==========
function loadTranslations() {
    const lang = getCurrentLanguage();
    const t = translations[lang];
    
    // Toast elementini güncelle
    const toast = document.getElementById('toast');
    
    // HTML başlıklarını güncelle (opsiyonel, gerekliyse)
    document.title = `${t.portfolio} | Eslem Nur Çetin`;
    
    // Flip hint güncelle (ön yüz)
    const flipHint = document.querySelector('.flip-hint');
    if (flipHint) {
        flipHint.innerHTML = `<i class="fas fa-rotate"></i> ${t.flipHint}`;
    }
    
    // Back title güncelle (arka yüz overlay)
    const backTitle = document.querySelector('.back-title');
    if (backTitle) {
        backTitle.textContent = t.connections;
    }
    
    // Design selector dot title'ları güncelle
    const designDots = document.querySelectorAll('.design-dot');
    designDots.forEach((dot, index) => {
        dot.setAttribute('title', `تصميم ${index + 1}`);
    });
    
    // Arapça için RTL desteği
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        
        // Design dot'ların sırasını tersine çevir
        const dotsContainer = document.querySelector('.design-selector');
        if (dotsContainer) {
            dotsContainer.style.flexDirection = 'row-reverse';
        }
    } else {
        document.documentElement.dir = 'ltr';
    }
    
    return t;
}

// ========== TEMA TOGGLE ==========
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const t = translations[getCurrentLanguage()];
    
    // ARIA label güncelle
    themeToggle.setAttribute('aria-label', t.themeToggle);
    
    // LocalStorage'dan tema yükle
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    // İkon güncelle
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    // Tema değiştir
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        const currentT = translations[getCurrentLanguage()];
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        showToast(`${newTheme === 'dark' ? currentT.themeDark : currentT.themeLight}`);
    });
    
    loadTheme();
}

// ========== 4 TASARIM ARASINDA GEÇİŞ ==========
function initDesignSelector() {
    // Ön ve arka yüz PNG'lerini buraya yaz!
    const frontDesigns = [
        'Png/Style-1.png',
        'Png/Style-2.png',
        'Png/Style-3.png',
        'Png/Style-4.png'
    ];
    
    const backDesigns = [
        'Png/Style-1-back.png',
        'Png/Style-2-back.png',
        'Png/Style-3-back.png',
        'Png/Style-4-back.png'
    ];
    
    let currentDesign = 0;

    window.changeDesign = function(index) {
        const frontImg = document.getElementById('frontImage');
        const backImg = document.getElementById('backImage');
        const inner = document.getElementById('cardInner');
        const dots = document.querySelectorAll('.design-dot');

        // Yumuşak geçiş animasyonu
        inner.classList.add('fade');

        setTimeout(() => {
            currentDesign = index;
            frontImg.src = frontDesigns[index];
            backImg.src = backDesigns[index];
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            inner.classList.remove('fade');
        }, 300);
    };
}

// ========== KART ÇEVİRME (iOS UYUMLU) ==========
function initCardFlip() {
    const frame = document.getElementById('cardFrame');
    
    function forceFlip() {
        frame.classList.toggle('flipped'); // is-flipped yerine sadece 'flipped'
        
        // Zorla render
        void frame.offsetWidth;
        
        console.log('🔄 Flip:', frame.classList.contains('flipped') ? 'ARKA' : 'ÖN');
    }
    
    frame.addEventListener('click', (e) => {
        e.preventDefault();
        forceFlip();
    });
    
    let touchStartTime;
    
    frame.addEventListener('touchstart', () => {
        touchStartTime = Date.now();
    }, { passive: true });
    
    frame.addEventListener('touchend', (e) => {
        if ((Date.now() - touchStartTime) < 300) {
            e.preventDefault();
            forceFlip();
        }
    }, { passive: false });
    
    window.flipCard = forceFlip;
}
// ========== EMAIL KOPYALA ==========
function initCopyEmail() {
    const email = 'eslemnur-official@proton.me';
    
    window.copyEmail = function() {
        const t = translations[getCurrentLanguage()];
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                showToast(t.emailCopied);
            }).catch(() => {
                fallbackCopy(email, t.emailCopied);
            });
        } else {
            fallbackCopy(email, t.emailCopied);
        }
    };
    
    function fallbackCopy(emailText, successMessage) {
        const tmp = document.createElement('input');
        document.body.appendChild(tmp);
        tmp.value = emailText;
        tmp.select();
        try {
            document.execCommand('copy');
            showToast(successMessage);
        } catch (err) {
            console.error('Copy failed:', err);
        }
        document.body.removeChild(tmp);
    }
}

// ========== KİŞİYİ KAYDET (.vcf) ==========
function initSaveContact() {
    const lang = getCurrentLanguage();
    const t = translations[lang];
    
    window.saveContact = function() {
        const vcf = `BEGIN:VCARD
VERSION:3.0
FN:Eslem Nur Çetin
TITLE:${t.contactTitle}
EMAIL;TYPE=INTERNET:eslemnur-official@proton.me
URL:https://eslem-nur.github.io/official/index.html
END:VCARD`;

        try {
            const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' });
            
            // iOS & Android: Web Share API (Modern Cihazlar)
            if (navigator.share) {
                try {
                    const file = new File([blob], 'Eslem_Nur_Cetin.vcf', { type: 'text/vcard' });
                    
                    navigator.share({
                        files: [file],
                        title: 'Eslem Nur Çetin',
                        text: t.share
                    }).then(() => {
                        console.log('Share successful');
                    }).catch((error) => {
                        console.log('Share cancelled:', error);
                        downloadVcf(blob);
                    });
                    
                    showToast(t.shareMenu);
                    return;
                } catch (shareError) {
                    console.log('Share API not available:', shareError);
                }
            }
            
            downloadVcf(blob);
            
        } catch (error) {
            console.error('VCF creation failed:', error);
            showToast(t.errorOccured);
        }
    };
}

// ========== VCF DOSYASINI İNDİR ==========
function downloadVcf(blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Eslem_Nur_Cetin.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    const t = translations[getCurrentLanguage()];
    showToast(t.contactSaved);
}

// ========== PAYLAŞ ==========
function initShareCard() {
    const t = translations[getCurrentLanguage()];
    
    window.shareCard = function() {
        const shareData = {
            title: 'Eslem Nur Çetin',
            text: t.share,
            url: 'https://eslem-nur.github.io/Business-Card/'
        };

        if (navigator.share) {
            navigator.share(shareData).catch(() => {});
        } else {
            navigator.clipboard.writeText(shareData.url)
                .then(() => showToast(t.linkCopied))
                .catch(() => {});
        }
    };
}

// ========== TOAST ==========
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    const toastMsg = document.getElementById('toastMessage');
    if (!toastMsg) return;
    
    toastMsg.textContent = message;
    toast.classList.add('show');
    
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ========== SAYFA YÜKLENDİĞİNDE BAŞLAT ==========
document.addEventListener('DOMContentLoaded', function() {
    // Dil yüklemesi ilk yapılmalı
    loadTranslations();
    
    // Tüm fonksiyonları başlat
    initThemeToggle();
    initDesignSelector();
    initCardFlip();
    initCopyEmail();
    initSaveContact();
    initShareCard();
});

// ========== HATA KAPSYONU ==========
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

// ADD this to initCardFlip() or at end of script
document.addEventListener('DOMContentLoaded', function() {
    const cardFrame = document.getElementById('cardFrame');
  
  if (cardFrame) {
        cardFrame.addEventListener('touchstart', function() {}, { passive: true });
    }
    
    // Add touch event support for flip
    let startX = 0;
    let endX = 0;
    
    cardFrame.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });
    
    cardFrame.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = Math.abs(startX - endX);
        
        // Swipe gesture to flip (if horizontal swipe > 50px)
        if (diff > 50 && typeof flipCard === 'function') {
            flipCard();
        }
    }, { passive: true });
  
  
});

// ===================================
// BUTON TIKLAMALARINI AYIR (FLIP ENGEL)
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Tüm butonları seç
    const buttons = document.querySelectorAll('.mini-btn, .back-flip-btn, .quick-link');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Parent'a (cardFrame) geçme
        });
    });
});