function generateInvoice() {
    const invoiceNumber = document.getElementById('invoice-number').value;
    const issueDate = document.getElementById('issue-date').value;
    const issuerName = document.getElementById('issuer-name').value;
    const recipientName = document.getElementById('recipient-name').value;
    const emailAccount = document.getElementById('email-account').value;
    const password = document.getElementById('password').value;
    const profileName = document.getElementById('profile-name').value;
    const profilePin = document.getElementById('profile-pin').value;
    const description = document.getElementById('description').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const unitPrice = parseFloat(document.getElementById('unit-price').value);
    const vat = parseFloat(document.getElementById('vat').value);

    const subtotal = quantity * unitPrice;
    const vatAmount = subtotal * (vat / 100);
    const total = subtotal + vatAmount;

    const invoiceContent = `
        <h3>Factura Generada</h3>
        <p><strong>Número de Factura:</strong> ${invoiceNumber}</p>
        <p><strong>Fecha de Emisión:</strong> ${issueDate}</p>
        <p><strong>Vendedor:</strong> ${issuerName}</p>
        <p><strong>Cliente:</strong> ${recipientName}</p>
        <p><strong>Correo de la Cuenta:</strong> ${emailAccount}</p>
        <p><strong>Contraseña:</strong> ${password}</p>
        <p><strong>Perfil Correspondiente:</strong> ${profileName}</p>
        <p><strong>PIN de Perfil:</strong> ${profilePin}</p>
        <p><strong>Descripción:</strong> ${description}</p>
        <p><strong>Cantidad:</strong> ${quantity}</p>
        <p><strong>Precio Unitario:</strong> $${unitPrice.toFixed(2)}</p>
        <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>IVA (${vat}%):</strong> $${vatAmount.toFixed(2)}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
    `;

    document.getElementById('invoice-result').innerHTML = `
        ${invoiceContent}
        <button onclick="downloadInvoiceAsPNG()">Descargar Factura</button>
    `;
}

function downloadInvoiceAsPNG() {
    const invoiceResult = document.getElementById('invoice-result');

    html2canvas(invoiceResult).then(function(canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'Factura.png';
        link.click();
    });
}
