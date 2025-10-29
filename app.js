// app.js - controlador de la tienda (versión completa con filtros y modal detalle mejorado)
(() => {
  // =========================
  // Productos (16) con category y extendedDesc
  // =========================
  const products = [
    { id:1, 
      name:"Casaca Gris “Match Day” Estilo Varsity", 
      price:28,
      img:"img/img1.jpg",
      desc:"Casaca tipo varsity color gris con detalles blancos y diseño frontal “Match Day” en letras grandes.",
      extendedDesc:"Casaca deportiva de estilo universitario confeccionada en tela gris suave con detalles blancos en las mangas, bolsillos y cuello. Presenta un estampado frontal con la frase “Match Day” en tipografía grande y moderna, acompañada del texto “Do everything to get it” sobre el pecho. Posee cierre con botones metálicos y puños elásticos con franjas blancas y grises, brindando ajuste y comodidad. Ideal para un look casual, deportivo o streetwear con un toque juvenil y moderno.", 
      category:"Mujer" 
    },

    { id:2,
       name:"Chaqueta Corta Borrego (Sherpa) Marrón con Ribetes Negros", 
       price:36,
       img:"img/img2.jpg", 
       desc:"Cálida chaqueta corta de tejido tipo borrego (sherpa) en color marrón. Diseño con cremallera frontal, cuello alto y modernos ribetes negros en contraste en hombros y mangas, ideal para un estilo casual y cómodo",
       extendedDesc:"Añade un toque de calidez y tendencia a tu guardarropa con esta moderna chaqueta crop de tejido tipo borrego. Su suave textura y su color marrón versátil la hacen perfecta para combinar con jeans o pantalones de tiro alto. El diseño destaca por sus detalles en contraste: los ribetes o franjas de color negro que recorren los hombros y mangas, proporcionando un aire deportivo y elegante. Equipada con cierre de cremallera completa, cuello alto para proteger del frío y bolsillos laterales funcionales. Es la prenda ideal para looks casuales durante el entretiempo y los días más frescos.",
       category:"Mujer" 
    },

    { id:3,
       name:"Body Básico Blanco",
       price:40,
       img:"img/img3.jpg",
       desc:"Body básico sin mangas de color blanco con tejido de canalé. Presenta un escote cuadrado moderno y tirantes anchos, ideal para llevar con jeans o como prenda interior ajustada.",
       extendedDesc:"El Body Básico Blanco Acanalado es una pieza esencial y versátil para cualquier guardarropa. Confeccionado en un cómodo tejido de canalé (rib o acanalado), ofrece un ajuste perfecto que moldea la figura. Su diseño destaca por el moderno escote cuadrado y los tirantes anchos, proporcionando sujeción y estilo. Ideal para crear looks casuales o elegantes. Se puede usar solo con jeans o faldas, o como base para lucir debajo de chaquetas y blazers, asegurando que la prenda se mantenga siempre en su lugar. Un básico atemporal de fácil combinación.",
       category:"Mujer"
       },

    { id:4,
      name:"Top Halter con Volantes en Capas Color Verde Olivo",
      price:50,
      img:"img/img4.jpg",
      desc:"Elegante top halter corto con cuello anudado en color verde olivo. Presenta un diseño fluido con tres capas de volantes que aportan movimiento y volumen. Ideal para looks veraniegos y festivos.",
      extendedDesc:"Destaca con este espectacular Top Halter con Volantes en Capas. Confeccionado en un tejido ligero y con caída, su color verde olivo (o verde militar) es vibrante y muy actual. El diseño halter se anuda en el cuello, dejando la espalda descubierta, mientras que el cuerpo del top cae en cascada con tres volantes escalonados que crean un efecto visual dinámico y muy favorecedor. Su corte crop es perfecto para combinar con jeans de tiro alto, faldas o shorts. Una prenda ideal para eventos especiales, salidas nocturnas o para un estilo casual chica de verano.",
      category:"Mujer"
    },

    { id:5,
      name:"Top Manga Verde Olivo",
      price:45, 
      img:"img/img5.jpeg",
      desc:"Moderno top crop ajustado de manga larga en color verde oliva. Presenta un favorecedor escote cuadrado y un corte a la cintura, ideal para combinar con jeans o prendas de tiro alto para un look casual.",
      extendedDesc:"El Top Crop de Manga Larga y Escote Cuadrado es una pieza esencial que combina comodidad y estilo. Confeccionado en un tejido suave y elástico que se ajusta a la figura, presenta un moderno escote cuadrado que resalta el área del cuello y clavículas. Su vibrante color verde oliva (militar) es fácil de combinar y está muy en tendencia. El corte crop a la cintura lo hace perfecto para lucir con jeans de tiro alto, faldas o pantalones. Ideal para cualquier ocasión casual, ofreciendo un look juvenil y sofisticado.",
      category:"Mujer"
    },

    { id:6,
     name:"Blazer color Terracota",
     price:56, 
     img:"img/img6.png",
     desc:"Elegante blazer de corte relajado y largo medio en un vibrante color terracota (ladrillo/óxido). Diseño abierto sin botones, con solapa ancha. Ideal para añadir un toque sofisticado y moderno a looks casuales o de oficina.",
     extendedDesc:"El Blazer Abierto Color Terracota es una prenda imprescindible que inyecta color y estilo a cualquier conjunto. Su vibrante tonalidad terracota (un color cálido entre el naranja quemado y el marrón ladrillo) está muy de moda y es fácil de combinar. Presenta un corte relajado y una silueta fluida, con un diseño abierto sin cierre que cae elegantemente sobre la figura. Las solapas anchas tipo shawl o peak le dan un acabado profesional. Perfecto para transformar jeans básicos en un atuendo smart-casual o para complementar looks de oficina. Combínalo con tops básicos y pantalones entallados para un estilo chic y contemporáneo.",
     category:"Mujer"
    },

    { id:7,
     name:"Polo Dragón",
     price:35, 
     img:"img/img7.png",
     desc:"Polo con diseño de dragón, estilo urbano y actitud imponente. Confeccionado en algodón suave y de gran calidad.",
     extendedDesc:"El Polo Dragón destaca por su diseño audaz y poderoso, ideal para quienes quieren reflejar fuerza y personalidad. Fabricado con algodón premium, ofrece comodidad, frescura y una excelente durabilidad. Su estampado de dragón combina detalles artísticos con un estilo moderno que llama la atención sin exagerar. Perfecto para usar en ocasiones casuales o para completar un outfit urbano con carácter. Su corte cómodo y materiales transpirables lo convierten en una prenda esencial para quienes buscan destacar con estilo y confianza.",
     category:"Hombre"
    },

    { id:8,
     name:"Crucigrama Minimalista",
     price:85, 
     img:"img/img8.png",
     desc:"Un diseño abstracto y minimalista que representa un crucigrama simple, utilizando un patrón de asteriscos y letras x para formar una cuadrícula.",
     extendedDesc:"La imagen presenta una composición geométrica y tipográfica que simula la estructura de un crucigrama. En la parte superior, dos letras x actúan como pistas horizontales. Debajo de ellas, se desarrolla una cuadrícula principal formada por tres filas de tres asteriscos cada una, creando un bloque cuadrado de 3x3. A la izquierda de este bloque, una columna de tres letras X alineadas verticalmente funciona como las pistas laterales. El diseño, empleando únicamente los caracteres X y *, genera un contraste visual entre las pistas y las casillas de respuesta, evocando la esencia de un crucigrama de forma simplificada y abstracta.",
     category:"Hombre"
    },

    { id:9,
     name:"Polo Overtake negro",
     price:95, 
     img:"img/img9.png",
     desc:"Polo negro Overtake de estilo urbano, confeccionado en algodón suave y resistente. Ideal para un look moderno y cómodo.",
     extendedDesc:"El polo Overtake negro combina confort y estilo en una sola prenda. Fabricado con algodón de alta calidad, ofrece una textura suave al tacto y una excelente durabilidad. Su diseño clásico de color negro con detalles minimalistas lo convierte en una pieza versátil, perfecta para cualquier ocasión: desde un día casual hasta una salida con amigos. El corte moderno y el ajuste preciso aseguran una apariencia elegante sin sacrificar comodidad. Fácil de combinar con jeans o joggers, este polo es un básico imprescindible en tu guardarropa urbano.",
     category:"Hombre"
    },

    { id:10,
     name:"Polo Overside negro",
     price:120, 
     img:"img/img10.png",
     desc:"Polo overside negro con diseño de una cara y una flor. Estilo urbano, moderno y cómodo para cualquier ocasión.",
     extendedDesc:"El Polo Overside negro combina un diseño artístico con un estilo relajado y contemporáneo. Confeccionado en algodón suave y de alta calidad, ofrece una caída amplia y cómoda que aporta libertad de movimiento y un look moderno. Su diseño de una cara junto a una flor resalta la fusión entre lo artístico y lo urbano, convirtiéndolo en una prenda única que refleja personalidad y creatividad. Ideal para quienes buscan destacar con un toque diferente, este polo es perfecto para outfits casuales o de estilo streetwear. Su color negro lo hace fácil de combinar con cualquier prenda, manteniendo siempre una apariencia fresca y actual.",
     category:"Hombre" 
    },

    { id:11,
     name:"Polo Overtake plomo",
     price:80, 
     img:"img/img11.png",
     desc:"Polo plomo Overtake con diseño de una chica, ideal para un look moderno y con estilo urbano.",
     extendedDesc:"El Polo Overtake plomo destaca por su estilo contemporáneo y su diseño llamativo. Fabricado en algodón suave y resistente, ofrece comodidad y frescura durante todo el día. Su tono plomo aporta un aire sobrio y versátil, mientras que el diseño de una chica en el estampado le da un toque artístico y moderno que resalta la personalidad de quien lo lleva. Perfecto para combinar con jeans o joggers, este polo es ideal para quienes buscan una prenda casual con carácter y estilo urbano. Su confección de alta calidad garantiza durabilidad y un ajuste cómodo en cualquier ocasión.",
     category:"Hombre"
    },

    { id:12,
     name:"Camiseta Marrón “Pietá” con Diseño Tipográfico Retro",
     price:60, 
     img:"img/img12.jpeg", 
     desc:"Camiseta oversize de color marrón con el logotipo “Pietá” en letras amarillas con sombra roja en la parte posterior.",
     extendedDesc:"Camiseta de estilo urbano fabricada en tela color marrón, diseñada para ofrecer comodidad y un look moderno. En la parte trasera destaca el logotipo “Pietá” escrito en una tipografía cursiva de gran tamaño, con un vibrante color amarillo y un borde rojo que aporta un efecto retro y llamativo. La prenda presenta corte amplio y mangas sueltas, ideal para outfits casuales o streetwear. Perfecta para quienes buscan un diseño original y con identidad gráfica marcada.",
     category:"Hombre" 
    },

    { id:13,
     name:"Top Crop Asimétrico Un Hombro con Fruncido Color Vino",
     price:110, 
     img:"img/img13.jpg",
     desc:"Moderno crop top de un solo hombro en color vino/burdeos. Presenta un diseño asimétrico con fruncido (drapeado o ruched) en el pecho y el lateral, ofreciendo un ajuste ceñido y favorecedor. Ideal para looks de noche o casuales elegantes.",
     extendedDesc:"El Top Crop Asimétrico Un Hombro es la pieza perfecta para un estilo sofisticado y audaz. Confeccionado en un tejido elástico y cómodo, su intenso color vino (o burdeos) es ideal para cualquier temporada. El diseño de un solo hombro y el fruncido (drapeado) lateral crean una textura y silueta muy favorecedoras que abrazan la figura. Su corte crop lo hace perfecto para combinar con faldas de tiro alto, como la de jean en la foto, o pantalones elegantes. Una prenda versátil y moderna que garantiza un impacto visual.",
     category:"Mujer" 
    },

    { id:14,
     name:"Hoddie oversize",
     price:90, 
     img:"img/img14.webp",
     desc:"Cómoda sudadera oversize de felpa perchada en color azul marino. Cuenta con capucha ajustable, bolsillo frontal tipo canguro y un pequeño bordado minimalista en el pecho. Ideal para un look casual y relajado.",
     extendedDesc:"Disfruta de la comodidad máxima con esta Sudadera Oversize Azul Marino. Confeccionada en un tejido suave y cálido (idealmente felpa), presenta un corte oversize que ofrece un ajuste holgado y moderno. Incluye una capucha ajustable mediante cordón, el clásico bolsillo frontal tipo canguro y puños y bajo acanalados. Un pequeño bordado minimalista y discreto en el pecho añade un toque distintivo. Perfecta para combinar con jeans, leggings o joggers para cualquier actividad casual, ofreciendo estilo y abrigo. Un básico esencial para el día a día.",
     category:"Mujer" 
    },

    { id:15,
     name:"Casaca combinación azul y negro",
     price:70, 
     img:"img/img15.webp",
     desc:"Casaca deportiva en tonos azul y negro, ligera, cómoda y con diseño moderno para un estilo urbano y activo.",
     extendedDesc:"La casaca combinación azul y negro destaca por su estilo moderno y funcionalidad. Fabricada con materiales de alta calidad, ofrece una excelente protección contra el viento y el frío sin perder ligereza ni movilidad. Su diseño bicolor en azul y negro aporta un toque dinámico y elegante, ideal para quienes buscan comodidad y estilo en su día a día. Cuenta con cierre frontal, bolsillos laterales y acabados resistentes que garantizan durabilidad. Perfecta para usar en salidas casuales, entrenamientos o actividades al aire libre, esta casaca se adapta fácilmente a cualquier ocasión.",
     category:"Hombre" 
    },

    { id:16,
     name:"Casaca color negra",
     price:130, 
     img:"img/img16.jpg",
     desc:"Casaca negra de diseño clásico y moderno, ideal para combinar con cualquier estilo. Cómoda, ligera y resistente.",
     extendedDesc:"La casaca color negra es una prenda versátil y elegante que nunca pasa de moda. Su diseño sobrio y contemporáneo la convierte en una excelente opción tanto para salidas casuales como para el uso diario. Fabricada con materiales de alta calidad, ofrece una excelente protección contra el viento y el frío, manteniendo una sensación ligera y cómoda. Su color negro facilita la combinación con todo tipo de prendas, aportando un toque de estilo y distinción. Con cierre frontal y acabados resistentes, esta casaca es perfecta para quienes valoran la funcionalidad sin renunciar al buen gusto.",
     category:"Hombre" 
    }
  ];

  // =========================
  // Elementos DOM (uso IDs/ clases originales)
  // =========================
  const productGrid = document.getElementById('productGrid');
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const cartItemsDiv = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const clearCartBtn = document.getElementById('clearCart');
  const checkoutBtn = document.getElementById('checkoutBtn');

  const productModal = document.getElementById('productModal');
  const closeProduct = document.getElementById('closeProduct');
  const detailImg = document.getElementById('detailImg');
  const detailName = document.getElementById('detailName');
  const detailDesc = document.getElementById('detailDesc');
  const detailPrice = document.getElementById('detailPrice');
  const detailQty = document.getElementById('detailQty');
  const addToCartFromDetail = document.getElementById('addToCartFromDetail');
  const closeDetailBtn = document.getElementById('closeDetailBtn');

  const categoryButtons = document.querySelectorAll('#categoryFilters .btn');

  // Carrito (array de {id, qty})
  let cart = JSON.parse(localStorage.getItem('miCarrito_v1')) || [];

  // =========================
  // Guardar carrito en localStorage
  // =========================
  function saveCart(){
    localStorage.setItem('miCarrito_v1', JSON.stringify(cart));
    renderCartCount();
  }

  // =========================
  // Render productos (según filtro)
  // =========================
  function renderProducts(){
    productGrid.innerHTML = '';
    let activeCategory = 'Todos';
    // buscar si hay botón activo
    const activeBtn = document.querySelector('#categoryFilters .btn.active');
    if(activeBtn) activeCategory = activeBtn.dataset.category || 'Todos';

    const list = (activeCategory === 'Todos') ? products : products.filter(p => p.category === activeCategory);

    list.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}" />
        <h4>${p.name}</h4>
        <div class="price">S/ ${p.price.toFixed(2)}</div>
        <div style="display:flex;justify-content:center;gap:8px;margin-top:8px">
          <button class="btn outline previewBtn" data-id="${p.id}">Ver</button>
          <button class="btn primary addBtn" data-id="${p.id}">Agregar</button>
        </div>
      `;
      productGrid.appendChild(card);
    });

    // listeners
    document.querySelectorAll('.addBtn').forEach(b => {
      b.addEventListener('click', e => {
        const id = Number(e.currentTarget.dataset.id);
        addToCart(id,1);
      });
    });
    document.querySelectorAll('.previewBtn').forEach(b=>{
      b.addEventListener('click', e=>{
        const id = Number(e.currentTarget.dataset.id);
        openProductDetail(id);
      });
    });
  }

  // =========================
  // Añadir al carrito
  // =========================
  function addToCart(id, qty=1){
    const item = cart.find(c => c.id===id);
    if(item) item.qty += qty;
    else {
      const p = products.find(x=>x.id===id);
      cart.push({ id: p.id, qty });
    }
    saveCart();
    // opcional: pequeña notificación
    // alert('Producto agregado al carrito');
  }

  function removeFromCart(id){
    cart = cart.filter(c => c.id!==id);
    saveCart();
    renderCart();
  }

  function changeQty(id, qty){
    const it = cart.find(c=>c.id===id);
    if(!it) return;
    it.qty = qty;
    if(it.qty<=0) removeFromCart(id);
    else saveCart();
    renderCart();
  }

  function renderCartCount(){
    const totalCount = cart.reduce((s,i)=>s+i.qty,0);
    cartCount.textContent = totalCount;
  }

  // =========================
  // Render carrito (detalle en modal)
  // =========================
  function renderCart(){
    cartItemsDiv.innerHTML = '';
    if(cart.length===0){
      cartItemsDiv.innerHTML = '<p>El carrito está vacío.</p>';
      cartTotalEl.textContent = 'S/ 0.00';
      return;
    }
    let total = 0;
    cart.forEach(ci=>{
      const p = products.find(x=>x.id===ci.id);
      const line = document.createElement('div');
      line.style.display='flex';
      line.style.justifyContent='space-between';
      line.style.alignItems='center';
      line.style.padding='8px 0';
      line.innerHTML = `
        <div style="flex:1">
          <strong>${p.name}</strong>
        <div style="font-size:13px;color:#666">S/ ${p.price.toFixed(2)} x ${ci.qty}</div>
        </div>
        <div style="display:flex;gap:6px; align-items:center">
          <input type="number" min="1" value="${ci.qty}" data-id="${ci.id}" style="width:60px;padding:6px;border-radius:6px;border:1px solid #ddd" class="qtyInput"/>
          <button class="btn outline removeBtn" data-id="${ci.id}">Quitar</button>
        </div>
      `;
      cartItemsDiv.appendChild(line);
      total += p.price * ci.qty;
    });
    cartTotalEl.textContent = `S/ ${total.toFixed(2)}`;

    // listeners qty & remove
    document.querySelectorAll('.qtyInput').forEach(inp=>{
      inp.addEventListener('change', (e)=>{
        const id = Number(e.currentTarget.dataset.id);
        const qty = Number(e.currentTarget.value) || 1;
        changeQty(id, qty);
      });
    });
    document.querySelectorAll('.removeBtn').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        const id = Number(e.currentTarget.dataset.id);
        removeFromCart(id);
      });
    });
  }

  // =========================
  // Abrir / cerrar carrito
  // =========================
  cartBtn.addEventListener('click', ()=> {
    cartModal.setAttribute('aria-hidden','false');
    cartModal.style.display = 'flex';
    renderCart();
  });
  closeCart.addEventListener('click', ()=> { cartModal.setAttribute('aria-hidden','true'); cartModal.style.display = 'none'; });

  clearCartBtn.addEventListener('click', ()=>{ if(confirm('¿Vaciar el carrito?')) { cart=[]; saveCart(); renderCart(); } });

  // =========================
  // Checkout: genera PDF y opcionalmente envia pedido al servidor
  // =========================
  checkoutBtn.addEventListener('click', async ()=>{
    if(cart.length===0){ alert('El carrito está vacío'); return; }

    const order = {
      id: 'ORD-' + Date.now(),
      date: new Date().toISOString(),
      items: cart.map(ci => {
        const p = products.find(x=>x.id===ci.id);
        return { id: p.id, name: p.name, price: p.price, qty: ci.qty, subtotal: +(p.price*ci.qty).toFixed(2) };
      })
    };
    order.total = order.items.reduce((s,i)=>s+i.subtotal,0);

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('VOUCHER - Nybar', 14, 18);
    doc.setFontSize(10);
    doc.text(`Pedido: ${order.id}`, 14, 28);
    doc.text(`Fecha: ${new Date(order.date).toLocaleString()}`, 14, 34);
    doc.text('---', 14, 40);

    let y = 46;
    order.items.forEach(it => {
      doc.text(`${it.name} x${it.qty}`, 14, y);
      doc.text(`S/ ${it.subtotal.toFixed(2)}`, 150, y, null, null, 'right');
      y += 8;
    });
    doc.text('---', 14, y); y+=6;
    doc.setFontSize(12);
    doc.text(`TOTAL: S/ ${order.total.toFixed(2)}`, 14, y+8);

    doc.save(`${order.id}_voucher.pdf`);

    try {
      const serverUrl = '/submit-order';
      await fetch(serverUrl, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(order)
      });
    } catch(err) {
      console.warn('No se pudo enviar al servidor (endpoint /submit-order). Esto es opcional.', err);
    }

    cart = [];
    saveCart();
    cartModal.setAttribute('aria-hidden','true');
    cartModal.style.display = 'none';
    alert('Compra confirmada. Voucher descargado.');
  });

  // =========================
  // PRODUCT DETAIL (modal mejorado)
  // =========================
  function openProductDetail(id){
    const p = products.find(x=>x.id===id);
    detailImg.src = p.img;
    detailName.textContent = p.name;
    detailDesc.textContent = p.desc;
    // muestra la descripción extendida si existe
    const extEl = document.getElementById('detailLong');
    if(extEl) extEl.textContent = p.extendedDesc || '';
    detailPrice.textContent = 'S/ ' + p.price.toFixed(2);
    detailQty.value = 1;
    addToCartFromDetail.dataset.id = id;
    productModal.setAttribute('aria-hidden','false');
    productModal.style.display = 'flex';
  }
  // slot para usar desde templates
  window.openProductDetail = openProductDetail;

  addToCartFromDetail.addEventListener('click', ()=>{
    const id = Number(addToCartFromDetail.dataset.id);
    const q = Number(detailQty.value) || 1;
    addToCart(id,q);
    productModal.setAttribute('aria-hidden','true');
    productModal.style.display = 'none';
    alert('Producto agregado al carrito');
  });

  closeProduct.addEventListener('click', ()=>{ productModal.setAttribute('aria-hidden','true'); productModal.style.display = 'none'; });
  if(closeDetailBtn) closeDetailBtn.addEventListener('click', ()=>{ productModal.setAttribute('aria-hidden','true'); productModal.style.display = 'none'; });

  // =========================
  // Filtros por botones (Todos/Hombre/Mujer)
  // =========================
  document.querySelectorAll('#categoryFilters .btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      document.querySelectorAll('#categoryFilters .btn').forEach(b=>{
        b.classList.remove('active');
        // asegurar estilos outline/primary según tu preferencia visual:
        if(b !== e.currentTarget){
          b.classList.remove('primary');
          b.classList.add('outline');
        }
      });
      e.currentTarget.classList.remove('outline');
      e.currentTarget.classList.add('primary','active');

      // set category data
      const cat = e.currentTarget.dataset.category || 'Todos';
      // normalizar mayúsculas
      const catNorm = cat.charAt(0).toUpperCase() + cat.slice(1);
      // ocultar/mostrar según categoría
      if(catNorm === 'Todos') {
        renderProducts();
      } else {
        renderProducts(); // renderProducts lee el botón activo para filtrar
      }
    });
  });

  // =========================
  // Contact form simple behavior (mantengo)
  // =========================
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', e=>{
      e.preventDefault();
      alert('Mensaje enviado. Gracias!');
      e.target.reset();
    });
  }

  // Render inicial
  renderProducts();
  renderCartCount();
})();

