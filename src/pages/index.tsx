import type { NextPage } from "next";
import { trpc } from '@/utils/trpc'

const Home: NextPage = () => {
  const {data, isLoading} = trpc.useQuery(["hello", { text: "Theo"}])

  if (isLoading) return <div>Loading...</div>
  if (data) return <div>{data.greeting}</div>
  return (
   <div className='h-screen w-screen flex flex-col justify-center items-center'>
    <div className='text-2xl text-center'>Which Pokémon would win in a battle?</div>
    <div className='p-6' />
    <div className='border rounded p-8 flex justify-between items-center content-center max-w-2xl flex-col md:flex-row animate-fade-in'>
      <div className='w-16 h-16 bg-red-200'>Pikachu</div>
      <div className='p-8'>vs</div>
      <div className='w-16 h-16 bg-red-200'>Rayquaza</div>
    </div>
   </div>
  );
};



export default Home;
