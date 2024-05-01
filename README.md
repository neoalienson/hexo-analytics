# hexo-analytics
A Hexo plugin to enable Google Analytics and Microsoft Clarity. Many themes provide analytics but using plugin decouple the capability from themes.

## Configurations

### Enable the plugin

To enable the plugin add this to your config.yml:
```
analytics:
    google_analytics:
        enable: true
        measurement_id: <your measurement id>
    microsoft_clarity:
        enable: true
        project_id: <your project id under Setting, Overview>
```