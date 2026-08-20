export default function OrderCall() {
  return (
    <form
      action="submit"
      className="flex flex-col items-center gap-3 px-4 py-5 rounded-xl bg-background-img md:hidden "
    >
      <h3 className="text-accent font-bold">Замовити дзвінок</h3>
      <input
        type="tel"
        name="phone"
        className="border border-border px-1.5 py-3 w-full rounded-xl sm:max-w-60 bg-background"
        placeholder="067 111 00 11"
        autoComplete="tel"
      />
      <button
        type="button"
        className="bg-accent text-text-white py-1.5 px-3 rounded-sm"
      >
        Надіслати
      </button>
    </form>
  );
}
