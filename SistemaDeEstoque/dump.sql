-- Criação da tabela de fornecedores
CREATE TABLE IF NOT EXISTS fornecedores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cnpj_cpf TEXT NOT NULL,
    telefone TEXT NOT NULL,
    email TEXT NOT NULL,
    site TEXT,
    avaliacao REAL,
    descontos REAL
);

-- Criação da tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT NOT NULL,
    descricao TEXT NOT NULL,
    categoria TEXT NOT NULL,
    quantidade INTEGER NOT NULL,
    unidade TEXT NOT NULL,
    preco REAL NOT NULL,
    fornecedor TEXT NOT NULL,
    data_entrada TEXT NOT NULL,
    data_validade TEXT,
    localizacao TEXT NOT NULL
);

-- Inserindo dados na tabela fornecedores
INSERT INTO fornecedores (nome, cnpj_cpf, telefone, email, site, avaliacao, descontos) VALUES
('TechWorld', '45.123.456/0001-78', '11-9999-9999', 'contato@techworld.com.br', 'www.techworld.com.br', 5, 10),
('LogiTech', '30.654.321/0001-98', '11-8888-8888', 'suporte@logitech.com', 'www.logitech.com.br', 4.8, 8),
('PC World', '35.987.654/0001-56', '21-7777-7777', 'vendas@pcworld.com', 'www.pcworld.com.br', 4.5, 5),
('ScreenTech', '40.852.963/0001-44', '41-6666-6666', 'info@screentech.com.br', 'www.screentech.com.br', 4.7, 12),
('CaboMania', '45.789.123/0001-66', '31-5555-5555', 'contato@cabomania.com.br', 'www.cabomania.com.br', 4.6, 7),
('MobileTech', '50.963.258/0001-77', '71-4444-4444', 'vendas@mobiletech.com', 'www.mobiletech.com.br', 5, 10),
('DataStorage', '60.741.852/0001-12', '11-3333-3333', 'info@datastorage.com', 'www.datastorage.com.br', 4.9, 15),
('DataTech', '65.789.456/0001-99', '61-2222-2222', 'suporte@datatech.com.br', 'www.datatech.com.br', 4.4, 8),
('PowerSupplies', '70.123.789/0001-00', '71-1111-1111', 'info@powersupplies.com', 'www.powersupplies.com.br', 4.8, 10),
('SafeTech', '75.963.852/0001-31', '51-0000-0000', 'contato@safetech.com.br', 'www.safetech.com.br', 4.9, 12);

-- Inserindo dados na tabela produtos
INSERT INTO produtos (codigo, descricao, categoria, quantidade, unidade, preco, fornecedor, data_entrada, data_validade, localizacao) VALUES
('P001', 'Mouse Gamer RGB', 'Periféricos', 50, 'unidade', 150.00, 'TechWorld', '2023-08-01', '2025-08-01', 'A1'),
('P002', 'Teclado Mecânico', 'Periféricos', 30, 'unidade', 300.00, 'LogiTech', '2023-08-05', '2025-08-05', 'A2'),
('P003', 'Monitor LED 24"', 'Monitores', 20, 'unidade', 800.00, 'ScreenTech', '2023-08-10', '2027-08-10', 'A3'),
('P004', 'Memória RAM 16GB', 'Componentes', 100, 'unidade', 500.00, 'PC World', '2023-08-15', '2028-08-15', 'B1'),
('P005', 'SSD 1TB', 'Armazenamento', 80, 'unidade', 600.00, 'DataStorage', '2023-08-20', '2027-08-20', 'B2'),
('P006', 'HD Externo 2TB', 'Armazenamento', 60, 'unidade', 450.00, 'DataTech', '2023-08-25', '2026-08-25', 'B3'),
('P007', 'Fonte de Alimentação 650W', 'Componentes', 40, 'unidade', 350.00, 'PowerSupplies', '2023-08-30', '2028-08-30', 'C1'),
('P008', 'Placa de Vídeo RTX 3060', 'Componentes', 25, 'unidade', 2000.00, 'TechWorld', '2023-09-01', '2028-09-01', 'C2'),
('P009', 'Cabo HDMI 2m', 'Acessórios', 200, 'unidade', 50.00, 'CaboMania', '2023-09-05', '2027-09-05', 'C3'),
('P010', 'Smartphone Android 128GB', 'Mobile', 70, 'unidade', 1500.00, 'MobileTech', '2023-09-10', '2026-09-10', 'D1'),
('P011', 'Memória RAM Corsair 8GB', 'Componentes', 150, 'unidade', 280.00, 'MemoryWorld', '2023-10-15', NULL, 'F1'),
('P012', 'Roteador TP-Link 300Mbps', 'Redes', 100, 'unidade', 120.00, 'NetWork', '2023-10-20', NULL, 'F2'),
('P013', 'Cabo de Rede Cat6', 'Redes', 500, 'unidade', 3.50, 'CaboMania', '2023-10-22', NULL, 'G1'),
('P014', 'Câmera de Segurança Intelbras', 'Segurança', 80, 'unidade', 450.00, 'SafeTech', '2023-10-25', NULL, 'G2'),
('P015', 'Microfone Blue Yeti', 'Acessórios', 60, 'unidade', 720.00, 'AudioTech', '2023-11-01', NULL, 'H1'),
('P016', 'Webcam Logitech C920', 'Acessórios', 90, 'unidade', 350.00, 'LogiTech', '2023-11-05', NULL, 'H2'),
('P017', 'Impressora HP LaserJet', 'Impressoras', 40, 'unidade', 980.00, 'PrintWorld', '2023-11-10', NULL, 'I1'),
('P018', 'Toner HP 85A', 'Acessórios', 200, 'unidade', 180.00, 'PrintSupplies', '2023-11-15', NULL, 'I2'),
('P019', 'Cadeira Gamer DXRacer', 'Móveis', 30, 'unidade', 1500.00, 'GameStore', '2023-11-20', NULL, 'J1'),
('P020', 'Headset Razer Kraken', 'Acessórios', 120, 'unidade', 360.00, 'GameWorld', '2023-11-25', NULL, 'J2');

