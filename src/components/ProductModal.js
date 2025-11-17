import { renderPage } from '../App';
import { Store } from '../pages/Store';
import { router } from '../router';
import './ProductModal.css';

export const ProductModal = (product) => {
	const modalContainer = document.createElement('div');
	modalContainer.classList.add('modal-container');

	const modalCard = document.createElement('div');
	modalCard.classList.add('modal-card');

	const cardContent = document.createElement('div');
	cardContent.innerHTML = `
            <div class="producto-${product.getId}">
                <h3>Nombre: ${product.getName}</h3>
                <p>Categoría: ${product.getCategory}</p>
                <p style="font-weight: 700;">Descripción: ${product.getDescription}</p>
                <p class="store-price">Precio: $${product.getPrice}</p>
        `;

	const modalTitle = document.createElement('p');
	modalTitle.classList.add('modal-title');
	modalTitle.innerText = 'Detalles';

	const modalExit = document.createElement('button');
	modalExit.classList.add('modal-close');
	modalExit.innerText = 'X';
	modalExit.addEventListener('click', () => {
		closeModal();
	});

	modalTitle.append(modalExit);

	const eraseButton = document.createElement('button');
	eraseButton.addEventListener('click', async (e) => {
		const response = await fetch(
			`http://localhost/dacnenawia-api/index.php/${product.getId}`,
			{
				method: 'DELETE',
			},
		);
		closeModal();
		location.reload();
	});
	eraseButton.innerText = 'Borrar';
	eraseButton.classList.add('erase-button');

	modalCard.append(modalTitle, cardContent, eraseButton);

	const closeModal = () => {
		modalContainer.remove();
	};

	modalContainer.append(modalCard);

	return modalContainer;
};
