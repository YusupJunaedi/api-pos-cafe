const productOrder = [
  {
    invoice_id: 5,
    product_id: 2,
    qty: 2,
    total_price: 56000,
  },
  {
    invoice_id: 5,
    product_id: 3,
    qty: 1,
    total_price: 69000,
  },
];

const cetak = productOrder.map((item) => {
  return [item.invoice_id, item.product_id, item.qty, item.total_price];
});

console.log(cetak);
