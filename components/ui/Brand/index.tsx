import Image from "next/image";
import logoDark from "public/logo-dark.svg";

export default () => (
  <>
    <div className=" h-32 w-32 absolute -top-6">
      <Image src={logoDark} alt="Covo Components logo" />
    </div>
  </>
);
