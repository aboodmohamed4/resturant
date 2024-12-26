document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const orderDetails = JSON.stringify(cart); // بيانات العربة

    const orderData = {
        customerName,
        customerPhone,
        orderDetails
    };

    // إرسال البيانات إلى Zapier Webhook
    fetch('https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_URL/', {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        alert('تم إرسال الطلب بنجاح!');
        cart = []; // تفريغ عربة التسوق
        document.getElementById('orderForm').reset(); // إعادة تعيين النموذج
    })
    .catch((error) => {
        console.log('خطأ:', error);
        alert('حدث خطأ أثناء إرسال الطلب.');
    });
});
