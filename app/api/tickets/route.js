import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request) {
  const ticket = await request.json()

  // get supabase instance
  const supabase = createRouteHandlerClient({ cookies })

  // get current user session
  const {data: { session }} = await supabase.auth.getSession()

  // insert data 
  const { data, error } = await supabase.from('Tickets')
    .insert({
      ...ticket,
      user_email: session.user.email
    })
    .select()
    .single()

  return NextResponse.json({ data, error })
}