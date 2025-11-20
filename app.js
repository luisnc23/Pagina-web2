// app.js - Controlador de la tienda CON MARCAS Y FILTROS
(() => {
  // =========================
  // 1. BASE DE DATOS DE PRODUCTOS (Actualizada con 'brand')
  // =========================
  const products = [
    { id:1, 
      name:"Casaca Gris “Match Day” Estilo Varsity", 
      price:28,
      img:"img/img1.jpg",
      desc:"Casaca tipo varsity color gris con detalles blancos y diseño frontal “Match Day” en letras grandes.",
      extendedDesc:"Casaca deportiva de estilo universitario confeccionada en tela gris suave con detalles blancos en las mangas. Estilo clásico americano.", 
      category:"Mujer",
      brand: "Nike"
    },
    { id:2,
       name:"Chaqueta Corta Borrego Marrón", 
       price:36,
       img:"img/img2.jpg", 
       desc:"Cálida chaqueta corta de tejido tipo borrego (sherpa) en color marrón.",
       extendedDesc:"Añade un toque de calidez y tendencia a tu guardarropa con esta moderna chaqueta crop de tejido tipo borrego.",
       category:"Mujer",
       brand: "Zara"
    },
    { id:3,
       name:"Body Básico Blanco",
       price:40,
       img:"img/img3.jpg",
       desc:"Body básico sin mangas de color blanco con tejido de canalé.",
       extendedDesc:"El Body Básico Blanco Acanalado es una pieza esencial y versátil. Confeccionado en un cómodo tejido de canalé.",
       category:"Mujer",
       brand: "Zara"
    },
    { id:4,
      name:"Top Halter Verde Olivo",
      price:50,
      img:"img/img4.jpg",
      desc:"Elegante top halter corto con cuello anudado en color verde olivo.",
      extendedDesc:"Destaca con este espectacular Top Halter con Volantes en Capas. Confeccionado en un tejido ligero y con caída.",
      category:"Mujer",
      brand: "Zara"
    },
    { id:5,
      name:"Top Manga Verde Olivo",
      price:45, 
      img:"img/img5.jpeg",
      desc:"Moderno top crop ajustado de manga larga en color verde oliva.",
      extendedDesc:"El Top Crop de Manga Larga y Escote Cuadrado es una pieza esencial que combina comodidad y estilo.",
      category:"Mujer",
      brand: "Zara"
    },
    { id:6,
     name:"Blazer color Terracota",
     price:56, 
     img:"img/img6.png",
     desc:"Elegante blazer de corte relajado y largo medio en color terracota.",
     extendedDesc:"El Blazer Abierto Color Terracota inyecta color y estilo a cualquier conjunto. Perfecto para la oficina o salidas.",
     category:"Mujer",
     brand: "Zara"
    },
    { id:7,
     name:"Polo Dragón",
     price:35, 
     img:"img/img7.png",
     desc:"Polo con diseño de dragón, estilo urbano y actitud imponente.",
     extendedDesc:"El Polo Dragón destaca por su diseño audaz y poderoso. Fabricado con algodón premium, ofrece comodidad y frescura.",
     category:"Hombre",
     brand: "Overtake"
    },
    { id:8,
     name:"Crucigrama Minimalista",
     price:85, 
     img:"img/img8.png",
     desc:"Diseño abstracto y minimalista que representa un crucigrama simple.",
     extendedDesc:"La imagen presenta una composición geométrica y tipográfica que simula la estructura de un crucigrama.",
     category:"Hombre",
     brand: "Overtake"
    },
    { id:9,
     name:"Polo Overtake negro",
     price:95, 
     img:"img/img9.png",
     desc:"Polo negro Overtake de estilo urbano, confeccionado en algodón suave.",
     extendedDesc:"El polo Overtake negro combina confort y estilo. Su diseño clásico de color negro con detalles minimalistas es único.",
     category:"Hombre",
     brand: "Overtake"
    },
    { id:10,
     name:"Polo Overside negro",
     price:120, 
     img:"img/img10.png",
     desc:"Polo overside negro con diseño de una cara y una flor.",
     extendedDesc:"El Polo Overside negro combina un diseño artístico con un estilo relajado. Su caída amplia aporta libertad.",
     category:"Hombre",
     brand: "Overtake" 
    },
    { id:11,
     name:"Polo Overtake plomo",
     price:80, 
     img:"img/img11.png",
     desc:"Polo plomo Overtake con diseño de una chica, estilo urbano.",
     extendedDesc:"El Polo Overtake plomo destaca por su estilo contemporáneo. Su tono plomo aporta un aire sobrio y versátil.",
     category:"Hombre",
     brand: "Overtake"
    },
    { id:12,
     name:"Camiseta Marrón “Pietá”",
     price:60, 
     img:"img/img12.jpeg", 
     desc:"Camiseta oversize marrón con logotipo “Pietá” retro.",
     extendedDesc:"Camiseta de estilo urbano fabricada en tela color marrón. En la parte trasera destaca el logotipo “Pietá”.",
     category:"Hombre",
     brand: "Overtake" 
    },
    { id:13,
     name:"Top Crop Asimétrico Vino",
     price:110, 
     img:"img/img13.jpg",
     desc:"Moderno crop top de un solo hombro en color vino con fruncido.",
     extendedDesc:"El Top Crop Asimétrico es perfecto para un estilo sofisticado. Diseño de alta costura.",
     category:"Mujer",
     brand: "Zara" 
    },
    { id:14,
     name:"Hoddie oversize",
     price:90, 
     img:"img/img14.webp",
     desc:"Cómoda sudadera oversize de felpa perchada en color azul marino.",
     extendedDesc:"Disfruta de la comodidad máxima con esta Sudadera Oversize. Perfecta para entrenar o relajarse.",
     category:"Mujer",
     brand: "Nike" 
    },
    { id:15,
     name:"Casaca azul y negro",
     price:70, 
     img:"img/img15.webp",
     desc:"Casaca deportiva en tonos azul y negro, ligera y cómoda.",
     extendedDesc:"La casaca combinación azul y negro destaca por su estilo moderno. Tecnología dry-fit.",
     category:"Hombre",
     brand: "Nike" 
    },
    { id:16,
     name:"Casaca color negra",
     price:130, 
     img:"img/img16.jpg",
     desc:"Casaca negra de diseño clásico y moderno.",
     extendedDesc:"La casaca color negra es una prenda versátil que nunca pasa de moda. Material resistente al agua.",
     category:"Hombre",
     brand: "Nike" 
    }
  ];
  
 // =========================
  // 2. VARIABLES GLOBALES DEL CARRITO
  // =========================
  let cart = JSON.parse(localStorage.getItem('miCarrito_v1')) || [];
  const cartCount = document.getElementById('cartCount');
  const cartModal = document.getElementById('cartModal');
  const cartItemsDiv = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');

  // =========================
  // 3. LÓGICA PARA DETECTAR PÁGINA
  // =========================
  const path = window.location.pathname;
  const isProductPage = path.includes('producto.html');
  const isIndexPage = !isProductPage; // Asumimos que si no es producto, es index

  // =========================
  // 4. RENDERIZADO DE INICIO (Solo si estamos en index.html)
  // =========================
  if (isIndexPage) {
    const productGrid = document.getElementById('productGrid');
    const applyFiltersBtn = document.getElementById('applyFilters');

    // Render inicial
    if(productGrid) renderProducts(products);

    function renderProducts(list) {
      productGrid.innerHTML = '';
      if (list.length === 0) {
        productGrid.innerHTML = '<p>No hay productos.</p>';
        return;
      }
      list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        // NOTA: El botón VER ahora es un enlace <a href="producto.html?id=...">
        card.innerHTML = `
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
          <div style="font-size:11px; color:#999; font-weight:700; text-transform:uppercase;">${p.brand}</div>
          <h4>${p.name}</h4>
          <div class="price">S/ ${p.price.toFixed(2)}</div>
          <div style="display:flex;justify-content:center;gap:8px;margin-top:8px">
            <a href="producto.html?id=${p.id}" class="btn outline">Ver</a>
            <button class="btn primary addBtn" data-id="${p.id}">Agregar</button>
          </div>
        `;
        productGrid.appendChild(card);
      });

      document.querySelectorAll('.addBtn').forEach(btn => {
        btn.addEventListener('click', e => addToCart(Number(e.target.dataset.id), 1));
      });
    }

    // Lógica de Filtros (Solo en index)
    if(applyFiltersBtn) {
      applyFiltersBtn.addEventListener('click', () => {
        const priceOption = document.querySelector("input[name='priceFilter']:checked");
        const selectedGenders = Array.from(document.querySelectorAll(".genderFilter:checked")).map(cb => cb.value);
        const selectedBrands = Array.from(document.querySelectorAll(".brandFilter:checked")).map(cb => cb.value);

        let filtered = products.slice();
        if (selectedGenders.length > 0) filtered = filtered.filter(p => selectedGenders.includes(p.category));
        if (selectedBrands.length > 0) filtered = filtered.filter(p => selectedBrands.includes(p.brand));
        if (priceOption) {
          filtered.sort((a, b) => priceOption.value === 'asc' ? a.price - b.price : b.price - a.price);
        }
        renderProducts(filtered);
      });
    }
  }

  // =========================
  // 5. RENDERIZADO DE DETALLE (Solo si estamos en producto.html)
  // =========================
  if (isProductPage) {
    const params = new URLSearchParams(window.location.search);
    const prodId = Number(params.get('id'));
    const container = document.getElementById('productDetailContainer');
    
    const product = products.find(p => p.id === prodId);

    if (product && container) {
      document.title = `${product.name} - Nybar`; // Cambiar título pestaña
      
      container.innerHTML = `
        <div class="detail-image-box">
          <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="detail-info-box">
          <div class="detail-brand">${product.brand} / ${product.category}</div>
          <h1>${product.name}</h1>
          <div class="detail-price">S/ ${product.price.toFixed(2)}</div>
          
          <p class="detail-description">
            ${product.extendedDesc || product.desc}
          </p>

          <div class="size-selector">
            <label>Elige tu talla:</label>
            <div class="size-options">
              <label>
                <input type="radio" name="size" value="S" class="size-radio" checked>
                <span class="size-box">S</span>
              </label>
              <label>
                <input type="radio" name="size" value="M" class="size-radio">
                <span class="size-box">M</span>
              </label>
              <label>
                <input type="radio" name="size" value="L" class="size-radio">
                <span class="size-box">L</span>
              </label>
              <label>
                <input type="radio" name="size" value="XL" class="size-radio">
                <span class="size-box">XL</span>
              </label>
            </div>
          </div>

          <div class="purchase-controls">
            <input type="number" id="detailQty" class="qty-input" value="1" min="1">
            <button id="addToCartDetailBtn" class="btn primary" style="flex:1; padding:14px;">
              AÑADIR AL CARRITO
            </button>
          </div>
        </div>
      `;

      // Listener para el botón de añadir en la página de detalle
      document.getElementById('addToCartDetailBtn').addEventListener('click', () => {
        const qty = Number(document.getElementById('detailQty').value) || 1;
        const size = document.querySelector('input[name="size"]:checked').value;
        
        // Nota: Para este ejemplo simple, no estamos guardando la talla en la lógica del carrito
        // para no romper la compatibilidad con el index. Pero visualmente el usuario la elige.
        addToCart(product.id, qty);
        
        alert(`¡Agregado! Talla: ${size}`);
      });

    } else {
      if(container) container.innerHTML = '<h2>Producto no encontrado</h2><a href="index.html" class="btn primary">Volver</a>';
    }
  }

  // =========================
  // 6. LÓGICA GLOBAL DEL CARRITO (Funciona en ambas páginas)
  // =========================
  const cartBtn = document.getElementById('cartBtn');
  const closeCart = document.getElementById('closeCart');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const clearCartBtn = document.getElementById('clearCart');

  function saveCart(){
    localStorage.setItem('miCarrito_v1', JSON.stringify(cart));
    renderCartCount();
  }

  function addToCart(id, qty=1){
    const item = cart.find(c => c.id === id);
    if(item) item.qty += qty;
    else {
      const p = products.find(x => x.id === id);
      if(p) cart.push({ id: p.id, qty });
    }
    saveCart();
    // Abrir carrito automáticamente al agregar
    cartModal.style.display = 'flex';
    cartModal.setAttribute('aria-hidden', 'false');
    renderCart();
  }

  function renderCartCount(){
    const total = cart.reduce((s,i)=>s+i.qty,0);
    if(cartCount) cartCount.textContent = total;
  }

  function renderCart(){
    if(!cartItemsDiv) return;
    cartItemsDiv.innerHTML = '';
    let total = 0;

    if(cart.length === 0) {
      cartItemsDiv.innerHTML = '<p>Carrito vacío</p>';
      cartTotalEl.textContent = 'S/ 0.00';
      return;
    }

    cart.forEach(ci => {
      const p = products.find(x => x.id === ci.id);
      if(!p) return;
      const row = document.createElement('div');
      row.style.cssText = 'display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px';
      row.innerHTML = `
        <div>
          <strong>${p.name}</strong><br>
          <small>S/ ${p.price} x ${ci.qty}</small>
        </div>
        <div>
          <button class="btn outline removeBtn" data-id="${ci.id}">X</button>
        </div>
      `;
      cartItemsDiv.appendChild(row);
      total += p.price * ci.qty;
    });
    cartTotalEl.textContent = 'S/ ' + total.toFixed(2);

    document.querySelectorAll('.removeBtn').forEach(b => {
      b.addEventListener('click', e => {
        cart = cart.filter(c => c.id !== Number(e.target.dataset.id));
        saveCart();
        renderCart();
      });
    });
  }

  // Eventos del modal Carrito
  if(cartBtn) {
    cartBtn.addEventListener('click', () => {
      cartModal.style.display = 'flex';
      renderCart();
    });
  }
  if(closeCart) {
    closeCart.addEventListener('click', () => cartModal.style.display = 'none');
  }
  if(clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      cart = [];
      saveCart();
      renderCart();
    });
  }
  if(checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if(cart.length === 0) return alert('Carrito vacío');
      
      // Generar PDF simple
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.text("NYBAR - VOUCHER DE COMPRA", 10, 10);
      let y = 20;
      let total = 0;
      cart.forEach(ci => {
        const p = products.find(x => x.id === ci.id);
        const sub = p.price * ci.qty;
        doc.text(`${p.name} (x${ci.qty}) - S/${sub}`, 10, y);
        total += sub;
        y += 10;
      });
      doc.text(`TOTAL: S/${total}`, 10, y+10);
      doc.save("voucher.pdf");
      
      cart = [];
      saveCart();
      renderCart();
      cartModal.style.display = 'none';
    });
  }

  // Inicializar contador al cargar
  renderCartCount();

})();
