import { CircularProgress } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useQuery } from "react-query";
import { ProductsData } from "../api/products/products";
import { getAllProducts } from "../api/products/products";
import ProductsTable from "../api/products/ProductsTable";

import { ErrorMessage } from "../components/shared/ErrorMessage";

export const Products = () => {
  const { data, isLoading, error } = useQuery<ProductsData>(
    "products",
    getAllProducts
  );

  {
    isLoading && <CircularProgress />;
  }

  {
    error && <ErrorMessage message="The error" />;
  }

  {
    data && <ProductsTable data={data.products} />;
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.2 },
    { field: "title", headerName: "Title ", flex: 2 },
    { field: "description", headerName: "Description", flex: 4 },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "stock", headerName: "Stock", flex: 1 },

    {
      field: "test",
      headerName: "Brand",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
    },
  ];

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={data?.products || []}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};
