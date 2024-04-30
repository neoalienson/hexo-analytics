module.exports = (hexo) => () => {
    if (!hexo.config.analytics) {
        return;
    }
    if (hexo.config.analytics.microsoft_clarity) {
        return inject_microsoft_clarity(hexo.config.analytics.microsoft_clarity);
    }
  };

function inject_microsoft_clarity(config) {
    const { enable, project_id } = config;
    if (!enable) {
        return;
    }

    if (!project_id) {
        throw new Error("project_id must be defined");
        return;
    }

    return `<script type="text/javascript">
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${project_id}");
    </script>
    `;
}

// body
/*
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MNFPK24B"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->    
    */

// head
/*
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3DZR3TQYCY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3DZR3TQYCY');
</script>    
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MNFPK24B');</script>
    <!-- End Google Tag Manager -->
*/

/*

    */