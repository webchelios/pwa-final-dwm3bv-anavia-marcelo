import { Notification } from '../components/Notification';
import { ProductModal } from '../components/ProductModal';
import { setItem } from '../localstorage/localstorage';
import { getProducts } from '../store/productInstances';
import { Cart } from './Cart';
import './Store.css';

export const Store = async () => {
	const storeContainer = document.createElement('div');
	storeContainer.classList.add('store-container');

	const titlesContainer = document.createElement('div');
	titlesContainer.classList.add('store-titles');

	const h2Store = document.createElement('h1');
	h2Store.classList.add('store-h2');
	h2Store.textContent = 'Catálogo completo';

	const pStore = document.createElement('p');
	pStore.classList.add('store-p');
	pStore.textContent = 'Descubrí todos los productos';

	titlesContainer.append(h2Store, pStore);

	const productsContainer = document.createElement('div');
	productsContainer.classList.add('store-products');

	const products = await getProducts();

	if (products.length === 0) {
		const container = document.createElement('div');
		container.classList.add('store-no-product');

		const textAlert = document.createElement('p');
		textAlert.innerText = 'No hay productos creados en nuestro catálogo.';

		container.append(textAlert);
		pStore.remove();
		titlesContainer.append(container);
	}

	for (const product of products) {
		const container = document.createElement('div');
		container.classList.add('store-product-card');
		container.innerHTML = `
            <div class="producto-${product.getId}">
                <h3>${product.getName}</h3>
                <p>${product.getCategory}</p>
                <div class="store-product-img">
                    <img src="${product.getImages}" alt="Imagen de ${product.getName}">
                </div>
                <p>${product.getDescription}</p>
                <p class="store-price">$${product.getPrice}</p>
            `;
		const storeProductsActions = document.createElement('div');
		storeProductsActions.classList.add('store-products-actions');

		const detailButton = document.createElement('button');
		detailButton.classList.add('buy-button');
		detailButton.textContent = 'Ver detalles';
		detailButton.addEventListener('click', () => {
			document.querySelector('#product-modal').append(ProductModal(product));
		});

		const addButton = document.createElement('button');
		addButton.classList.add('add-button');
		addButton.textContent = 'Añadir al carrito';
		addButton.addEventListener('click', () => {
			product.addUnit();
			setItem('products', product, product.getAmmount);
			Notification(
				'success',
				`¡${product.name} agregado al carrito con éxito!`,
			);
			Cart(document.querySelector('#cart'));
		});

		storeProductsActions.append(addButton, detailButton);
		container.append(storeProductsActions);
		productsContainer.append(container);
	}

	storeContainer.append(titlesContainer, productsContainer);
	return storeContainer;
};
