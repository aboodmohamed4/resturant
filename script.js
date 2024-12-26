let cart = []; // مصفوفة لحفظ الطلبات

function addToCart(item, price) {
    // إضافة العنصر إلى سلة الشراء
    cart.push({ item, price });
    updateOrderDetails();
}

function updateOrderDetails() {
    const orderDetails = document.getElementById('orderDetails');
    orderDetails.value = cart.map(item => `${item.item} - ${item.price} جنيه`).join('\n');
}

const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', function (e) {
    e.preventDefault(); // منع إرسال النموذج بشكل افتراضي
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const orderDetails = document.getElementById('orderDetails').value;

    const order = {
        customerName,
        customerPhone,
        orderDetails,
        date: new Date().toLocaleString(),
    };

    // حفظ الطلب (هنا يمكن حفظه في ملف أو قاعدة بيانات)
    console.log('تم إرسال الطلب:', order);

    // مسح سلة الشراء بعد إرسال الطلب
    cart = [];
    updateOrderDetails();
    alert('تم إرسال طلبك بنجاح!');
});
