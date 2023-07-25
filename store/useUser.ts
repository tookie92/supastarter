import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers"
import { create } from "zustand"

interface UserProps{
    currentUser: Profile | null
    getCurrentUser: () => void;
}

const useUser = create<UserProps>((set) => ({
  currentUser: null,
  getCurrentUser:async()=>{}
   
  }));