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
  // 2. REFERENCIAS AL DOM
  // =========================
  const productGrid = document.getElementById('productGrid');
  
  // Carrito
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const cartItemsDiv = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const clearCartBtn = document.getElementById('clearCart');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // Modal Producto Detalle
  const productModal = document.getElementById('productModal');
  const closeProduct = document.getElementById('closeProduct');
  const detailImg = document.getElementById('detailImg');
  const detailName = document.getElementById('detailName');
  const detailDesc = document.getElementById('detailDesc');
  const detailLong = document.getElementById('detailLong');
  const detailPrice = document.getElementById('detailPrice');
  const detailQty = document.getElementById('detailQty');
  const addToCartFromDetail = document.getElementById('addToCartFromDetail');
  const closeDetailBtn = document.getElementById('closeDetailBtn');

  // Botón Filtros
  const applyFiltersBtn = document.getElementById('applyFilters');

  // Estado del Carrito
  let cart = JSON.parse(localStorage.getItem('miCarrito_v1')) || [];

  // =========================
  // 3. FUNCIONES PRINCIPALES
  // =========================

  function saveCart(){
    localStorage.setItem('miCarrito_v1', JSON.stringify(cart));
    renderCartCount();
  }

  // RENDER PRODUCTOS
  function renderProducts(listToRender = null){
    productGrid.innerHTML = '';

    // Si no se pasa lista, usar todos los productos
    const finalData = listToRender || products;

    if (finalData.length === 0){
      productGrid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:20px;">No hay productos que coincidan con los filtros.</p>';
      return;
    }

    finalData.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card'; 
      
      // Añadimos una pequeña etiqueta de marca visualmente
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <div style="font-size:11px; color:#999; text-transform:uppercase; letter-spacing:1px; margin-bottom:4px; font-weight:700;">${p.brand}</div>
        <h4>${p.name}</h4>
        <div class="price">S/ ${p.price.toFixed(2)}</div>
        <div style="display:flex;justify-content:center;gap:8px;margin-top:8px">
          <button class="btn outline previewBtn" data-id="${p.id}">Ver</button>
          <button class="btn primary addBtn" data-id="${p.id}">Agregar</button>
        </div>
      `;
      productGrid.appendChild(card);
    });

    // Listeners botones
    document.querySelectorAll('.addBtn').forEach(btn => {
      btn.addEventListener('click', e => addToCart(Number(e.currentTarget.dataset.id), 1));
    });

    document.querySelectorAll('.previewBtn').forEach(btn => {
      btn.addEventListener('click', e => openProductDetail(Number(e.currentTarget.dataset.id)));
    });
  }

  // =========================
  // 4. LÓGICA DE FILTROS (PRECIO, GÉNERO Y MARCA)
  // =========================
  if(applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', () => {
      
      // 1. Obtener valores de los inputs
      const priceOption = document.querySelector("input[name='priceFilter']:checked");
      
      // Géneros seleccionados
      const genderCheckboxes = document.querySelectorAll(".genderFilter:checked");
      const selectedGenders = Array.from(genderCheckboxes).map(cb => cb.value);

      // Marcas seleccionadas (NUEVO)
      const brandCheckboxes = document.querySelectorAll(".brandFilter:checked");
      const selectedBrands = Array.from(brandCheckboxes).map(cb => cb.value);

      // 2. Empezar con copia de todos los productos
      let filtered = products.slice();

      // 3. Filtrar por GÉNERO
      if (selectedGenders.length > 0) {
        filtered = filtered.filter(p => selectedGenders.includes(p.category));
      }

      // 4. Filtrar por MARCA (NUEVO)
      if (selectedBrands.length > 0) {
        filtered = filtered.filter(p => selectedBrands.includes(p.brand));
      }

      // 5. Ordenar por PRECIO
      if (priceOption) {
        const sortOrder = priceOption.value;
        filtered.sort((a, b) => {
          if (sortOrder === 'asc') return a.price - b.price;
          if (sortOrder === 'desc') return b.price - a.price;
          return 0;
        });
      }

      // 6. Renderizar resultado
      renderProducts(filtered);
    });
  }

  // =========================
  // 5. LÓGICA DEL CARRITO
  // =========================
  function addToCart(id, qty=1){
    const item = cart.find(c => c.id === id);
    if(item) item.qty += qty;
    else {
      const p = products.find(x => x.id === id);
      if(p) cart.push({ id: p.id, qty });
    }
    saveCart();
  }

  function removeFromCart(id){
    cart = cart.filter(c => c.id !== id);
    saveCart();
    renderCart();
  }

  function changeQty(id, qty){
    const item = cart.find(c => c.id === id);
    if(!item) return;
    item.qty = qty;
    if(item.qty <= 0) removeFromCart(id);
    else {
      saveCart();
      renderCart();
    }
  }

  function renderCartCount(){
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalCount;
  }

  function renderCart(){
    cartItemsDiv.innerHTML = '';
    if(cart.length === 0){
      cartItemsDiv.innerHTML = '<p style="text-align:center;color:#666;">El carrito está vacío.</p>';
      cartTotalEl.textContent = 'S/ 0.00';
      return;
    }
    
    let total = 0;
    cart.forEach(ci => {
      const p = products.find(x => x.id === ci.id);
      if(!p) return;

      const line = document.createElement('div');
      line.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #eee;';
      
      line.innerHTML = `
        <div style="flex:1">
          <div style="font-weight:600;">${p.name}</div>
          <div style="font-size:12px; color:#888;">${p.brand}</div> <div style="font-size:13px;color:#666;">S/ ${p.price.toFixed(2)} x ${ci.qty}</div>
        </div>
        <div style="display:flex; gap:8px; align-items:center">
          <input type="number" min="1" value="${ci.qty}" data-id="${ci.id}" class="qtyInput" 
                 style="width:50px; padding:4px; border-radius:4px; border:1px solid #ddd; text-align:center;"/>
          <button class="btn outline removeBtn" data-id="${ci.id}" style="padding:4px 8px; font-size:12px;">X</button>
        </div>
      `;
      cartItemsDiv.appendChild(line);
      total += p.price * ci.qty;
    });
    cartTotalEl.textContent = `S/ ${total.toFixed(2)}`;

    // Listeners del carrito
    document.querySelectorAll('.qtyInput').forEach(inp => {
      inp.addEventListener('change', (e) => {
        changeQty(Number(e.target.dataset.id), Number(e.target.value));
      });
    });
    document.querySelectorAll('.removeBtn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        removeFromCart(Number(e.target.dataset.id));
      });
    });
  }

  // Eventos del Modal Carrito
  cartBtn.addEventListener('click', () => {
    cartModal.setAttribute('aria-hidden','false');
    cartModal.style.display = 'flex';
    renderCart();
  });

  const hideCart = () => {
    cartModal.setAttribute('aria-hidden','true');
    cartModal.style.display = 'none';
  };
  closeCart.addEventListener('click', hideCart);
  
  clearCartBtn.addEventListener('click', () => {
    if(confirm('¿Estás seguro de vaciar el carrito?')) {
      cart=[]; 
      saveCart(); 
      renderCart();
    }
  });

  // =========================
  // 6. CHECKOUT Y PDF
  // =========================
  checkoutBtn.addEventListener('click', async () => {
    if(cart.length === 0){ alert('El carrito está vacío'); return; }

    // Preparar datos orden
    const orderId = 'ORD-' + Date.now();
    const orderDate = new Date();
    
    // Preparar items
    const itemsData = cart.map(ci => {
      const p = products.find(x => x.id === ci.id);
      return { 
        name: p.name, 
        brand: p.brand,
        price: p.price, 
        qty: ci.qty, 
        subtotal: p.price * ci.qty 
      };
    });
    
    const grandTotal = itemsData.reduce((acc, it) => acc + it.subtotal, 0);

    // Generar PDF con jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text('NYBAR STORE - COMPROBANTE', 14, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Código: ${orderId}`, 14, 30);
    doc.text(`Fecha: ${orderDate.toLocaleString()}`, 14, 36);
    
    doc.line(14, 40, 196, 40); // Linea separadora

    let y = 50;
    itemsData.forEach(item => {
      // Nombre producto y Marca
      doc.text(`${item.name} - ${item.brand}`, 14, y);
      doc.text(`x${item.qty}`, 160, y);
      // Precio
      doc.text(`S/ ${item.subtotal.toFixed(2)}`, 190, y, { align: "right" });
      y += 8;
    });

    doc.line(14, y, 196, y);
    y += 10;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(`TOTAL A PAGAR: S/ ${grandTotal.toFixed(2)}`, 190, y, { align: "right" });

    doc.save(`${orderId}.pdf`);

    // Limpiar y cerrar
    cart = [];
    saveCart();
    hideCart();
    alert('¡Compra realizada con éxito! Se ha descargado tu comprobante.');
  });

  // =========================
  // 7. DETALLE DE PRODUCTO (MODAL)
  // =========================
  function openProductDetail(id){
    const p = products.find(x => x.id === id);
    if(!p) return;

    detailImg.src = p.img;
    detailName.innerHTML = `${p.name} <span style="font-size:14px;color:#888;font-weight:400">(${p.brand})</span>`;
    detailDesc.textContent = p.desc;
    if(detailLong) detailLong.textContent = p.extendedDesc || p.desc;
    detailPrice.textContent = 'S/ ' + p.price.toFixed(2);
    detailQty.value = 1;
    addToCartFromDetail.dataset.id = id;

    productModal.setAttribute('aria-hidden','false');
    productModal.style.display = 'flex';
  }
  // Hacer global para debugear si es necesario
  window.openProductDetail = openProductDetail;

  addToCartFromDetail.addEventListener('click', () => {
    const id = Number(addToCartFromDetail.dataset.id);
    const q = Number(detailQty.value) || 1;
    addToCart(id, q);
    productModal.setAttribute('aria-hidden','true');
    productModal.style.display = 'none';
    alert('Producto agregado.');
  });

  const hideProductModal = () => {
    productModal.setAttribute('aria-hidden','true');
    productModal.style.display = 'none';
  };
  closeProduct.addEventListener('click', hideProductModal);
  if(closeDetailBtn) closeDetailBtn.addEventListener('click', hideProductModal);

  // =========================
  // 8. FORMULARIO CONTACTO
  // =========================
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Mensaje enviado correctamente. ¡Gracias por contactarnos!');
      e.target.reset();
    });
  }

  // =========================
  // INICIALIZACIÓN
  // =========================
  renderProducts(); // Render inicial (todos)
  renderCartCount();

})();
