
// Get all categories
const getCategories = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    return response.json();
};

// Get a single category by ID
const getCategoryById = async (id) => {
    const response = await fetch("https://api.abcz.workers.dev/api/bazardor/categories/chal");

    if (!response.ok) {
        throw new Error("Failed to fetch category");
    }

    return response.json();
};

// Get all products
const getProducts = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
};

// Get products by category
const getProductsByCategory = async (category) => {
    const response = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${category}`);

    if (!response.ok) {
        throw new Error("Failed to fetch products by category");
    }

    return response.json();
};

// Get a single product by ID
const getProductById = async (id) => {
    const response = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }

    return response.json();
};

export {
    getCategories,
    getCategoryById,
    getProducts,
    getProductsByCategory,
    getProductById
}