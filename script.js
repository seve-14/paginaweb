document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'mundonet' && password === 'mundonet123456') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('invoiceForm').style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

document.getElementById('addProduct').addEventListener('click', function() {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productLabel = document.createElement('label');
    productLabel.setAttribute('for', 'product');
    productLabel.textContent = 'Producto:';
    productDiv.appendChild(productLabel);

    const productInput = document.createElement('input');
    productInput.classList.add('productName');
    productInput.setAttribute('type', 'text');
    productInput.required = true;
    productDiv.appendChild(productInput);

    const priceLabel = document.createElement('label');
    priceLabel.setAttribute('for', 'price');
    priceLabel.textContent = 'Precio:';
    productDiv.appendChild(priceLabel);

    const priceInput = document.createElement('input');
    priceInput.classList.add('productPrice');
    priceInput.setAttribute('type', 'number');
    priceInput.required = true;
    productDiv.appendChild(priceInput);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Correo:';
    productDiv.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.classList.add('productEmail');
    emailInput.setAttribute('type', 'email');
    emailInput.required = true;
    productDiv.appendChild(emailInput);

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'userPassword');
    passwordLabel.textContent = 'Contraseña:';
    productDiv.appendChild(passwordLabel);

    const passwordInput = document.createElement('input');
    passwordInput.classList.add('productPassword');
    passwordInput.setAttribute('type', 'password');
    passwordInput.required = true;
    productDiv.appendChild(passwordInput);

    document.getElementById('products').appendChild(productDiv);
});

document.getElementById('invoiceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const products = document.getElementsByClassName('productName');
    const prices = document.getElementsByClassName('productPrice');
    const emails = document.getElementsByClassName('productEmail');
    const passwords = document.getElementsByClassName('productPassword');
    const date = new Date();

    document.getElementById('invoiceDate').textContent = `Fecha: ${date.toLocaleDateString()} Hora: ${date.toLocaleTimeString()}`;

    let total = 0;
    const tbody = document.querySelector('#invoiceDetails tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        const productName = products[i].value;
        const productPrice = parseFloat(prices[i].value);
        const productEmail = emails[i].value;
        const productPassword = passwords[i].value;
        total += productPrice;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${productName}</td>
            <td>$${productPrice.toFixed(2)}</td>
            <td>${productEmail}</td>
            <td>${productPassword}</td>
        `;
        tbody.appendChild(row);
    }

    document.getElementById('invoiceTotal').textContent = `Total: $${total.toFixed(2)}`;

    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('invoiceForm').style.display = 'none';
    document.getElementById('invoice').style.display = 'block';
});
