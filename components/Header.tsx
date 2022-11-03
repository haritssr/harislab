export default function Header({ title }: { title: string }) {
  return (
    <section className='pt-8 pb-2  px-5 xl:px-0 font-inter mb-5  z-40'>
      <div className='max-w-5xl mx-auto space-y-1'>
        <div className='font-bold text-4xl text-zinc-900'>{title}</div>
      </div>
    </section>
  );
}
