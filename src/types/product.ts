export interface ProductStockTier {
	cantidad: number;
	precio: number;
}

export interface ProductDetails {
	img?: string;
	stock?: ProductStockTier[];
	precioRecomendado?: number;
	descripcion?: string;
	cantidad?: string;
	precio?: number;
}

export interface Product {
	id: string;
	titulo: string;
	categoria: string;
	precio: number;
	imagenProducto: string;
	descripcion: string;
	detalles: ProductDetails;
}