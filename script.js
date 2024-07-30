// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('invoiceForm');
    const itemsContainer = document.getElementById('items');
    const addItemButton = document.getElementById('addItem');
    const invoiceOutput = document.getElementById('invoiceOutput');
    const invoiceSection = document.getElementById('invoiceSection');

    addItemButton.addEventListener('click', function() {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <label for="articleName">Nombre del Artículo:</label>
            <input type="text" name="articleName" required>
            
            <label for="description">Descripción:</label>
            <input type="text" name="description" required>
            
            <label for="quantity">Cantidad:</label>
            <input type="number" name="quantity" required>
            
            <label for="price">Precio:</label>
            <input type="number" name="price" required>
        `;
        itemsContainer.appendChild(newItem);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const clientName = document.getElementById('clientName').value;
        const clientEmail = document.getElementById('clientEmail').value;
        const clientPassword = document.getElementById('clientPassword').value;
        const invoiceDate = document.getElementById('invoiceDate').value;

        const items = [];
        document.querySelectorAll('#items .item').forEach(function(item) {
            const articleName = item.querySelector('input[name="articleName"]').value;
            const description = item.querySelector('input[name="description"]').value;
            const quantity = item.querySelector('input[name="quantity"]').value;
            const price = item.querySelector('input[name="price"]').value;
            items.push({ articleName, description, quantity, price });
        });

        let invoiceHTML = `<h2>Factura</h2>`;
        invoiceHTML += `<p><strong>Nombre de la Empresa:</strong> MUNDO NET</p>`;
        invoiceHTML += `<p><strong>Nombre del Cliente:</strong> ${clientName}</p>`;
        invoiceHTML += `<p><strong>Correo del Cliente:</strong> ${clientEmail}</p>`;
        invoiceHTML += `<p><strong>Contraseña del Cliente:</strong> ${clientPassword}</p>`;
        invoiceHTML += `<p><strong>Fecha:</strong> ${invoiceDate}</p>`;
        invoiceHTML += `<table border="1"><tr><th>Nombre del Artículo</th><th>Descripción</th><th>Cantidad</th><th>Precio</th></tr>`;

        items.forEach(function(item) {
            invoiceHTML += `<tr><td>${item.articleName}</td><td>${item.description}</td><td>${item.quantity}</td><td>${item.price}</td></tr>`;
        });

        invoiceHTML += `</table>`;

        invoiceOutput.innerHTML = invoiceHTML;
        invoiceSection.style.display = 'block'; // Mostrar la sección de la factura
    });
});