import React from "react";
import { Product } from "./products";

interface Props {
  data: Product[];
}
function ProductsTable(props: Props) {
  return <h1>ProductsTable</h1>;
}

export default ProductsTable;
