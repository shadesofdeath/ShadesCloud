import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Edge Blocker',
    description: 'Microsoft Edge ve Webview engellemenize olanak tanıyan basit bir uygulama.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.0',
    size: '212 KB',
    features: [
      'Hızlı',
      'Basit kullanıcı arayüzü.',
      'Komut satırı desteği',
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Ölü sistemde gene çalışır',
      cpu: 'Düşük CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/EdgeBlocker/EdgeBlocker.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/EdgeBlocker/SourceCode.zip',
  },
  {
    title: 'Net Blocker',
    description: 'İnternetinizi kullanan uygulamaların internet kullanımını bloklayın.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.0',
    size: '208 KB',
    features: [
      'Hızlı',
      'Basit kullanıcı arayüzü, gereksiz şeyler yok, sadece çalışıyor.'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Ölü sistemde gene çalışır',
      cpu: 'Düşük CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/NetBlocker/NetBlocker.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/NetBlocker/SourceCode.zip',
  },
  {
    title: 'BuzzHeavier Uplaoder',
    description: 'Hız sınırlaması yok, dosya boyut sınırı yok! İstediğin kadar dosya upload et.',
    tech: [
      { name: 'C#' },
    ],
    version: '1.0',
    size: '6.30 MB',
    features: [
      'Hızlı',
      'Basit kullanıcı arayüzü, gereksiz şeyler yok, sadece çalışıyor.',
      'Dosya boyutu sınırı yok, indirme hızı sınırı yok.',
      'Kesin Sıfır Kayıt Politikası - Ne yüklediğiniz veya indirdiğiniz bizim için önemli değil',
      'Dosyalar son 45 gün içinde indirildiği sürece sonsuza kadar saklanacaktır.'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C#',
      ram: 'Ölü sistemde gene çalışır',
      cpu: 'Düşük CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/BuzzHeavierUplaoder/BuzzHeavierUplaoder.zip',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/BuzzHeavierUplaoder/SourceCode.zip',
  },
  {
    title: 'Taskbar Volume Control',
    description: 'Farenizi taskbar üzerine gelince scroll ile ses seviyesini hızlıca değiştirmenizi sağlayan küçük arka plan uygulaması.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.0',
    size: '85 KB',
    features: [
      'Hızlı ses kontrolü',
      'Minimal kaynak kullanımı'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Ölü sistemde gene çalışır',
      cpu: 'Düşük CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/TaskbarVolumeControl/taskbar_volume_control.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/TaskbarVolumeControl/SourceCode.zip',
  },
  {
    title: 'SnapMaster',
    description: 'Minimal ve az kaynak kullanan bir ekran alıntısı aracıdır. 3 farklı şekilde alıma izin verir, Tam ekran alıntısı, Pencere alıntısı, Alan seçimi ve bu 3 moda ek olarak otomatik 0x0.st sitesine upload edebilme seçeneği sunar.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.1',
    size: '236 KB',
    features: [
      'Tam ekran alıntısı',
      'Pencere alıntısı',
      'Alan seçimi',
      'Otomatik 0x0.st upload desteği',
      'Minimal kaynak kullanımı',
      'Basit ve kullanıcı dostu arayüz'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Ölü sistemde gene çalışır',
      cpu: 'Düşük CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/SnapMaster/SnapMaster.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/SnapMaster/SourceCode.zip',
  },
  {
    title: 'SystemNetTry',
    description: 'Taskbar tray uygulaması olarak çalışan bu uygulama ikon üzerine geldiğinizde size anlık İndirme, Yükleme, Gecikme ve Sinyal Gücü bilgilerini verir.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.0',
    size: '453 KB',
    features: [
      'Anlık indirme hızı takibi',
      'Anlık yükleme hızı takibi',
      'Network gecikmesi ölçümü',
      'Sinyal gücü göstergesi',
      'Tray ikonu üzerinde bilgi gösterimi',
      'Düşük sistem kaynağı kullanımı'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Minimum 100MB RAM',
      cpu: 'Düşük CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/SystemNetTray/SystemNetTry.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/SystemNetTray/SourceCode.zip',
  },
  {
    title: 'AutoFocusWindow',
    description: 'Arka plan uygulaması olarak çalışan bu uygulama ekranda açık olan pencerelerin üzerine gelerek direk o pencereye geçiş yapmanıza olanak tanır.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.0',
    size: '82 KB',
    features: [
      'Otomatik pencere odaklama',
      'Mouse takibi',
      'Arka planda sessiz çalışma',
      'Minimal sistem kaynağı kullanımı',
      'Tüm Windows pencerelerini destekler'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Ölü sistemde gene çalışır',
      cpu: 'Minimal CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/AutoFocusWindow/AutoFocusWindow.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/AutoFocusWindow/SourceCode.zip',
  },
  {
    title: 'KeyLockIndicator',
    description: 'Arka plan uygulaması olarak çalışan bu uygulama CAPS LOCK, NUM LOCK ve SCROLL LOCK durumlarını anlık ekranda widget olarak gösterir.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.1',
    size: '87 KB',
    features: [
      'CAPS LOCK durum göstergesi',
      'NUM LOCK durum göstergesi',
      'SCROLL LOCK durum göstergesi',
      'Şeffaf widget tasarımı',
      'Minimal sistem kaynağı kullanımı',
      'Özelleştirilebilir konum'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Ölü sistemde gene çalışır',
      cpu: 'Minimal CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/KeyLockIndicator/KeyLockIndicator.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/KeyLockIndicator/SourceCode.zip',
  },
  {
    title: 'Günün Sözü',
    description: 'Taskbar tray ikonu olarak çalışan üzerine gelince özlü sözler gösteren ve 10 saniyede bir yeni söz gösteren basit bir uygulama.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.0',
    size: '174 KB',
    features: [
      'Rastgele özlü sözler',
      '10 saniyede bir otomatik değişim',
      'Tray icon üzerinde gösterim',
      'Geniş söz veritabanı',
      'Minimal sistem kaynağı kullanımı'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Ölü sistemde gene çalışır',
      cpu: 'Minimal CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/G%C3%BCn%C3%BCnS%C3%B6z%C3%BC/G%C3%BCn%C3%BCnS%C3%B6z%C3%BC.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/G%C3%BCn%C3%BCnS%C3%B6z%C3%BC/SourceCode.zip',
  },
  {
    title: 'Power Plan Switcher',
    description: 'Taskbar tray ikonu olarak çalışan sistem güç planları arasında hızlıca geçiş yapmayı sağlayan basit bir uygulama.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.0',
    size: '100 KB',
    features: [
      'Hızlı güç planı değiştirme',
      'Tüm Windows güç planlarını destekler',
      'Tray icon üzerinden kolay erişim',
      'Minimal sistem kaynağı kullanımı',
      'Özel güç planı desteği'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Ölü sistemde gene çalışır',
      cpu: 'Minimal CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/PowerPlanSwitcher/power_plan_switcher.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/PowerPlanSwitcher/SourceCode.zip',
  },
  {
    title: 'BoostMyPc',
    description: 'Taskbar tray ikonu olarak çalışan RAM kullanımını ve çöp dosya boyutunu gösteren ve tek tıkla çöp dosyaları ve ram kullanımını düşüren basit bir uygulama.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.0',
    size: '309 KB',
    features: [
      'Anlık RAM kullanımı takibi',
      'Çöp dosya boyutu gösterimi',
      'Tek tıkla RAM optimizasyonu',
      'Otomatik çöp dosya temizleme',
      'Tray icon üzerinden kolay erişim',
      'Detaylı sistem bilgileri'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Minimum 100MB RAM',
      cpu: 'Orta düzey CPU kullanımı'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/OneClickBoost/OneClickBoost.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/OneClickBoost/SourceCode.zip',
  },
  {
    title: 'WeatherTray',
    description: 'Taskbar tray ikonu olarak çalışan konumunuzu otomatik tespit edip bazı hava durumunu bilgilerini gösteren basit bir uygulama.',
    tech: [
      { name: 'C++' },
    ],
    version: '1.0',
    size: '208 KB',
    features: [
      'Otomatik konum tespiti',
      'Anlık hava durumu bilgisi',
      'Sıcaklık gösterimi',
      'Hava durumu tahmini',
      'Tray icon üzerinden kolay erişim',
      'Otomatik güncelleme'
    ],
    technicalDetails: {
      platform: 'Windows',
      requirements: 'Windows 10 ve üzeri',
      language: 'C++',
      ram: 'Minimum 75MB RAM',
      cpu: 'Düşük CPU kullanımı',
      internet: 'İnternet bağlantısı gereklidir'
    },
    download: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/WeatherTray/weather_tray.exe',
    sourceCode: 'https://github.com/shadesofdeath/shadesofdeath/raw/refs/heads/main/downloads/WeatherTray/SourceCode.zip',
  }
];