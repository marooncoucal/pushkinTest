import Link from "next/link";
import Button from "../components/button";
import ContainerPage from "../layout/containerPage";

export default function Q1() {
    return (
        <ContainerPage>
            <Link href={"/"}>Назад</Link>
            <Button>Далее</Button>
        </ContainerPage>
    )
}