import Image from "next/image";
import arrow_left from "@/app/assets/arrow_left.svg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Image src={arrow_left} alt="Fiesta Flow logo" width={25} height={25} />
      {children}
    </>
  );
}
