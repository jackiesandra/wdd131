document.addEventListener("DOMContentLoaded", function () {
  // Product array of objects
  const products = [
      {
          id: "fc-1888",
          name: "flux capacitor",
          avgRating: 4.5
      },
      {
          id: "fc-2050",
          name: "power laces",
          avgRating: 4.7
      },
      {
          id: "fs-1987",
          name: "time circuits",
          avgRating: 3.5
      },
      {
          id: "ac-2000",
          name: "low voltage reactor",
          avgRating: 3.9
      },
      {
          id: "jj-1969",
          name: "warp equalizer",
          avgRating: 5.0
      }
  ];

  // Populate product options dynamically
  var productSelect = document.getElementById('productName');
  products.forEach(function (product) {
      var option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
  });

  // Update last modified date
  var lastModifiedDate = document.lastModified;
  document.getElementById('last-modified-date').textContent = lastModifiedDate;

  // Increment review counter in localStorage
  if (window.location.pathname.includes('review.html')) {
      var reviewCount = localStorage.getItem('reviewCount') || 0;
      reviewCount++;
      localStorage.setItem('reviewCount', reviewCount);
      console.log(`Review Count: ${reviewCount}`);
  }
});
