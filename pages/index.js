import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import { useGetListQuery } from "@/store/api/product";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: getList, isLoading } = useGetListQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <>
          {getList?.fact} - {getList?.length}
        </>
      )}
    </div>
  );
}
