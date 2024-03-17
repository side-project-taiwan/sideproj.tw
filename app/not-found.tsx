import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-white">
      <Image
        src="/logo.svg"
        className="logo vite scale-[2] mb-24"
        width={300}
        height={300}
        alt="logo"
      />
      <h2>Not Found</h2>
      <p className="mb-24">Page not support currently</p>
      <Link href="/">Go To Home</Link>
    </div>
  );
};

export default NotFoundPage;
