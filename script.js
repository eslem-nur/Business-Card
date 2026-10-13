    // ========== TEMA TOGGLE ==========
    const themeToggle = document.getElementById('themeToggle');
    
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
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        showToast(`${newTheme === 'dark' ? 'Koyu Mod' : 'Aydınlık Mod'} Aktif!`);
    });
    
    // Sayfa yüklendiğinde temayı yükle
    loadTheme();

    // ========== DİĞER FONKSİYONLAR ==========
    // changeDesign, flipCard, copyEmail, saveContact, shareCard, showToast...
    // ... diğer fonksiyonlar aynı kalacak

// ========== 3 TASARIM ARASINDA GEÇİŞ ==========
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

        function changeDesign(index) {
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
        }

        // ========== KART ÇEVİRME (FIX EDİLDİ) ==========
        function flipCard() {
            const frame = document.getElementById('cardFrame');
            frame.classList.toggle('is-flipped');
        }

        // ========== EMAIL KOPYALA ==========
        function copyEmail() {
            const email = 'eslemnur-official@proton.me';
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast('E-posta kopyalandı! ✓');
                });
            } else {
                const tmp = document.createElement('input');
                document.body.appendChild(tmp);
                tmp.value = email;
                tmp.select();
                document.execCommand('copy');
                document.body.removeChild(tmp);
                showToast('E-posta kopyalandı! ✓');
            }
        }

        // ========== KİŞİYİ KAYDET (.vcf) ==========
        function saveContact() {
            const vcf = `BEGIN:VCARD
VERSION:3.0
FN:Eslem Nur Çetin
TITLE:Web Developer & Programmer
EMAIL;TYPE=INTERNET:eslemnur-official@proton.me
URL:https://eslem-nur.github.io/official/index.html
END:VCARD`;

            const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Eslem_Nur_Cetin.vcf';
            a.click();
            URL.revokeObjectURL(url);
            
            showToast('Kişi dosyası indirildi!');
        }

        // ========== PAYLAŞ ==========
        function shareCard() {
            const shareData = {
                title: 'Eslem Nur Çetin - Web Developer',
                text: 'Dijital iş kartıma göz atın!',
                url: 'https://eslem-nur.github.io/Business-Card/'
            };

            if (navigator.share) {
                navigator.share(shareData).catch(() => {});
            } else {
                navigator.clipboard.writeText(shareData.url)
                    .then(() => showToast('Link kopyalandı! ✓'));
            }
        }

        // ========== TOAST ==========
        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMessage').textContent = message;
            toast.classList.add('show');
            
            clearTimeout(toast.timer);
            toast.timer = setTimeout(() => {
                toast.classList.remove('show');
            }, 2500);
        }