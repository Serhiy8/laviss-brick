import Image from "next/image";

export default function Footer() {
  return (
    <div className="py-8">
      <h2>Footer</h2>
      <Image src="/image/logo.png" alt="" width={70} height={40} />
    </div>
  );
}
