function CheckoutPage() {
  const [address, setAddress] = useState("");

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <textarea
        placeholder="Enter delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border p-3 rounded-lg w-full mb-4"
      />

      <Button className="w-full">Place Order</Button>
    </div>
  );
}

export default CheckoutPage;