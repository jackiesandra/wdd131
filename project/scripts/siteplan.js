document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenuBtn = document.getElementById('close-menu');
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content-section');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Toggle menu
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
        menu.scrollIntoView({behavior: "smooth"}); 
    });

    // Close menu
    closeMenuBtn.addEventListener('click', function () {
        menu.classList.remove('active');
        menuToggle.scrollIntoView({behavior: "smooth"});
    });

    // Navigation
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');

            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            // Remove active class from all links
            menuItems.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            item.classList.add('active');

            // Close the menu if in mobile view
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
                menuToggle.scrollIntoView({behavior: "smooth"}); // Scroll back to toggle button
            }
        });
    });

    // Update cart view
    function updateCartView() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartEmptyMessage = document.getElementById('cart-empty-message');
        const cartTotalContainer = document.getElementById('cart-total-container');
        const cartTotalElement = document.getElementById('cart-total');
        
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartEmptyMessage.style.display = 'block';
            cartTotalContainer.style.display = 'none';
        } else {
            cartEmptyMessage.style.display = 'none';
            cartTotalContainer.style.display = 'block';

            cart.forEach(productId => {
                const productElement = document.querySelector(`[data-product-id="${productId}"]`);
                const productClone = productElement.cloneNode(true);
                productClone.querySelector('.add-to-cart').style.display = 'none';
                productClone.querySelector('.remove-from-cart').style.display = 'block';
                cartItemsContainer.appendChild(productClone);
                
                // Add event listener to remove-from-cart button in the cloned element
                productClone.querySelector('.remove-from-cart').addEventListener('click', function () {
                    removeFromCart(productId);
                });

                // Calculate total
                const priceElement = productClone.querySelector('p');
                const price = parseFloat(priceElement.textContent.replace('Price: $', ''));
                total += price;
            });

            cartTotalElement.textContent = total.toFixed(2);
        }
    }

    // Add to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.parentElement.getAttribute('data-product-id');
            if (!cart.includes(productId)) {
                cart.push(productId);
                localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
                updateCartView();
            }
        });
    });

    // Remove from cart
    function removeFromCart(productId) {
        const index = cart.indexOf(productId);
        if (index > -1) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart)); 
            updateCartView();
        }
    }

    // Checkout button
    document.getElementById('checkout-button').addEventListener('click', function () {
        alert('Proceeding to checkout');
        // Implement your checkout logic here
    });

    // Set the last updated date
    const lastUpdatedElement = document.getElementById('last-updated');
    const lastUpdated = new Date(document.lastModified);
    lastUpdatedElement.textContent = `Last updated: ${lastUpdated.toLocaleDateString()} ${lastUpdated.toLocaleTimeString()}`;

    // Initial cart view update
    updateCartView();
});
