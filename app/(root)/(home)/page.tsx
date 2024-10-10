import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-[#995FE9]">
      <div className="h-[150px] w-full rounded-[20px] bg-[#1F2937] bg-cover max-sm:h-[100px]">
        <div className="flex h-full max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex h-full w-full justify-between items-center gap-2 max-sm:p-0 max-md:p-11 max-lg:p-8">
            <h1 className="text-4xl font-extrabold lg:text-7xl max-sm:text-xl">{time}</h1>
            <p className="text-lg font-medium text-[#995FE9] lg:text-2xl max-sm:text-xs">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;