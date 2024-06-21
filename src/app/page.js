import Image from "next/image";
import Link from "next/link";
import ContainerPage from "./layout/containerPage";
import Button from "./components/button";

export default function Home() {
  return (
    <ContainerPage>
      {/* <div className="absolute opacity-80 h-full aspect-[4291/4435]">
          <Image
            src="/pushkin1.png"
            layout="fill"
            quality={10}
            alt="Picture of the author"
          />
        </div> */}
      <h1 className="font-bold font-unb text-[4rem] leading-[4.2rem]">
        <p>КАКОЙ</p>
        <p>ТЫ</p>
        <p>ПУШКИН?</p>
      </h1>
      <div className="text-[1rem] font-medium w-[22rem] flex self-end">
        Этот тест был создан при помощи нейросети, составившей несколько портретов Пушкина
        по описаниям его друзей, любовниц, семьи
        и современников. Ответьте на несколько вопросов и узнайте, какая именно версия
        Александра Сергеевича близка вам по духу.
      </div>
      <Link href={"/question1"}>
        <Button>Начать тест</Button>
      </Link>
    </ContainerPage>
  );
}