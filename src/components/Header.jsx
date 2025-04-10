import LogoImg from "../assets/logo.jpg";
export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 ">
      <img src={LogoImg} className="rounded-full h-20 w-20 mb-5" />
      <h1  className="text-4xl font-bold tracking-widest text-[#2f4444]">React Forms</h1>
    </div>
  );
}
