CREATE TABLE IF NOT EXISTS EndUser (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(25) DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
    created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS Category (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS Author (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(150) NOT NULL,
    bio TEXT,
    created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS Book (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    page INT NOT NULL DEFAULT 1 CHECK(page >= 1),
    unit_price DECIMAL(10, 2) NOT NULL CHECK(unit_price >= 0),
    qty INT DEFAULT 0 CHECK(qty >= 0),
    description TEXT,
    cover_image TEXT,
    published_date DATE,
    publisher VARCHAR(150),
    created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS BookCategory (
    book_id UUID REFERENCES Book(id) ON DELETE CASCADE,
    category_id UUID REFERENCES Category(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY(book_id, category_id)
)

CREATE TABLE IF NOT EXISTS BookAuthor (
    book_id UUID REFERENCES Book(id) ON DELETE CASCADE,
    author_id UUID REFERENCES Author(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY(book_id, author_id)
)

CREATE TABLE IF NOT EXISTS Cart (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    qty INT NOT NULL DEFAULT 1 CHECK(qty >= 1),
    book_id UUID REFERENCES Book(id) ON DELETE CASCADE,
    user_id UUID REFERENCES EndUser(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS BookOrder (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    total_amount DECIMAL(10, 2) NOT NULL CHECK(total_amount >= 0),
    status VARCHAR(50) DEFAULT 'pending' CHECK(status IN ('pending', 'delivered', 'cancelled')),
    user_id UUID REFERENCES EndUser(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS BookOrderItem (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    qty INT NOT NULL CHECK(qty > 0),
    price DECIMAL(10, 2) NOT NULL CHECK(price >= 0),
    book_id UUID REFERENCES Book(id) ON DELETE SET NULL,
    order_id UUID REFERENCES BookOrder(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS Payment (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    amount DECIMAL(10, 2) NOT NULL CHECK(amount >= 0),
    payment_method VARCHAR(50) NOT NULL,
    order_id UUID REFERENCES BookOrder(id) ON DELETE CASCADE,
    user_id UUID REFERENCES EndUser(id) ON DELETE SET NULL,
    status VARCHAR(50) DEFAULT 'pending' CHECK(status IN ('pending', 'completed', 'failed')),
    created_at TIMESTAMP DEFAULT NOW()
)
