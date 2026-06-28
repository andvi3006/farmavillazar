   const products = [
      {
        id: 1,
        name: "Cremas Vaginales de Clotrimazol 2% (20g)",
        cat: "Cuidado de la Mujer",
        price: 24.90,
        oldPrice: 32.00,
        img: "lomecan.jpg",
        desc: "Tratamiento eficaz de corto alcance contra infecciones fúngicas. Alivia la picazón, irritación y el ardor desde la primera aplicación. Incluye aplicadores desechables.",
        benefits: ["Alivio rápido de síntomas", "Contiene aplicadores higiénicos", "Fórmula clínicamente testeada"]
      },
      {
        id: 2,
        name: "Gel Lubricante Íntimo K-Y (100g)",
        cat: "Cuidado Íntimo",
        price: 34.50,
        img: "vagisil.jpg",
        desc: "Gel lubricante de base acuosa, transparente y no grasoso. Diseñado para imitar la lubricación natural del cuerpo de manera segura. Compatible con preservativos.",
        benefits: ["Base acuosa fácil de limpiar", "No mancha la ropa ni sábanas", "Hipoalergénico y sin fragancia"]
      },
      {
        id: 3,
        name: "Suplemento Vitamínico Zinc (100 tabletas)",
        cat: "Vitaminas y Suplementos",
        price: 45.00,
        oldPrice: 55.00,
        img: "zinc.webp",
        desc: "Potente antioxidante esencial para el correcto funcionamiento del sistema inmunológico, la salud cutánea y la síntesis celular de proteínas.",
        benefits: ["Refuerza el sistema inmunológico", "Apto para veganos y vegetarianos", "Fórmula concentrada de alta absorción"]
      },
      {
        id: 4,
        name: "Shampoo Anticaspa Medicasp (130ml)",
        cat: "Cuidado del Cabello",
        price: 29.90,
        img: "medicasp.jpg",
        desc: "Tratamiento especializado con Ketoconazol para eliminar de raíz el hongo causante de la caspa. Alivia la descamación e irritación del cuero cabelludo.",
        benefits: ["Elimina el hongo de la caspa", "Reduce la comezón persistente", "Resultados visibles desde la primera semana"]
      },
      {
        id: 5,
        name: "Toallitas Húmedas Ninet Recién Nacido (80 un)",
        cat: "Todo en Ninet Toallitas Húmedas",
        price: 12.90,
        img: "toallitas_ninet.jpg",
        desc: "Toallitas extra gruesas y ultrasuaves elaboradas con agua purificada. Libre de alcohol, fragancias o parabenos para el cuidado seguro de la piel de tu bebé.",
        benefits: ["99% agua ultra purificada", "Hipoalergénicas y dermatológicamente probadas", "Tapa rígida que mantiene la humedad"]
      },
      {
        id: 6,
        name: "Preservativos Durex Clásico (3 unidades)",
        cat: "Bienestar Sexual",
        price: 11.50,
        img: "durex_clasico.jpg",
        desc: "Preservativos de látex de caucho natural, lubricados y con forma anatómica Easy-On para mayor comodidad y ajuste. Calidad Durex 100% testeada.",
        benefits: ["Forma anatómica Easy-On", "Huelen mejor gracias a su manufactura", "Máxima seguridad y sensibilidad"]
      },
      {
        id: 7,
        name: "Blacksecret MEN 50ml",
        cat: "Cuidado de la Mujer",
        price: 24.90,
        oldPrice: 32.00,
        img: "blacksecret.webp",
        desc: "Tratamiento eficaz de corto alcance contra infecciones fúngicas. Alivia la picazón, irritación y el ardor desde la primera aplicación. Incluye aplicadores desechables.",
        benefits: ["Alivio rápido de síntomas", "Contiene aplicadores higiénicos", "Fórmula clínicamente testeada"]
      },
      {
        id: 8,
        name: "Cepillo pro 2pack ",
        cat: "Cuidado Íntimo",
        price: 34.50,
        img: "cepillopro.webp",
        desc: "Gel lubricante de base acuosa, transparente y no grasoso. Diseñado para imitar la lubricación natural del cuerpo de manera segura. Compatible con preservativos.",
        benefits: ["Base acuosa fácil de limpiar", "No mancha la ropa ni sábanas", "Hipoalergénico y sin fragancia"]
      },
      {
        id: 9,
        name: "Ceregen jbe x 180ml",
        cat: "Vitaminas y Suplementos",
        price: 45.00,
        oldPrice: 55.00,
        img: "cere.jpg",
        desc: "Potente antioxidante esencial para el correcto funcionamiento del sistema inmunológico, la salud cutánea y la síntesis celular de proteínas.",
        benefits: ["Refuerza el sistema inmunológico", "Apto para veganos y vegetarianos", "Fórmula concentrada de alta absorción"]
      },
      {
        id: 10,
        name: "Clear blue/indicador de semanas ",
        cat: "Cuidado del Cabello",
        price: 29.90,
        img: "clear.jpg",
        desc: "Tratamiento especializado con Ketoconazol para eliminar de raíz el hongo causante de la caspa. Alivia la descamación e irritación del cuero cabelludo.",
        benefits: ["Elimina el hongo de la caspa", "Reduce la comezón persistente", "Resultados visibles desde la primera semana"]
      },
      {
        id: 11,
        name: "Colágeno hidrolizado pote x 800gr",
        cat: "Todo en Ninet Toallitas Húmedas",
        price: 12.90,
        img: "colag.webp",
        desc: "Toallitas extra gruesas y ultrasuaves elaboradas con agua purificada. Libre de alcohol, fragancias o parabenos para el cuidado seguro de la piel de tu bebé.",
        benefits: ["99% agua ultra purificada", "Hipoalergénicas y dermatológicamente probadas", "Tapa rígida que mantiene la humedad"]
      },
      {
        id: 12,
        name: "Preservativos Durex Clásico (3 unidades)",
        cat: "Bienestar Sexual",
        price: 11.50,
        img: "durex_clasico.jpg",
        desc: "Preservativos de látex de caucho natural, lubricados y con forma anatómica Easy-On para mayor comodidad y ajuste. Calidad Durex 100% testeada.",
        benefits: ["Forma anatómica Easy-On", "Huelen mejor gracias a su manufactura", "Máxima seguridad y sensibilidad"]
      },
            {
        id: 13,
        name: "Tinte duo",
        cat: "Cuidado de la Mujer",
        price: 24.90,
        oldPrice: 32.00,
        img: "duo.jpg",
        desc: "Tratamiento eficaz de corto alcance contra infecciones fúngicas. Alivia la picazón, irritación y el ardor desde la primera aplicación. Incluye aplicadores desechables.",
        benefits: ["Alivio rápido de síntomas", "Contiene aplicadores higiénicos", "Fórmula clínicamente testeada"]
      },
      {
        id: 14,
        name: "kativa coconut x 550ml ",
        cat: "Cuidado Íntimo",
        price: 34.50,
        img: "vagisil.jpg",
        desc: "Gel lubricante de base acuosa, transparente y no grasoso. Diseñado para imitar la lubricación natural del cuerpo de manera segura. Compatible con preservativos.",
        benefits: ["Base acuosa fácil de limpiar", "No mancha la ropa ni sábanas", "Hipoalergénico y sin fragancia"]
      },
      {
        id: 3,
        name: "Suplemento Vitamínico Zinc (100 tabletas)",
        cat: "Vitaminas y Suplementos",
        price: 45.00,
        oldPrice: 55.00,
        img: "zinc.webp",
        desc: "Potente antioxidante esencial para el correcto funcionamiento del sistema inmunológico, la salud cutánea y la síntesis celular de proteínas.",
        benefits: ["Refuerza el sistema inmunológico", "Apto para veganos y vegetarianos", "Fórmula concentrada de alta absorción"]
      },
      {
        id: 4,
        name: "Shampoo Anticaspa Medicasp (130ml)",
        cat: "Cuidado del Cabello",
        price: 29.90,
        img: "medicasp.jpg",
        desc: "Tratamiento especializado con Ketoconazol para eliminar de raíz el hongo causante de la caspa. Alivia la descamación e irritación del cuero cabelludo.",
        benefits: ["Elimina el hongo de la caspa", "Reduce la comezón persistente", "Resultados visibles desde la primera semana"]
      },
      {
        id: 5,
        name: "Toallitas Húmedas Ninet Recién Nacido (80 un)",
        cat: "Todo en Ninet Toallitas Húmedas",
        price: 12.90,
        img: "toallitas_ninet.jpg",
        desc: "Toallitas extra gruesas y ultrasuaves elaboradas con agua purificada. Libre de alcohol, fragancias o parabenos para el cuidado seguro de la piel de tu bebé.",
        benefits: ["99% agua ultra purificada", "Hipoalergénicas y dermatológicamente probadas", "Tapa rígida que mantiene la humedad"]
      },
      {
        id: 6,
        name: "Preservativos Durex Clásico (3 unidades)",
        cat: "Bienestar Sexual",
        price: 11.50,
        img: "durex_clasico.jpg",
        desc: "Preservativos de látex de caucho natural, lubricados y con forma anatómica Easy-On para mayor comodidad y ajuste. Calidad Durex 100% testeada.",
        benefits: ["Forma anatómica Easy-On", "Huelen mejor gracias a su manufactura", "Máxima seguridad y sensibilidad"]
      },
      {
        id: 1,
        name: "Cremas Vaginales de Clotrimazol 2% (20g)",
        cat: "Cuidado de la Mujer",
        price: 24.90,
        oldPrice: 32.00,
        img: "lomecan.jpg",
        desc: "Tratamiento eficaz de corto alcance contra infecciones fúngicas. Alivia la picazón, irritación y el ardor desde la primera aplicación. Incluye aplicadores desechables.",
        benefits: ["Alivio rápido de síntomas", "Contiene aplicadores higiénicos", "Fórmula clínicamente testeada"]
      },
      {
        id: 2,
        name: "Gel Lubricante Íntimo K-Y (100g)",
        cat: "Cuidado Íntimo",
        price: 34.50,
        img: "vagisil.jpg",
        desc: "Gel lubricante de base acuosa, transparente y no grasoso. Diseñado para imitar la lubricación natural del cuerpo de manera segura. Compatible con preservativos.",
        benefits: ["Base acuosa fácil de limpiar", "No mancha la ropa ni sábanas", "Hipoalergénico y sin fragancia"]
      },
      {
        id: 3,
        name: "Suplemento Vitamínico Zinc (100 tabletas)",
        cat: "Vitaminas y Suplementos",
        price: 45.00,
        oldPrice: 55.00,
        img: "zinc.webp",
        desc: "Potente antioxidante esencial para el correcto funcionamiento del sistema inmunológico, la salud cutánea y la síntesis celular de proteínas.",
        benefits: ["Refuerza el sistema inmunológico", "Apto para veganos y vegetarianos", "Fórmula concentrada de alta absorción"]
      },
      {
        id: 4,
        name: "Shampoo Anticaspa Medicasp (130ml)",
        cat: "Cuidado del Cabello",
        price: 29.90,
        img: "medicasp.jpg",
        desc: "Tratamiento especializado con Ketoconazol para eliminar de raíz el hongo causante de la caspa. Alivia la descamación e irritación del cuero cabelludo.",
        benefits: ["Elimina el hongo de la caspa", "Reduce la comezón persistente", "Resultados visibles desde la primera semana"]
      },
      {
        id: 5,
        name: "Toallitas Húmedas Ninet Recién Nacido (80 un)",
        cat: "Todo en Ninet Toallitas Húmedas",
        price: 12.90,
        img: "toallitas_ninet.jpg",
        desc: "Toallitas extra gruesas y ultrasuaves elaboradas con agua purificada. Libre de alcohol, fragancias o parabenos para el cuidado seguro de la piel de tu bebé.",
        benefits: ["99% agua ultra purificada", "Hipoalergénicas y dermatológicamente probadas", "Tapa rígida que mantiene la humedad"]
      },
      {
        id: 6,
        name: "Preservativos Durex Clásico (3 unidades)",
        cat: "Bienestar Sexual",
        price: 11.50,
        img: "durex_clasico.jpg",
        desc: "Preservativos de látex de caucho natural, lubricados y con forma anatómica Easy-On para mayor comodidad y ajuste. Calidad Durex 100% testeada.",
        benefits: ["Forma anatómica Easy-On", "Huelen mejor gracias a su manufactura", "Máxima seguridad y sensibilidad"]
      }

    ];

    let cart = [];

    function initStore() {
      renderProducts(products);
      setupFilters();
      updateCartUI();
    }
      // Reemplaza tu función renderProducts por esta corregida:
      function renderProducts(items) {
        const grid = document.getElementById('products-grid');
        const emptyState = document.getElementById('empty-state');
        grid.innerHTML = "";
        
        if(items.length === 0) {
          emptyState.classList.add('show');
          return;
        }
        emptyState.classList.remove('show');
        
        items.forEach(p => {
          const isAdded = cart.some(item => item.id === p.id);
          const card = document.createElement('div');
          card.className = "card";
          card.onclick = () => openProductModal(p.id);
          
          let badgeHTML = "";
          let priceHTML = `<div class="price"><sup>S/</sup>${p.price.toFixed(2)}</div>`;
          
          if (p.oldPrice) {
            const discountPct = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
            badgeHTML = `<span class="card-badge discount">-${discountPct}%</span>`;
            priceHTML = `
              <div class="catalog-price-block">
                <span class="price-old-crossed">S/ ${p.oldPrice.toFixed(2)}</span>
                <span class="price-sale"><sup>S/</sup>${p.price.toFixed(2)}</span>
              </div>
            `;
          }
          
          // NOTA: Se añade event.stopPropagation() en el onclick del botón
          card.innerHTML = `
            <div class="card-img">
              ${badgeHTML}
              <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="card-body">
              <span class="card-cat">${p.cat}</span>
              <h3 class="card-name">${p.name}</h3>
              <p class="card-desc">${p.desc}</p>
              <div class="card-footer">
                ${priceHTML}
                <button class="add-btn ${isAdded ? 'added' : ''}" onclick="event.stopPropagation(); toggleCartAction(${p.id}, this)">
                  ${isAdded ? 'Quitar' : 'Agregar'}
                </button>
              </div>
            </div>
          `;
          grid.appendChild(card);
        });
      }

    function setupFilters() {
      const filtersContainer = document.getElementById('filters');
      
      filtersContainer.addEventListener('click', (e) => {
        const targetButton = e.target.closest('.filter-chip, .nav-item:not(.dropdown-trigger)');
        if(!targetButton) return;

        filtersContainer.querySelectorAll('.filter-chip, .nav-item').forEach(btn => btn.classList.remove('active'));
        targetButton.classList.add('active');

        const cat = targetButton.getAttribute('data-cat');
        
        // Manejar el active visual del trigger padre si es subcategoría
        const parentDropdown = targetButton.closest('.nav-dropdown');
        if (parentDropdown) {
          parentDropdown.querySelector('.dropdown-trigger').classList.add('active');
        }

        if(cat === 'todos') {
          renderProducts(products);
        } else if(cat === 'ofertas') {
          const filtered = products.filter(p => p.oldPrice);
          renderProducts(filtered);
        } else {
          const filtered = products.filter(p => p.cat === cat);
          renderProducts(filtered);
        }

        // Cerrar dropdowns tras click en móvil/PC
        filtersContainer.querySelectorAll('.dropdown-menu-content').forEach(menu => menu.style.display = 'none');
      });

      // Buscador Funcional en tiempo real
      const searchInput = document.getElementById('search');
      if(searchInput) {
        searchInput.addEventListener('input', (e) => {
          const val = e.target.value.toLowerCase().trim();
          filtersContainer.querySelectorAll('.filter-chip, .nav-item').forEach(btn => btn.classList.remove('active'));
          document.querySelector('[data-cat="todos"]').classList.add('active');
          
          const filtered = products.filter(p => 
            p.name.toLowerCase().includes(val) || 
            p.cat.toLowerCase().includes(val) ||
            p.desc.toLowerCase().includes(val)
          );
          renderProducts(filtered);
        });
      }

      // Soporte click para toggles de menús desplegables en móviles
      const dropdownTriggers = filtersContainer.querySelectorAll('.dropdown-trigger');
      dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          const parent = trigger.parentElement;
          const menu = parent.querySelector('.dropdown-menu-content');
          const isCurrentlyOpen = menu.style.display === 'block';
          
          filtersContainer.querySelectorAll('.dropdown-menu-content').forEach(m => m.style.display = 'none');
          menu.style.display = isCurrentlyOpen ? 'none' : 'block';
        });
      });

      document.addEventListener('click', () => {
        filtersContainer.querySelectorAll('.dropdown-menu-content').forEach(m => m.style.removeProperty('display'));
      });
    }

    function toggleCartAction(id, btnElement) {
  const index = cart.findIndex(item => item.id === id);
  
  // CORRECCIÓN: Validación exacta si el producto ya existe en el carrito
  if (index !== -1) { 
    cart.splice(index, 1);
    if(btnElement) {
      btnElement.classList.remove('added');
      btnElement.innerText = "Agregar";
    }
    showToast("Producto eliminado del carrito");
  } else {
    const prod = products.find(p => p.id === id);
    cart.push({ ...prod, qty: 1 });
    if(btnElement) {
      btnElement.classList.add('added');
      btnElement.innerText = "Quitar";
    }
    showToast("Producto añadido al carrito");
  }
  
  updateCartUI();
  
  // Sincronizar el botón dentro del modal si está abierto
  const modalActionBlock = document.getElementById('modal-action-block');
  if(modalActionBlock && document.getElementById('product-modal').classList.contains('open')) {
    const isAdded = cart.some(item => item.id === id);
    modalActionBlock.innerHTML = `
      <button class="add-btn ${isAdded ? 'added' : ''}" onclick="toggleCartAction(${id}, this); updateModalButtonState(${id})">
        ${isAdded ? 'Quitar del Carrito' : 'Agregar al Carrito'}
      </button>
    `;
  }
}

    function updateModalButtonState(id) {
      // Sincroniza la grilla de fondo al presionar el botón dentro del modal
      renderProducts(products);
    }

    function updateCartUI() {
      const countEl = document.getElementById('cart-count');
      const container = document.getElementById('cart-items-container');
      const subtotalEl = document.getElementById('cart-subtotal');
      const totalEl = document.getElementById('cart-total');

      const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
      countEl.innerText = totalItems;

      if(cart.length === 0) {
        container.innerHTML = `
          <div class="cart-empty">
            <div class="icon"><i class="ri-shopping-basket-2-line"></i></div>
            <p>Tu carrito está vacío</p>
          </div>
        `;
        subtotalEl.innerText = "S/ 0.00";
        totalEl.innerText = "S/ 0.00";
        return;
      }

      container.innerHTML = "";
      let subtotal = 0;

      cart.forEach(item => {
        subtotal += item.price * item.qty;
        const div = document.createElement('div');
        div.className = "cart-item";
        div.innerHTML = `
          <div class="ci-icon"><img src="${item.img}"></div>
          <div class="ci-info">
            <h4 class="ci-name">${item.name}</h4>
            <div class="ci-price">S/ ${item.price.toFixed(2)}</div>
            <div class="ci-qty">
              <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
          </div>
          <button class="ci-remove" onclick="toggleCartAction(${item.id}, null); renderProducts(products);">Quitar</button>
        `;
        container.appendChild(div);
      });

      subtotalEl.innerText = `S/ ${subtotal.toFixed(2)}`;
      totalEl.innerText = `S/ ${subtotal.toFixed(2)}`;
    }

    function changeQty(id, delta) {
      const item = cart.find(i => i.id === id);
      if(!item) return;
      item.qty += delta;
      if(item.qty <= 0) {
        toggleCartAction(id, null);
        renderProducts(products);
      } else {
        updateCartUI();
      }
    }

    function toggleCart() {
      const sidebar = document.getElementById('cart-sidebar');
      const overlayEl = document.getElementById('overlay');
      sidebar.classList.toggle('open');
      overlayEl.classList.toggle('open');
    }

    function openProductModal(id) {
      const p = products.find(prod => prod.id === id);
      if(!p) return;

      document.getElementById('modal-img').src = p.img;
      document.getElementById('modal-img').alt = p.name;
      document.getElementById('modal-cat').innerText = p.cat;
      document.getElementById('modal-name').innerText = p.name;
      
      let priceHTML = `<sup>S/</sup>${p.price.toFixed(2)}`;
      if (p.oldPrice) {
        priceHTML = `
          <div class="catalog-price-block" style="align-items: flex-start;">
            <span class="price-old-crossed" style="font-size:0.9rem;">S/ ${p.oldPrice.toFixed(2)}</span>
            <span class="price-sale" style="font-size:2rem;"><sup>S/</sup>${p.price.toFixed(2)}</span>
          </div>
        `;
      }
      document.getElementById('modal-price').innerHTML = priceHTML;

      let benefitsHTML = "";
      if(p.benefits && p.benefits.length > 0){
        benefitsHTML = `<ul style="margin-top:1rem; display:flex; flex-direction:column; gap:6px;">`;
        p.benefits.forEach(b => {
          benefitsHTML += `<li>${b}</li>`;
        });
        benefitsHTML += `</ul>`;
      }

      document.getElementById('modal-desc-block').innerHTML = `
        <p style="font-size:0.95rem; line-height:1.6; color:var(--text-muted);">${p.desc}</p>
        ${benefitsHTML}
      `;

      const isAdded = cart.some(item => item.id === p.id);
      document.getElementById('modal-action-block').innerHTML = `
        <button class="add-btn ${isAdded ? 'added' : ''}" onclick="toggleCartAction(${p.id}, this); updateModalButtonState(${p.id})">
          ${isAdded ? 'Quitar del Carrito' : 'Agregar al Carrito'}
        </button>
      `;

      document.getElementById('product-modal').classList.add('open');
    }

    function closeProductModal() {
      document.getElementById('product-modal').classList.remove('open');
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.innerText = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    }

    function checkout() {
  if (cart.length === 0) {
    showToast("El carrito está vacío");
    return;
  }

  const formContainer = document.getElementById('checkout-form-container');
  
  // 1. Mostrar el formulario si se encuentra oculto al primer clic
  if (formContainer.style.display === 'none' || formContainer.style.display === '') {
    formContainer.style.display = 'block';
    // Cambiar texto del botón si lo deseas al desplegarse
    const btnCheckout = document.getElementById('checkout-btn');
    if (btnCheckout) btnCheckout.innerText = "Confirmar Orden de Compra";
    showToast("Completa tus datos para agendar el Recojo");
    formContainer.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // 2. Captura de inputs
  const name = document.getElementById('cust-name').value.trim();
  const lastname = document.getElementById('cust-lastname').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const email = document.getElementById('cust-email').value.trim();
  const pickupDate = document.getElementById('cust-pickup-date').value;
  const pickupTime = document.getElementById('cust-pickup-time').value;

  // 3. Validaciones obligatorias de campos vacíos
  if (!name || !lastname || !phone || !email || !pickupDate || !pickupTime) {
    alert("Por favor, rellene todos los campos del formulario de recojo.");
    return;
  }

  // 4. Validación estricta de celular peruano (Empieza con 9 y tiene 9 dígitos)
  const phoneRegex = /^9\d{8}$/;
  if (!phoneRegex.test(phone)) {
    alert("El número telefónico no es válido. Debe tener 9 dígitos y empezar con el número 9.");
    return;
  }

  // 5. Estructurar el formato de los ítems comprados
  // CAMBIA LA LÍNEA 483 POR ESTA:
const itemsMapeados = cart.map(item => ({ name: item.name, qty: item.qty, price: item.price }));

  // Calcular el total monetario
  const totalPedido = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Generar un código único para la orden
  const orderCode = 'MX-' + Math.floor(1000 + Math.random() * 9000);

  // Fecha y hora del registro actual
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // 6. Formatear la fecha elegida de "AAAA-MM-DD" a "DD/MM/AAAA" para el Dashboard
  const [year, month, day] = pickupDate.split('-');
  const dateFormatted = `${day}/${month}/${year}`;

  // 7. Crear el objeto con la estructura exacta que lee tu Dashboard
  const nuevoPedido = {
  code: orderCode,
  date: dateStr,
  time: timeStr,
  status: 'Pendiente',
  type: 'Recojo', // O el tipo de entrega que manejes
  customer: {
    name: name,
    lastname: lastname,
    phone: phone,
    email: email
  },
  items: itemsMapeados,
  total: totalPedido,
  deliveryDate: dateFormatted,  // Envía la fecha bien estructurada
  deliveryTime: pickupTime      // <-- ¡ESTA ES LA LÍNEA CRUCIAL! Mapea la variable al Dashboard
  };

  // 8. Guardar en el almacenamiento compartido (Base de Datos Local)
  const dbActual = JSON.parse(localStorage.getItem('web_orders_db')) || [];
  dbActual.unshift(nuevoPedido); // Agregarlo al inicio
  localStorage.setItem('web_orders_db', JSON.stringify(dbActual));

  // 9. ENVÍO EN TIEMPO REAL AL BROADCAST CHANNEL DEL DASHBOARD
  const channel = new BroadcastChannel('ecommerce_orders_channel');
  channel.postMessage({ type: 'NEW_ORDER' });

  // 10. Confirmación al usuario y reinicio del Carrito
  alert(`¡Orden de compra generada con éxito!\nCódigo de Pedido: ${orderCode}\n\nPresenta este código al recoger tu pedido.`);
  
  // Limpiar el carrito de compras y cerrar paneles abiertos
  cart = [];
  if (typeof updateCartUI === "function") updateCartUI();
  if (typeof toggleCart === "function") toggleCart();

  // Limpiar inputs del formulario
  document.getElementById('cust-name').value = '';
  document.getElementById('cust-lastname').value = '';
  document.getElementById('cust-phone').value = '';
  document.getElementById('cust-email').value = '';
  document.getElementById('cust-pickup-date').value = '';
  document.getElementById('cust-pickup-time').value = '';
  formContainer.style.display = 'none';

  const btnCheckout = document.getElementById('checkout-btn');
  if (btnCheckout) btnCheckout.innerText = "Ordenar orden de compra";
}

    // Configuración de listeners globales estáticos
    const cartTrigger = document.getElementById('cart-trigger');
    const cartClose = document.getElementById('cart-close');
    const overlayEl = document.getElementById('overlay');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cartTrigger) cartTrigger.addEventListener('click', toggleCart);
    if (cartClose) cartClose.addEventListener('click', toggleCart);
    if (overlayEl) overlayEl.addEventListener('click', toggleCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

    const modalEl = document.getElementById('product-modal');
    if (modalEl) modalEl.addEventListener('click', closeProductModal);

    // Carga inicial
    window.addEventListener('DOMContentLoaded', initStore);
