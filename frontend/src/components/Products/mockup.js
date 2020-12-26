import React from "react";

const Table = ({ attributes }) => {
  const carUrl = "/images/cars.jpg";
  const colorUrl = "/images/colors.jpg";
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {attributes.map((attr, i) => (
        <p key={i} style={{ flex: 1 }}>
          <img
            className="rounded"
            style={{ height: "40px" }}
            src={attr.name == "Color" ? colorUrl : carUrl}
          />
        </p>
      ))}
    </div>
  );
};

export const columns = [
  {
    field: "id",
    headerName: "#",
    width: 80,
  },
  {
    field: "url",
    headerName: "Logo",
    width: 720,
    renderCell: (params) => {
      const attributes = params.getValue("attributes");
      return <Table attributes={attributes} />;
    },
  },
  { field: "name", headerName: "Name", width: 130 },
];

export const products = {
  data: {
    products: [
      {
        id: 6267654,
        name: "Auto Omega",
        attributes: [
          {
            name: "Category",
            value: "Cars",
          },
          {
            name: "Color",
            value: "Black",
          },
          {
            name: "Color",
            value: "White",
          },
        ],
      },
      {
        id: 8094994,
        name: "Bike Alef",
        attributes: [
          {
            name: "Color",
            value: "Black",
          },
          {
            name: "Color",
            value: "White",
          },
          {
            name: "Category",
            value: "Bikes",
          },
        ],
      },
      {
        id: 2846132,
        name: "Bike Bet",
        attributes: [
          {
            name: "Color",
            value: "Blue",
          },
          {
            name: "Category",
            value: "Electric bikes",
          },
          {
            name: "Category",
            value: "BMX",
          },
        ],
      },
      {
        id: 2169396,
        name: "Auto Alpha",
        attributes: [
          {
            name: "Color",
            value: "Green",
          },
          {
            name: "Color",
            value: "Blue",
          },
          {
            name: "Category",
            value: "Hybrids",
          },
        ],
      },
      {
        id: 2749899,
        name: "Auto Delta",
        attributes: [
          {
            name: "Color",
            value: "Red",
          },
          {
            name: "Category",
            value: "Hybrids",
          },
        ],
      },
      {
        id: 3311138,
        name: "Auto Gamma",
        attributes: [
          {
            name: "Category",
            value: "Sportscars",
          },
          {
            name: "Category",
            value: "Hybrids",
          },
          {
            name: "Color",
            value: "Black",
          },
          {
            name: "Color",
            value: "White",
          },
        ],
      },
      {
        id: 4364807,
        name: "Bike Gimel",
        attributes: [
          {
            name: "Color",
            value: "Red",
          },
          {
            name: "Color",
            value: "White",
          },
          {
            name: "Color",
            value: "Green",
          },
          {
            name: "Category",
            value: "Electric bikes",
          },
          {
            name: "Category",
            value: "BMX",
          },
        ],
      },
      {
        id: 5385176,
        name: "Bike Dalet",
        attributes: [
          {
            name: "Color",
            value: "Black",
          },
          {
            name: "Category",
            value: "BMX",
          },
        ],
      },
      {
        id: 12345,
        name: "Random product",
        attributes: [],
      },
    ],
  },
};
