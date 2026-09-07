export default function Loading() {
  return (
    <div role='status' aria-live='polite' className='section-panel space-y-6'>
      <p className='type-body'>Loading page…</p>
      <div aria-hidden='true' className='space-y-4 motion-safe:animate-pulse'>
        <div className='h-9 w-3/4 rounded-xl bg-white/10' />
        <div className='h-4 w-full rounded-lg bg-white/5' />
        <div className='h-4 w-2/3 rounded-lg bg-white/5' />
        <div className='h-40 rounded-2xl bg-white/5' />
      </div>
    </div>
  );
}
