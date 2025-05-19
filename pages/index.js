import { useIsMobile } from "@/components/useIsMobile";
import { useGetListQuery } from "@/store/api/product";

export default function Home() {
  const isMobile = useIsMobile();

  const { data: getList, isLoading } = useGetListQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className="container">
      {isLoading ? (
        "loading..."
      ) : (
        <>
          {isMobile ? <h1>title mob</h1> : <h1>title desk</h1>}
          {getList?.fact} - {getList?.length}
        </>
      )}
    </div>
  );
}
