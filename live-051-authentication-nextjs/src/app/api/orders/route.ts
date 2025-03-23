import { withAuth } from "@/lib/with-auth";
import { NextResponse } from "next/server";

export const GET = withAuth(async (request) => {
  return NextResponse.json({
    user: request.user.id,
    orders: [1, 2, 3, 4, 5],
  });
});
