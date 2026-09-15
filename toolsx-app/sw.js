const CACHE = 'toolsx-app-v1';
const PRECACHE_URLS = ["./", "index.html", "app.css", "app.js", "manifest.json", "tools/gst-invoice-generator-for-business.html", "tools/scan-karein-quantum-defense-aur-suite.html", "tools/smart-text-analyser-apna-tax-analyse.html", "tools/file-size-composer.html", "tools/render-karein-audio-visualizer-waveform.html", "tools/craft-karein-custom-thumbnail-youtube.html", "tools/3d-curved-showcase-studio-studio.html", "tools/privacyshield-free-online-privacy.html", "tools/design-karein-fantasy-character-online.html", "tools/image-to-text-converter-online-free.html", "tools/free-ai-signature-generator-digital.html", "tools/ai-code-detector-free-online-tool-to.html", "tools/stylish-name-fancy-font-generator-free.html", "tools/apply-karein-pro-photo-effects-ai.html", "tools/produce-karein-ai-music-prompts-fast-ai.html", "tools/apni-song-ko-video-mein-badle-ai-se.html", "tools/free-emi-calculator-with-down-payment.html", "tools/banayein-free-ai-resume-online-live.html", "tools/video-to-mp3-converter-free.html", "tools/audit-karein-code-bugs-aur-security-ai.html", "tools/visualize-karein-audio-ke-saath-laser.html", "tools/free-background-remover-remove-image.html", "tools/free-salary-slip-generator-online-for.html", "tools/cinemaforge-ai-movie-poster-studio.html", "tools/create-hd-wallpaper-without-sign-up-ai.html", "tools/choreograph-karein-pro-human-dancer.html", "tools/video-analyzer-thumbnail-download-tags.html", "tools/free-ai-video-generator-text-to-video.html", "tools/convert-karein-gaane-ko-video-mein.html", "tools/sync-karein-beats-ke-saath-ai-dance.html", "tools/compress-karein-image-size-online-free.html", "tools/free-pdf-tools-online-compress-merge.html", "tools/remix-karein-gaane-ko-dj-video-mein-ai.html", "tools/ringtone-maker-15-music-styles-voice.html", "tools/apni-photo-ko-dance-video-banayein-lip.html", "tools/generate-karein-text-se-ai-image-free.html", "tools/transform-karein-url-ko-image-mein-ai.html", "tools/free-csv-to-json-json-to-csv-converter.html", "tools/live-code-editor-preview-html-css-js.html", "tools/ailab-photo-studio-pro-advanced-online.html", "tools/boost-karein-seo-meta-tag-generator-ai.html", "tools/qr-code-generator-instagram-whatsapp.html", "tools/free-bento-grid-generator-visual-html.html", "tools/smart-topic-researcher-page-generator.html", "tools/check-domain-name-availability-free-com.html", "tools/secure-csv-data-cleaner-online-remove.html", "tools/banao-personal-greeting-card-ai-studio.html", "tools/free-passport-photo-maker-online-ai.html", "tools/ai-lab-analog-tape-deck-studio-ai-music.html", "tools/extract-karein-url-from-image-instantly.html", "tools/mix-karein-pro-dj-soundbox-apne-phone.html", "tools/edit-karein-image-compress-enhance-crop.html"];

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(PRECACHE_URLS); }).catch(function(){}));
});
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
    }).then(function(){ return self.clients.claim(); })
  );
});
self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function(cached){
      if(cached) return cached;
      return fetch(e.request).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return res;
      }).catch(function(){ return cached; });
    })
  );
});
