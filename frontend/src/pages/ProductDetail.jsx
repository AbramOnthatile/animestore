import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { getDemoProducts, normalizeProductImage } from "../data/mockProducts";

function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8080/products/${id}`);
                if (!response.ok) throw new Error("Product not found");

                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.warn("Showing demo product because backend is unavailable.", error);
                const demoProduct = getDemoProducts().find(
                    (item) => String(item.productId) === String(id)
                );
                setProduct(demoProduct || getDemoProducts()[0]);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id]);

    if (loading) {
        return <div className="container py-5 text-center">Loading product...</div>;
    }

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h2>Product not found</h2>
                <Link to="/catalog" className="btn btn-primary mt-3">
                    Back to Catalog
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="row g-4 align-items-center">
                <div className="col-md-6 text-center">
                    <img
                        src={normalizeProductImage(product.productImage)}
                        alt={product.name}
                        className="img-fluid rounded shadow"
                        onError={(e) => (e.target.src = "/img/placeholder.png")}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-bold">{product.name}</h2>
                    <h4 className="text-muted mb-3">R{product.price.toFixed(2)}</h4>
                    <p>{product.desc || "available"}</p>

                    <button
                        className="btn btn-dark btn-lg me-3"
                        onClick={() => addToCart(product)}
                        disabled={product.stock === 0}
                    >
                        <i className="bi bi-cart"></i> Add to Cart
                    </button>
                    <Link to="/catalog" className="btn btn-outline-secondary btn-lg">
                        Back to Catalog
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
