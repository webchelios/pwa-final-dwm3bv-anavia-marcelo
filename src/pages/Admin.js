import { Notification } from '../components/Notification';
import './Admin.css';

export const Admin = () => {
	const adminContainer = document.createElement('div');
	adminContainer.classList.add('admin-container');

	const form = document.createElement('form');
	form.classList.add('admin-form');

	const nameLabel = document.createElement('label');
	nameLabel.htmlFor = 'name';
	nameLabel.innerHTML =
		'Nombre del producto <span class="required-label">*</span>';

	const name = document.createElement('input');
	name.name = 'name';
	name.id = 'name';
	name.placeholder = 'Mínimo 3 caracteres';

	const categoryLabel = document.createElement('label');
	categoryLabel.htmlFor = 'category';
	categoryLabel.innerHTML = 'Categoría <span class="required-label">*</span>';

	const category = document.createElement('input');
	category.name = 'category';
	category.id = 'category';

	const priceLabel = document.createElement('label');
	priceLabel.htmlFor = 'price';
	priceLabel.innerHTML = 'Precio <span class="required-label">*</span>';

	const price = document.createElement('input');
	price.name = 'price';
	price.type = 'number';
	price.id = 'price';

	const descriptionLabel = document.createElement('label');
	descriptionLabel.htmlFor = 'description';
	descriptionLabel.innerHTML =
		'Descripción <span class="required-label">*</span>';

	const description = document.createElement('input');
	description.name = 'description';
	description.id = 'description';

	const imagesLabel = document.createElement('label');
	imagesLabel.htmlFor = 'images';
	imagesLabel.innerHTML = 'Imagen (URL) <span class="required-label">*</span>';

	const images = document.createElement('input');
	images.name = 'images';
	images.id = 'images';

	const stockLabel = document.createElement('label');
	stockLabel.htmlFor = 'stock';
	stockLabel.innerText = 'Stock';

	const stock = document.createElement('input');
	stock.name = 'stock';
	stock.id = 'stock';

	const discountLabel = document.createElement('label');
	discountLabel.htmlFor = 'discount';
	discountLabel.innerText = 'Descuento';

	const discount = document.createElement('input');
	discount.id = 'discount';
	discount.name = 'discount';

	const submit = document.createElement('button');
	submit.type = 'submit';
	submit.innerText = 'Crear';

	form.append(
		nameLabel,
		name,
		categoryLabel,
		category,
		priceLabel,
		price,
		descriptionLabel,
		description,
		imagesLabel,
		images,
		discountLabel,
		discount,
		stockLabel,
		stock,
		submit,
	);

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		const validateForm = () => {
			let isValid = true;

			if (name.value.trim().length < 3) {
				Notification('error', 'El nombre debe tener al menos 3 caracteres');
				isValid = false;
			}

			if (!category.value) {
				Notification('error', 'No se introdujo categoría');
				isValid = false;
			}

			if (Number(price.value) <= 0) {
				Notification('error', 'El precio debe ser mayor que 0');
				isValid = false;
			}

			if (!description.value) {
				Notification('error', 'No se introdujo descripción');
				isValid = false;
			}

			if (!images.value) {
				Notification('error', 'No se introdujo imagen');
				isValid = false;
			}

			return isValid;
		};

		if (!validateForm()) {
			return;
		}

		const formData = new FormData(form);
		const productData = {
			name: formData.get('name'),
			category: formData.get('category'),
			price: Number(formData.get('price')),
			discount: formData.get('discount'),
			description: formData.get('description'),
			images: formData.get('images'),
			stock: formData.get('stock'),
		};

		try {
			const response = await fetch('http://localhost/dacnenawia-api/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(productData),
			});

			if (!response.ok) {
				Notification('Error HTTP', response.statusText);
				throw new Error('Error HTTP');
			}

			const result = await response.json();
		} catch (error) {
			Notification('error', `${error}`);
			throw new Error('Error al realizar la petición');
		}

		form.reset();
		Notification(
			'success',
			`Producto: ${productData.name} fue creado con éxito`,
		);
		setTimeout(() => {
			window.location.href = '/tienda';
		}, 1000);
	});

	adminContainer.append(form);

	return adminContainer;
};
