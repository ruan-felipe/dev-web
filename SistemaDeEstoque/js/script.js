document.addEventListener('DOMContentLoaded', () => {
    const productFormSection = document.getElementById('productFormSection');
    const supplierFormSection = document.getElementById('supplierFormSection');
    const viewProductsSection = document.getElementById('viewProductsSection');
    const viewSuppliersSection = document.getElementById('viewSuppliersSection');

    const viewProductsBtn = document.getElementById('viewProductsBtn');
    const addProductBtn = document.getElementById('addProductBtn');
    const viewSuppliersBtn = document.getElementById('viewSuppliersBtn');
    const addSupplierBtn = document.getElementById('addSupplierBtn');

    const productForm = document.getElementById('productForm');
    const supplierForm = document.getElementById('supplierForm');

    const productsTableBody = document.querySelector('#productsTable tbody');
    const suppliersTableBody = document.querySelector('#suppliersTable tbody');

    // Alternar visibilidade das seções
    viewProductsBtn.addEventListener('click', () => toggleSection(viewProductsSection));
    addProductBtn.addEventListener('click', () => toggleSection(productFormSection));
    viewSuppliersBtn.addEventListener('click', () => toggleSection(viewSuppliersSection));
    addSupplierBtn.addEventListener('click', () => toggleSection(supplierFormSection));

    function toggleSection(section) {
        [productFormSection, supplierFormSection, viewProductsSection, viewSuppliersSection].forEach(sec => sec.style.display = 'none');
        section.style.display = 'block';
        if (section === viewProductsSection) displayProducts();
        if (section === viewSuppliersSection) displaySuppliers();
    }

    // Salvar produto no banco de dados via POST
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const product = {
            codigo: document.getElementById('productCode').value,
            descricao: document.getElementById('productDescription').value,
            categoria: document.getElementById('productCategory').value,
            quantidade: document.getElementById('productQuantity').value,
            unidade: document.getElementById('unitOfMeasure').value,
            preco: document.getElementById('purchasePrice').value,
            fornecedor: document.getElementById('productSupplier').value,
            data_entrada: document.getElementById('entryDate').value,
            data_validade: document.getElementById('expiryDate').value,
            localizacao: document.getElementById('warehouseLocation').value,
        };

        fetch('/add-product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Produto salvo:', data);
            productForm.reset();
        })
        .catch(err => console.error('Erro ao salvar produto:', err));
    });

    // Salvar fornecedor no banco de dados via POST
    supplierForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const supplier = {
            nome: document.getElementById('supplierName').value,
            cnpj_cpf: document.getElementById('supplierCNPJCPF').value,
            telefone: document.getElementById('supplierPhone').value,
            email: document.getElementById('supplierEmail').value,
            site: document.getElementById('supplierSite').value,
            avaliacao: document.getElementById('supplierRating').value,
            descontos: document.getElementById('supplierDiscounts').value,
        };

        fetch('/add-supplier', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(supplier)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Fornecedor salvo:', data);
            supplierForm.reset();
        })
        .catch(err => console.error('Erro ao salvar fornecedor:', err));
    });

    // Exibir produtos na tabela
    function displayProducts() {
        fetch('/products')
            .then(response => response.json())
            .then(products => {
                productsTableBody.innerHTML = '';
                products.forEach(product => {
                    const row = productsTableBody.insertRow();
                    row.insertCell(0).textContent = product.codigo;
                    row.insertCell(1).textContent = product.descricao;
                    row.insertCell(2).textContent = product.categoria;
                    row.insertCell(3).textContent = product.quantidade;
                    row.insertCell(4).textContent = product.unidade;
                    row.insertCell(5).textContent = product.preco;
                    row.insertCell(6).textContent = product.fornecedor;
                    row.insertCell(7).textContent = product.data_entrada;
                    row.insertCell(8).textContent = product.data_validade;
                    row.insertCell(9).textContent = product.localizacao;
                });
            })
            .catch(err => console.error('Erro ao carregar produtos:', err));
    }

    // Exibir fornecedores na tabela
    function displaySuppliers() {
        fetch('/suppliers')
            .then(response => response.json())
            .then(suppliers => {
                suppliersTableBody.innerHTML = '';
                suppliers.forEach(supplier => {
                    const row = suppliersTableBody.insertRow();
                    row.insertCell(0).textContent = supplier.nome;
                    row.insertCell(1).textContent = supplier.cnpj_cpf;
                    row.insertCell(2).textContent = supplier.telefone;
                    row.insertCell(3).textContent = supplier.email;
                    row.insertCell(4).textContent = supplier.site;
                    row.insertCell(5).textContent = supplier.avaliacao;
                    row.insertCell(6).textContent = supplier.descontos;
                });
            })
            .catch(err => console.error('Erro ao carregar fornecedores:', err));
    }
});
