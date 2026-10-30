export const THEME_STORAGE_KEY = 'theme';

/**
 * Se ejecuta antes del primer pintado para aplicar el tema guardado (o el del sistema)
 * y evitar el parpadeo entre claro y oscuro.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;
