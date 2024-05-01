module.exports = (hexo) => () => {
    if (!hexo.config.analytics) {
        return '';
    }
    header = '';
    if (hexo.config.analytics.microsoft_clarity) {
        header += inject_microsoft_clarity(hexo.config.analytics.microsoft_clarity);
    }
    if (hexo.config.analytics.google_analytics) {
        header += inject_google_analytics(hexo.config.analytics.google_analytics);
    }
    return header
  };

function inject_microsoft_clarity(config) {
    const { enable, project_id } = config;
    if (!enable) {
        return '';
    }

    if (!project_id) {
        throw new Error("project_id must be defined");
        return '';
    }

    return `<!-- Microsoft Clarity begins-->
    <script type="text/javascript">
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${project_id}");
    </script>
    <!-- Microsoft Clarity ends-->
    `;
}


function inject_google_analytics(config) {
    const { enable, measurement_id } = config;

    if (!enable) {
        return '';
    }

    if (!measurement_id) {
        throw new Error("measurement_id must be defined");
        return '';
    }

    return `<!-- Google tag (gtag.js) begins-->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${measurement_id}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${measurement_id}');
    </script>
    <!-- Google tag (gtag.js) ends-->
    `;
}
