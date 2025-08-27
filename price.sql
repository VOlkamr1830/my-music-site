CREATE TABLE IF NOT EXISTS prices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  service TEXT NOT NULL,
  description TEXT,
  price REAL NOT NULL
);

INSERT INTO prices (service, description, price) VALUES
('Запис вокалу', 'Професійний запис вокалу у студії', 800),
('Міксування', 'Міксування треку з урахуванням побажань', 600),
('Мастеринг', 'Фінальна обробка треку', 500);