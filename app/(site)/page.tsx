
import AuthForm from '@/components/myComponents/AuthForm';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import type { Database } from '@/types_db';

async function Home(): Promise<JSX.Element> {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    redirect('/welcome');
  }

  return (
    <main className="flex min-h-screen items-center">
    
        <div className="basis-1/2 min min-h-screen flex flex-col h-full items-center justify-center bg-sky-200">
          <div className="text-3xl">hi</div>
        </div>
        <div className="basis-1/2 flex justify-center">
          <AuthForm />
        </div>
    
    </main>
  );
}



export default Home;
