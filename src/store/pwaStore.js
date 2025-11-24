import { getItem } from "../localstorage/localstorage";

const isInstalled = localStorage.getItem('installed') === 'true';
let installEvent = null;

export const pwaStore = {
	state: {
		isInstalled: isInstalled,
	},

	init() {
		//si la app se instala, guardo ese dato en el localstorage para eliminar el boton de instalación (en la app)
		window.addEventListener('appinstalled', () => {
			const installBtn = document.querySelector('.install-btn');
			installBtn.style.display = 'none';
			localStorage.setItem('installed', true);
		});

		//elimino el boton de instalar en la web (si en localstorage está instalado)
		if (localStorage.getItem('installed') === 'true') {
			document.addEventListener('DOMContentLoaded', () => {
				const installBtn = document.querySelector('.install-btn');
				installBtn.style.display = 'none';
			})

		}

		window.addEventListener('beforeinstallprompt', (event) => {
			event.preventDefault();
			installEvent = event;
		});

		//registro el service worker
		if (navigator.serviceWorker) {
			console.log('ServiceWorker listo para usar');
			navigator.serviceWorker.register('serviceworker.js');
		} else {
			console.log('No se puede usar ServiceWorker');
		}
	},
	//funcion disparada por el boton "instalar"
	installApp() {
		console.log(installEvent);
		if (installEvent) {
			installEvent.prompt();
		}
	},
};

pwaStore.init();
